import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import FAQAccordion from "../components/FAQAccordion";
import { getFAQs } from "../api/endpoints";
import "./StaticPage.css";

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getFAQs().then(setFaqs).catch(() => {});
  }, []);

  return (
    <Layout>
      <PageBanner title="Frequently Asked Questions" crumbs={[{ label: "FAQ" }]} />
      <div className="section">
        <div className="container static-page">
          <h2 className="section-title">
            Please Read These <span className="highlight">Before You Hire Us</span>
          </h2>
          <div className="section-underline" />
          <p>
            Perhaps the most perplexing repairs facing a home owner are when a home is broken or damaged and, in
            today's era of doubleness for many products, it's often more convenient to replace something other
            than attempt a repair. A repairman is faced with the task of accurately identifying the problem, then
            finding the materials, supplies, tools, and skills necessary to sufficiently effect the repair.
          </p>
          {faqs.length > 0 && <FAQAccordion faqs={faqs} />}
        </div>
      </div>
    </Layout>
  );
}
