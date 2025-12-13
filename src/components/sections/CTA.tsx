import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-16 text-center shadow-card relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have a project in mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's create something impactful together. I'm always excited to collaborate 
              on new projects and help bring creative visions to life.
            </p>
            
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hello@prateekmaurya.com">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
