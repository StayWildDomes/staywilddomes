import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">StayWild Domes</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Transforming Canadian land into profitable eco-luxury destinations. 
              We handle everything, you earn 15-25% of all bookings.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:info@staywilddomes.ca"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/staywilddomes.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="mailto:info@staywilddomes.ca" className="hover:text-primary-foreground transition-colors">
                  info@staywilddomes.ca
                </a>
              </li>
              <li>
                <a href="https://calendly.com/staywilddomes" className="hover:text-primary-foreground transition-colors">
                  Schedule a Call
                </a>
              </li>
              <li>
                <a href="https://instagram.com/staywilddomes.ca" className="hover:text-primary-foreground transition-colors">
                  @staywilddomes.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 StayWild Domes. All rights reserved. Built for Canadian landowners who want to maximize their property's potential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;