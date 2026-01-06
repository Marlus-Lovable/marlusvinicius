import Layout from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { personalInfo } from "@/data/portfolioData";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4">
        <div className="animate-fade-in flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 scale-110" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/30">
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-xl space-y-4 text-foreground/90">
            <p className="text-xl md:text-2xl">Hi there 👋</p>
            <p className="text-base md:text-lg leading-relaxed">
              Here, you will find a selection of projects I have worked on, many of which originated from 4+ years of experience as game programmer and from personal and academical projects.
            </p>
            <p className="text-base md:text-lg">
              Also, you can check a bit more about me or check my contacts using this website 🙂
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
