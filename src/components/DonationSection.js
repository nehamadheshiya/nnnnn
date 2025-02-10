import React from "react";
import yellowbg from "../assets/yellowbg.png";
import { FaHeartbeat, FaTint, FaTree } from "react-icons/fa"; // Importing icons

const DonationSection = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${yellowbg})` }}
    >
      {/* Button */}
      <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition">
        START DONATIONS
      </button>

      {/* Title & Subtitle */}
      <h2 className="text-3xl font-bold text-black text-center mt-4">
        Explore What We Donate
      </h2>
      <p className="text-center text-gray-800 max-w-xl mt-2 text-lg">
        Installing water wells and purification systems in areas with limited access to clean water.
      </p>

      {/* Cards Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#094C3B] text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start">
          <div className="bg-yellow-400 p-3 rounded-lg">
            <FaHeartbeat className="text-2xl text-green-900" />
          </div>
          <h3 className="text-xl font-semibold">Health for All</h3>
          <p className="text-sm">
            Providing free health check-ups, medicine, and support for underserved populations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#094C3B] text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start">
          <div className="bg-yellow-400 p-3 rounded-lg">
            <FaTint className="text-2xl text-green-900" />
          </div>
          <h3 className="text-xl font-semibold">Clean Water Access</h3>
          <p className="text-sm">
            Installing water wells and purification systems in areas with limited access to clean water.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#094C3B] text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start">
          <div className="bg-yellow-400 p-3 rounded-lg">
            <FaTree className="text-2xl text-green-900" />
          </div>
          <h3 className="text-xl font-semibold">Eco Hope</h3>
          <p className="text-sm">
            Organizing environmental projects such as tree planting, community clean-ups, and recycling programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
