import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Instagram } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium bg-accent">
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Schedule a free 15-minute consultation to learn how StayWild Domes can 
            transform your Canadian land into a profitable eco-luxury destination.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calendly Embed */}
          <Card className="shadow-luxury">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-primary mr-2" />
                Book Your Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free call to discuss your property and learn about the partnership process.
              </p>
              
              {/* Calendly Embed Placeholder - Replace with actual Calendly URL */}
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <Button className="bg-primary hover:bg-primary/90" onClick={() => window.open('https://calendly.com/staywilddomes', '_blank')}>
                  Schedule Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-luxury">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <a href="mailto:info@staywilddomes.ca" className="text-muted-foreground hover:text-primary transition-colors">
                      info@staywilddomes.ca
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-luxury">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Follow Us</h4>
                    <a href="https://instagram.com/staywilddomes.ca" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      @staywilddomes.ca
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-luxury bg-accent/10">
              <CardContent className="p-6 bg-slate-50">
                <h4 className="font-semibold text-foreground mb-3">
                  What Happens Next?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    15-minute intro call to discuss your property
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Site evaluation and feasibility assessment
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Custom partnership proposal and contract options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Join 50+ Landowners Already Earning
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Don't let your beautiful land sit idle. Start generating passive income today.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4"
              onClick={() => window.open('https://calendly.com/staywilddomes', '_blank')}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;