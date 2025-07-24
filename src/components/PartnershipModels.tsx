import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, DollarSign, Handshake } from "lucide-react";
const PartnershipModels = () => {
  const models = [{
    icon: Percent,
    title: "Revenue Share",
    percentage: "15–25%",
    description: "Earn a percentage of all booking revenue with no upfront costs or investment required.",
    features: ["No upfront investment", "Percentage of all bookings", "Higher earning potential", "Performance-based income"],
    popular: true
  }, {
    icon: DollarSign,
    title: "Flat Lease",
    percentage: "$500–$2,000",
    description: "Receive guaranteed monthly payments regardless of booking performance.",
    features: ["Predictable monthly income", "No performance risk", "Fixed payment schedule", "Simple agreement"],
    popular: false
  }, {
    icon: Handshake,
    title: "Joint Venture",
    percentage: "50/50",
    description: "Co-invest in the dome and split profits for maximum returns on prime locations.",
    features: ["Shared investment costs", "Higher profit potential", "Equity partnership", "Premium locations only"],
    popular: false
  }];
  return;
};
export default PartnershipModels;