import { useState } from 'react';
import ProjectCard from './ProjectCard';
import {
  GraduationCap,
  Heart,
  ShoppingCart,
  Package,
  Globe,
  MessageSquare,
  ScanFace,
  Grid3x3,
  FileText
} from 'lucide-react';

const projects = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Education Management System',
    description: 'Web-based platform for managing student records, attendance, and exams with intuitive interfaces and real-time updates.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'Web',
  },
  {
    icon: <Heart size={24} />,
    title: 'Hospital Management System',
    description: 'Comprehensive system for patient registration, appointment scheduling, and medical records management.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    gradient: 'from-red-500 to-pink-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'Web',
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'E-Commerce Platform',
    description: 'Scalable online store with product catalog, shopping cart, and secure payment gateway integration.',
    tags: ['React', 'Express.js', 'Stripe'],
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'Web',
  },
  {
    icon: <Package size={24} />,
    title: 'Asset Management System',
    description: 'Tool for tracking and managing organizational assets with real-time updates and comprehensive reporting.',
    tags: ['Python', 'Flask', 'SQLite'],
    gradient: 'from-orange-500 to-yellow-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'Web',
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Automation Tool',
    description: 'Automated repetitive web tasks and data scraping with intelligent parsing and robust error handling.',
    tags: ['Python', 'Selenium', 'BeautifulSoup'],
    gradient: 'from-violet-500 to-purple-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'Automation',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Personal Chatbot Assistant',
    description: 'Chatbot with natural language understanding for task automation including scheduling and reminders.',
    tags: ['Python', 'AWS Lambda', 'NLP'],
    gradient: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'AI/ML',
  },
  {
    icon: <ScanFace size={24} />,
    title: 'Face Login System',
    description: 'Biometric authentication using facial recognition for secure and seamless user login experiences.',
    tags: ['Python', 'OpenCV', 'face_recognition'],
    gradient: 'from-teal-500 to-cyan-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'AI/ML',
  },
  {
    icon: <Grid3x3 size={24} />,
    title: 'Crossword Puzzle Game',
    description: 'Interactive web-based crossword puzzle with user auth, puzzle creation, and anti-cheating features.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    gradient: 'from-pink-500 to-rose-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'Web',
  },
  {
    icon: <FileText size={24} />,
    title: 'Handwriting Recognition',
    description: 'ML-based handwriting recognition using deep neural networks for accurate handwritten text conversion.',
    tags: ['Python', 'PyTorch', 'NumPy'],
    gradient: 'from-amber-500 to-orange-500',
    github: 'https://github.com/ashishkumar-india',
    category: 'AI/ML',
  },
];

const categories = ['All', 'Web', 'AI/ML', 'Automation'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">What I've Built</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass text-slate-400 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ashishkumar-india"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
