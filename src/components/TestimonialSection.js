import { ChevronLeft, ChevronRight } from "lucide-react";
import delievry from "../assets/delivery.png";
import testimonials from "../assets/testimonial.png";


const TestimonialSection = () => {
  return (
    <div
      className="relative h-screen bg-yellow-500 text-white p-6 md:p-20 flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${testimonials})` }}
    >
      {/* Left Section */}
      <div
        className="md:w-1/2 space-y-4 p-6  md:p-12 rounded-lg"
    
      >
        <div className="bg-white  text-green-900 text-sm font-semibold py-3 px-8 rounded-full inline-block">
          TESTIMONIAL
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Community Feedback on Our Mission
        </h2>
        <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-yellow-500 transition">
          Join us
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center relative mt-14 md:mt-4 px-4">
        <div className="bg-white text-black rounded-xl p-6 shadow-lg max-w-md">
          <p className="text-lg font-semibold">⭐ 4/5</p>
          <p className="text-gray-700 mt-3">
            "The team took time to understand our vision and delivered a sleek,
            professional site that not only looks great but also improved our
            conversion rates. Their design process was smooth, communication
            was clear, and they met all deadlines. We've received numerous
            compliments on the new site, and it’s easier for customers to
            navigate. I can confidently say we’ll be working with them again in
            the future."
          </p>
          {/* User Info */}
          <p className="mt-4 font-semibold">Emmanuel S</p>
        </div>

        {/* User Image */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={delievry}
            alt="User"
            className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Quotation Mark */}
      <div className="absolute bottom-5 right-5 text-yellow-400 text-5xl font-bold">
        “
      </div>
    </div>
  );
};

export default TestimonialSection;
