import { useState } from "react";
import { Menu, X } from "lucide-react";
import background from "../assets/children.png"

export default function Join() {


  return (
    <div className="w-full mt-5  relative">
     

     
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[75vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
    
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,76,59,0.2)] to-[rgba(9,76,59,0.9)]"></div>

     
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-3xl font-bold leading-tight">
          Join Our Community of Donors and Volunteers: Be Part of Positive Change in the World !
          </h1>
          <p className="mt-4 text-5xl font-bold">
          154,859+
          </p>
          <p className="mt-4 text-lg font-medium">
          Join the Many Who Already Support Our Mission
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-yellow-400 font-semibold text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all">
              Join Our Community
            </button>
            {/* <button className="bg-white text-green-900 px-6 py-3 rounded-full border shadow-md hover:bg-gray-200 transition-all">
              Donate Now
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
}
