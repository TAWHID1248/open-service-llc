import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import AboutUs from "./pages/AboutUs";
import FAQPage from "./pages/FAQPage";
import Testimonials from "./pages/Testimonials";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import CategoryBlog from "./pages/CategoryBlog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:slug" element={<CategoryBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
