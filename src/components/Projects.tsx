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

export default function Projects() {
  const projects = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Education Management System',
      description: 'Web-based platform for managing student records, attendance, and exams with intuitive interfaces and real-time updates.',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart size={32} />,
      title: 'Hospital Management System',
      description: 'Comprehensive system for patient registration, appointment scheduling, and medical records management.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'E-Commerce Platform',
      description: 'Scalable online store with product catalog, shopping cart, and secure payment gateway integration.',
      tags: ['React', 'Express.js', 'Stripe'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Package size={32} />,
      title: 'Asset Management System',
      description: 'Tool for tracking and managing organizational assets with real-time updates and comprehensive reporting.',
      tags: ['Python', 'Flask', 'SQLite'],
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Automation',
      description: 'Automated repetitive web tasks and data scraping with intelligent parsing and error handling.',
      tags: ['Python', 'Selenium', 'BeautifulSoup'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Personal Chatbot Assistant',
      description: 'Chatbot with natural language understanding for task automation including scheduling and reminders.',
      tags: ['Python', 'AWS Lambda', 'NLP'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <ScanFace size={32} />,
      title: 'Face Login System',
      description: 'Biometric authentication system using facial recognition for secure and seamless user login.',
      tags: ['Python', 'OpenCV', 'face_recognition'],
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Grid3x3 size={32} />,
      title: 'Crossword Puzzle Game',
      description: 'Interactive web-based crossword puzzle with user authentication, puzzle creation, and anti-cheating features.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FileText size={32} />,
      title: 'Handwritten Recognition System',
      description: 'Machine learning-based handwriting recognition using neural networks for accurate text conversion.',
      tags: ['Python', 'PyTorch', 'NumPy'],
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
