import React from "react";
import time from "../assets/time.png";
import delivery from "../assets/delivery.png";
import gift from "../assets/gift.png";

const steps = [
  {
    title: (
      <>
        <span className="text-[#117C61] font-bold">Step 1:</span> Schedule a Pickup
      </>
    ),
    description: "Provide your pickup location and select a time slot that works for you. A nominal convenience fee* applies for doorstep service. If you prefer, use our self-drop option to donate at your convenience. We make it easy for you to contribute in a way that suits your schedule.",
    image: time,
  },
  {
    title: (
      <>
        <span className="text-[#117C61] font-bold">Step 2:</span> Donate at Your Doorstep
      </>
    ),
    description: "Our team will arrive at your doorstep during your chosen time slot to collect your donations. We ensure a seamless and hassle-free experience so you can contribute without any extra effort. Your generosity starts with just a few clicks and ends with a meaningful impact.",
    image: delivery,
  },
  {
    title: (
      <>
        <span className="text-[#117C61] font-bold">Step 3:</span> Receive Confirmation
      </>
    ),
    description: "As a token of appreciation, our brand partners offer surprise gifts* to our donors.It's how we express our gratitude to you for making a difference. Your act of generosity not only helps others but also brings you a little joy in return. Be ready to be pleasantly surprised!.",
    image: gift,
  },
];

const HowWeWork = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-50">
      {/* Header Section */}
      {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
        START DONATIONS
      </button> */}
      <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
        How We Work
      </h2>
      <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
      Through collaboration, unwavering commitment, and meaningful action, we drive positive change in communities worldwide.
      </p>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-6xl ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            {/* Image Box */}
            <div className="w-44 h-44 flex items-center justify-center mb-4">
              <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
