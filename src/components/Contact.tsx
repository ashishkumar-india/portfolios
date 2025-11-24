import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 text-lg">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center p-6 bg-slate-900/50 rounded-lg hover:border-cyan-400 border border-slate-700 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Mail className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-semibold mb-1">Email</span>
              <span className="text-slate-400 text-sm text-center">your.email@example.com</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-900/50 rounded-lg hover:border-cyan-400 border border-slate-700 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Github className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-semibold mb-1">GitHub</span>
              <div className="flex items-center text-slate-400 text-sm">
                <span>View Profile</span>
                <ExternalLink size={14} className="ml-1" />
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-900/50 rounded-lg hover:border-cyan-400 border border-slate-700 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Linkedin className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-semibold mb-1">LinkedIn</span>
              <div className="flex items-center text-slate-400 text-sm">
                <span>Connect</span>
                <ExternalLink size={14} className="ml-1" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
