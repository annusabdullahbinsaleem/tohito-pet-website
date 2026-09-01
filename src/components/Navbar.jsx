import { Search, CircleHelp } from "lucide-react";
import logo from "../assets/Logo.png";
import locationIcon from "../assets/Tohito Your Place.png";
import servicesIcon from "../assets/ic-services.png";
import broadcastIcon from "../assets/ic-service-boarding.png";
import userPlusIcon from "../assets/ic-user.png";
import userIcon from "../assets/ic-user 1.png";

const navLinks = [
  { label: "Search Sitters", icon: Search, href: "#" },
  { label: "Tohito Your Place", image: locationIcon, href: "#" },
  { label: "Our Services", image: servicesIcon, href: "#" },
];

const rightLinks = [
  { label: "Sign Up", image: userPlusIcon, href: "#" },
  { label: "Sign In", image: userIcon, href: "#" },
  { label: "Help", icon: CircleHelp, href: "#" },
];

const linkClass = "flex items-center gap-2 hover:text-red-500 focus-visible:outline-none focus-visible:text-red-500 transition-colors";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#FFF5F5] shadow-xs sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Tohito" className="h-10 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 text-xs">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={linkClass}>
                {link.icon ? <link.icon size={16} /> : <img src={link.image} alt="" className="w-4 h-4 object-contain" />}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5 text-xs font-medium text-gray-700">
        <button type="button" className="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold transition-colors shadow-sm">
          <img src={broadcastIcon} alt="" className="w-4 h-4 object-contain brightness-0 invert" />
          <span>Broadcast Request</span>
        </button>

        {rightLinks.map((link) => (
          <a key={link.label} href={link.href} className={linkClass}>
            {link.icon ? <link.icon size={16} /> : <img src={link.image} alt="" className="w-4 h-4" />}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}