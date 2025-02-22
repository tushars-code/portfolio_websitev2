import { motion } from "framer-motion";
import { useState } from "react";

// Project Data
const projects = [
  {
    title: "MonkeyFace",
    description: "AI-powered facial recognition app that detects user emotions and maps them to animated monkey faces in real-time.",
    tech: ["Kotlin", "TensorFlow", "Firebase"],
    link: "#",
    img: "https://plus.unsplash.com/premium_photo-1739420423073-c315208d5ce5?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fulify",
    description: "Smart AI system that helps taxi and delivery drivers optimize fuel consumption by detecting idling and suggesting actions.",
    tech: ["Flutter", "Django", "Machine Learning"],
    link: "#",
    img: "https://images.unsplash.com/photo-1607092272556-1049d106896a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gvagoo",
    description: "Live travel guidance platform that connects users with expert local guides via real-time voice calls for virtual exploration.",
    tech: ["React", "Node.js", "WebRTC"],
    link: "#",
    img: "https://plus.unsplash.com/premium_photo-1683306661472-d7bd9497c82a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Legal Assistance App",
    description: "An app that provides legal guidance based on user queries, connects them to lawyers, and explains IPC sections relevant to their cases.",
    tech: ["React Native", "Django", "PostgreSQL"],
    link: "#",
    img: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "News Platform",
    description: "A multi-language news platform that provides complete, interest-based news with key highlights, videos, and world connections.",
    tech: ["React", "Firebase", "TailwindCSS"],
    link: "#",
    img: "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Weather App",
    description: "A beautiful, modern Flutter-based weather app that displays real-time weather conditions, forecasts, and location-based updates.",
    tech: ["Flutter", "OpenWeather API", "Firebase"],
    link: "#",
    img: "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-16 bg-black text-white relative">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-purple-600 to-pink-500 opacity-10 blur-2xl"></div>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-teal-400">🚀 My Projects</h2>
        <p className="text-gray-400 mt-2">Check out my AI, ML, and Web Development work.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-lg bg-gray-900 p-5 transition duration-300 ${
              hovered === index ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />

            {/* Project Details */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-teal-600 px-3 py-1 rounded-lg text-black mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <a
                href={project.link}
                className="mt-4 inline-block text-teal-400 hover:text-teal-300 font-semibold transition duration-300"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
