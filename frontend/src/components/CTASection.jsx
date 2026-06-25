import { Link } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  return (
    <div className="cta">
      <div className="container cta-inner">
        <div>
          <h3>Do You Need Professional Property Cleaning?</h3>
          <p>
            OPEN SERVICE LLC provides affordable and expert cleaning solutions for all your property needs,
            including residential and commercial cleaning, facility maintenance, and more. Let us help you keep
            your property clean and well-maintained.
          </p>
        </div>
        <Link to="/contact" className="btn btn-accent">
          Learn More
        </Link>
      </div>
    </div>
  );
}
