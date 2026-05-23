import { MapPin, Mail, Phone } from "lucide-react";
import { Section } from "./Section";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-primary flex items-center justify-center font-bold text-xl">
                S
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Saraswat Graphics
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium printing solutions for businesses, events, and brands in Vrindavan. Quality you can trust, delivery you can count on.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors font-medium text-sm">
                IG
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors font-medium text-sm">
                FB
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors font-medium text-sm">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Popular Products</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-white" />
                <span>Saraswat Printing Press, Vrindavan, Uttar Pradesh, India</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-white" />
                <span>+91 7409475219</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-white" />
                <span>contact@saraswatgraphics.com</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Location</h4>
            <div className="w-full h-32 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden relative group">
              <span className="text-sm font-medium z-10 text-white/80">View Map</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Saraswat Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
