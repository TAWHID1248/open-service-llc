import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/about-us", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">OS</span>
          <span className="brand-text">
            <strong>OPEN SERVICE LLC</strong>
            <small>Keep Property Cleaning</small>
          </span>
        </NavLink>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          ☰
        </button>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn btn-accent nav-contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
