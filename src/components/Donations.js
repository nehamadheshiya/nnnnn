import React from "react";
import { FaShoePrints, FaShoppingBag, FaPencilAlt, FaTshirt, FaBook, FaCouch } from "react-icons/fa";

const donations = [
  { name: "Shoes", icon: <FaShoePrints /> ,title:"Help families by donating new or gently used shoes for all ages, including sneakers, boots, sandals, and formal footwear. Proper footwear provides comfort, protection, and confidence. "},
  { name: "Household", icon: <FaShoppingBag /> ,title:"Help families create a comfortable home by donating kitchenware, bedding, curtains, towels, home décor, and baby care items. Small working appliances like blenders, coffee makers, and microwaves are also welcomed."},
  { name: "Stationary", icon: <FaPencilAlt />,title:"Support education by donating school supplies like notebooks, pens, pencils, erasers, rulers, backpacks, and art materials. Essential stationery empowers students, fostering learning and creativity. All contributions help children build a brighter future." },
  { name: "Clothes", icon: <FaTshirt />,title:"From everyday wear to seasonal outfits, we accept gently used clothing for men, women, and children. This includes dresses, shirts, pants, shoes, belts, wallets, and purses. Warm clothing like jackets and blankets is especially valuable during colder months." },
  { name: "Books", icon: <FaBook />,title:"Knowledge should never go to waste. Donate books of all kinds—fiction, non-fiction, children's books, textbooks, and educational resources. E-readers and audiobooks are also helpful for those with accessibility needs." },
  { name: "Furniture", icon: <FaCouch />,title:"We also accept compact and lightweight furnishings such as nightstands, office chairs, mirrors, and decorative items. Larger items may not be accepted due to logistical constraints." },
];

const DonationGrid = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-100 ">
      {/* Header Section */}
      <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
        Start Donations
      </button>
      <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
        Explore What You Can Donate
      </h2>
      <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
      Small donations, big impact—give essentials, funds, or time and help transform lives today.
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
            <p className="text-gray-500 text-base mt-3 leading-relaxed">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationGrid;
