import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Calendar, ArrowRight } from "lucide-react";

const PopupCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds if it hasn't been shown yet
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/staywilddomes', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300">
      <Card className="relative max-w-md mx-4 shadow-luxury animate-in zoom-in-95 duration-300">
        <CardContent className="p-8 text-center">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Icon */}
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-8 w-8 text-primary" />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Turn Your Land Into Income?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Join 50+ Canadian landowners already earning $2,000-8,000 monthly with StayWild Domes. 
            Book a free 15-minute consultation to get started.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleBookCall}
              className="bg-primary hover:bg-primary/90 flex-1"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="flex-1"
            >
              Maybe Later
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="text-xs text-muted-foreground mt-4">
            ✓ No upfront investment required • ✓ We handle everything
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopupCTA;