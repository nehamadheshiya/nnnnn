import React from "react";
import group from "../assets/group.png";
import yellowgreen from "../assets/yellowgreen.png";
import donationback from "../assets/donationback.png";
import vector from "../assets/Vector.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";
import Footer from "../components/Footer";
import group2 from '../assets/group2.png';
import redgreen from "../assets/redgreen.png"

const donationItems = [
  {
    title: "Clothing",
    icon: icon1,
    fullText:
      "Ladies, men's, kids, children’s, baby, purses, belts, ties, wallets, dresses, shirts, pants, shoes. Virtually all types of Clothing.",
    shortText:
      "Clothing items for all: men, women .",
  },
  {
    title: "Household",
    icon: icon7,
    fullText:
      "Dishes, glasses, silverware, small household appliances, bedding, linens, pillows, draperies, curtains, rugs, jewelry, and decor.",
    shortText: "Dishes, appliances, bedding.",
  },
  {
    title: "Electronic",
    icon: icon3,
    fullText:
      "Stereos, radios, Xbox, PlayStations, computers, laptops, monitors, DVD players, cameras, typewriters, and electronics. Not accepting TVs at this time.",
    shortText: "Laptops, gaming consoles.",
  },
  {
    title: "Books",
    icon: icon10,
    fullText: "Hardcover, softcover, fiction, and non-fiction, e-readers.",
    shortText: "Hardcover, softcover, fiction.",
  },
  {
    title: "Equipment",
    icon: icon9,
    fullText:
      "Exercise equipment, small weight benches, weights, sporting equipment like golf clubs, baseballs, hockey equipment, bats and balls.",
    shortText: "Exercise gear, weights.",
  },
  {
    title: "Small Furnishings",
    icon: icon8,
    fullText:
      "Mirrors, nightstands, headboards, office chairs, decor, and other small home items.",
    shortText: "Small home furnishings.",
  },
  {
    title: "Others",
    icon: icon4,
    fullText: "Bikes, musical instruments, small filing cabinets, and more.",
    shortText: "Bikes, musical instruments and more.",
  },
];

const donationItemsRed = [
  {
    title: "NO LARGE FURNITURE",
    icon: icon5,
    fullText:
      "Couches, sofas, sleeper couches, box springs and mattresses",
    shortText:
      "Couches, sofas, sleeper couches, box springs .",
  },
  {
    title: "NO LARGE APPLIANCE",
    icon: icon7,
    fullText:
      "Washers/dryers, refrigerators, freezers, dishwashers and stoves",
    shortText: "Washers/dryers, refrigerators, freezers, dishwashers .",
  },
  {
    title: "TVs , bikes",
    icon: icon3,
    fullText:
      "Not accepting TVs at this time.",
    shortText: "Not accepting TVs at this time.",
  },
  {
    title: "OTHER:",
    icon: icon10,
    fullText: "Tires, food, any type of fuel, cash or checks. No hazardous materials please.",
    shortText: "Tires, food, any type of fuel, cash or checks.  ",
  },
 
];

const DonationPage = () => {
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
            Donations
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
      <div>
        <div className="flex flex-col items-center px-6 py-8">
          {/* Header Section */}
          <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
            Start Donations
          </button>
          <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
            Explore What you Donate
          </h2>
          <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
            Installing water wells and purification systems in areas with
            limited access to clean water.
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-2 grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-36">
          {donationItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-transparent relative"
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <img
                  src={yellowgreen}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <img
                  src={item.icon}
                  alt={item.title}
                  className="absolute inset-0 w-12 h-12 mx-auto my-auto"
                />
              </div>
              <div className="relative flex-1 ml-4">
                <div className="relative">
                  <img
                    src={group}
                    alt="Group Background"
                    className="w-full h-auto lg:h-36"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 lg:p-5">
                    <h2 className="text-gray-600 text-lg font-bold bg-white bg-opacity-80 rounded-md">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-xs bg-white bg-opacity-80 p-2 rounded-md">
                      <span className="hidden lg:inline p-2">
                        {item.fullText}
                      </span>
                      <span className="inline lg:hidden p-2">
                        {item.shortText}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center px-6 py-8">
          {/* Header Section */}
          <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
            Start Donations
          </button>
          <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
          Items Not Acceptable for Donation
          </h2>
          <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
          Installing water wells and purification systems in areas with limited access to clean water.
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-2 grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-36">
          {donationItemsRed.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-transparent relative"
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <img
                  src={redgreen}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <img
                  src={item.icon}
                  alt={item.title}
                  className="absolute inset-0 w-12 h-12 mx-auto my-auto"
                />
              </div>
              <div className="relative flex-1 ml-4">
                <div className="relative">
                  <img
                    src={group2}
                    alt="Group Background"
                    className="w-full h-auto lg:h-36"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 lg:p-5">
                    <h2 className="text-gray-600 text-base md:text-lg font-bold bg-white bg-opacity-80 rounded-md">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-xs bg-white bg-opacity-80  rounded-md">
                      <span className="hidden lg:inline p-2">
                        {item.fullText}
                      </span>
                      <span className="inline lg:hidden p-2">
                        {item.shortText}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DonationPage;
