import bigHeart from '../assets/big-heart.png';
import smallHeart from '../assets/small-heart.png';
import dottedLines from '../assets/dotted lines.png';
import SearchFilter from './SearchFilter';

const heroButtons = [
  { label: "Find a Host", className: "bg-brand-red hover:bg-[#e64444]" },
  { label: "About Tohito", className: "bg-brand-dark hover:bg-[#0f141c]" },
];

export default function Hero() {
  return (
    <section aria-label="Hero" className="w-full bg-[#FFF5F5] pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-270 mx-auto relative text-center">
        <img
          src={bigHeart}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-[12%] w-10 h-auto hidden md:block"
        />
        <img
          src={smallHeart}
          alt=""
          aria-hidden="true"
          className="absolute top-20 right-[15%] w-6 h-auto hidden md:block"
        />

        <img
          src={dottedLines}
          alt=""
          aria-hidden="true"
          className="absolute top-8.75 right-[18%] w-27.5 h-auto hidden md:block pointer-events-none"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 relative">
          Loving Pet Care in Your <br /> Neighborhood
        </h1>

        <div className="flex justify-center gap-3 mb-10">
          {heroButtons.map((btn) => (
            <button
              key={btn.label}
              type="button"
              className={`${btn.className} text-white px-6 py-2.5 rounded-md font-semibold text-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-red`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="mt-6 z-10">
          <SearchFilter />
        </div>
      </div>
    </section>
  );
}