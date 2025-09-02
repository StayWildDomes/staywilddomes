import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Earnings from "@/components/Earnings";
import PartnershipModels from "@/components/PartnershipModels";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PopupCTA from "@/components/PopupCTA";

const Index = () => { 
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Earnings />
      <PartnershipModels />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <Footer />
      <PopupCTA />
    </div>
  );
};

export default Index;
