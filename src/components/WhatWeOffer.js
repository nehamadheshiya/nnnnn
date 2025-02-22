import React from "react";
import donationback from "../assets/donationback.png";
import Footer from "./Footer";

import vector from "../assets/Vector.png";
import HowWeWork from "./HowWeWork";

const WhatWeOffer = () => {
  return (
    <div className="mt-20">
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] lg:h-[65vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${donationback})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div>
        <img
          src={vector}
          alt="Vector"
          className="absolute top-24 left-0 h-32"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            How We Work
          </h1>
          <p className="mt-6 text-base md:text-xl font-medium">
          Together, We Plan, Act, and Transform Lives!
          </p>
        </div>
      </header>
      <HowWeWork />
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        <div className="flex flex-col items-center px-6 py-8">
          {/* Header Section */}
          {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
        </div>
        <section className="mb-6">
          <h2 className="text-2xl font-bold">
            Supporting One Another to Create a Better World
          </h2>
          <p className="text-justify text-gray-700 mt-4">We believe that every act of kindness, no matter how small, has the power to transform lives. Our mission is to make giving simple, seamless, and meaningful for you. Through a streamlined process, we ensure your donations reach those who need them most. From scheduling pickups to creating impact, here’s how we turn your generosity into hope and happiness for communities in need. Together, let’s make a difference, one donation at a time.</p>
          <p className="text-justify text-gray-700 mt-4">
          UMEEDEIN makes it incredibly simple for you to make a difference through non-cash donations. We all have clothes, books, or household items lying unused, gathering dust. It’s time to give them a new purpose by donating to those who truly need them. Just schedule a pickup, and we’ll collect your donations from your doorstep. With UMEEDEIN, spreading hope and joy is just a click away. Let’s turn what you no longer need into someone else’s treasure!
          </p>

          <div className="flex flex-col items-center px-6 py-8">
            {/* Header Section */}
            {/* <button className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold">Scheduling a Pickup Made Easy</h2>
          <p className="text-justify text-gray-700 mt-4">
          Donating should be hassle-free, and we’ve made sure of that! You can schedule a pickup at your convenience through our website or by contacting our team. Simply choose a date, time, and location, and our collection team will come right to your doorstep.
          </p>
          <p className="text-justify text-gray-700 mt-4">
          To ensure smooth logistics and support our operations, a small convenience fee is charged for each pickup. This helps us continue providing efficient collection services while maximising the impact of your donations.
          </p>{" "}
          <p className="text-justify font-semibold text-xl text-gray-900 mt-4 py-2">
          Ready to give? Schedule your pickup today and be a part of the change!<br></br>
Be the Change

          </p>
          <p className="text-justify text-gray-700 mt-4">
          Donating has never been easier. Schedule a pickup today and help us turn hope into action!
          </p>{" "}
          <p className="text-justify font-semibold text-xl text-gray-900 mt-4 py-2">
          Together, let’s create a future filled with UMEEDEIN (hope).

          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeOffer;
