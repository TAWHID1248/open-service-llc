import { NavLink } from "react-router-dom";
import "./ServiceSidebar.css";

export default function ServiceSidebar({ services }) {
  return (
    <aside className="service-sidebar">
      <h4>Services</h4>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <NavLink to={`/services/${service.slug}`} className={({ isActive }) => (isActive ? "active" : "")}>
              <span className="dot">{service.icon}</span> {service.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
