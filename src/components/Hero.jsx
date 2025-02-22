import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center relative bg-black overflow-hidden px-6 md:px-12"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-90"></div>

      {/* Floating Blur Effect */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[80vw] md:w-[600px] h-[80vw] md:h-[600px] bg-teal-500 opacity-20 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Hi, Iam Tushar Yerne
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-4 max-w-lg md:max-w-2xl mx-auto">
          Building modern, intelligent applications using{" "}
          <span className="text-teal-400">Java</span>,{" "}
          <span className="text-blue-400">Python</span>, and{" "}
          <span className="text-purple-400">React.js</span>.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            href="#projects"
            className="px-5 sm:px-6 py-3 bg-teal-500 text-black font-semibold rounded-xl shadow-lg hover:bg-teal-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-5 sm:px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
