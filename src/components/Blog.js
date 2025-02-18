import React from 'react'
import donationback from "../assets/donationback.png";
import Footer from "./Footer";

import vector from "../assets/Vector.png";
import HowWeWork from './HowWeWork';


const Blog = () => {
  return (
    <div>
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
          Blog
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
    <HowWeWork/>
    <div className="max-w-7xl mx-auto p-6 text-gray-900">
    <div className="flex flex-col items-center px-6 py-8">
        {/* Header Section */}
        {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
       
      </div>
        <section className="mb-6">
          <h2 className="text-2xl font-bold">
            Supporting One Another to Create a Better World
          </h2>
          <p className="text-justify text-gray-700 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>

          <div className="flex flex-col items-center px-6 py-8">
        {/* Header Section */}
        {/* <button className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
       
      </div>
         
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold">
          How to schedule a pickup
          </h2>
          <p className="text-justify text-gray-700 mt-4">
           1. Supporting one another is one of the most powerful ways we can make a positive impact in the world. When we extend a helping hand,
          </p>
          <p className="text-justify text-gray-700 mt-4">
           2. Supporting one another is one of the most powerful ways we can make a positive impact in the world. When we extend a helping hand,
          </p> <p className="text-justify text-gray-700 mt-4">
           3. Supporting one another is one of the most powerful ways we can make a positive impact in the world. When we extend a helping hand,
          </p>
       
         
        </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog