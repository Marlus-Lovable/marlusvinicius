import { projects } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { ExternalLink, Image } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="w-2 h-10 bg-accent rounded-full" />
          Check some of the projects I've worked on:
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Video Placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Image className="w-12 h-12" />
                    <span className="text-sm">Image/Video placeholder</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <ul className="space-y-3 flex-1">
                  <li className="text-sm">
                    <span className="font-semibold text-primary">Objective: </span>
                    <span className="text-muted-foreground">{project.objective}</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold text-primary">My Role: </span>
                    <span className="text-muted-foreground">{project.role}</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold text-primary">Challenge & Solution: </span>
                    <span className="text-muted-foreground">{project.challenge}</span>
                  </li>
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="mt-6 w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={project.detailsUrl} target="_blank" rel="noopener noreferrer">
                    View details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
