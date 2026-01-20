import Layout from "@/components/layout/Layout";

interface TimelineItem {
  title: string;
  date: string;
  location: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "Game Programmer, AeonVR",
    date: "2025",
    location: "Curitiba, Paraná, Brazil",
    description:
      "My first experience as an Unreal-focused developer - Where I developed immersive advertising and industrial experiences such as Industrial Training Platform and the Guided VR Tour.",
  },
  {
    title: "Game Programmer, Compass.UOL",
    date: "2021 - 2024",
    location: "Remote",
    description:
      "Where I started my professional career, as an Unity-focused developer. Adventured through the creation, design and development of advertising and other B2B projects - Such as Arezzo's Web-AR Tour, Digital 3D Assistant and CarnaUOL Metaverse. Here I explored augmented reality as my main focus and even had a brief experience in other technologies such as AFrame (JS-Based Web augmented reality) and UEFN (Unreal Engine for Fortnite)",
  },
  {
    title: "Student, Pontifícia Universidade do Paraná (PUC-PR)",
    date: "2018 - 2024",
    location: "Curitiba, PR",
    description:
      "Associate Degree in Digital Game. Here I developed personal and academical projects as educational and entertainment tools, such as Code: Conduit, Tartaruga: Sea's Essence, Algorena and Storming Castle Frankenstein",
  },
];

const AboutMe = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
            About me
          </h1>

          {/* Presentation Text */}
          <div className="max-w-3xl mb-16 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
              {`Hi there 👋
I'm a Game Programmer with a degree in Digital Games, passionate about building interactive experiences that combine solid gameplay, meaningful player interaction, and believable simulations. Most of my professional experience comes from advertising games and industrial training applications, where games are used as tools for communication, learning, and engagement.

I'm especially drawn to projects that focus on action, atmosphere, and systems that provoke reflection in the player. Games like Devil May Cry and Silent Hill shaped my appreciation for expressive combat, pacing, and emotional experience, while Brazilian titles such as Pixel Ripped, Horizon Chase, and Heavy Metal Machines reinforced my interest in innovation, gamified education, and the growth of the Brazilian game industry. Alongside professional work, I also develop personal and academic projects across different genres, always driven by curiosity and a desire to explore how gameplay and systems design can create meaningful experiences.`}
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in">
              Experience & Education
            </h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-12 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-background" />

                    {/* Content */}
                    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.date} | {item.location}
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;
