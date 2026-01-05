import { services } from "@/data/portfolioData";
import { Box, Unplug, Lightbulb, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Box,
  Unplug,
  Lightbulb,
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="w-2 h-10 bg-accent rounded-full" />
          How can I help:
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-accent" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
