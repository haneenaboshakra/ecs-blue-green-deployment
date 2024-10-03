import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sanitizeInput } from "../Auth/Sanitizer";
import "react-phone-input-2/lib/style.css";
import "flag-icon-css/css/flag-icons.min.css";
import { logToServer } from "../Logger/LogService";
import locationIcon from "..//assets/images/location.png";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const styles = {
  comboboxOption: {
    borderBottom: "1px solid #dee2e6",
    backgroundImage: `url(${locationIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    padding: "10px 0 10px 40px",
  },
};

const quiz = {
  questions: [
    {
      question: "What was your sex at birth?",
      choices: ["Male", "Female"],
      type: "MCQs",
    },
    {
      question:
        "Are you currently pregnant or breastfeeding, or trying to fall pregnant?",
      choices: ["Yes", "No"],
      type: "MCQs",
    },
    {
      question: "What is your date of birth?",
      type: "date_input",
    },
    {
      question: "What is your height (in cm)?",
      type: "input",
      placeholder: "Enter Your Height",
    },
    {
      question: "What is your weight (in kg)?",
      type: "weight_input",
      placeholder: "Enter Your Weight",
    },
    {
      question: "Do you have any past medical conditions or injuries?",
      choices: ["Yes", "No"],
      type: "MCQs",
    },
    {
      question:
        "Please give the prescriber more information about your medical conditions or injuries.",
      type: "Textarea",
      placeholder: "Explain Here",
    },
    {
      question:
        "Is there a history of any medical illness or disorder that has run within your family?",
      choices: ["Yes", "No"],
      type: "MCQs",
    },
    {
      question:
        "Please explain the medical illness that has run within your family.",
      type: "Textarea",
      placeholder: "Explain Here",
    },
    {
      question: "Are you currently taking any medications or supplements?",
      choices: ["Yes", "No"],
      type: "MCQs",
    },
    {
      question: "What medications or supplements do you currently use?",
      type: "Textarea",
      checkbox: true,
      placeholder: "(eg) Ibuprofen 200mg twice daily",
    },
    {
      question: "Do you have any allergies?",
      choices: ["Yes", "No"],
      type: "MCQs",
    },
    {
      question: "What allergies do you have?",
      type: "Textarea",
      placeholder: "Explain Here",
    },
    {
      question: "Anything else your doctor needs to consider?",
      choices: ["Yes", "No"],
      type: "MCQs",
    },
    {
      question: "Please explain this for your doctor.",
      type: "Textarea",
      placeholder: "Explain Here",
    },
    {
      question: "What is your Medicare number?",
      type: "input",
      checkbox: true,
      image: false,
      src: "medicare.png",
      placeholder: "Enter Medicare Number",
    },
    {
      question: "What is your Individual Reference Number?",
      type: "input",
      image: false,
      src: "IRN.png",

      placeholder: "Enter Your IRN",
    },
    {
      question: "How did you hear about Balanced?",
      choices: [
        "Word of mouth",
        "Google/Bing",
        "Instagram",
        "Tiktok",
        "Facebook",
        "Reddit",
        "Youtube",
        "Newspaper / Magazine",
        "Other",
      ],
      type: "MCQs",
      styling: true,
    },
  ],
};

const LOCAL_STORAGE_KEY = "healthQuestionnaire";

const SurveyQuestions = () => {
  // const [answers, setAnswers] = useState(() => {
  //   const savedAnswers = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   return savedAnswers ? JSON.parse(decryptData(savedAnswers)) : {};
  // });
  const [token, setToken] = useState(null);
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedAnswers) {
      try {
        return JSON.parse(savedAnswers);
      } catch (error) {
        console.error("Error decrypting saved answers:", error);
        return {};
      }
    }
    return {};
  });
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const savedQuestion = localStorage.getItem(
      `${LOCAL_STORAGE_KEY}_currentQuestion`
    );
    return savedQuestion ? parseInt(savedQuestion, 10) : 0;
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [medicareCheckbox, setMedicareCheckbox] = useState(false);
  const [medicineCheckbox, setMedicineCheckbox] = useState(false);
  const [progress, setProgress] = useState(0);
  const [treatmentName, setTreatmentName] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const generateToken = () => {
    return Math.random().toString(36).substring(2, 20);
  };

  const isQuestionVisible = (index) => {
    if (index === 1 && answers[0] === "Male") return false;
    if (index === 6 && answers[5] !== "Yes") return false;
    if (index === 8 && answers[7] !== "Yes") return false;
    if (index === 10 && answers[9] !== "Yes") return false;
    if (index === 12 && answers[11] !== "Yes") return false;
    if (index === 14 && answers[13] !== "Yes") return false;
    return true;
  };
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let currentToken = params.get("token");

    if (!currentToken) {
      currentToken = generateToken();
      navigate(`?token=${currentToken}`, { replace: true });
    }

    setToken(currentToken);

    const savedData = sessionStorage.getItem(
      `${LOCAL_STORAGE_KEY}_${currentToken}`
    );
    if (savedData) {
      const { answers, currentQuestion } = JSON.parse(savedData);
      setAnswers(answers);
      setCurrentQuestion(currentQuestion);
      setProgress(((currentQuestion + 1) / quiz.questions.length) * 100);
    }

    const getFormattedTreatmentName = () => {
      const path = window.location.pathname;
      const segments = path.split("/");
      const treatmentSlug = segments[2];
      const formattedTreatmentName = treatmentSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return formattedTreatmentName;
    };

    setTreatmentName(getFormattedTreatmentName());
  }, [location, navigate]);

  useEffect(() => {
    if (token) {
      localStorage.setItem(
        `${LOCAL_STORAGE_KEY}_${token}`,
        JSON.stringify({
          answers,
          currentQuestion,
          timestamp: Date.now(),
        })
      );
    }
  }, [token, answers, currentQuestion]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("quiz_status") === "done") {
      setSurveySubmitted(true);
    } else if (searchParams.get("quiz_status") === "stopped") {
      setShowAlert(true);
    }
  }, [location.search]);

  // useEffect(() => {
  //   const answeredQuestions = Object.keys(answers).filter((key) =>
  //     isQuestionVisible(parseInt(key))
  //   ).length;

  //   const visibleQuestions = quiz.questions.filter((_, index) =>
  //     isQuestionVisible(index)
  //   ).length;
  //   setProgress((answeredQuestions / visibleQuestions) * 100);

  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(answers));
  //   localStorage.setItem(
  //     `${LOCAL_STORAGE_KEY}_currentQuestion`,
  //     currentQuestion.toString()
  //   );
  // }, [currentQuestion]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setFormSubmitted(true);
        logToServer("Submit", "User filled & submitted survey form.");
        console.log("Form submitted");
      } catch (error) {
        logToServer("Error", "Error occurred while submitting survey form", {
          error,
        });
      }
    }
  };

  const handleAnswer = (questionIndex, answer) => {
    // let sanitizedAnswer = sanitizeInput(answer);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "phone" ? value.replace(/\D/g, "") : value,
    }));
  };

  const isQuestionAnswered = (index) => {
    const answer = answers[index];

    const question = quiz.questions[index];

    if (
      question.checkbox &&
      index === quiz.questions.findIndex((q) => q.question.includes("Medicare"))
    ) {
      return medicareCheckbox || (answer !== undefined && answer !== "");
    } else if (question.checkbox) {
      return medicineCheckbox || (answer !== undefined && answer !== "");
    }
    return answer !== undefined && answer !== "";
  };

  const validateNumberInput = (value, fieldName) => {
    if (isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "Please enter only a number",
      }));
      return false;
    }
    if (fieldName === "medicare" && value.length > 9) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "Medicare number should not exceed 9 digits",
      }));
      return false;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: null }));
    return true;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.confirmPassword)
      formErrors.confirmPassword = "Password is required";

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    API_KEY:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    requestOptions: {
      componentRestrictions: { country: "au" },
    },
    debounce: 300,
  });
  // const ref = useOnclickOutside(() => {
  //   clearSuggestions();
  // });
  const handleAddressSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log("Coordinates:", { lat, lng });
      handlePersonalInfoChange({
        target: { name: "address", value: address },
      });
    } catch (error) {
      console.log("Error getting geocode: ", error);
    }
  };

  const renderPersonalInfoForm = () => {
    return (
      <form className="personal-form-wrapper">
    
            <h3 className="personal-form-title">
              Where should we send your treatment plan?
            </h3>

            <div className="row mb-3">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.firstName && (
                    <small className="text-danger">{errors.firstName}</small>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handlePersonalInfoChange}
                  />
                  {errors.lastName && (
                    <small className="text-danger">{errors.lastName}</small>
                  )}
                </div>
              </div>
            </div>

            <div className="form-outline mb-3">
              <input
                type="text"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                value={formData.email}
                onChange={handlePersonalInfoChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="form-outline mb-3">
              <PhoneInput
                country={"au"}
                className={`form-controls ${errors.phone ? "is-invalid" : ""}`}
                value={formData.phone}
                onChange={(value) =>
                  handlePersonalInfoChange({
                    target: { name: "phone", value: value.replace(/\D/g, "") },
                  })
                }
                preferredCountries={["au"]}
                disableDropdown={true}
                enableAreaCodes={false}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </div>

            <div className="form-outline mb-3">
              <Combobox onSelect={handleAddressSelect}>
                <ComboboxInput
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  disabled={!ready}
                  placeholder="Residential Address"
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                />
                <ComboboxPopover>
                  {status === "OK" && (
                    <ComboboxList className="combobox-list">
                      {data.map(({ place_id, description }) => (
                        <ComboboxOption
                          key={place_id}
                          value={description}
                          className="combobox-option"
                          style={styles.comboboxOption}
                        />
                      ))}
                    </ComboboxList>
                  )}
                </ComboboxPopover>
              </Combobox>
              {errors.address && (
                <small className="text-danger">{errors.address}</small>
              )}
            </div>

            <div className="row">
              <div className="col">
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handlePersonalInfoChange}
                  />

                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handlePersonalInfoChange}
                  />

                  {errors.confirmPassword && (
                    <small className="text-danger">
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="submitBtn w-100"
              onClick={handleFormSubmit}
            >
              SUBMIT
            </button>
      </form>
    );
  };

  const renderQuestion = (question, index) => {
    if (index !== currentQuestion) return null;

    switch (question.type) {
      case "MCQs":
        return (
          <div className="mb-4">
            <h4 className="card-question mt-5">
              {sanitizeInput(question.question)}
            </h4>

            <ul className="card-list">
              {question.choices.map((choice, choiceIndex) => (
                <li
                  key={choiceIndex}
                  onClick={() => handleAnswer(index, choice)}
                  className={`cursor-pointer mb-2 px-4 py-2 rounded ${
                    answers[index] === choice
                      ? "bg-blue-500 selected-answer"
                      : "bg-gray-200"
                  }`}
                >
                  <div className="radioBtn"></div>
                  {sanitizeInput(choice)}
                </li>
              ))}
            </ul>
          </div>
        );
      case "date_input":
        return (
          <div className="mb-4 form-outline">
            <h4 className="card-question mt-5">
              {sanitizeInput(question.question)}
            </h4>
            <input
              type="date"
              value={answers[index] || ""}
              onChange={(e) => handleAnswer(index, e.target.value)}
              className="form-control border rounded px-2 py-2"
            />
          </div>
        );
      case "input":
      case "weight_input":
        return (
          <div className="mb-4 form-outline px-2">
            <h4 className="card-question mt-5">
              {sanitizeInput(question.question)}
            </h4>
            <input
              type="text"
              value={answers[index] || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (
                  question.type === "weight_input" ||
                  question.question.includes("height") ||
                  question.question.includes("Individual Reference")
                ) {
                  if (validateNumberInput(value, `question_${index}`)) {
                    handleAnswer(index, value);
                  }
                } else if (question.question.includes("Medicare")) {
                  if (validateNumberInput(value, "medicare")) {
                    handleAnswer(index, value);
                  }
                } else {
                  handleAnswer(index, value);
                }
              }}
              className="form-control border rounded px-2 py-2 w-full"
              placeholder={sanitizeInput(question.placeholder)}
              maxLength={question.question.includes("Medicare") ? 9 : undefined}
            />
            {errors[`question_${index}`] && (
              <small className="text-danger">
                {errors[`question_${index}`]}
              </small>
            )}
            {errors["medicare"] && (
              <small className="text-danger">{errors["medicare"]}</small>
            )}
            {question.description && (
              <p className="text-sm text-gray-500 mt-1">
                {sanitizeInput(question.description)}
              </p>
            )}
            {question.checkbox && (
              <div className="mt-2 px-2">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  className="mr-2 questionCheckbox"
                  checked={medicareCheckbox}
                  onChange={(e) => setMedicareCheckbox(e.target.checked)}
                />
                <label htmlFor={`checkbox-${index}`} className="px-1">
                  I don't have my Medicare details
                </label>
              </div>
            )}
            {question.image && (
              <img
                src="/api/placeholder/200/100"
                alt="Placeholder"
                className="mt-2"
              />
            )}
          </div>
        );
      case "Textarea":
        return (
          <div className="mb-4">
            <h4 className="card-question mt-5">
              {sanitizeInput(question.question)}
            </h4>
            <textarea
              value={answers[index] || ""}
              onChange={(e) => handleAnswer(index, e.target.value)}
              className="border textArea_field px-2 py-1 w-full mt-3"
              rows="5"
              cols="55"
              placeholder={sanitizeInput(question.placeholder)}
              maxLength={1000}
            ></textarea>
            {question.description && (
              <p className="text-sm text-gray-500 mt-1">
                {sanitizeInput(question.description)}
              </p>
            )}
            {question.checkbox && (
              <div className="mt-2 px-2">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  className="mr-2 questionCheckbox"
                  checked={medicineCheckbox}
                  onChange={(e) => setMedicineCheckbox(e.target.checked)}
                />
                <label htmlFor={`checkbox-${index}`} className="px-1">
                  I can't remember.I'll have these ready for the consultation.
                </label>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    try {
      setSurveySubmitted(true);
      console.log("Answers to be sent to backend:", answers);
      logToServer("Submit", "Questionnaire Submitted.");
      const searchParams = new URLSearchParams(location.search);

      // Add or update the quiz_status parameter
      searchParams.set("quiz_status", "done");

      // Navigate to the new URL with the updated query parameters
      navigate(`${location.pathname}?${searchParams.toString()}`);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_${token}`);
    } catch (error) {
      logToServer("Error", "Error Submitting Questionnaire.", { error });
      console.error("An error occurred while submitting the survey:", error);
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     // Encrypt answers before sending to the server
  //     const encryptedAnswers = await encryptData(JSON.stringify(answers));
  //     const response = await api.post('/submit-questionnaire', { answers: encryptedAnswers });
  //     if (response.ok) {
  //       localStorage.removeItem("healthQuestionnaire");
  //       localStorage.removeItem("healthQuestionnaire_currentQuestion");
  //       setSurveySubmitted(true);
  //     } else {
  //       throw new Error('Questionnaire submission failed');
  //     }
  //   } catch (error) {
  //     alert("Error submitting the questionnaire");
  //   }
  // };

  if (surveySubmitted) {
    return (
      <div className="questionnaire-wrapper">
        <div className="container">
          <Link to="/">
            <div className="questionnaire-header">
              <img
                src={require("../assets/images/balanced-logo-white.png")}
                alt="Logo"
              />
            </div>
          </Link>
          <div className="questionnaire-container">
            <div className="questionnaire-card">
              <div className="card-header">
                <img
                  src={require("../assets/images/thankYouIllustration.png")}
                  alt="Illustration"
                />
              </div>
              <div className="card-body">
                <h3 className="questionnaire-title">
                  That's it! You're all done.
                </h3>
                <p className="questionnaire-description">
                  Thank you for filling the questionnaire.Login to your account
                  to book a call with one of our experts for your{" "}
                  {treatmentName} telehealth assessment.
                </p>
                <p className="questionnaire-notice">
                  After the appointment, your practitioner will be in touch to
                  recommend a tailored treatment plan.
                </p>
                <Link to="/users/login">
                  <button className="questionairre-startBtn">
                    Login To Your Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    let nextIndex = currentQuestion + 1;

    if (currentQuestion === 1 && answers[1] === "Yes") {
      setShowAlert(true);
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("quiz_status", "stopped");
      navigate(`${location.pathname}?${searchParams.toString()}`);
    }

    while (nextIndex < quiz.questions.length && !isQuestionVisible(nextIndex)) {
      nextIndex++;
    }
    if (nextIndex < quiz.questions.length) {
      setCurrentQuestion(nextIndex);
      setProgress(((nextIndex + 1) / quiz.questions.length) * 100);
    }
  };

  const handlePrevious = () => {
    let prevIndex = currentQuestion - 1;

    while (prevIndex >= 0 && !isQuestionVisible(prevIndex)) {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      setCurrentQuestion(prevIndex);
      setProgress(((prevIndex + 1) / quiz.questions.length) * 100);
    }
  };

  //  useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   if (searchParams.get('quiz_status') === 'stopped') {
  //     setShowAlert(true);
  //   }
  // }, [location.search]);

  if (showAlert) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}_${token}`);
    logToServer("Submit", "Questionnaire Stopped-Condition:Pregnancy.");
    return (
      <div className="questionnaire-wrapper">
        <div className="container">
          <Link to="/">
            <div className="questionnaire-header">
              <img
                src={require("../assets/images/balanced-logo-white.png")}
                alt="Logo"
              />
            </div>
          </Link>
          <div className="questionnaire-container">
            <div className="questionnaire-card">
              <div className="card-body">
                <h3 className="questionnaire-title">
                  We're sorry, but Balanced is not the right fit for you at this
                  time.
                </h3>
                <p className="questionnaire-description survey-questionnaire-description">
                  Balanced is not suitable for pregnant women, those
                  breastfeeding or planning to become pregnant. Some of the
                  treatments available through Balanced could complicate your
                  pregnancy journey. Please get in touch with your GP, who can
                  offer more suitable options.
                </p>
                <Link to="/">
                  <button className="questionairre-startBtn">
                    Return To Home Page
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={showQuestionnaire ? "" : "survey-questions"}>
      {!showQuestionnaire && (
        <Link to="/">
          <div className="survey-header">
            <img
              src={require("../assets/images/balanced-logo.png")}
              alt="Logo"
            />
          </div>
        </Link>
      )}

      {!formSubmitted ? (
        renderPersonalInfoForm()
      ) : (
        <>
          <div className="survey-progress-bar">
            <div
              className="survey-progress-bar-line"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="survey-card">
            <div className="card-content">
              {quiz.questions.map((question, index) =>
                renderQuestion(question, index)
              )}

              <div className="card-bottom flex-right">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="cardBtn prevBtn disabled:opacity-50"
                >
                  <img
                    src={require("..//assets/images/questionairreBackButton.png")}
                    alt="Back Button"
                  />
                </button>
                {currentQuestion < quiz.questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={!isQuestionAnswered(currentQuestion)}
                    className="cardBtn nextBtn disabled:opacity-50"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isQuestionAnswered(currentQuestion)}
                    className="cardBtn submitQuizBtn rounded disabled:opacity-50"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SurveyQuestions;
