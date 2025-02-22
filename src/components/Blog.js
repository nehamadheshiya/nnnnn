import React from "react";
import donationback from "../assets/donationback.png";
import Footer from "./Footer";
import vector from "../assets/Vector.png";
import blogImg1 from "../assets/testback.png";
import blogImg2 from "../assets/testback.png";
import blogImg3 from "../assets/testback.png";
import DonationSection from "./DonationSection";
import FAQSection from "./FAQSection";

const Blog = () => {
  const handleReadMore = (blogId) => {
    console.log(`Redirecting to blog ${blogId}`);
    // Replace with actual navigation logic, e.g., react-router
  };

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] lg:h-[65vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${donationback})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div>
        <img src={vector} alt="Vector" className="absolute top-24 left-0 h-32" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Blogs</h1>
          <p className="mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        <h2 className="text-4xl  font-bold text-center text-gray-900">Latest Blogs</h2>
        <p className="text-gray-600 text-center max-w-lg mx-auto mt-3 text-base leading-relaxed">
          Stay updated with our latest initiatives, success stories, and insights into our charitable efforts.
        </p>
        <div className="max-w-7xl mx-auto p-0 md:p-2 mt-4 text-gray-900">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Join Our Donation Campaign to Support Those in Need</h2>
          <p className="text-justify text-gray-700 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..
          </p>
        </section>

       
      </div>
     
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTjfYZvS0dxadNbxkYSwvqLzWdBDPECWo5g&s" alt="Blog 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Providing Clean Water to Communities</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Our efforts to install wells and purification systems are making a difference worldwide.
              </p>
              <button 
                className="mt-4 text-[#094C3B] font-bold hover:underline"
                onClick={() => handleReadMore(1)}
              >
                {/* Read More */}
              </button>
            </div>
          </div>
          
          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz8uRsSAAmb6II--O_nq5WTRDU5cOx-Yirg&s" alt="Blog 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Education for Underprivileged Children</h3>
              <p className="text-gray-600 mt-2 text-sm">
                We believe in the power of education to transform lives and break the cycle of poverty.
              </p>
              <button 
                className="mt-4 text-[#094C3B] font-bold hover:underline"
                onClick={() => handleReadMore(2)}
              >
                {/* Read More */}
              </button>
            </div>
          </div>
          
          {/* Blog 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75uyZMkgzodYKCCbg5YfPDOUeHTd5Yw00xA&s" alt="Blog 3" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Healthcare Access for Everyone</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Bringing medical aid and healthcare services to communities that need it the most.
              </p>
              <button 
                className="mt-4 text-[#094C3B] font-bold hover:underline"
                onClick={() => handleReadMore(3)}
              >
                {/* Read More */}
              </button>
            </div>
          </div>
        </div>
      </div>

      

      <DonationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Blog;
