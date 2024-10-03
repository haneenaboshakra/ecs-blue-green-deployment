import React from "react";
import Header from "..//components/Header";
import Footer from "..//components/Footer";
import FaqCategoryCard from "../components/FaqCategoryCard";
function FAQ() {
  const CategoryCards = [
    {
      image: "faqillustration1.png",
      title: "About Balanced",
      description:
        "Personalized health treatments from experts in the field based on your medical history.",
    },
    {
      image: "faqillustration2.png",
      title: "How It Works",
      description:
        "Customized treatment plans through simple health and medical questions.",
    },
    {
      image: "faqillustration3.png",
      title: "Treatments",
      description: "Effective treatments are precisely tailored to match your unique medical history.",
    },
    {
      image: "faqillustration4.png",
      title: "Shipping",
      description:
        "Seamless delivery after providing your health and medical information.",
    },
    {
      image: "faqillustration5.png",
      title: "Refunds",
      description: "Fair refunds are securely processed in accordance with your health history details.",
    },
    {
      image: "faqillustration6.png",
      title: "Contact Us",
      description:
        "Get assistance by sharing your health and medical information or any other questions.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="faq_page">
        <div className="faq-hero-header-wrapper">
          <div className="container">
            <div className="faq-hero-content">
              <h2 className="faq-hero-title">
                Find Answers To All Your Questions
              </h2>
              <div className="form-outline faq-search-div mb-4" data-mdb-input-init>
                <input
                  type="search"
                  className="form-control faq-search-input"
                  id="datatable-search-input"
                  placeholder="Type your question"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="faq-categories">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="faq-categories-title">Populer Topics</h3>
                <div className="row">
                  {CategoryCards.map((categorycard, index) => {
                    return (
                      <div key={index} className="col-lg-4 col-md-6 sm-mx-auto">
                        <FaqCategoryCard
                          image={require(`../assets/images/${categorycard.image}`)}
                          title={categorycard.title}
                          description={categorycard.description}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
