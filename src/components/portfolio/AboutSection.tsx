import { aboutMe, personalInfo } from "@/data/portfolioData";

const AboutSection = () => {
  return (
    <section id="about-me" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
            <span className="w-2 h-10 bg-accent rounded-full" />
            {aboutMe.title}
          </h2>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {aboutMe.content}{" "}
              <span className="text-5xl md:text-6xl font-bold text-success align-middle">
                {personalInfo.yearsExperience}
              </span>{" "}
              {aboutMe.experienceText}{" "}
              <span className="text-primary font-semibold">{aboutMe.highlight}</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutMe.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
