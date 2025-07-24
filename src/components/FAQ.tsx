import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "How much land do I need?",
      answer: "We typically require a minimum of 1-2 acres of accessible land with basic utility access. The exact requirements depend on your local zoning laws and the specific dome model. Our team will evaluate your property during the initial consultation to determine feasibility."
    },
    {
      question: "What's the revenue potential?",
      answer: "Revenue varies by location, seasonality, and local demand, but our partners typically see $150-400 per night in bookings. With average occupancy rates of 60-80%, many landowners earn $2,000-8,000 monthly. You receive 20% of all revenue generated."
    },
    {
      question: "Do I need permits?",
      answer: "We handle all permits, zoning applications, and regulatory compliance on your behalf. Our experienced team navigates local building codes, environmental regulations, and tourism licensing requirements so you don't have to worry about the paperwork."
    },
    {
      question: "Is this really passive?",
      answer: "Absolutely. Once installed, you have zero operational responsibilities. We manage all bookings, guest communications, cleaning, maintenance, marketing, and customer service. Your only job is to cash the monthly checks."
    },
    {
      question: "What if the dome gets damaged?",
      answer: "We carry comprehensive insurance coverage and handle all maintenance and repairs at no cost to you. Our domes are built to withstand harsh weather conditions and we perform regular inspections to ensure everything stays in perfect condition."
    },
    {
      question: "How long is the partnership agreement?",
      answer: "Our standard partnership is a 10-year agreement with options to renew. This gives both parties security and allows time to see significant returns on investment. The dome becomes a permanent asset that enhances your property value."
    },
    {
      question: "Can I visit the dome or stay in it myself?",
      answer: "Yes! As the landowner, you have access to the dome during designated owner periods throughout the year. We'll coordinate with you to block out dates when you'd like to use the space for personal enjoyment or to host family and friends."
    },
    {
      question: "What do you provide vs. what do I provide?",
      answer: "We provide: Dome, deck, bathroom, furnishings, off-grid or utility connections, photography, Airbnb listing, guest management, insurance, cleaning, and full support. You provide: 0.5–2 acres of scenic land, short-term rental allowance, and permission to host and share revenue. Optional: utility access."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            FAQ
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about partnering with StayWild Domes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
            onClick={() => window.open('https://calendly.com/staywilddomes', '_blank')}
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;