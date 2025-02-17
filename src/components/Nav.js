
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Nav = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [aboutDropdown, setAboutDropdown] = useState(false);
  return (
    <div>
         <>
        <nav className="bg-white shadow-md border-b border-gray-200 relative z-50">
          <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center py-5">
            <div className="text-green-900 font-bold text-2xl">Umeedein</div>

            <ul className="hidden md:flex space-x-8 text-gray-700 lg:ml-[5rem]">
              {[
                { name: "Home", path: "/" },
                { name: "Donation", path: "/donation" },
                // { name: "V. Form", path: "/volunteer" },
                // { name: "Blog", path: "/blog" },
                { name: "Privacy&Policy", path: "/privacy-policy" },
                { name: "Terms&Conditions", path: "/terms-conditions" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:text-green-900 cursor-pointer relative group"
                >
                  <Link to={item.path}>{item.name}</Link>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <li className="cursor-pointer flex items-center">
                  About Us <ChevronDown size={18} className="ml-1" />
                </li>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>

                {aboutDropdown && (
                  <ul className="absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                    {[
                      { name: "Our Story", path: "/our-story" },
                      { name: "What We Offer", path: "/what-we-offer" },
                    ].map((subItem) => (
                      <li
                        key={subItem.name}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Link
                          to={subItem.path}
                          onClick={() => setAboutDropdown(false)}
                        >
                          {subItem.name}
                        </Link>
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
            {[
              { name: "Home", path: "/" },
              { name: "Donation", path: "/donation" },
              // { name: "V. Form", path: "/volunteer" },
              // { name: "Blog", path: "/blog" },
              { name: "Privacy&Policy", path: "/privacy-policy" },
              { name: "Terms&Conditions", path: "/terms-conditions" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.name}
                className="hover:text-green-900 cursor-pointer"
              >
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
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
                  {[
                        { name: "Our Story", path: "/our-story" },
                        { name: "What We Offer", path: "/what-we-offer" },
                  ].map((subItem) => (
                    <li
                      key={subItem.name}
                      className="py-1 hover:text-green-900"
                    >
                      <Link
                        to={subItem.path}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <Link to="/donation">
              <button
                className="bg-[#094C3B] text-white px-6 py-2 mt-6 rounded-full shadow-md w-full"
                onClick={() => setMenuOpen(false)}
              >
                Donate Now
              </button>
            </Link>
          </ul>
        </div>
      </>
    </div>
  )
}

export default Nav
