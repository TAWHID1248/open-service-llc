import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQAccordion from "../components/FAQAccordion";
import { getServices, getTestimonials, getFAQs } from "../api/endpoints";
import "./Home.css";

const WHY_CHOOSE_US = [
  { title: "Professional Cleaners", text: "Our trained and certified cleaners bring years of expertise to every job." },
  { title: "Comprehensive Services", text: "From residential to commercial cleaning, we handle every aspect of property upkeep." },
  { title: "Affordable Pricing", text: "Transparent, competitive rates with no hidden fees." },
  { title: "Customer Satisfaction", text: "We stand behind our work with a commitment to quality and reliability." },
];

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(() => {});
    getTestimonials(true).then(setTestimonials).catch(() => {});
    getFAQs().then((data) => setFaqs(data.slice(0, 5))).catch(() => {});
  }, []);

  return (
    <Layout>
      <section className="hero">
        <div className="container hero-inner">
          <h1>
            Keep Your Property <span>Clean, Fresh, and Well-Maintained</span>
          </h1>
          <p>
            OPEN SERVICE LLC delivers reliable, affordable property cleaning and maintenance services for
            homeowners and businesses — done right, the first time.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-accent">Our Services</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Why Choose <span className="highlight">OPEN SERVICE LLC</span>
          </h2>
          <div className="section-underline" />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container why-us-grid">
          <div>
            <h2 className="section-title">
              Professional Property <span className="highlight">Cleaning and Maintenance</span> Services
            </h2>
            <div className="section-underline" />
            <p>
              At OPEN SERVICE LLC, we specialize in providing comprehensive property cleaning and maintenance
              solutions for homeowners and businesses alike. From routine cleaning to specialized facility
              maintenance, our team is dedicated to keeping your property clean, fresh, and well-maintained.
            </p>
          </div>
          <ul className="why-us-list">
            {WHY_CHOOSE_US.map((item) => (
              <li key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              Testimonials From <span className="highlight">Our Happy Clients</span>
            </h2>
            <div className="section-underline" />
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 className="section-title">
              Frequently Asked Questions <span className="highlight">(FAQs)</span> About Our Property Maintenance
              Services
            </h2>
            <div className="section-underline" />
            <FAQAccordion faqs={faqs} />
            <Link to="/faq" className="see-all-link">See all FAQs →</Link>
          </div>
        </section>
      )}
    </Layout>
  );
}
