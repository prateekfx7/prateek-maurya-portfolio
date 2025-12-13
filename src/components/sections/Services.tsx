import { Code, Video, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Clean, responsive, and fast websites that work beautifully on every device.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "YouTube, reels, shorts, promos, and social media edits that captivate audiences.",
  },
  {
    icon: Palette,
    title: "UI / Visual Design",
    description: "Minimal designs focused on clarity, impact, and exceptional user experience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Services tailored to help your brand thrive in the digital space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
