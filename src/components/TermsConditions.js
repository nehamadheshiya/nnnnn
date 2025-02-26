import React from "react";
import donationback from "../assets/donationback.png";
import vector from "../assets/Vector.png";
import Footer from "./Footer";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png"
import FAQSection from "./FAQSection";
const TermsConditions = () => {
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
          Terms & Condition
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
          Terms & Condition
          </h2>
          <p className="text-gray-600 text-center max-w-lg mt-3 text-base leading-relaxed">
          Installing water wells and purification systems in areas with limited access to clean water.
          </p>
        </div>
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">1. Your Agreement</h2>
          <p className="text-justify text-gray-700" >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">2. Privacy</h2>
          <p className="text-justify text-gray-700">
            Your privacy is important to us. We ensure that your personal
            information is protected and used responsibly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">3. Data Collection</h2>
          <p className="text-justify text-gray-700">
            We collect data to enhance your experience and improve our services.
            This includes usage data, preferences, and interactions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">4. Security</h2>
          <p className="text-justify text-gray-700">
            This Site and all its Contents are intended solely for personal,
            non-commercial use. Except as expressly provided, nothing within the
            Site shall be construed as conferring any license under our or any
            third party's intellectual property rights, whether by estoppel,
            implication, waiver, or otherwise. Without limiting the generality
            of the foregoing, you acknowledge and agree that all content
            available through and used to operate the Site and its services is
            protected by copyright, trademark, patent, or other proprietary
            rights. You agree not to: (a) modify, alter, or deface any of the
            trademarks, service marks, trade dress (collectively "Trademarks")
            or other intellectual property made available by us in connection
            with the Site; (b) hold yourself out as in any way sponsored by,
            affiliated with, or endorsed by us, or any of our affiliates or
            service providers; (c) use any of the Trademarks or other content
            accessible through the Site for any purpose other than the purpose
            for which we have made it available to you; (d) defame or disparage
            us, our Trademarks, or any aspect of the Site; and (e) adapt,
            translate, modify, decompile, disassemble, or reverse engineer the
            Site or any software or programs used in connection with it or its
            products and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
          <p className="text-justify text-gray-700">
            Our services may integrate with third-party providers. We are not
            responsible for their privacy practices, so please review their
            policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">6. User Rights</h2>
          <p className="text-justify text-gray-700"> Our services may integrate with third-party providers. We are not
            responsible for their privacy practices, so please review their
            policies.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">7. Changes to Policy</h2>
          <p className="text-justify text-gray-700">
            property made available by us in connection with the Site; (b) hold
            yourself out as in any way sponsored by, affiliated with, or
            endorsed by us, or any of our affiliates or service providers; (c)
            use any of the Trademarks or other content accessible through the
            Site for any purpose other than the purpose for which we have made
            it available to you; (d) defame or disparage us, our Trademarks, or
            any aspect of the Site; and (e) adapt, translate, modify, decompile,
            disassemble, or reverse engineer the Site or any software or
            programs used in connection with it or its products and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">8. Contact Information</h2>
          <p className="text-justify text-gray-700">
            If you have any questions about this policy, please reach out to us
            at support@example.com.
          </p>
        </section>
      </div>
      <div>
      <div className="bg-[#094C3B] relative h-80 md:h-96 text-white mt-0 md:mt-10 flex flex-col items-center justify-center text-center px-6">
  {/* Icons */}
  <img src={icn4} alt="vector" className="absolute top-4 left-4 w-16 h-16 md:w-28 md:h-28" />
  <img src={icn2} alt="icon1" className="absolute top-0 right-0 w-16 h-16 md:w-28 md:h-28" />
  <img src={icn1} alt="icon2" className="absolute bottom-0 left-20 w-16 h-16 md:w-24 md:h-24" />
  <img src={home3} alt="#" className="absolute bottom-0 right-4 w-12 h-14 md:w-24 md:h-24" />

  {/* Centered Content */}
  <div className="max-w-2xl">
    <p className="text-4xl font-semibold">Subscribe to our Newsletter</p>
    <p className="text-base mx-2 md:mx-10 mt-6">
      Subscribe to our newsletter to stay updated with the latest news, exclusive content, and special offers! Join our 
      community and be the first to know about exciting events and opportunities. Don’t miss out—sign up today!
    </p>
  </div>
</div>

      </div>
      <Footer/>
     
    </div>
  );
};

export default TermsConditions;
