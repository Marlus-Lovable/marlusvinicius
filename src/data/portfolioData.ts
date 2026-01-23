// Centralized data file for easy future database integration
import industrialTrainingImage from "@/assets/projects/industrial-training-platform.jpg";
import guidedVrTourImage from "@/assets/projects/guided-vr-tour.jpg";
import tartarugaImage from "@/assets/projects/tartaruga-seas-essence.gif";
import arezzoWebarTourImage from "@/assets/projects/arezzo-webar-tour.gif";
import arezzoRef0 from "@/assets/projects/arezzo-ref-0.jpg";
import arezzoRef1 from "@/assets/projects/arezzo-ref-1.jpg";
import digital3dAssistantImage from "@/assets/projects/digital-3d-assistant.png";
import carnauolMetaverseImage from "@/assets/projects/carnauol.gif";
import codeConduitImage from "@/assets/projects/CodeConduit.png";

export const personalInfo = {
  name: "Marlus Vinicius",
  title: "Game Programmer",
  subtitle: "Developing games for entertainment, advertising and industrial training.",
  photo: "/placeholder.svg", // Replace with actual photo path
  yearsExperience: "4+",
};

export const aboutMe = {
  title: "About me:",
  content: "Welcome to my portfolio and check a bit of my",
  experienceText: "years of experience as a",
  highlight: "GAME PROGRAMMER",
  description: "I specialize in creating immersive gaming experiences, from gameplay mechanics to full project architecture. My expertise spans across multiple platforms and technologies, always focusing on clean, maintainable code that brings creative visions to life.",
};

export const skills = [
  {
    id: 1,
    icon: "Gamepad2",
    title: "Gameplay Programming",
    description: "Creating engaging game mechanics, player controllers, AI behaviors, and interactive systems that bring games to life.",
  },
  {
    id: 2,
    icon: "Code2",
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code following industry best practices and design patterns.",
  },
  {
    id: 3,
    icon: "GitBranch",
    title: "Project Management",
    description: "Leading development teams, managing timelines, and ensuring successful delivery of game projects from concept to release.",
  },
  {
    id: 4,
    icon: "Glasses",
    title: "Mixed Reality",
    description: "Developing VR/AR applications for training, simulation, and entertainment across various industries.",
  },
];

export const projects = [
  {
    id: 1,
    title: "INDUSTRIAL TRAINING PLATFORM",
    slug: "industrial-training-platform",
    description: "Virtual system that simulates industrial assembly processes, enabling companies to create customized, immersive training experiences using their own 3D models.",
    tags: ["Unreal", "Blueprints", "Windows", "Dynamic Runtime Mesh", "Assimp", "Industrial", "Training"],
    image: industrialTrainingImage,
    videoUrl: null,
  },
  {
    id: 2,
    title: "GUIDED VR TOUR",
    slug: "guided-vr-tour",
    description: "Virtual reality experience that showcases the company's optical network solutions through an interactive, cross-platform environment, enabling remote, guided tours that highlight quality, precision, and innovation.",
    tags: ["Unreal", "Multiplayer", "Cross-Platform", "Blueprints", "Virtual Reality", "Meta Quest", "Mobile", "Android", "Advertising", "Asymmetrical", "Hand Tracking", "EOS"],
    image: guidedVrTourImage,
    videoUrl: null,
  },
  {
    id: 3,
    title: "TARTARUGA: SEA'S ESSENCE",
    slug: "tartaruga-seas-essence",
    description: "Educational game for raising awareness about how environmental issues such as oil spills and improper waste disposal affect marine animals, using the turtle as a symbol.",
    tags: ["Unity", "Academic", "Educational", "Windows", "Behavior", "Flocks", "Job System", "Multithreading"],
    image: tartarugaImage,
    videoUrl: null,
  },
  {
    id: 4,
    title: "Arezzo's Web-AR Tour",
    slug: "arezzo-webar-tour",
    description: "Responsive web-based virtual tour with augmented reality integration that allows users to explore a virtual environment and interact with Arezzo's products directly through the browser.",
    tags: ["Javascript", "AFrame", "Augmented Reality", "Web", "Advertising", "Responsive"],
    image: arezzoWebarTourImage,
    videoUrl: null,
  },
  {
    id: 5,
    title: "Digital 3D Assistant",
    slug: "digital-3d-assistant",
    description: "A R&D project using a 3D avatar as a virtual assistant. It delivers an engaging, conversational digital experience through natural, voice-based interaction powered by real-time AI services.",
    tags: ["Unity", "Digital Assistant", "REST API", "WebSockets", "AI", "Advertising", "LipSync", "Speech to Text", "Text to Speech"],
    image: digital3dAssistantImage,
    videoUrl: null,
  },
  {
    id: 6,
    title: "CarnaUOL Metaverse",
    slug: "carnauol-metaverse",
    description: "A virtual Carnival experience created by Compass UOL that allows users to celebrate from home in an immersive online environment. Players explore a festive virtual village, customize avatars, interact via text and voice, and take part in brand-sponsored mini-games inspired by real Carnival activities, serving as a pilot project for new forms of social and branded digital experiences.",
    tags: ["Unity", "Advertising", "Metaverse", "Game", "Web", "Responsive"],
    image: carnauolMetaverseImage,
    videoUrl: null,
  },
  {
    id: 7,
    title: "Code: Conduit",
    slug: "code-conduit",
    description: "A sci-fi action game and final graduation project that blends fast-paced hack-and-slash combat with puzzle gameplay. Players control Luden, a robot navigating a dystopian world while shifting between a physical reality and a stylized cyber space that symbolizes hacking and self-discovery.",
    tags: ["Unity", "Game", "Academic", "Puzzle", "Hack 'n Slash", "Sci Fi"],
    image: codeConduitImage,
    videoUrl: null,
  },
];

export const projectDetails: Record<string, {
  projectDate?: string;
  youtubeEmbed?: string;
  presentationImage?: string;
  extendedDescription: string;
  technicalDetails: { label: string; value: string }[];
  externalLinks?: { label: string; url: string }[];
  roleIntro?: string;
  rolePoints?: string[];
  outcomes?: string[];
  additionalSections?: { title: string; content?: string; points?: string[]; videoEmbed?: string }[];
  additionalVideoEmbed?: string;
  referenceImages?: string[];
}> = {
  "industrial-training-platform": {
    projectDate: "2025",
    youtubeEmbed: "https://www.youtube.com/embed/Zzclm8R1dck",
    extendedDescription: "Virtual system developed at AeonVR that simulates industrial assembly processes, enabling companies to create customized, immersive training experiences using their own 3D models.",
    technicalDetails: [
      { label: "Tools", value: "Unreal" },
      { label: "Language", value: "Blueprints" },
      { label: "Platform", value: "Windows" },
      { label: "SDKs", value: "Assimp (for Runtime Mesh Editing)" },
      { label: "Feats", value: "Local Persistent Data, Modular Architecture" },
      { label: "Company", value: "AeonVR" },
      { label: "Time Range", value: "Jan 2025 - May 2025 (~5 Months)" },
    ],
    roleIntro: "I contributed from the early concept phase through to the first stable release, focusing on Blueprint-based development and system architecture, as well as assisting with technical explanations for possible clients.",
    rolePoints: [
      "Shaped the foundation of my first Unreal Engine project by helping plan a dual-user training system, enabling one role to create structured trainings and another to execute them seamlessly.",
      "Bridged real-world industrial workflows and virtual training, supporting the transformation of real assembly procedures and 3D asset data into interactive, guided training experiences.",
      "Designed with scale in mind, contributing to architectural decisions that prepared the platform for future PC-VR support, cloud-based content updates, and user behavior tracking.",
      "Improved usability for non-technical users by helping build an intuitive 3D spatial manipulation system, inspired by professional 3D editors but simplified for training creators.",
      "Enhanced user onboarding and navigation by assisting in the implementation of the platform's main menu UI.",
    ],
    outcomes: [
      "Project approved for future development, validating the solution and enabling planned feature expansions.",
      "Built a modular and reusable system, allowing easy adaptation of the platform to different client needs.",
    ],
  },
  "guided-vr-tour": {
    projectDate: "2025",
    youtubeEmbed: "https://www.youtube.com/embed/k4SoFt65-7s",
    extendedDescription: "Fibracem's Guided VR Tour is an immersive virtual reality experience developed to present Fibracem's optical network infrastructure solutions in an engaging and interactive way. The project showcases the company's products and manufacturing processes within a virtual environment designed to emphasize quality, precision, and innovation.\n\nThe experience was expanded from a single-user application into a multiplayer, cross-platform solution, enabling remote, guided tours through an asymmetric setup connecting VR headsets and tablets. By integrating real-time interaction, network synchronization, and cross-device communication, the project allows company representatives to guide clients through the virtual experience remotely. Built using technologies such as MetaXR, OpenXR, GDXR VR Template, and EOS Integration Kit, the project supports scalable, immersive presentations aligned with AeonVR's proprietary multiplayer platform.",
    technicalDetails: [
      { label: "Tools", value: "Unreal 5.5, Git, Azure DevOps" },
      { label: "Language", value: "Blueprints" },
      { label: "Platform", value: "Meta Quest 3/3S (Android) and Mobile Phone and Tablet (Android)" },
      { label: "SDKs", value: "EOS Integration Kit (for server hosting and matchmaking), MetaXR, OpenXR and GDXR VR Template" },
      { label: "Feats", value: "Hand Tracking, Asymmetrical Multiplayer, Runtime Replication, Crossplay" },
      { label: "Company", value: "AeonVR" },
      { label: "Type", value: "Outsourcing" },
      { label: "Client Company", value: "Fibracem" },
      { label: "Time Range", value: "June 2025 - October 2025 (~4 Months)" },
      { label: "Team Size", value: "5 (3 Game Programmers, 1 UI Artist and 1 Project Manager)" },
    ],
    roleIntro: "Collaborated with a multidisciplinary team at AeonVR to evolve Fibracem's Guided VR Tour from two separate VR applications—one focused on manufacturing process demonstration and another serving as a product showroom—into a single, unified immersive experience.",
    rolePoints: [
      "Contributed to transforming the original single-user setup into a multiplayer, cross-platform application.",
      "Helped design and implement an asymmetric setup connecting Meta Quest headsets and tablets, enabling remotely guided experiences.",
      "Assisted in the development of network synchronization and cross-device communication systems to support real-time interaction between company representatives and clients.",
      "Contributed to interactive systems that allowed representatives to guide users through both product showcases and manufacturing processes within one cohesive experience.",
      "Worked with MetaXR, OpenXR, GDXR VR Template, and EOS Integration Kit, addressing challenges related to cross-platform compatibility, real-time interaction, and immersive consistency across devices.",
    ],
    outcomes: [
      "Delivered a consolidated VR solution that unified product showroom and manufacturing process demonstrations into a single immersive experience.",
      "Enabled more effective remote client engagement through guided, multiplayer interactions.",
      "Supported AeonVR's strategy to expand and validate its proprietary multiplayer immersive platform.",
    ],
    additionalSections: [
      {
        title: "Process",
        points: [
          "Initially working with two programmers, used Unreal Engine's sublevel system to allow parallel work on the same map while minimizing Git conflicts, intentionally avoiding simultaneous edits to the same maps and Blueprints.",
          "Adopted an informal file \"lock\" system to prevent multiple developers from modifying the same assets at the same time.",
          "Implemented Blueprint replication directly within the actors themselves, with centralized and modularized UI acting as the main communication layer between different actors.",
          "Followed an agile development methodology, including sprints, daily stand-ups, pull requests, and structured documentation in Notion for the programming team.",
        ],
      },
    ],
    additionalVideoEmbed: "https://www.youtube.com/embed/3XaCpB1EDmU",
  },
  "tartaruga-seas-essence": {
    projectDate: "2022",
    youtubeEmbed: "https://www.youtube.com/embed/TYhidZSFd2A",
    extendedDescription: "Tartaruga: Sea's Essence is an educational, authorial academic game designed to raise awareness of how human-driven environmental issues—such as oil spills and improper waste disposal—impact marine life, using a sea turtle as its central symbol. In the game, players control a marine turtle navigating the ocean by following its natural orientation instincts, inspired by radio waves and Earth's magnetic fields, represented in gameplay as a moving white light that guides the player through the environment.\n\nBeyond navigation, the experience emphasizes survival mechanics: the player must manage hunger and oxygen levels by feeding on jellyfish and periodically surfacing to breathe. However, these actions come with risks that mirror real-world challenges faced by marine animals. Players can mistake plastic bags for jellyfish, suffer the effects of breathing in gasoline-contaminated waters, and must remain alert to natural predators such as sharks.\n\nDeveloped in Unity, the project includes custom gameplay systems and an optimized schooling (flocking) behavior implemented using the Unity Jobs System to improve performance through multithreading. Initially created to provide dynamic, aesthetic movement for fish, the flocking system was later expanded and studied as a foundation for more complex behaviors, integrating jellyfish and sharks and introducing new collective dynamics such as fleeing and predation. This evolution allowed the project to explore both technical performance and biologically inspired behavior systems while reinforcing its environmental message.",
    technicalDetails: [
      { label: "Tools", value: "Unity 2022, Git, Github" },
      { label: "Language", value: "C#" },
      { label: "Platform", value: "Windows" },
      { label: "SDKs", value: "Jobs System (For Multithreaded Optimization), Burst Compiler" },
      { label: "Feats", value: "Flocking Algorithm for NPCs, Aerial Movement" },
      { label: "Type", value: "Personal / Academical / Educational" },
      { label: "Time Range", value: "3 Months" },
      { label: "Team Size", value: "5 (2 Programmers, 1 Artist, 1 Game Designer and 1 Sound Designer)" },
    ],
    externalLinks: [
      { label: "Play the game on Itch.io", url: "https://mobius-band.itch.io/edm-tartaruga" },
      { label: "Check the source code on GitHub", url: "https://github.com/Choosecake/turtle-project/tree/marlus-tests/flocking" },
    ],
    additionalSections: [
      {
        title: "Technical Explanation",
        content: "The video below provides a deeper explanation of how the algorithm works from a theoretical perspective, how it was implemented in code, and concludes with a performance comparison between versions with and without Unity's Job System. The final section demonstrates how the Job System was used to support up to ten times more instances of the same object without impacting performance. The video is currently available in Brazilian Portuguese (PT-BR), and an English version will be released soon.",
        videoEmbed: "https://www.youtube.com/embed/DgxWGlEOO_A",
      },
    ],
  },
  "arezzo-webar-tour": {
    projectDate: "2023",
    presentationImage: arezzoWebarTourImage,
    extendedDescription: "Arezzo's WebAR Tour is a responsive, browser-based virtual tour with augmented reality integration, created to showcase products from Arezzo, a leading Brazilian brand in women's shoes and accessories. The experience allows users to navigate a virtual environment directly on the web, offering an immersive and accessible way to explore products without requiring app installation.\n\nThe project combines virtual navigation with real-world AR visualization, enabling selected products to be viewed in the user's physical space through the device camera. Built with web-based AR technologies such as A-Frame WebAR, the experience focuses on cross-device compatibility, intuitive interaction, and lightweight performance, while also supporting user behavior tracking to better understand engagement patterns.",
    technicalDetails: [
      { label: "Tools", value: "A-Frame, WebAR, GTM" },
      { label: "Language", value: "Javascript" },
      { label: "Platform", value: "Web (Cross-device)" },
      { label: "Feats", value: "Augmented Reality, Virtual Navigation, User Tracking" },
      { label: "Type", value: "Advertising / Commercial" },
      { label: "Client Company", value: "Arezzo" },
      { label: "Company", value: "Compass.UOL" },
      { label: "Team Size", value: "5 (2 Programmers, 1 Project Manager, 1 3D Artist, 1 UI Artist)" },
    ],
    externalLinks: [
      { label: "Test it here (Desktop or Mobile devices for products in AR)", url: "https://galeria50anos.arezzo.com.br/" },
    ],
    rolePoints: [
      "Worked on the implementation of the virtual environment structure, designing and positioning the enclosing space to create a convincing sense of immersion.",
      "Assisted in the integration of augmented reality features that allow products to be visualized in the user's real environment through the device camera.",
      "Implemented user interaction and usage tracking using Google Tag Manager (GTM) to support data-driven insights on visitor behavior.",
      "Faced the challenge of working with JavaScript and Web-based augmented reality in a professional context for the first time.",
      "Received technical guidance and support from the division's tech lead, enabling faster onboarding and effective problem-solving throughout the project.",
    ],
    outcomes: [
      "Completed the project with a stronger understanding of system design and architectural thinking in web-based experiences.",
      "Developed the ability to adapt logical problem-solving across different programming languages and technical contexts.",
      "Contributed to a project that served as a promotional and strategic asset for both the client and the development company, strengthening the partnership between them.",
      "Helped enable new business opportunities and follow-up demands across other areas of the company through the project's visibility and impact.",
    ],
    referenceImages: [arezzoRef0, arezzoRef1],
  },
  "digital-3d-assistant": {
    projectDate: "2024",
    youtubeEmbed: "https://www.youtube.com/embed/8hegGZn48UQ",
    extendedDescription: "Runtime Digital Assistant is a research and development project built in Unity that explores the use of a 3D avatar as a real-time virtual assistant for a banking environment. The experience focuses on natural, voice-based interaction, using a digital character to represent the assistant and create a more engaging and humanized user experience.\n\nThe system enables fluid communication by connecting speech recognition, AI-driven response generation, and speech synthesis, allowing the assistant to listen, process, and respond in real time. The avatar's speech is visually synchronized with facial animations to reinforce clarity and realism, while the overall architecture emphasizes modularity and scalability to support ongoing experimentation, iteration, and future expansion.",
    technicalDetails: [
      { label: "Tools", value: "Unity, Jira (Project Management and Version Control)" },
      { label: "SDKs", value: "Salsa LipSync Suite (For Lipsync)" },
      { label: "APIs", value: "IBM Watsonx Agent (Interpretation and response to user text), Azure Text-to-Speech, Azure Speech-to-Text" },
      { label: "Feats", value: "Scriptable Object Driven Architecture" },
      { label: "Type", value: "Advertising / Commercial" },
      { label: "Company", value: "Compass.UOL" },
      { label: "Time Range", value: "5 Months" },
      { label: "Team Size", value: "2 (1 Supervisor and 1 Programmer(me))" },
    ],
    externalLinks: [
      { label: "Read a bit more about IBM Watson Agent here", url: "https://www.ibm.com/think/topics/ai-agents-in-customer-service#257779833" },
      { label: "Text to Speech and Speech to Text", url: "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/" },
      { label: "Salsa LipSync Suite", url: "https://assetstore.unity.com/packages/tools/animation/salsa-lipsync-suite-148442?srsltid=AfmBOoqygeSw7Rn5zqAwP2bcLCCc4JZ_ievKz28c1ikdNdtCy37jA5VS" },
      { label: "Scriptable Object Architecture", url: "https://github.com/DanielEverland/ScriptableObject-Architecture" },
    ],
    rolePoints: [
      "Worked almost independently on the project, taking ownership of both technical implementation and system integration.",
      "Faced the challenge of working with REST APIs, WebSockets, and asynchronous programming for the first time, developing a solid, engine- and language-agnostic understanding of these technologies.",
      "Designed and contributed to the project's code architecture, focusing on modularity, decoupling, and long-term maintainability.",
      "Integrated multiple real-time services into a cohesive interaction flow, balancing responsiveness, stability, and scalability within the application.",
    ],
  },
  "carnauol-metaverse": {
    projectDate: "2023",
    presentationImage: carnauolMetaverseImage,
    extendedDescription: "The experience features multiple brand-sponsored universes, each offering interactive mini-games based on familiar real-world activities adapted to the virtual environment. Built on a proprietary platform developed in a short time frame, the project served as a pilot to test new formats for social interaction, gamified brand engagement, and immersive storytelling, with the goal of expanding similar experiences to other cultural celebrations in the future.\n\nFrom a technical perspective, this project marked the first time the team adopted a ScriptableObject-oriented architecture, which influenced how game logic, configurations, and behaviors were structured and reused across mini-games. This approach helped improve modularity, data-driven design, and iteration speed during development, especially in a fast-paced project with multiple interactive experiences running within the same platform.",
    technicalDetails: [
      { label: "Tools", value: "Unity, Git, Jira (Project Management and Repository)" },
      { label: "Feats", value: "Scriptable Object Driven Architecture" },
      { label: "Type", value: "Advertising" },
      { label: "Company", value: "Compass.UOL" },
      { label: "Time Range", value: "2 Months" },
      { label: "Team Size", value: "9 (1 Project Manager, 1 Tech Lead, 3 Programmers, 2 3D Modellers, 1 Concept Artist, 1 Tech Artist, 1 UI Artist)" },
    ],
    externalLinks: [
      { label: "Read more about it in this article", url: "https://www.uol.com.br/splash/especiais/conteudo-de-marca/uol-folia-no-metaverso.htm" },
      { label: "Scriptable Object Architecture", url: "https://github.com/DanielEverland/ScriptableObject-Architecture" },
    ],
  },
};

export const services = [
  {
    id: 1,
    icon: "Box",
    title: "Unity Development",
    description: "Full-cycle game development using Unity engine, from prototyping to final release.",
  },
  {
    id: 2,
    icon: "Unplug",
    title: "Unreal Development",
    description: "High-fidelity game development with Unreal Engine for PC, console, and VR platforms.",
  },
  {
    id: 3,
    icon: "Lightbulb",
    title: "Game Programming Consulting",
    description: "Technical consulting for game projects, code reviews, and architecture planning.",
  },
];

export const contact = {
  title: "Get in touch with me:",
  email: "marlus_vinicius@outlook.com",
  linkedin: "https://www.linkedin.com/in/marlus-vinicius/",
  youtube: "https://www.youtube.com/@marlusviniciusGameDev",
};
