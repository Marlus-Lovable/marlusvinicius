import Layout from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { personalInfo } from "@/data/portfolioData";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-6">
        <div className="animate-fade-in flex flex-col items-center text-center max-w-2xl">
          {/* Profile Photo */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 scale-110" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30">
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Welcome Text */}
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Hi there 👋
            <br /><br />
            Here, you will find a selection of projects I have worked on, many of which originated from 4+ years of experience as game programmer and from personal and academical projects.
            <br /><br />
            Also, you can check a bit more about me or check my contacts using this website 🙂
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
