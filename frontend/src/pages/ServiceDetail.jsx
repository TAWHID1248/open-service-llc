import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import ServiceSidebar from "../components/ServiceSidebar";
import { getServices, getService } from "../api/endpoints";
import "./ServicesLayout.css";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [services, setServices] = useState([]);
  const [service, setService] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getServices().then(setServices).catch(() => {});
  }, []);

  useEffect(() => {
    setNotFound(false);
    setService(null);
    getService(slug)
      .then(setService)
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <Layout>
        <PageBanner title="Service Not Found" crumbs={[{ to: "/services", label: "Services" }, { label: "Not Found" }]} />
        <div className="container section">
          <p>We couldn't find that service. <Link to="/services">Back to Services</Link></p>
        </div>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout>
        <PageBanner title="Services" crumbs={[{ to: "/services", label: "Services" }]} />
        <div className="container section">Loading…</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBanner title={service.name} crumbs={[{ to: "/services", label: "Services" }, { label: service.name }]} />
      <div className="section">
        <div className="container services-page-grid">
          <ServiceSidebar services={services} />
          <div>
            <h2 className="section-title">
              {service.icon} Expert {service.name} <span className="highlight">{service.tagline}</span>
            </h2>
            <div className="section-underline" />
            <p className="service-detail-intro">{service.intro}</p>

            {service.why_choose_us?.length > 0 && (
              <div className="service-detail-block">
                <h3>Why Choose Our {service.name} Services?</h3>
                <ul className="bullet-list">
                  {service.why_choose_us.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.services_included?.length > 0 && (
              <div className="service-detail-block">
                <h3>Our Range of {service.name} Services</h3>
                <ul className="bullet-list">
                  {service.services_included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.common_problems?.length > 0 && (
              <div className="service-detail-block">
                <h3>Common Problems We Solve</h3>
                <ul className="bullet-list">
                  {service.common_problems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.benefits?.length > 0 && (
              <div className="service-detail-block">
                <h3>Benefits of Professional {service.name}</h3>
                <ul className="bullet-list">
                  {service.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.process_steps?.length > 0 && (
              <div className="service-detail-block">
                <h3>Our Process</h3>
                <ol className="process-list">
                  {service.process_steps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            )}

            {service.gallery?.length > 0 && (
              <div className="service-detail-block">
                <h3>Gallery</h3>
                <div className="gallery-grid">
                  {service.gallery.map((img) => (
                    <div key={img.id} className="gallery-placeholder">
                      {img.image ? <img src={img.image} alt={img.caption} /> : <span>{img.caption}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
