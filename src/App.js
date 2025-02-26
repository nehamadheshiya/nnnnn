import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Donations from "./components/Donations";
import DonationSection from "./components/DonationSection";
import HowWeWork from "./components/HowWeWork";
import Join from "./components/Join";
import FAQSection from "./components/FAQSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import DonationPage from "./components/DonationPage";
import Nav from "./components/Nav";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import ContactUs from "./components/ContactUs";
import OurStory from "./components/OurStory";
import WhatWeOffer from "./components/WhatWeOffer";
import Blog from "./components/Blog";
import Cookies from "./components/Cookies";


function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>      
        <Route
          path="/"
          element={
            <div className="App">
              <HomePage  />
              <Donations />
              <DonationSection />
              <HowWeWork />
              <Join />
              <FAQSection />
              <TestimonialSection />
              <Footer />
            </div>
          }
        />
      
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/how-we-work" element={<WhatWeOffer />} />
        <Route path="/cookies-policy" element={<Cookies />} />


      </Routes>
    </Router>
  );
}

export default App;
