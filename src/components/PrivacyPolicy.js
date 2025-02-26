import React from "react";
import donationback from "../assets/donationback.png";
import Footer from "./Footer";
import TestimonialSection from "./TestimonialSection";
import vector from "../assets/Vector.png";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="mt-2 md:mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
      <div className="flex flex-col items-center px-6 py-2 md:py-8">
        {/* Header Section */}
        {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
        <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
          Privacy Policy
        </h2>
        <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
        Transparency, Security, and Trust—Our Promise to You.
        </p>
      </div>
      <div className="max-w-7xl mx-auto  p-6 text-gray-900">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">INTRODUCTION</h2>
          <p className="text-justify text-gray-700">
            Umeedein ("we," "us," or "our") values and respects the privacy of
            our users ("you" or "your"). This Privacy Policy outlines how we
            collect, use, disclose, and protect your personal information when
            you visit our website [website URL], including any associated media
            channels, mobile websites, or applications (collectively, the
            "Site").<br></br> Please review this Privacy Policy carefully. If
            you do not agree with its terms, we advise you not to access the
            Site. We reserve the right to modify this Privacy Policy at any time
            for any reason. Any updates will be reflected by revising the "Last
            Updated" date, and the changes will take effect immediately upon
            posting. By continuing to use the Site after modifications, you
            acknowledge and accept the updated Privacy Policy.<br></br> We
            encourage you to revisit this Privacy Policy regularly to stay
            informed about any changes. Your continued use of the Site signifies
            your acceptance of the latest version of our Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">COLLECTION OF INFORMATION</h2>
          <p className="text-justify text-gray-700">
            We may collect information in various ways, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              <strong>Personal Data:</strong> We collect personal information
              such as your name, email, phone number, and address when you
              voluntarily provide it while interacting with our Site.
            </li>
            <li className="py-2">
              <strong>Derivative Data:</strong> Our servers automatically
              collect data like IP addresses, browser type, operating system,
              and website interactions to enhance security, analyze traffic, and
              improve user experience.
            </li>
            <li className="py-2">
              <strong>Financial Data :</strong> When you make donations or
              transactions, payment details are collected and securely processed
              through third-party providers, ensuring compliance with industry
              security standards and data protection.
            </li>
            <li className="py-2">
              <strong>Third-Party Data:</strong> If you link social media
              accounts to our Site, we may receive authorized profile
              information, including name, email, and contacts, based on your
              privacy settings.
            </li>
            <li className="py-2">
              <strong>Survey & Contest Data:</strong> We collect information
              from voluntary surveys, contests, or promotions, including
              responses, preferences, and contact details, to improve services
              and facilitate reward distribution when applicable.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">USE OF INFORMATION</h2>
          <p className="text-justify text-gray-700 mt-2">
            Collected information may be used to::
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">Provide and improve our services.</li>{" "}
            <li className="py-2">Process donations and transactions.</li>{" "}
            <li className="py-2">
              Send newsletters, updates, and promotional materials.
            </li>
            <li className="py-2">Respond to inquiries and provide support.</li>
            <li className="py-2">
              Comply with legal requirements and prevent fraud.
            </li>
            <li className="py-2">
              Enhance website security and functionality.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">DISCLOSURE OF INFORMATION</h2>
          <p className="text-justify text-gray-700">
            We may share your personal information in certain circumstances to
            ensure compliance, enhance services, and provide a seamless
            experience. The key instances where we may disclose your data
            include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law, regulatory authorities, or court
              orders. This includes responding to legal processes, preventing
              fraud, enforcing policies, or protecting our rights, safety, and
              property or that of others.
            </li>
            <li className="py-2">
              <strong>Derivative Data:</strong> Our servers automatically
              collect data like IP addresses, browser type, operating system,
              and website interactions to enhance security, analyze traffic, and
              improve user experience.
            </li>
            <li className="py-2">
              <strong>Marketing Communications:</strong> With your explicit
              consent, we may share your information with third parties for
              marketing, promotional, or advertising purposes. You can opt out
              of such communications at any time through the settings provided
              in our communications or by contacting us.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">THIRD-PARTY WEBSITES</h2>
          <p className="text-justify text-gray-700">
            The Site may include links to third-party websites for your
            convenience. However, it does not control or endorse their privacy
            practices, policies, or content. These external sites may collect
            and use your personal information differently from us. Before
            sharing any information, we advise you to review their privacy
            policies. Your interactions with third-party websites are solely at
            your own risk, and we bear no responsibility for their actions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECURITY OF INFORMATION</h2>
          <p className="text-justify text-gray-700">
            We implement administrative, technical, and physical safeguards to
            protect your personal data from unauthorized access, disclosure, or
            misuse. These measures include encryption, secure servers, and
            restricted access to sensitive information. We cannot, however,
            provide flawless safety because no security mechanism is foolproof.
            While we strive to secure your data, you share information at your
            own risk. We recommend using strong passwords and updating them
            regularly for added security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">CHILDREN'S PRIVACY</h2>
          <p className="text-justify text-gray-700">
            {" "}
            We don't intentionally gather or ask for personal data from
            individuals younger than 13. Our Site is not intended for use by
            minors, and we take precautions to protect their privacy. If a
            parent or guardian believes that their child has provided us with
            personal data, they should contact us immediately. Upon
            verification, we will promptly delete any such information from our
            records.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">DO-NOT-TRACK FEATURES</h2>
          <p className="text-justify text-gray-700">
            Our Site does not currently respond to Do-Not-Track (DNT) signals
            from web browsers. DNT is a setting that allows users to request
            websites not to track their online activities. However, as no
            uniform standard governs how websites should respond to these
            signals, we do not recognize or act upon them. Users can manage
            tracking preferences through browser settings or third-party tools
            designed to limit online tracking.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">YOUR RIGHTS & CHOICES</h2>
     
          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              <strong>Email Communications:</strong>  You can opt-out of promotional emails by following the unsubscribe link.

            </li>
            <li className="py-2">
              <strong>Data Requests:</strong> You may request access, modification, or deletion of your data by contacting us.

            </li>
            <li className="py-2">
              <strong>Marketing Communications:</strong> With your explicit
              consent, we may share your information with third parties for
              marketing, promotional, or advertising purposes. You can opt out
              of such communications at any time through the settings provided
              in our communications or by contacting us.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">CONTACT US</h2>
          <p className="text-justify text-gray-700">
            For questions regarding this Privacy Policy, contact us at:<br></br>
            <b>Umeedein</b><br></br>
           <b> info@umeedein.com</b><br></br>
          <p className="pt-3">  This Privacy Policy is tailored for Umeedein and ensures compliance
          with relevant data protection laws in India.</p>
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

export default PrivacyPolicy;
