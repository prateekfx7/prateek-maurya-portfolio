import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      "Priority support",
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
      "Unlimited revisions",
      "Dedicated communication",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, <span className="text-primary">transparent</span> pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your project. All packages include quality work and professional communication.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card 
                className={`relative h-full transition-all duration-500 hover:shadow-elevated ${
                  plan.highlighted 
                    ? "border-primary border-2 scale-105 shadow-elevated bg-card" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </motion.div>
                )}
                <CardHeader className="pb-4 pt-10">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.highlighted ? "hero" : "outline"} 
                    className="w-full group"
                    asChild
                  >
                    <a href="#contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="text-center text-sm text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          * Pricing may vary based on project requirements. Let's discuss your needs!
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
