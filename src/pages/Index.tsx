import Layout from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { personalInfo } from "@/data/portfolioData";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-6">
        <div className="animate-fade-in flex flex-col items-center text-center max-w-2xl">
          {/* Profile Photo - 50% larger */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 scale-110" />
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30">
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
            Welcome to my portfolio! Here you'll find a selection of projects where I turn ideas into interactive experiences, from games and immersive simulations to web-based AR and experimental digital tools.
            <br /><br />
            Most of the work showcased here comes from over 4 years of experience as a game programmer, along with personal and academic projects driven by curiosity and experimentation. I'm currently open to opportunities as a Game Programmer, Game Designer, or Game Tester.
            <br /><br />
            Feel free to explore the{" "}
            <Link to="/projects" className="text-primary hover:underline font-medium">
              projects
            </Link>
            , visit the page about my journey to learn a bit more about my{" "}
            <Link to="/about" className="text-primary hover:underline font-medium">
              background
            </Link>
            , and check out my{" "}
            <Link to="/links" className="text-primary hover:underline font-medium">
              contact
            </Link>
            {" "}info if you'd like to chat 🙂
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
