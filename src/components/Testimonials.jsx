import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import mollyPhoto from "../assets/woman_with_dog.png";

const testimonials = [
  {
    name: "Molly S",
    rating: "4.85",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: mollyPhoto,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
        Customer Feedback Whom We Ensure their <br className="hidden md:block" />
        Pets are Treated Just Like Family.
      </h2>
      <div className="w-16 h-1 bg-brand-red mx-auto my-6 rounded-full" />

      <div className="flex items-center justify-center gap-6 mt-12 max-w-4xl mx-auto">
        <button
          onClick={prev}
          type="button"
          aria-label="Previous testimonial"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark text-white shrink-0"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 rounded-xl p-6 text-left">
          <img
            src={t.image}
            alt={t.name}
            className="w-32 h-32 rounded-lg object-cover shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="bg-brand-red text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {t.rating}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{t.quote}</p>
            <p className="font-semibold text-brand-dark">{t.name}</p>
          </div>
        </div>

        <button
          onClick={next}
          type="button"
          aria-label="Next testimonial"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-brand-red text-white shrink-0"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}