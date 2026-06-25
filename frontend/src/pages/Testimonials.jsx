import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import TestimonialCard from "../components/TestimonialCard";
import { getTestimonials } from "../api/endpoints";
import "./Home.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials().then(setTestimonials).catch(() => {});
  }, []);

  return (
    <Layout>
      <PageBanner title="Testimonials" crumbs={[{ label: "Testimonials" }]} />
      <div className="section">
        <div className="container">
          <h2 className="section-title">
            Hear From <span className="highlight">Our Happy Clients</span>
          </h2>
          <div className="section-underline" />
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
