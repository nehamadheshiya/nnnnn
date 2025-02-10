import { useState } from "react";
import { Menu, X } from "lucide-react";
import background from "../assets/background.png";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full relative">
      {/* Top Bar */}
      <div className="bg-[#094C3B]  text-white text-sm py-2 text-center">
        Donation Donation Donation Donation Donation Donation 
      </div>

      {/* Navbar */}
      
      <nav className="bg-white shadow-md border-b border-gray-200 relative z-50">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center py-5">
      
          <div className="text-green-900 font-bold text-2xl">Umeedein</div>

       
          <ul className="hidden md:flex space-x-6 text-gray-700">
            {["Home", "About Us", "Donation", "V. Form", "Blog", "Contact"].map((item) => (
              <li key={item} className="hover:text-green-900 cursor-pointer relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

         
          <button className="hidden md:block bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition-all">
            Donate Now
          </button>

        
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={30} className="transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </button>
        </div>
        <hr className="border-t-1 border-gray-300 mb-2 md:mb-4" />

      </nav>

  
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
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <X size={30} />
        </button>
        <ul className="mt-12 space-y-5 text-gray-700">
          {["Home", "About Us", "Donation", "V. Form", "Blog", "Contact"].map((item) => (
            <li key={item} className="hover:text-green-900 cursor-pointer">
              {item}
            </li>
          ))}
          <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-md w-full">
            Donate Now
          </button>
        </ul>
      </div>

     
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] md:h-[85vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
    
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,76,59,0.2)] to-[rgba(9,76,59,0.9)]"></div>

     
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Every Helping Hand, <br /> Every Heartfelt Change
          </h1>
          <p className="mt-4 text-lg">
            Every helping hand brings heartfelt change, creating ripples of hope and compassion. 
            Each act of kindness lifts lives, inspiring others and uniting us in a shared journey 
            toward a brighter, more compassionate world.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all">
              Watch Video
            </button>
            <button className="bg-white text-green-900 px-6 py-3 rounded-full border shadow-md hover:bg-gray-200 transition-all">
              Donate Now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
