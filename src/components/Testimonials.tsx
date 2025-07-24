import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Napa Valley, CA",
      property: "25-acre Vineyard",
      quote: "NorthDome transformed our unused hillside into a $4,000/month income stream. The process was seamless, and our guests love the luxury dome experience among the vines.",
      revenue: "$4,000/month",
      rating: 5
    },
    {
      name: "James Thompson", 
      location: "Blue Ridge Mountains, VA",
      property: "Historic Farm",
      quote: "I was skeptical about passive income promises, but NorthDome delivered. Six months in and we're consistently booked. They truly handle everything while we collect our share.",
      revenue: "$3,200/month",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      location: "Sonoma County, CA", 
      property: "Organic Farm & Retreat",
      quote: "The dome perfectly complements our farm-to-table retreat. Guests rave about the eco-luxury experience, and it's added a whole new revenue stream to our agritourism business.",
      revenue: "$5,500/month",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Partners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real landowners sharing their experience with NorthDome partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-luxury transition-shadow duration-300 relative">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Revenue Highlight */}
                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                  <div className="text-xl font-bold text-primary">{testimonial.revenue}</div>
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.property}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Active Partnerships</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">$2.1M</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Partner Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;