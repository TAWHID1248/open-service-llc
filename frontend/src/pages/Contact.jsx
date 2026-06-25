import { useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { submitContact } from "../api/endpoints";
import "./Contact.css";

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      await submitContact(form);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong sending your message. Please try again or call us directly.");
    }
  };

  return (
    <Layout>
      <PageBanner title="Contact" crumbs={[{ label: "Contact" }]} />
      <div className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="section-title">
              Get In <span className="highlight">Touch</span>
            </h2>
            <div className="section-underline" />
            <p className="contact-intro">
              Have a question or need a quote? Send us a message and our team will get back to you shortly.
            </p>

            {status === "success" && (
              <div className="contact-alert success">Thanks! Your message has been sent — we'll be in touch soon.</div>
            )}
            {status === "error" && <div className="contact-alert error">{error}</div>}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
              </div>
              <textarea name="message" placeholder="Your Message" rows="6" value={form.message} onChange={handleChange} required />
              <button type="submit" className="btn btn-accent" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>OPEN SERVICE LLC</h3>
            <p>📍 17001 Rodhen Berg Lake 250, Miami, CA 192881</p>

            <h3>Contact Info</h3>
            <p>📞 +1 (423) 432-7902</p>
            <p>✉️ contact@openservice.com</p>

            <h3>24/7 Support</h3>
            <p>We are available 24/7 for all your property cleaning and maintenance needs.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
