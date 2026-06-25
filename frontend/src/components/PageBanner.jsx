import { Link } from "react-router-dom";
import "./PageBanner.css";

export default function PageBanner({ title, crumbs = [] }) {
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <div className="underline" />
      </div>
      {crumbs.length > 0 && (
        <div className="breadcrumb-bar">
          <div className="container breadcrumb-inner">
            <Link to="/">Home</Link>
            {crumbs.map((crumb, i) => (
              <span key={i}>
                {" "}
                / {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
