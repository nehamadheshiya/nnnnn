import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logogif from "../assets/GIF.gif";

const Footer = () => {
  return (
    <footer className="bg-[#094C3B] text-white mt-10">
      <div className="container mx-auto px-6 py-8">
        {/* Logo and Search Box in one row for md/lg */}
        <div className="flex  flex-col md:flex-row justify-between items-center mb-6">
          <img src={logogif} alt="Logo" className="h-16 w-40 ml-0 md:ml-12" />
          {/* <div className="relative w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="w-full md:w-96 px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="absolute right-0 top-0 bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
              Search
            </button>
          </div> */}
        </div>

        {/* Grid layout for md/lg */}
        <div className="px-6 md:px-20">
          <div className="grid grid-cols-1 mt-4 md:mt-12 md:grid-cols-3 gap-8 text-left">
            {/* Column One */}
            <div>
              <ul className="mt-2 space-y-1">
              <a href="/">
                <li className="font-semibold">Home</li>

                </a>
                <a href="what-we-offer">
                <li className="font-semibold mt-2">About</li>

                </a>
                <a href="contact">
                <li className="font-semibold mt-2">Contact</li>
                </a>

                <a href="blog">
                <li className="font-semibold mt-2">Blog</li>

                </a>
                <a href="donation" className="mt-2">
                <li className="font-semibold mt-2">Donation</li>

                </a>
              </ul>
            </div>

            {/* Column Two */}
            <div>
              <ul className="mt-2 space-y-1">
                <a href="terms-conditions">
                  <li className="font-semibold ">Terms & Conditions</li>
                </a>
                <a href="privacy-policy">
                  <li className="font-semibold mt-2">Privacy Policies</li>
                </a>
                {/* <a href="terms-conditions">
                  <li className="font-semibold mt-2">Cookies Policies</li>
                </a> */}
              </ul>
            </div>

            {/* Column Three */}
            <div>
              <h3 className="font-semibold mt-2">Join Us</h3>
              <div className="flex justify-start space-x-4 mt-4 md:mt-2 text-lg">
                <FaYoutube />
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-600 my-6"></div>
      </div>

      {/* Copyright Section */}
      <div className="bg-yellow-400 text-black text-center py-2 text-sm">
        &copy; Copyright 2025 Umeedein. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
