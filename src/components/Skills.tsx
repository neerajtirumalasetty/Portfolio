import React from 'react';
import { Code, Database, Globe, Terminal, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools & Frameworks',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Git/GitHub', 'VS Code', 'Postman']
    },
    {
      title: 'Development',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      skills: ['REST APIs', 'Full-Stack Development', 'Responsive Design', 'Version Control']
    },
    {
      title: 'Core Concepts',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Database Design', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-600 hover:border-cyan-400/50 hover:bg-gray-750 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/5"
                  >
                    <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Agile Methodology',
              'Code Review',
              'Testing & Debugging',
              'Performance Optimization',
              'UI/UX Design Principles',
              'Technical Documentation'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Skills Overview</h3>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              As a Computer Science Engineering student, I've developed a strong foundation in both 
              frontend and backend technologies. My experience spans from building responsive web 
              applications with React to developing robust server-side solutions with Node.js and 
              working with various databases. I'm passionate about writing clean, efficient code 
              and continuously learning new technologies to stay current with industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;