import { useState } from "react";
import { PawPrint, Home, Package, Footprints, MapPin } from "lucide-react";

const services = [
  { key: "boarding", label: "Boarding", icon: Package },
  { key: "house-sitting", label: "House Sitting", icon: Home },
  { key: "drop-in", label: "Drop-In Visits", icon: PawPrint },
  { key: "day-care", label: "Doggy Day Care", icon: PawPrint },
  { key: "walking", label: "Dog Walking", icon: Footprints },
];

const sizeMarks = [
  { label: "Small", value: 0 },
  { label: "Medium", value: 15 },
  { label: "Large", value: 40 },
  { label: "Giant", value: 100 },
];

export default function SearchFilter() {
  const [petType, setPetType] = useState("dog");
  const [service, setService] = useState("boarding");
  const [petSize, setPetSize] = useState(0);

  const sizePercent = (petSize / 101) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200">
        <span className="font-semibold text-brand-dark">I'm looking for service for my:</span>
        <div className="flex gap-3">
          {["dog", "cat"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setPetType(type)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md border text-sm font-medium capitalize transition-colors ${
                petType === type
                  ? "border-brand-dark text-brand-dark"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              <PawPrint size={16} className={petType === type ? "text-brand-dark" : "text-gray-400"} />
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="font-semibold text-brand-dark mb-6">What kind of Service You Need?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {services.map((s) => {
            const isActive = service === s.key;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setService(s.key)}
                className={`flex flex-col items-center justify-center gap-3 py-6 rounded-xl border transition-colors ${
                  isActive
                    ? "border-brand-red text-brand-dark"
                    : "border-gray-200 text-gray-400 hover:border-gray-300"
                }`}
              >
                <s.icon size={28} className={isActive ? "text-brand-dark" : "text-gray-400"} />
                <span className="text-sm font-medium">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-brand-dark text-center mb-6">Tell us When and Where You Need It?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Select Your Location"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-600 outline-none focus:border-brand-red"
            />
            <MapPin size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="date"
              placeholder="From"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-600 outline-none focus:border-brand-red"
            />
          </div>
          <div className="relative">
            <input
              type="date"
              placeholder="To"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-600 outline-none focus:border-brand-red"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-brand-dark text-center mb-8">Select Your Pet Size</h3>

        <div className="relative px-1">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>0 lbs</span>
            <span>15 lbs</span>
            <span>40 lbs</span>
            <span>100 lbs</span>
            <span>101+ lbs</span>
          </div>

          <div className="relative h-1 bg-gray-200 rounded-full">
            <div
              className="absolute h-1 bg-brand-red rounded-full"
              style={{ width: `${sizePercent}%` }}
            />
            <input
              type="range"
              min={0}
              max={101}
              value={petSize}
              onChange={(e) => setPetSize(Number(e.target.value))}
              className="absolute inset-0 w-full h-1 appearance-none bg-transparent cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-brand-red
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-white
                [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-brand-red
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-white"
            />
          </div>

          <div className="flex justify-between text-sm font-medium text-brand-dark mt-4">
            {sizeMarks.map((m) => (
              <span key={m.label}>{m.label}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button type="button" className="bg-brand-red text-white px-10 py-3.5 rounded-md font-semibold text-sm shadow-sm hover:bg-[#e64444] transition-colors">
          Find Your Pet Guardian Now!
        </button>
      </div>
    </div>
  );
}