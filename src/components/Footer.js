import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#094C3B] text-white mt-10">
      <div className="container mx-auto px-6 py-8">
        
        {/* Logo and Search Box in one row for md/lg */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">UMEEDEIN</h2>
          <div className="relative w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="w-full md:w-96 px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="absolute right-0 top-0 bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
              Search
            </button>
          </div>
        </div>

        {/* Grid layout for md/lg */}
        <div className="grid grid-cols-1 mt-4 md:mt-12  md:grid-cols-4 gap-8 text-left">
          {/* Column One */}
          <div>
            <h3 className="font-semibold">COLUMN ONE</h3>
            <ul className="mt-2 space-y-1">
              <li>Twenty One</li>
              <li>Thirty Two</li>
              <li>Fourty Three</li>
              <li>Fifty Four</li>
            </ul>
          </div>

          {/* Column Two */}
          <div>
            <h3 className="font-semibold">COLUMN TWO</h3>
            <ul className="mt-2 space-y-1">
              <li>Sixty Five</li>
              <li>Seventy Six</li>
              <li>Eighty Seven</li>
              <li>Ninety Eight</li>
            </ul>
          </div>

          {/* Column Three */}
          <div>
            <h3 className="font-semibold">COLUMN THREE</h3>
            <ul className="mt-2 space-y-1">
              <li>One Two</li>
              <li>Three Four</li>
              <li>Five Six</li>
              <li>Seven Eight</li>
            </ul>
          </div>

          {/* Column Four */}
          <div>
            <h3 className="font-semibold">COLUMN FOUR</h3>
            <p className="mt-2">Join Us</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2 text-lg">
              <FaYoutube />
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-600 my-6"></div>

      </div>

      {/* Copyright Section */}
      <div className="bg-yellow-400 text-black text-center py-2 text-sm">
        &copy; Copyright 2024 Raha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
