import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { projects, projectDetails } from "@/data/portfolioData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const project = projects.find(p => p.slug === slug);
  const details = slug ? projectDetails[slug] : undefined;
  
  if (!project || !details) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* YouTube Video */}
          <div className="mb-10">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
              <iframe
                className="w-full h-full"
                src={details.youtubeEmbed}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Extended Description */}
          <div className="mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {details.extendedDescription}
            </p>
          </div>

          {/* Technical Details */}
          <div className="mb-10 p-6 bg-card rounded-xl border border-border">
            <ul className="text-sm text-muted-foreground space-y-2">
              {details.technicalDetails.map((detail, index) => (
                <li key={index}>
                  <span className="font-medium text-foreground">{detail.label}:</span>{" "}
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Contributions & Challenges */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contributions & Challenges</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {details.roleIntro}
            </p>
            <ul className="space-y-4">
              {details.rolePoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Sections */}
          {details.additionalSections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              <ul className="space-y-4">
                {section.points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Outcomes */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Outcomes</h2>
            <ul className="space-y-4">
              {details.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Video */}
          {details.additionalVideoEmbed && (
            <div className="mb-10">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                <iframe
                  className="w-full h-full"
                  src={details.additionalVideoEmbed}
                  title={`${project.title} - Additional Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
