import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20 relative overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Available for new projects
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Web & Video
              <br />
              <span className="text-primary">Solutions</span> that
              <br />
              help brands
              <br />
              <span className="relative inline-block">
                stand out
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 12" 
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                  <motion.path 
                    d="M2 8C50 2 150 2 198 8" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  />
                </motion.svg>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              I'm Prateek Maurya — helping creators, startups, and businesses turn ideas into clean, high-impact digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button variant="hero" size="lg" asChild className="group">
                <a href="#contact">
                  Work With Me
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="group">
                <a href="#projects">
                  <Play className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Right side - Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Main card */}
              <motion.div 
                className="bg-card rounded-3xl p-6 shadow-card border border-border/50 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Web development workspace"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Currently working on new projects</span>
                </div>
              </motion.div>
              
              {/* Floating cards */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-elevated border border-border/50"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">50+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Projects</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
