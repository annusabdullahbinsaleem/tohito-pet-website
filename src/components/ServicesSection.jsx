import ServiceCard from "./ServiceCard";
import { PawPrint, Home, Coffee, Footprints, Award, DoorOpen } from "lucide-react";

const services = [
  { icon: Coffee, title: "Boarding", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: Home, title: "House Sitting", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: PawPrint, title: "Doggy Day Care", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: Footprints, title: "Dog Walking", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: Award, title: "Dog Training", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: DoorOpen, title: "Drop-In Visits", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
        Holistic Solutions for the Well-Being <br className="hidden md:block" />
        of Dogs and Cats.
      </h2>
      <div className="w-16 h-1 bg-brand-red mx-auto my-6 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>

      <button type="button" className="mt-12 bg-brand-red text-white px-8 py-3 rounded-md font-semibold text-sm shadow-sm hover:bg-[#e64444] transition-colors">
        Learn More About Tohito
      </button>
    </section>
  );
}