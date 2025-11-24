import { Code2, Database, Cpu, Globe } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Web Development',
      description: 'Expert in React, Node.js, Django, and Flask for building scalable applications'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'Proficient with SQL databases and designing efficient data structures'
    },
    {
      icon: <Cpu size={32} />,
      title: 'Machine Learning',
      description: 'Experience with PyTorch, neural networks, and computer vision'
    },
    {
      icon: <Globe size={32} />,
      title: 'Full Stack',
      description: 'End-to-end development from frontend UI to backend APIs and cloud deployment'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-slate-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
