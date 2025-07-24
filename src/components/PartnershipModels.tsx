import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, DollarSign, Handshake } from "lucide-react";

const PartnershipModels = () => {
  const models = [
    {
      icon: Percent,
      title: "Revenue Share",
      percentage: "15–25%",
      description: "Earn a percentage of all booking revenue with no upfront costs or investment required.",
      features: ["No upfront investment", "Percentage of all bookings", "Higher earning potential", "Performance-based income"],
      popular: true
    },
    {
      icon: DollarSign,
      title: "Flat Lease",
      percentage: "$500–$2,000",
      description: "Receive guaranteed monthly payments regardless of booking performance.",
      features: ["Predictable monthly income", "No performance risk", "Fixed payment schedule", "Simple agreement"],
      popular: false
    },
    {
      icon: Handshake,
      title: "Joint Venture",
      percentage: "50/50",
      description: "Co-invest in the dome and split profits for maximum returns on prime locations.",
      features: ["Shared investment costs", "Higher profit potential", "Equity partnership", "Premium locations only"],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Partnership Models
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Partnership Style
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible partnership options designed to match your goals and property potential
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Card 
              key={index} 
              className={`shadow-soft hover:shadow-luxury transition-shadow duration-300 relative ${
                model.popular ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {model.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <model.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title & Percentage */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {model.title}
                </h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {model.percentage}
                  {model.title === "Flat Lease" ? "/month" : ""}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {model.description}
                </p>

                {/* Features */}
                <ul className="text-sm text-muted-foreground space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-luxury max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Not Sure Which Model Is Right for You?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Our team will assess your property and recommend the best partnership model 
              based on location, size, and market potential.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;