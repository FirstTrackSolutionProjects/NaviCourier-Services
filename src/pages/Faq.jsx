import React, { useState } from "react";


const faqData = [
  { 
    question: "What is NAVI COURIER SERVICES?", 
    answer: "NAVI COURIER SERVICES is a reliable logistics company offering fast and secure delivery solutions across India, ensuring your packages reach on time." 
  },
  { 
    question: "How do I contact you?", 
    answer: "You can reach us via our customer support number at 1800-123-4567 or email us at support@navicourier.com. Our team is available 24/7." 
  },
  { 
    question: "Will I get full refund on cancellation of order?", 
    answer: "Yes, if you cancel your order before it is dispatched, you are eligible for a full refund. Please refer to our refund policy for detailed terms." 
  },
  { 
    question: "What is your return policy?", 
    answer: "We accept returns within 7 days of delivery. The product must be unused and in original packaging. Contact support to initiate a return." 
  },
  { 
    question: "How do I track my order?", 
    answer: "After placing an order, you will receive a tracking ID via SMS and email. Use it on our website or app to track your parcel in real-time." 
  },
  { 
    question: "Do you offer international shipping?", 
    answer: "Currently, we only provide domestic shipping within India. International shipping services will be available soon." 
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
        <div className="bg-blue-50 rounded-lg shadow-md w-full max-w-xl">
          <h2 className="text-xl font-semibold px-6 py-4 border-b border-blue-200">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-blue-200 px-6 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-base text-gray-800">{item.question}</p>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Faq;
