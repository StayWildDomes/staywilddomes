import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";

const Earnings = () => {
  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Sample Earnings
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Income Potential
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much you could earn with a StayWild Dome on your property
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-luxury mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Monthly Earnings Breakdown</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Nightly Rate:</span>
                      <span className="font-semibold text-foreground">$325</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Occupancy Rate:</span>
                      <span className="font-semibold text-foreground">~60%</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Gross Revenue:</span>
                      <span className="font-semibold text-foreground">$5,850/month</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-4 bg-primary/10 rounded-lg px-4">
                      <span className="font-semibold text-foreground">Your Cut (20%):</span>
                      <span className="text-2xl font-bold text-primary">$1,170/month</span>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-sm text-muted-foreground">Annual Income</div>
                      <div className="text-3xl font-bold text-primary">~$14,000/year</div>
                      <div className="text-sm text-muted-foreground mt-1">No effort. No investment.</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Peak Season Bonus</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Summer months often see 80%+ occupancy rates and premium pricing, 
                      increasing your monthly earnings to $1,500+
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Year-Round Income</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Our domes are designed for four-season use, ensuring 
                      consistent bookings and income throughout the year
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Zero Risk</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      No upfront investment required. We handle all costs, 
                      maintenance, and guest management
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              *Earnings vary by location, seasonality, and local demand. These figures represent typical performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earnings;