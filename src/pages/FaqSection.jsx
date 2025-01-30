import React, { useState } from "react";
import "../styles/FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is PantryBuddy?", answer: "PantryBuddy is a tool to manage your pantry effectively." },
    { question: "How do I set up an account?", answer: "Simply sign up with your email and follow the steps." },
    { question: "Can I share my pantry with others?", answer: "Yes, you can invite others to collaborate." },
    { question: "Does it work offline?", answer: "Currently, PantryBuddy works online only." },
    { question: "How do I reset my password?", answer: "Click on 'Forgot Password' at the login page." },
  ];

  return (
    <div className="faq-section">
        <h1 className="faq">FREQUENTLY ASKED QUESTIONS</h1>
      <h2 className="faq-title">YOUR PANTRYBUDDY QUERIES</h2>
      <p className="faq-description">
        Have questions about PantryBuddy? Check out our comprehensive FAQ section
        for answers to all your queries. From setting up accounts to utilizing our advanced features.
      </p>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
