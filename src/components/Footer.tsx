import React from "react";
import { Heart, ArrowUp, Github, Linkedin, FileDown } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Neeraj Tirumalasetty</h3>
            <p className="text-gray-400 text-sm">
              Aspiring Software Engineer passionate about creating innovative
              solutions and building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for opportunities, collaborations, or just
              to say hello!
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/neerajtirumalasetty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/neeraj-tirumalasetty-75b747251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Resume Download */}
              <a
                href="/Neeraj_Tirumalasetty_Resume.pdf"
                download="Neeraj_Tirumalasetty_Resume.pdf"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FileDown className="w-5 h-5" />
              </a>
            </div>

            {/* Email */}
            <div className="flex space-x-3">
              <a
                href="mailto:neerajtirumalasetty14@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                neerajtirumalasetty14@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Neeraj Tirumalasetty. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-cyan-600 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
