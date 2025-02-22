import { FaJava, FaPython, FaReact, FaNodeJs, FaAngular, FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Java",
    icon: <FaJava className="text-6xl text-orange-500" />,
    description: "Proficient in Java for backend development, Spring Boot, and REST API design.",
  },
  {
    name: "Python",
    icon: <FaPython className="text-6xl text-blue-400" />,
    description: "Experienced in AI/ML, Django, and automation scripting with Python.",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-6xl text-blue-500" />,
    description: "Skilled in building modern UI/UX with React, Next.js, and state management.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
    description: "Backend development expertise using Express.js and MongoDB.",
  },
  {
    name: "Angular",
    icon: <FaAngular className="text-6xl text-red-500" />,
    description: "Familiar with Angular framework and component-based architecture.",
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-6xl text-blue-600" />,
    description: "Containerization and DevOps knowledge using Docker and Kubernetes.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="p-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-teal-400 text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-6 rounded-2xl shadow-lg bg-gray-800 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex justify-center">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-center mt-4">{skill.name}</h3>

            {/* Hover Effect for Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-950 bg-opacity-90 text-white p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-center text-sm">{skill.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
