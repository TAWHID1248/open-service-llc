import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import ServiceSidebar from "../components/ServiceSidebar";
import ServiceCard from "../components/ServiceCard";
import { getServices } from "../api/endpoints";
import "./ServicesLayout.css";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(() => {});
  }, []);

  return (
    <Layout>
      <PageBanner title="Services" crumbs={[{ label: "Services" }]} />
      <div className="section">
        <div className="container services-page-grid">
          <ServiceSidebar services={services} />
          <div>
            <h2 className="section-title">
              We Are Specialists <span className="highlight">In These Areas</span>
            </h2>
            <div className="section-underline" />
            <p className="services-page-intro">
              At IZZY SERVICE Inc., we deliver expert property maintenance services tailored to your needs, from
              minor repairs to full-scale renovations.
            </p>
            <div className="services-page-cards">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
