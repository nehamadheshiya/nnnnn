import React from "react";
import donationback from "../assets/donationback.png";
import Footer from "./Footer";
import TestimonialSection from "./TestimonialSection";
import vector from "../assets/Vector.png";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";

const Cookies = () => {
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
            Cookies Policy
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
      <div className="flex flex-col items-center px-6 py-4 md:py-8">
        {/* Header Section */}
        {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
        <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
          Cookies Policy
        </h2>
        <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
          Cookies Policy—Transparency, Security, and Trust in Every Byte.
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-6  text-gray-900">
        <section className="mb-6">
          {/* <h2 className="text-xl font-semibold">INTRODUCTION</h2> */}
          <p className="text-justify text-gray-700">
            At <b>Umeedein</b>, we use cookies and similar tracking technologies
            to enhance your browsing experience, improve website functionality,
            and analyze visitor interactions. Cookies are small data files
            stored on your device that help us remember your preferences,
            deliver relevant content, and optimize website performance.
          </p>
          <br></br>
          <p className="text-justify text-gray-700">
            Some cookies are essential for site security and functionality,
            while others support analytics, personalization, and marketing
            efforts. By understanding how users engage with our website, these
            cookies enable us to enhance user experience and deliver pertinent
            content.
          </p>
          <br></br>

          <p className="text-justify text-gray-700">
            You agree to our use of cookies on our website. However, you can
            manage, disable, or customize cookie settings through your browser.
            This Cookies Policy explains the types of cookies we use, their
            purpose, and your control over them.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">What Are Cookies?</h2>
          <p className="text-justify text-gray-700 mt-2">
            When you visit a website, little text files called cookies are saved
            on your device. These files help us analyze website traffic and user
            interactions, allowing us to improve performance and optimize
            content for a more personalized experience.
          </p>
          <br></br>
          <p className="text-justify text-gray-700">
            While some cookies are essential for website functionality, others
            assist with analytics and marketing. Through the settings of your
            browser, you can control or disable cookies, although doing so might
            make some functions less functional. By reviewing your preferences,
            you can make sure that privacy and usefulness are balanced.
          </p>
          <br></br>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">How We Use Cookies</h2>
          <p className="text-justify text-gray-700">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              <strong>Essential Cookies:</strong> It is necessary for the
              website to function properly, such as enabling navigation and
              access to secure areas.
            </li>
            <li className="py-2">
              <strong>Performance Cookies:</strong> Collect anonymous data about
              how visitors use our website (e.g., pages visited, time spent) to
              improve its performance.
            </li>
            <li className="py-2">
              <strong>Functional Cookies:</strong> Remember your preferences
              (e.g., language, region) to personalize your experience.
            </li>

            <li className="py-2">
              <strong>Analytics Cookies:</strong> Help us understand user
              behavior and measure the effectiveness of our content and
              campaigns.
            </li>
            <li className="py-2">
              <strong>Advertising Cookies:</strong> Used to deliver relevant ads
              and track ad performance (if applicable).
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Third-Party Cookies</h2>
          <p className="text-justify text-gray-700 mt-2">
            We may allow third-party service providers, such as Google
            Analytics, to place cookies on your device when you visit our
            website. This information allows us to improve site performance,
            optimize content, and enhance user experience based on real-time
            data.
          </p>
          <br></br>
          <p className="text-justify text-gray-700">
            Since these cookies are managed by external providers, they are
            subject to the privacy policies of those third parties. We do not
            control how these providers use the collected data. If you wish to
            manage or disable third-party cookies, you can do so through your
            browser settings or by visiting the provider’s opt-out options.
          </p>
          <br></br>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            Managing Your Cookie Preferences
          </h2>
          <p className="text-justify text-gray-700">
            Cookies can be disabled or controlled via your browser settings.
            However, disabling cookies may affect the functionality of our
            website and limit your user experience. Here’s how to manage cookies
            on popular browsers:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              <strong>Google Chrome:</strong> Go to Settings, then select
              Privacy and Security, and navigate to Cookies and Site Data to
              manage your preferences.
            </li>
            <li className="py-2">
              <strong>Mozilla Firefox:</strong> Open Options, click on Privacy &
              Security, and adjust settings under Cookies and Site Data.
            </li>
            <li className="py-2">
              <strong>Safari:</strong> Access Preferences, choose Privacy, and
              select Manage Website Data to control cookie storage.
            </li>

            <li className="py-2">
              <strong>Microsoft Edge:</strong> Open Settings, go to Privacy, Search, and Services, and modify preferences under Cookies.

            </li>
       
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p className="text-justify text-gray-700 mt-2">
          We may update this Cookies Policy to align with changes in technology, legal requirements, or our practices. Any revisions will be posted on this page to ensure transparency. To stay up to date on our cookie usage, we recommend you periodically review our policy. Your continued use of our website after updates indicates your acceptance of any changes made to our cookie practices and privacy approach.
          </p>
          
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">CONTACT US</h2>
          <p className="text-justify text-gray-700">
          For inquiries concerning this policy or our use of cookies, please get in touch with us at:<br></br>
            <b>Umeedein</b>
            <br></br>
            <b> info@umeedein.com</b>
            <br></br>
            {/* <p className="pt-3">
              {" "}
              This Privacy Policy is tailored for Umeedein and ensures
              compliance with relevant data protection laws in India.
            </p> */}
          </p>
        </section>
      </div>
      <div>
        <div className="bg-[#094C3B] relative h-80 md:h-96 text-white mt-0 md:mt-10 flex flex-col items-center justify-center text-center px-6">
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

export default Cookies;
