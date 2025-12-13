import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for simple projects",
    features: [
      "One-page website or basic video edit",
      "Clean, professional design",
      "Fast delivery",
      "1 revision round",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    description: "Most popular choice",
    features: [
      "Multi-section website or advanced video edit",
      "Animations & transitions",
      "Mobile-responsive design",
      "3 revision rounds",
    ],
    highlighted: true,
  },
  {
    name: "Custom",
    description: "For larger projects",
    features: [
      "Full website or long-term video editing",
      "Custom features & effects",
      "Priority support",
      "Tailored pricing",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose a plan that fits your project. All packages include quality work and professional communication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.highlighted ? "border-primary border-2 shadow-elevated" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4 pt-8">
                <CardTitle className="text-xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.highlighted ? "hero" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Pricing may vary based on project requirements. Let's discuss your needs!
        </p>
      </div>
    </section>
  );
};

export default Pricing;
