// Centralized data file for easy future database integration
import industrialTrainingImage from "@/assets/projects/industrial-training-platform.jpg";
import guidedVrTourImage from "@/assets/projects/guided-vr-tour.jpg";

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
];

export const projectDetails: Record<string, {
  youtubeEmbed: string;
  extendedDescription: string;
  technicalDetails: { label: string; value: string }[];
  roleIntro: string;
  rolePoints: string[];
  outcomes: string[];
}> = {
  "industrial-training-platform": {
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
