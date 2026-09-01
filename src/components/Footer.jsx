import logo from "../assets/Logo.png";
import facebookIcon from "../assets/Facebook.svg";
import twitterIcon from "../assets/Twitter.svg";
import linkedinIcon from "../assets/LinkedIn.svg";

const columns = [
  { title: "Learn More", links: ["Our Blog", "Our Guarantee", "Safety"] },
  { title: "About Tohito", links: ["About Us", "Contact Us", "Accessibility", "Privacy Statement", "Cookie Policy", "Terms of Service"] },
  { title: "Need Help?", links: ["Help Center"] },
];

const socialLinks = [
  { name: "Facebook", icon: facebookIcon },
  { name: "Twitter", icon: twitterIcon },
  { name: "LinkedIn", icon: linkedinIcon },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-6 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <img src={logo} alt="Tohito" className="h-10 w-auto mb-3" />
          <p className="text-sm text-gray-500 max-w-xs">
            Nemo enim ipsum voluptas quia voluptas sit aspernatur odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="font-semibold text-brand-dark mb-3 text-sm">{col.title}</h5>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-brand-red">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="font-semibold text-brand-dark mb-3 text-sm">Get In Touch With Us</h5>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a key={social.name} href="#" aria-label={social.name}>
                <img src={social.icon} alt="" className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-12">
        © 2023 TOHITO. All Rights Reserved.
      </p>
    </footer>
  );
}