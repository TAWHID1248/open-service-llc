import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";

export default function Layout({ children, showCTA = true }) {
  return (
    <div className="page">
      <TopBar />
      <Header />
      <main>{children}</main>
      {showCTA && <CTASection />}
      <Footer />
    </div>
  );
}
