

const About = () => {
  return (
    <section id="about" className="p-12 bg-gray-900 text-white flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-teal-400 shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Anime Warrior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-teal-400 mt-6 border-b-4 border-teal-500 pb-2">
        About Me
      </h2>

      {/* Description */}
      <p className="text-lg mt-6 max-w-3xl leading-relaxed text-gray-300">
        Hi, I&apos;m <span className="text-teal-300 font-semibold">Tushar</span>, a passionate **Software Developer** specializing in **Java, Python, and React**.  
        I love building **scalable applications** with smooth **UI/UX, AI integration, and innovative technology**.
      </p>

      <p className="text-lg mt-4 max-w-3xl leading-relaxed text-gray-300">
        With experience in **full-stack development**, I thrive on **solving problems, creating impactful digital solutions, and exploring emerging technologies**.
      </p>

      <p className="text-lg mt-4 max-w-3xl leading-relaxed text-gray-300">
        When Iam not coding, I enjoy **mentoring students, brainstorming startup ideas, and pushing creative boundaries**.
      </p>
    </section>
  );
};

export default About;
