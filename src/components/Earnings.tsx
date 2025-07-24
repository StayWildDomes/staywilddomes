import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

const Earnings = () => {
  const [nightlyRate, setNightlyRate] = useState(325);
  const [occupancyRate, setOccupancyRate] = useState(60);
  const [yourCutPercentage, setYourCutPercentage] = useState(20);

  // Calculate derived values
  const grossRevenue = Math.round((nightlyRate * 30 * occupancyRate) / 100);
  const yourCut = Math.round((grossRevenue * yourCutPercentage) / 100);
  const annualIncome = yourCut * 12;

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
                    <div className="py-3 border-b border-border">
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor="nightly-rate" className="text-muted-foreground">Nightly Rate:</Label>
                        <span className="font-semibold text-foreground">${nightlyRate}</span>
                      </div>
                      <Input
                        id="nightly-rate"
                        type="number"
                        value={nightlyRate}
                        onChange={(e) => setNightlyRate(Number(e.target.value))}
                        className="mt-1"
                        min="0"
                        step="25"
                      />
                    </div>
                    
                    <div className="py-3 border-b border-border">
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor="occupancy-rate" className="text-muted-foreground">Occupancy Rate:</Label>
                        <span className="font-semibold text-foreground">~{occupancyRate}%</span>
                      </div>
                      <Input
                        id="occupancy-rate"
                        type="number"
                        value={occupancyRate}
                        onChange={(e) => setOccupancyRate(Number(e.target.value))}
                        className="mt-1"
                        min="0"
                        max="100"
                        step="5"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Gross Revenue:</span>
                      <span className="font-semibold text-foreground">${grossRevenue.toLocaleString()}/month</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-4 bg-primary/10 rounded-lg px-4">
                      <span className="font-semibold text-foreground">Your Cut ({yourCutPercentage}%):</span>
                      <span className="text-2xl font-bold text-primary">${yourCut.toLocaleString()}/month</span>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-sm text-muted-foreground">Annual Income</div>
                      <div className="text-3xl font-bold text-primary">~${annualIncome.toLocaleString()}/year</div>
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
                      potentially increasing your monthly earnings significantly
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
            <p className="text-sm text-muted-foreground">
              Use the calculator above to estimate potential earnings for your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earnings;