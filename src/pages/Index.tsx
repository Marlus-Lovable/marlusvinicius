import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
