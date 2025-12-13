import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online store with seamless checkout experience and responsive design.",
    tag: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Brand Promo Video",
    description: "High-energy promotional video for a tech startup launch campaign.",
    tag: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio for a creative professional showcasing their work.",
    tag: "Web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
  },
  {
    title: "YouTube Content Series",
    description: "Engaging video edits for a growing YouTube channel with 100K+ subscribers.",
    tag: "Video",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Landing Page",
    description: "Conversion-optimized landing page with animations and modern aesthetics.",
    tag: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Social Media Reels",
    description: "Trendy short-form video content for Instagram and TikTok campaigns.",
    tag: "Video",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A selection of work that showcases my skills and passion for digital creation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.tag === "Web" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-foreground/90 text-background"
                }`}>
                  {project.tag}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
