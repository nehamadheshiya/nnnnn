import { useState } from "react";
import { Plus, MessageSquare } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "The expense windows adapted sir. Wrong widen drawn.",
      answer:
        "Offending belonging promotion provision can be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
    },
    { question: "Six curiosity day assurance bed necessary?", answer: "" },
    { question: "Produce say the ten moments parties?", answer: "" },
    {
      question: "Simple innate summer fat appear basket his desire joy?",
      answer: "",
    },
    { question: "Outward clothes promise at gravity do excited?", answer: "" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-14 p-6 md:p-12 max-w-7xl mx-auto mt-5">
      {/* FAQ Section */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold bg-white hover:bg-gray-100"
              >
                {faq.question}
                <Plus className="w-5 h-5 text-gray-500" />
              </button>
              {openIndex === index && (
                <p className="p-4 text-gray-600 border-t">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="md:w-1/3 bg-gray-100 mt-5 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <MessageSquare className="w-12 h-12 mb-4 text-black" />
        <h3 className="text-xl font-semibold mb-6">
          Do you have more questions?
        </h3>
        <p className="text-gray-600 mb-20">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          Shoot a Direct Mail
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
