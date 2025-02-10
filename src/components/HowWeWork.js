import React from "react";
import time from "../assets/time.png";
import delivery from "../assets/delivery.png";
import gift from "../assets/gift.png";

const steps = [
  {
    title: "Step 1: Schedule a Pickup",
    description: "Installing water wells and purification systems in areas with limited access to clean water.",
    image: time,
  },
  {
    title: "Step 2: Donate at your Doorstep",
    description: "Installing water wells and purification systems in areas with limited access to clean water.",
    image: delivery,
  },
  {
    title: "Step 3: Receive Confirmation",
    description: "Installing water wells and purification systems in areas with limited access to clean water.",
    image: gift,
  },
];

const HowWeWork = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-50">
      {/* Header Section */}
      <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
        START DONATIONS
      </button>
      <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
        How We Work
      </h2>
      <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
        Installing water wells and purification systems in areas with limited access to clean water.
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
