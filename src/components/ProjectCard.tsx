import { ExternalLink, Github } from 'lucide-react';
import { ReactNode } from 'react';

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({ icon, title, description, tags, gradient, github, demo }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group">
      {/* Card top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`flex-shrink-0 inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 min-h-[3.5rem]">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2 border-t border-slate-700/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
            >
              <Github size={15} />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 ml-auto"
            >
              Live Demo
              <ExternalLink size={13} />
            </a>
          )}
          {!github && !demo && (
            <span className="text-slate-600 text-xs italic">Private / Academic Project</span>
          )}
        </div>
      </div>
    </div>
  );
}
