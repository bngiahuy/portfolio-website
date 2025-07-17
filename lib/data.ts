import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { TbDatabasePlus } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import chatbotImg from "@/public/chatbot_project.png";
import jspassGenImg from "@/public/javascript-password-generator.png";
import jwtSecretImg from "@/public/jwt-secret-generator.png";
import weatherAppImg from "@/public/weather-app.png";
import todoAppImg from "@/public/todo-app.png";
import passwordCliImg from "@/public/password-cli.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "HPT Vietnam Corporation - Full-time",
    description:
      "Specializing in web development, AI, and Robotics Process Automation (RPA).",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
  },
  {
    title: "Back End Developer",
    location: "ABC SOLUTIONS - Internship",
    description:
      "Fullstack developer building an IoT learning platform for college students using ReactJS, Node.js, and MQTT.",
    icon: React.createElement(TbDatabasePlus),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Bachelor of Computer Science",
    location: "University of Technology, VNU-HCM - Full-time",
    description:
      "Graduated with a GPA of 3.0/4.0, specializing in software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2020 - May 2025",
  }
] as const;

export const projectsData = [
  {
    title: "Chatbot HPT",
    description:
      "An AI-powered chatbot application for internal documents, includes implementations for NLP, RAG, vector databases, and more.",
    tags: ["Next.js", "MongoDB", "Python", "LangChain", "Elasticsearch", "LLMs", "Docker"],
    imageUrl: chatbotImg,
    projectUrl: "https://github.com/bngiahuy/chatbot-hpt"
  },
  {
    title: "Password Manager CLI",
    description:
      "A command-line interface (CLI) tool for securely managing passwords, featuring encryption and decryption functionalities.",
    tags: ["C/C++", "Cryptography", "Encryption", "CMake"],
    imageUrl: passwordCliImg,
    projectUrl: "https://github.com/bngiahuy/PasswordManagerCPP"
  },
  {
    title: "Javascript Password Generator",
    description:
      "A public web app for generating strong passwords with various options for customization.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: jspassGenImg,
    projectUrl: "https://bngiahuy.github.io/javascript-password-generator/"
  },
  {
    title: "JWT Secret Generator",
    description:
      "A web app for generating secure JWT secrets, ensuring robust authentication mechanisms.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: jwtSecretImg,
    projectUrl: "https://bngiahuy.github.io/jwt-secret-generator/"
  },
  {
    title: "Weather App",
    description:
      "A web application that provides real-time weather information using a public API.",
    tags: ["React", "TypeScript", "API"],
    imageUrl: weatherAppImg,
    projectUrl: "https://weather-app-e5b.pages.dev/"
  },
  {
    title: "Modern Todo List",
    description:
      "A modern todo list application built with React and TypeScript, featuring a clean UI and local storage support.",
    tags: ["React", "TypeScript", "Local Storage"],
    imageUrl: todoAppImg,
    projectUrl: "https://bngiahuy.github.io/modern-todo-list/"
  }
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "TypeScript",
  "Python3",
  "C/C++",
  "Kotlin",
  "Spring Boot",
  "Docker",
  "Kafka",
  "NLP",
  "RPA",
  "Scrum",
] as const;
