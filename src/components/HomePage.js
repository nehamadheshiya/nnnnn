import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import background from "../assets/background.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <div className="w-full relative">
      {/* Top Bar */}
      <div className="bg-[#094C3B] text-white text-sm py-2 text-center">
        {/* Donation Donation Donation Donation Donation Donation  */}
      </div>

      <>
        {/* Navbar */}
        <nav className="bg-white shadow-md border-b border-gray-200 relative z-50">
          <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center py-5">
            <div className="text-green-900 font-bold text-2xl">Umeedein</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-gray-700">
              {["Home", "Donation", "V. Form", "Blog", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-green-900 cursor-pointer relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                )
              )}

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
            
                <li className="cursor-pointer flex items-center">
                  About Us
                  <ChevronDown size={18} className="ml-1" />
                </li>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>

                {/* Dropdown Menu (Ensuring No Gap) */}
                {aboutDropdown && (
                  <ul className="absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                    {["Who We Are", "Our Mission"].map((subItem) => (
                      <li
                        key={subItem}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setAboutDropdown(false)} // Close on click
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>

            {/* Donate Button */}
            <button className="hidden md:block bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition-all">
              Donate Now
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
              <Menu
                size={30}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </button>
          </div>
          <hr className="border-t-1 border-gray-300 mb-2 md:mb-4" />
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 bg-gray-50 shadow-2xl rounded-bl-lg p-6 transform transition-transform duration-300 z-[100] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </button>
          <ul className="mt-12 space-y-5 text-gray-700">
            {["Home", "Donation", "V. Form", "Blog", "Contact"].map((item) => (
              <li key={item} className="hover:text-green-900 cursor-pointer">
                {item}
              </li>
            ))}

            {/* About Us Dropdown (Mobile) */}
            <li className="cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => setAboutDropdown(!aboutDropdown)}
              >
                <span>About Us</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    aboutDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {aboutDropdown && (
                <ul className="mt-2 pl-4 space-y-2">
                  {["Who We Are", "Our Mission"].map((subItem) => (
                    <li key={subItem} className="py-1 hover:text-green-900">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-md w-full">
              Donate Now
            </button>
          </ul>
        </div>
      </>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] md:h-[82vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div>


        {/* Floating Images */}
        <img
          src={home1}
          alt="Home 1"
          className="absolute top-0 left-0 w-28 md:w-48"
        />
        <img
          src={home2}
          alt="Home 2"
          className="absolute top-4 right-4 w-20 md:w-28"
        />
        <img
          src={home3}
          alt="Home 3"
          className="absolute bottom-4 left-4 md:left-32 w-24 md:w-28"
        />
        <img
          src={home4}
          alt="Home 4"
          className="absolute bottom-4 right-7 md:right-40 w-28 md:w-36"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl py-4 font-bold leading-tight">
            Every Helping Hand, <br /> Every Heartfelt Change
          </h1>
          <p className="mt-4 text-base md:text-lg py-4">
            Every helping hand brings heartfelt change, creating ripples of hope
            and compassion. Each act of kindness lifts lives, inspiring others
            and uniting us in a shared journey toward a brighter, more
            compassionate world.
          </p>
        </div>
      </header>
    </div>
  );
}
