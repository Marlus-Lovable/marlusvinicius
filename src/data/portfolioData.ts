// Centralized data file for easy future database integration
import industrialTrainingImage from "@/assets/projects/industrial-training-platform.jpg";

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
    description: "Virtual system that simulates industrial assembly processes, enabling companies to create customized, immersive training experiences using their own 3D models.",
    tags: ["Unreal", "Blueprints", "Windows", "Dynamic Runtime Mesh", "Assimp", "Industrial", "Training"],
    image: industrialTrainingImage,
    videoUrl: null,
    detailsUrl: "#",
  },
  {
    id: 2,
    title: "MOBILE PUZZLE GAME",
    description: "Creation of an engaging puzzle game with innovative mechanics for mobile platforms, featuring intuitive touch controls and progressive difficulty.",
    tags: ["Unity", "C#", "Mobile", "Android"],
    image: null,
    videoUrl: null,
    detailsUrl: "#",
  },
  {
    id: 3,
    title: "ADVERTISING AR EXPERIENCE",
    description: "Development of an augmented reality marketing campaign with marker tracking and 3D content integration for a major brand launch.",
    tags: ["Unity", "Realidade Virtual", "C#", "WebGL"],
    image: null,
    videoUrl: null,
    detailsUrl: "#",
  },
  {
    id: 4,
    title: "MULTIPLAYER ACTION GAME",
    description: "Development of a real-time multiplayer combat system with responsive netcode, server architecture design and client prediction.",
    tags: ["Unreal", "Blueprint", "Multiplayer", "Windows"],
    image: null,
    videoUrl: null,
    detailsUrl: "#",
  },
];

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
