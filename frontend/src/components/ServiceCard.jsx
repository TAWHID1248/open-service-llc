import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-icon">{service.icon}</div>
      <h3>{service.name}</h3>
      <p>{service.tagline}</p>
      <span className="service-card-link">Read More →</span>
    </Link>
  );
}
