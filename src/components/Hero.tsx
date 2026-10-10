import { useEffect, useState } from 'react';
import { ChevronDown, Download, Sparkles } from 'lucide-react';

const TYPING_STRINGS = [
  'Full Stack Developer',
  'Machine Learning Engineer',
  'Python Developer',
  'React Specialist',
  'Problem Solver',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex === 0) {
          setIsDeleting(false);
          setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = ['React', 'Node.js', 'Python', 'PyTorch', 'Django', 'MongoDB'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className={`text-center space-y-8 max-w-5xl mx-auto pt-20 relative z-10 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-cyan-400 text-sm font-medium">
          <Sparkles size={14} className="animate-pulse" />
          <span>Available for Freelance & Full-time</span>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Name */}
        <div>
          <p className="text-slate-400 text-lg mb-3 font-medium tracking-widest uppercase">Hello, I'm</p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none mb-3">
            Ashish
            <span className="gradient-text"> Kumar</span>
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 via-indigo-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl text-slate-300 font-light">
            <span className="text-cyan-400 font-semibold">{displayText}</span>
            <span className="inline-block w-0.5 h-7 bg-cyan-400 ml-1 animate-pulse" />
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Building innovative, scalable web applications and AI-powered solutions.
          Passionate about crafting seamless user experiences and solving complex problems.
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="tag-pill cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary relative z-10"
          >
            <span className="relative z-10">View My Work</span>
          </button>
          <a
            href="mailto:raj955197@gmail.com"
            className="btn-secondary inline-flex items-center gap-2 justify-center"
          >
            <Download size={16} />
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
