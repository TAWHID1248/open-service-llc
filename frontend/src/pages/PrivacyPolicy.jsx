import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import "./StaticPage.css";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageBanner title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <div className="section">
        <div className="container static-page">
          <p><em>Effective Date: June 25, 2026</em></p>
          <p>
            At IZZY SERVICE Inc., we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit or
            use our services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect the following types of information: Personal Identification Information (name, email
            address, phone number), Usage Data (pages visited, time spent on our site, and referral source), and
            Opt-in Data (information submitted via contact or quote request forms).
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information collected to provide and improve our services, respond to inquiries and
            support requests, send updates about your service request, and improve our website experience.
          </p>

          <h3>3. Sharing of Information</h3>
          <p>
            We do not sell or rent your personal information to third parties. We may share information with
            trusted service providers who assist us in operating our website and conducting our business.
          </p>

          <h3>4. Data Security</h3>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your personal
            information from unauthorized access, disclosure, or misuse.
          </p>

          <h3>5. Your Rights and Choices</h3>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us using the information below.
          </p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
            updated effective date.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            OPEN SERVICE LLC
            <br />
            17001 Rodhen Berg Lake 250, Miami, CA 192881
            <br />
            Phone: +1 (423) 432-7902
            <br />
            Email: contact@openservice.com
          </p>
        </div>
      </div>
    </Layout>
  );
}
