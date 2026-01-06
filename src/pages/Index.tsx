import Layout from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { personalInfo } from "@/data/portfolioData";

const Index = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30">
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
