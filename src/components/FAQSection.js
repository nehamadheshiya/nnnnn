import { useState } from "react";
import { Plus, MessageSquare } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "1. What is Umeedein?",
      answer:
        "Umeedein is a non-profit organization dedicated to creating positive change through various social initiatives. Our mission is to empower underprivileged communities by providing education, healthcare, and sustainable livelihood opportunities.",
    },
    { question: "2. What causes does Umeedein support?", answer: "We focus on key social issues, including child education, women empowerment, healthcare, environmental sustainability, and disaster relief. Our programs are designed to bring lasting impact to marginalized communities.  " },
   
    {
      question: "3. Simple innate summer fat appear basket his desire joy?",
      answer: "You can donate through our website using secure online payment methods, including credit/debit cards, UPI, and bank transfers. Every contribution helps us expand our reach and make a greater difference.",
    },
    { question: "4. Are donations to Umeedein tax-deductible??", answer: "Yes, donations made to Umeedein are eligible for tax benefits under applicable Indian laws. After donating, you will receive a donation receipt for tax exemption purposes." },
    { question: "5. Can I volunteer with Umeedein?", answer: "Absolutely! We welcome volunteers to contribute their time and skills in various capacities, such as teaching, organizing events, fundraising, and spreading awareness. To find out more about volunteer opportunities, visit our website. " },
    {
      question: "6. How does Umeedein ensure transparency in fund usage?",
      answer: "We maintain complete transparency by regularly updating our financial reports and impact assessments. Donors and stakeholders can access these reports to see how funds are utilized.",
    },
    {
      question: "7. Does Umeedein collaborate with other organizations?",
      answer: "Yes, we partner with corporate organizations, educational institutions, and other NGOs to maximize our impact and reach more beneficiaries. Collaborative efforts help us drive sustainable change.",
    },
    {
      question: "8. How can I stay updated on Umeedein’s work?",
      answer: "You can follow us on social media, subscribe to our newsletter, or visit our website for regular updates on our projects, success stories, and upcoming initiatives.",
    },  {
      question: "9. Can I sponsor a child’s education through Umeedein?",
      answer: "Yes, we offer sponsorship programs that allow donors to support a child’s education, covering tuition fees, books, and other essentials. The future of a kid can be altered by your sponsorship.",
    },  {
      question: "10. How can I contact Umeedein for more information?",
      answer: "You can reach out to us via email, phone, or our website’s contact form. Our team is happy to assist you with any queries regarding our initiatives, donations, or volunteering.",
    },
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
      <div className="md:w-1/3 bg-gray-100  p-6 mt-20 rounded-lg shadow-md flex flex-col items-center text-center">
        <MessageSquare className="w-12 h-12 mb-4 text-black" />
        <h3 className="text-xl font-semibold mb-6">
          Do you have more questions?
        </h3>
        <p className="text-gray-600 mb-20">
        Every small act of kindness can create a ripple effect of positive change. Your donations, whether in the form of funds, essentials, or time, help provide food, education, healthcare, and shelter to those in need. Together, we can build a stronger, more compassionate world where every individual has the opportunity to thrive. Join us in making a lasting impact—because a better tomorrow starts with the actions we take today.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          Shoot a Direct Mail
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
