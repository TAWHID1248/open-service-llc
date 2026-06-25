import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTestimonials } from "../api/endpoints";
import "./Footer.css";

export default function Footer() {
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    getTestimonials()
      .then((data) => {
        if (data.length) {
          setTestimonial(data[Math.floor(Math.random() * data.length)]);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>About OPEN SERVICE LLC</h4>
          <p>
            OPEN SERVICE LLC is a trusted name in <strong>property cleaning</strong> and{" "}
            <strong>maintenance</strong>, providing expert solutions for cleaning, property management, and
            facility services. We've proudly served residential and commercial properties nationwide, delivering
            quality and reliability you can count on.
          </p>
        </div>
        <div>
          <h4>Random Testimonial</h4>
          {testimonial ? (
            <blockquote>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <cite>{testimonial.author_name}</cite>
            </blockquote>
          ) : (
            <p>Loading testimonial…</p>
          )}
        </div>
        <div>
          <h4>Quick Contact</h4>
          <p>Please call +1 (423) 432-7902 — we are available 24/7 — or email contact@openservice.com</p>
          <p>
            OPEN SERVICE LLC
            <br />
            17001 Rodhen Berg Lake 250, Miami, CA 192881
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} IZZY SERVICE Inc. All Rights Reserved.</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/exterior-renovation">Exterior Renovation</Link></li>
            <li><Link to="/category/home-maintenance">Home Maintenance</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
