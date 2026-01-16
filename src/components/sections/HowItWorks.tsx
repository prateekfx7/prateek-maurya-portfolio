import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your project, goals, and vision. I learn about your brand and what you want to achieve.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "I create a detailed plan and timeline. You'll know exactly what to expect and when.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop"
  },
  {
    number: "03",
    icon: Palette,
    title: "Design & Build",
    description: "The magic happens. I craft your website or edit your video with precision and creativity.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Your project goes live. I provide support and make sure everything runs smoothly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-muted/30">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="container max-w-6xl mx-auto" ref={containerRef}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            How we <span className="text-primary italic">work together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process designed to bring your vision to life efficiently.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block">
            <motion.div 
              className="w-full bg-primary origin-top"
              style={{ height: progressHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Center dot */}
                <motion.div 
                  className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />

                {/* Image */}
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-card border border-border/50 bg-card">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
