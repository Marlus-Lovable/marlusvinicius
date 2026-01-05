import { skills } from "@/data/portfolioData";
import { Gamepad2, Code2, GitBranch, Glasses, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Gamepad2,
  Code2,
  GitBranch,
  Glasses,
};

const SkillsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="w-2 h-10 bg-accent rounded-full" />
          Main Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <div
                key={skill.id}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
