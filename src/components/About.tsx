import React from 'react';
import { GraduationCap, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Neeraj , a passionate Computer Science Engineering student with a strong 
              foundation in full-stack development and problem-solving. Currently pursuing my B.Tech degree 
              (graduating in 2026), I'm eager to apply my technical skills and fresh perspective to 
              real-world challenges.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to create meaningful 
              solutions. I have experience with Java, Python, JavaScript, and modern web technologies 
              like React.js and Node.js. I'm always excited to learn new frameworks and tools to 
              enhance my development capabilities.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2+</span>
                </div>
                <span className="text-gray-300">Years of Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3+</span>
                </div>
                <span className="text-gray-300">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-cyan-400">Vellore Institute of Technology, Amaravati</p>
                </div>
              </div>

              <p className="text-gray-300 mb-3">
                B.Tech in Computer Science Engineering<br />
                <span className="text-sm text-gray-400">Expected Graduation: 2026</span>
              </p>

              <p className="text-white font-medium mb-3">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-500 transition">
                  Data Structures & Algorithms
                </span>
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-500 transition">
                  Database Management Systems
                </span>
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-500 transition">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-500 transition">
                  Software Engineering
                </span>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
                  <p className="text-purple-400">Specialization</p>
                </div>
              </div>
              <p className="text-gray-300">
                Full-Stack Development, Web Technologies, Data Structures & Algorithms
              </p>
            </div>

            {/* Goal */}
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Goal</h3>
                  <p className="text-green-400">Aspiration</p>
                </div>
              </div>
              <p className="text-gray-300">
                To contribute to innovative projects and grow as a professional software developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
