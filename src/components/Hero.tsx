import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dome.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center lg:text-left">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Turn Your Land Into Passive Income with 
            <span className="block text-accent-foreground bg-accent/90 px-4 py-2 rounded-lg mt-2 inline-block">
              Eco-Luxury Domes
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            We build, manage, and host glamping stays on your land — you earn 
            <span className="font-semibold text-accent-foreground bg-accent/90 px-2 py-1 rounded mx-1">
              15–25% of all bookings
            </span>
            with no effort or investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-luxury"
              onClick={() => window.open('https://calendly.com/staywilddomes', '_blank')}
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground px-8 py-4 text-lg bg-slate-800 hover:bg-slate-700" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;