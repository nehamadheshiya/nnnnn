import React from "react";
import donationback from "../assets/donationback.png";
import Footer from "./Footer";
import TestimonialSection from "./TestimonialSection";
import vector from "../assets/Vector.png";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";

const OurStory = () => {
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
            Our Story
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
      <div className="flex flex-col items-center px-6 py-8">
        {/* Header Section */}
        {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
        <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
          Our Story
        </h2>
        <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
          Installing water wells and purification systems in areas with limited
          access to clean water.
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        <section className="mb-6">
       
          <p className="text-justify text-gray-700 mt-4">
            At Umeedein, we believe that hope has the power to transform lives,
            and every small act of kindness can create ripples of change.
            Founded with a vision to make a tangible impact, we are dedicated to
            uplifting communities, empowering individuals, and building a
            society where no one is left behind.
          </p>
          <p className="text-justify text-gray-700 mt-4">
            Our journey began with a simple realisation—countless individuals
            lack access to basic necessities, while many of us have the
            resources to help but don’t always know where to start. Whether it's
            unused household items, surplus food, educational materials, or even
            just a little time to volunteer, every contribution has the
            potential to change someone's life.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-justify text-gray-700 mt-4">
            At Umeedein, we bridge this gap by connecting generosity with need.
            Through our initiatives, we:
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            At Umeedein, we bridge this gap by connecting generosity with need.
            Through our initiatives, we:
          </h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              <strong>Helping Marginalised Communities:</strong> We provide
              food, clothing, and educational materials to those in need,
              ensuring they have the support to live with dignity.
            </li>
            <li className="py-2">
              <strong>Promoting Sustainable Living :</strong> We encourage
              responsible recycling and donations to reduce waste, protect the
              environment, and create a more sustainable future.
            </li>
            <li className="py-2">
              <strong>Empowering People with Skills:</strong> We offer training
              programs, career guidance, and financial literacy workshops to
              help individuals become independent and secure their futures.
            </li>
            <li className="py-2">
              <strong>Encouraging Meaningful Decluttering:</strong>  We inspire people to donate unused items instead of throwing them away, turning clutter into something useful for those in need.

            </li>
            <li className="py-2">
              <strong>Spreading the Joy of Giving:</strong>  We believe that kindness creates lasting change, and even small acts of generosity can bring happiness to others.


            </li>
          </ul>
        </section>

        <section className="mb-6">
       
       <p className="text-justify text-gray-700 mt-4">
       With every step we take, we are driven by the belief that hope should not be a privilege but a right for everyone. At Umeedein, we are more than just an organisation—we are a movement of changemakers working tirelessly to create a future where kindness, sustainability, and community support thrive.

       </p>
       <p className="text-justify text-gray-700 mt-4">
       This is our story, and we invite you to be a part of it. Every action matters whether it be volunteering, making a donation, or just raising awareness. Let's work together to bring hope to those who most need it.
       </p>
       <p className="text-justify text-gray-700 mt-4">
       We extend our heartfelt gratitude to everyone who has been a part of this journey—our supporters for believing in our mission, our volunteers for dedicating their time and effort, and our partners for standing with us to create lasting change. Your commitment and support make all the difference.
       </p>
       <p className="text-justify text-gray-700 mt-4">
       Let’s continue to uplift, inspire, and spread hope—because together, we can build a brighter future for all.
       </p>
       <p className="text-justify text-gray-900 font-bold mt-4">
       Keep Spreading Hope, and Keep Making a Difference!
       </p>
     </section>
      </div>
      <div>
        <div className="bg-[#094C3B] relative h-80 md:h-96 text-white mt-10 flex flex-col items-center justify-center text-center px-6">
          {/* Icons */}
          <img
            src={icn4}
            alt="vector"
            className="absolute top-4 left-4 w-16 h-16 md:w-28 md:h-28"
          />
          <img
            src={icn2}
            alt="icon1"
            className="absolute top-0 right-0 w-16 h-16 md:w-28 md:h-28"
          />
          <img
            src={icn1}
            alt="icon2"
            className="absolute bottom-0 left-20 w-16 h-16 md:w-24 md:h-24"
          />
          <img
            src={home3}
            alt="#"
            className="absolute bottom-0 right-4 w-12 h-14 md:w-24 md:h-24"
          />

          {/* Centered Content */}
          <div className="max-w-2xl">
            <p className="text-4xl font-semibold">
              Subscribe to our Newsletter
            </p>
            <p className="text-base mx-2 md:mx-10 mt-6">
              Subscribe to our newsletter to stay updated with the latest news,
              exclusive content, and special offers! Join our community and be
              the first to know about exciting events and opportunities. Don’t
              miss out—sign up today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
