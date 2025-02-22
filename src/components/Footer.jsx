import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-6 relative overflow-hidden">
      {/* Gradient Overlay for a Stylish Look */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-800 opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-semibold">Designed & Built by <span className="text-teal-400">Tushar Yerne</span></p>
        <p className="text-sm mt-2">&copy; 2025 All rights reserved.</p>

        {/* Social Icons with Animation */}
        <div className="flex justify-center mt-4 space-x-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/yourprofile", color: "text-gray-400 hover:text-white" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile", color: "text-blue-500 hover:text-white" },
            { icon: <FaInstagram />, link: "https://instagram.com/yourprofile", color: "text-pink-500 hover:text-white" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-all duration-300 ${item.color}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
