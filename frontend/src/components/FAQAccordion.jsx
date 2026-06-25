import { useState } from "react";
import "./FAQAccordion.css";

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="faq-accordion">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button className="faq-question" onClick={() => setOpenId(isOpen ? null : faq.id)}>
              {faq.question}
              <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="faq-answer">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
