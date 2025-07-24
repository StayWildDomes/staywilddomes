import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            About StayWild Domes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Helping Canadian Landowners Unlock Passive Income
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by passionate entrepreneurs helping Canadian landowners unlock passive income 
            through sustainable eco-luxury glamping experiences with geodesic domes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Story */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe every piece of beautiful land has the potential to generate 
              meaningful income while preserving its natural beauty. Our mission is to 
              make eco-glamping more accessible and profitable for landowners, creating 
              a win-win for property owners and travelers seeking authentic experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By handling all aspects of the business — from construction and permits 
              to guest management and maintenance — we remove every barrier for landowners 
              to participate in the booming eco-tourism market.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="space-y-4">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Zero Risk Partnership</h4>
                    <p className="text-muted-foreground text-sm">
                      We invest everything upfront, you earn from day one
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Full-Service Management</h4>
                    <p className="text-muted-foreground text-sm">
                      From bookings to cleaning, we handle everything
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Growing Market</h4>
                    <p className="text-muted-foreground text-sm">
                      Eco-tourism demand increasing 20% annually
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;