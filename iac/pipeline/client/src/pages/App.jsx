// src/App.js
import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css.map";
import "../assets/styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import GetStarted from "./GetStarted";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import NotFound from "../components/NotFound";
import HowItWorks from "./HowItWork";
import AboutUs from "./AboutUs";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import { AuthProvider, useAuth } from "..//Auth/Auth";
import FAQ from "./FAQ";
import FaqAnswers from "./FaqAnswers";
import Doctors from "./Doctors";
import Questionairre from "./Questionnaire";
import SurveyQuestions from "../components/SurveyQuestions";
import RefundPolicy from "./RefundPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

function App() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/users/login"
          element={isAuthenticated ? <Login /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/login"
          element={isAuthenticated ? <Navigate to="/" /> : <AdminLogin />}
        />
        <Route
          path="/quizzes"
          element={isAuthenticated ? <GetStarted /> : <AdminLogin />}
        />
        <Route
          path="/how-it-works"
          element={isAuthenticated ? <HowItWorks /> : <AdminLogin />}
        />
        <Route
          path="/our-story"
          element={isAuthenticated ? <AboutUs /> : <AdminLogin />}
        />
        <Route
          path="/pricing"
          element={isAuthenticated ? <Pricing /> : <AdminLogin />}
        />
        <Route
          path="/contact-us"
          element={isAuthenticated ? <ContactUs /> : <AdminLogin />}
        />
        <Route
          path="/support"
          element={isAuthenticated ? <FAQ /> : <AdminLogin />}
        />
        <Route
          path="/support/:id"
          element={isAuthenticated ? <FaqAnswers /> : <AdminLogin />}
        />
        <Route
          path="/our-doctors"
          element={isAuthenticated ? <Doctors /> : <AdminLogin />}
        />

        <Route
          path="/questionnaire/:id"
          element={isAuthenticated ? <Questionairre /> : <AdminLogin />}
        />
        <Route
          path="/questionnaire/:id/start-quiz/?"
          element={isAuthenticated ? <SurveyQuestions /> : <AdminLogin />}
        />

        <Route
          path="/privacy-policy"
          element={isAuthenticated ? <PrivacyPolicy /> : <AdminLogin />}
        />

        <Route
          path="/terms-and-conditions"
          element={isAuthenticated ? <TermsAndConditions /> : <AdminLogin />}
        />

        <Route
          path="/refund-policy"
          element={isAuthenticated ? <RefundPolicy /> : <AdminLogin />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const AppWithProvider = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithProvider;
