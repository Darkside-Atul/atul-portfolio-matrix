
import { Github, Linkedin, Mail } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <>
      <MatrixRain />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="matrix-text">Atul Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in">
              AI Enthusiast & High School Student
            </p>
            <div className="flex justify-center space-x-6 animate-fade-in">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-matrix/20 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-matrix/20 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 glass rounded-full hover:bg-matrix/20 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About <span className="matrix-text">Me</span>
            </h2>
            <div className="glass p-6 rounded-lg max-w-3xl mx-auto">
              <div className="font-mono space-y-4">
                <p className="matrix-text">$ whoami</p>
                <p className="text-gray-300">
                  A passionate high school student exploring the frontiers of artificial intelligence and machine learning.
                </p>
                <p className="matrix-text">$ skills</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'].map((skill) => (
                    <span key={skill} className="glass px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured <span className="matrix-text">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <div key={project} className="glass p-6 rounded-lg hover:bg-white/5 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-4">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    Description of project {project}. This is a placeholder text.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="glass px-2 py-1 rounded text-xs">Python</span>
                      <span className="glass px-2 py-1 rounded text-xs">AI</span>
                    </div>
                    <a
                      href="#"
                      className="text-matrix hover:text-matrix-light transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get in <span className="matrix-text">Touch</span>
            </h2>
            <div className="glass p-6 rounded-lg max-w-lg mx-auto">
              <p className="text-center text-gray-300 mb-6">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover:bg-matrix/20 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover:bg-matrix/20 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
