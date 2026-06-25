import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import "./StaticPage.css";

const WHAT_WE_DO = [
  {
    title: "Residential Cleaning",
    text: "Keep your home spotless with our comprehensive residential cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning.",
  },
  {
    title: "Commercial Cleaning",
    text: "We provide professional commercial cleaning for offices, retail spaces, and facilities, ensuring a clean and professional environment for your business.",
  },
  {
    title: "Carpet & Upholstery Cleaning",
    text: "Expert cleaning services for carpets, rugs, and upholstery that restore appearance and extend the life of your furnishings.",
  },
  {
    title: "Window & Pressure Washing",
    text: "Professional window cleaning and pressure washing services for both residential and commercial properties.",
  },
  {
    title: "Janitorial Services",
    text: "Ongoing facility maintenance and janitorial services to keep your property clean and hygienic on a daily basis.",
  },
  {
    title: "Specialized Cleaning",
    text: "Post-construction cleanup, tile cleaning, grout restoration, and other specialized cleaning solutions tailored to your needs.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Professional Experience",
    text: "Our trained and certified cleaning professionals have years of experience delivering exceptional results for residential and commercial clients.",
  },
  {
    title: "Nationwide Service",
    text: "Serving residential and commercial clients across the U.S., OPEN SERVICE LLC is proud to offer reliable and professional services wherever you need us.",
  },
  {
    title: "Quality Assurance",
    text: "We use premium cleaning products and best practices to ensure your property is cleaned to the highest standards.",
  },
  {
    title: "Customer-Focused Approach",
    text: "Our goal is to exceed customer expectations. We take the time to understand your needs and deliver tailored cleaning solutions.",
  },
  {
    title: "Insured & Bonded",
    text: "We are a fully insured and bonded company, so you can trust that all our work is performed to the highest standards of safety and professionalism.",
  },
];

export default function AboutUs() {
  return (
    <Layout>
      <PageBanner title="About Us" crumbs={[{ label: "About Us" }]} />
      <div className="section">
        <div className="container static-page">
          <h2 className="section-title">Your Trusted Partner in Property Cleaning</h2>
          <div className="section-underline" />
          <p>
            At OPEN SERVICE LLC, we specialize in providing comprehensive property cleaning and maintenance
            solutions to ensure that your residential and commercial spaces are always clean and well-maintained.
            We have been the go-to provider for professional cleaning services, facility maintenance, and general
            property upkeep.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver high-quality, reliable, and affordable property cleaning services that
            exceed expectations. We aim to be your trusted partner by offering personalized solutions tailored to
            your specific needs. Whether you're a homeowner, business owner, or property manager, we are here to
            provide expert services to keep your property clean, fresh, and beautiful.
          </p>

          <h3>What We Do</h3>
          <p>
            We offer a full spectrum of cleaning and maintenance services for residential, commercial, and
            industrial properties across the U.S. Our team of experienced professionals is dedicated to providing
            efficient solutions for all your property needs, from routine cleaning to deep facility maintenance.
          </p>
          <ul className="bullet-list">
            {WHAT_WE_DO.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> — {item.text}
              </li>
            ))}
          </ul>

          <h3>Why Choose OPEN SERVICE LLC?</h3>
          <ul className="bullet-list">
            {WHY_CHOOSE_US.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> — {item.text}
              </li>
            ))}
          </ul>

          <h3>Our Vision for the Future</h3>
          <p>
            We are committed to growing our business and expanding our cleaning service offerings nationwide. With
            a focus on sustainable practices and advanced cleaning technology, OPEN SERVICE LLC will continue to
            lead the property cleaning industry by providing innovative, efficient, and affordable services.
          </p>

          <h3>Get in Touch</h3>
          <p>
            Have questions or need a cleaning estimate? Contact us today to learn more about how OPEN SERVICE LLC
            can assist with your property cleaning and maintenance needs. Our team is here to help with expert
            advice, quick responses, and reliable service.
          </p>
        </div>
      </div>
    </Layout>
  );
}
