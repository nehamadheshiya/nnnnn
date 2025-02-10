import React from "react";
import { FaShoePrints, FaShoppingBag, FaPencilAlt, FaTshirt, FaBook, FaCouch } from "react-icons/fa";

const donations = [
  { name: "Shoes", icon: <FaShoePrints /> },
  { name: "Bags", icon: <FaShoppingBag /> },
  { name: "Stationary", icon: <FaPencilAlt /> },
  { name: "Clothes", icon: <FaTshirt /> },
  { name: "Books", icon: <FaBook /> },
  { name: "Furniture", icon: <FaCouch /> },
];

const DonationGrid = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-100 ">
      {/* Header Section */}
      <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
        Start Donations
      </button>
      <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
        Explore What you Donate
      </h2>
      <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
        Installing water wells and purification systems in areas with limited
        access to clean water.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {donations.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            {/* Icon Box (Square) */}
            <div className="bg-[#094C3B] w-14 h-14 flex rounded-lg items-center justify-center text-white text-3xl">
              {item.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-semibold mt-5 text-gray-900">{item.name}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Installing water wells and purification systems in areas with
              limited access to clean water.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationGrid;
