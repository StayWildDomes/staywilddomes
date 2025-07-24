import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{
    name: "How It Works",
    href: "#how-it-works"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "FAQ",
    href: "#faq"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">Stay Wild Domes</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200">
                {item.name}
              </a>)}
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://calendly.com/staywilddomes', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button 
                className="bg-primary hover:bg-primary/90 w-full mt-4"
                onClick={() => window.open('https://calendly.com/staywilddomes', '_blank')}
              >
                Book a Call
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;