import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-16">
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            Full Stack Developer
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Building innovative solutions with modern web technologies and machine learning
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-cyan-400 text-sm">
            React
          </span>
          <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-cyan-400 text-sm">
            Node.js
          </span>
          <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-cyan-400 text-sm">
            Python
          </span>
          <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-cyan-400 text-sm">
            Machine Learning
          </span>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
