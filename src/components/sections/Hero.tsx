import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Web Developer & Video Editor
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Web & Video Solutions That{" "}
          <span className="text-primary">Help Brands Stand Out.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          I'm Prateek Maurya — a Web Developer & Video Editor helping creators, startups, 
          and businesses turn ideas into clean, high-impact digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Work With Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#projects">
              <Play className="mr-2 w-5 h-5" />
              View Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
