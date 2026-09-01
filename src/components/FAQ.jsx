import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How does Tohito match me with the right pet caregiver?",
      a: "We use a smart matching algorithm based on your pet's specific needs, your location, and the caregiver's verified experience and ratings."
    },
    {
      q: "Are all caregivers on Tohito verified and background checked?",
      a: "Yes, every caregiver undergoes a thorough ID verification and background screening process before they can accept bookings on our platform."
    },
    {
      q: "What should I do if I need to cancel or modify my booking?",
      a: "You can easily modify or cancel your booking through your Tohito user dashboard up to 24 hours before the service starts."
    },
    {
      q: "How do payments work on the platform?",
      a: "All payments are processed securely online through our encrypted payment gateway, ensuring safety and transparency for both pet owners and caregivers."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-brand-dark bg-white hover:bg-gray-50 transition-colors"
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <Minus size={18} className="text-brand-red shrink-0 ml-4" />
                ) : (
                  <Plus size={18} className="text-gray-400 shrink-0 ml-4" />
                )}
              </button>
              {isOpen && (
                <p className="text-sm text-gray-500 mt-3 pr-6 px-5 pb-5">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}