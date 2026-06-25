import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";

export default function NotFound() {
  return (
    <Layout showCTA={false}>
      <PageBanner title="Page Not Found" />
      <div className="container section">
        <p>The page you're looking for doesn't exist. <Link to="/">Back to Home</Link></p>
      </div>
    </Layout>
  );
}
