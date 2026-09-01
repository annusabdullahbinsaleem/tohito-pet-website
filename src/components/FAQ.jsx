import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    a: "Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit",
  },
  { q: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt", a: "..." },
  { q: "Duis aute irure dolor in reprehenderit in voluptate", a: "..." },
  { q: "Velit esse cillum dolore eu fugiat nulla pariatur", a: "..." },
  { q: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem", a: "..." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">Your Questions, Answered!</h2>
        <div className="w-16 h-1 bg-[#FF4D4D] mx-auto my-6 rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto mt-10 divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="p-6">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-medium text-[#1A202C]">{item.q}</span>
                {isOpen ? (
                  <Minus size={18} className="text-[#FF4D4D] shrink-0 ml-4" />
                ) : (
                  <Plus size={18} className="text-gray-400 shrink-0 ml-4" />
                )}
              </button>
              {isOpen && (
                <p className="text-sm text-gray-500 mt-3 pr-6">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}