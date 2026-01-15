import { Code, Video, Palette, Layers, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Clean, responsive, and fast websites that work beautifully on every device.",
    features: ["React & Next.js", "Tailwind CSS", "SEO Optimized"]
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "YouTube, reels, shorts, promos, and social media edits that captivate audiences.",
    features: ["Motion Graphics", "Color Grading", "Sound Design"]
  },
  {
    icon: Palette,
    title: "UI / Visual Design",
    description: "Minimal designs focused on clarity, impact, and exceptional user experience.",
    features: ["Figma Design", "Prototyping", "Design Systems"]
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Cohesive visual identity that makes your brand memorable and recognizable.",
    features: ["Logo Design", "Style Guides", "Assets Creation"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Experiences optimized for mobile users who make up most of today's traffic.",
    features: ["Responsive", "Touch-Friendly", "Fast Loading"]
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast websites and optimized videos for maximum engagement.",
    features: ["Core Web Vitals", "Optimization", "Analytics"]
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 -z-10" />
      
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services tailored for <span className="text-primary">your success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your brand thrive in the modern landscape.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
