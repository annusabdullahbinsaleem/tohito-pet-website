import { Search, CreditCard, Sofa } from "lucide-react";

const steps = [
  { icon: Search, title: "Search", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: CreditCard, title: "Book & pay", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: Sofa, title: "Relax", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">How It Works</h2>
      <div className="w-16 h-1 bg-brand-red mx-auto my-6 rounded-full" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 max-w-4xl mx-auto mt-12">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-center">
            <div className="flex flex-col items-center max-w-55">
              <step.icon size={32} className="text-brand-red mb-3" />
              <h3 className="font-semibold text-brand-dark mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-16 border-t-2 border-dashed border-gray-300 mx-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}