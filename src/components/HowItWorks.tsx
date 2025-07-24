import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Hammer, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Site Visit & Feasibility Check",
      description: "Our team conducts a comprehensive assessment of your property to ensure it's perfect for eco-luxury glamping. We handle all site planning and zoning verification.",
      details: ["Site visit and evaluation", "Permits and zoning research", "Simple land-use agreement"]
    },
    {
      icon: Hammer,
      title: "We Build the Dome (2–3 weeks)",
      description: "We construct your eco-luxury dome with deck, bathroom, and furnishings. Off-grid or utility connections included based on your property setup.",
      details: ["Dome construction and installation", "Photography and Airbnb listing", "Guest management setup"]
    },
    {
      icon: DollarSign,
      title: "You Start Earning Monthly Income",
      description: "Earn 15–25% of all bookings with transparent monthly reporting. Watch your land generate consistent income while we handle all the work.",
      details: ["Transparent revenue sharing", "Monthly automated payments", "Detailed performance reports"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            How It Works
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Four Simple Steps to Passive Income
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've streamlined the entire process to make it as easy as possible 
            for Canadian landowners to start earning from their property.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative shadow-soft hover:shadow-luxury transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="text-sm text-muted-foreground space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Turn Your Land into Income?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Join Canadian landowners already earning thousands monthly with StayWild Domes
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
              Start Your Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;