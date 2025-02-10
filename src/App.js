import { FaQ } from "react-icons/fa6";
import Donations from "./components/Donations";
import DonationSection from "./components/DonationSection";
import HomePage from "./components/HomePage";
import HowWeWork from "./components/HowWeWork";
import Join from "./components/Join";
import FAQSection from "./components/FAQSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Donations/>
      <DonationSection/>
      <HowWeWork/>
      <Join/>
      <FAQSection/>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
}

export default App;
