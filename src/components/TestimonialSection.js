import { ChevronLeft, ChevronRight } from "lucide-react";
import delievry from "../assets/delivery.png";
import testimonials from "../assets/testback.png";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";
import quote from "../assets/Quotes.png";

const TestimonialSection = () => {
  return (
    <div
      className="relative md:h-screen   bg-yellow-500 text-white p-12 md:p-20 flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${testimonials})`,
        backgroundSize: "cover", // Ensures the image covers the entire div without distortion
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}
    >
      <img
        src={icn2}
        alt="vector"
        className="absolute top-0 left-8 w-16 h-16 md:w-32 md:h-28"
      />
      <img
        src={icn4}
        alt="icon1"
        className="absolute  text-green-900 top-0 right-6 w-16 h-16 md:w-32 md:h-28"
      />
      <img
        src={quote}
        alt="icon2"
        className="absolute bottom-16 right-20 w-10 h-10"
      />
      <img
        src={home3}
        alt="#"
        className="absolute bottom-0 left-0 w-12 md:w-20"
      />
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4 md:p-12 rounded-lg text-center md:text-left flex flex-col items-center md:items-start">
        <div className="bg-white text-green-900 text-sm font-semibold py-3 px-8 rounded-full inline-block">
          TESTIMONIAL
        </div>
        <h2 className="text-3xl md:text-4xl font-bold hidden md:block">
          Community Feedback on Our Mission
        </h2>
        <button className="bg-yellow-400 hidden md:block text-green-900 px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-yellow-500 transition">
          Join us
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center relative mt-14 md:mt-4 px-4">
        <div className="bg-white text-black rounded-xl p-6 shadow-lg max-w-md">
          <p className="text-lg font-semibold ">⭐ 4/5</p>
          <p className="text-gray-700 mt-3 hidden md:block">
            "The team took time to understand our vision and delivered a sleek,
            professional site that not only looks great but also improved our
            conversion rates. Their design process was smooth, communication was
            clear, and they met all deadlines. We've received numerous
            compliments on the new site, and it’s easier for customers to
            navigate. I can confidently say we’ll be working with them again in
            the future."
          </p>
          <p className="text-gray-700 mt-3 block md:hidden">
            "The team took time to understand our vision and delivered a sleek,
            professional site that not only looks great but also improved our
            conversion rates. Their design process was smooth, communication was
            clear, and they met all deadlines. "
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
