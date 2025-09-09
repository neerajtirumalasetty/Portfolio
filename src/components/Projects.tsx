import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      description: "Full-stack real-time chat app with authentication, one-to-one and group messaging, typing indicators, and admin controls.",
      image: "https://plus.unsplash.com/premium_photo-1719839720591-d43eb07de1da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveDemo: "#",
      sourceCode: "https://github.com/neerajtirumalasetty/chat-app",
      timeline: "2 months",
      status: "Completed"
    },
    {
      title: "Resume Analyzer",
      description: "Resume Analyzer application with structured feedback on resumes. Built using React, Zustand, and modern web technologies.",
      image: "https://cvcompiler.com/assets/images/rw-screenshot.png",
      techStack: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveDemo: "https://resumeanalyzer-kappa.vercel.app/auth?next=/",
      sourceCode: "https://github.com/neerajtirumalasetty/ai-resume-analyzer",
      timeline: "1 month",
      status: "Completed"
    },
    {
      title: "Cricket Analytics Dashboard",
      description: "Cricket Analytics Dashboard delivering interactive player and match insights, built with React, Recharts, and modern web technologies.",
      image: "https://cdn.dribbble.com/userupload/35548377/file/original-d355ede3f211d6f580398a4a3761237c.png?resize=752x&vertical=center",
      techStack: ["React", "Zustand", "Recharts", "Tailwind CSS"],
      liveDemo: "#",
      sourceCode: "#",
      timeline: "1 month",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some projects I've worked on during my learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.timeline}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-400">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md border border-gray-600 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveDemo}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.sourceCode}
                    className="flex-1 flex items-center justify-center space-x-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            More exciting projects coming soon! Always working on something new.
          </p>
          <div className="inline-flex items-center space-x-2 text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Currently building new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;