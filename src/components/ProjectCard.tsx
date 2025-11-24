import { ReactNode } from 'react';

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export default function ProjectCard({ icon, title, description, tags, gradient }: ProjectCardProps) {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

      <div className="p-6">
        <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-400 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
