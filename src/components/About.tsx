import { useEffect, useRef } from 'react';
import { Code2, Database, Cpu, Globe, Layers, Zap } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={28} />,
    title: 'Web Development',
    description: 'Expert in React, Node.js, Django & Flask for scalable, modern applications.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Database size={28} />,
    title: 'Database Design',
    description: 'Proficient with SQL, MongoDB & efficient data structure architecture.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Machine Learning',
    description: 'Deep experience with PyTorch, CNNs, and computer vision pipelines.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <Globe size={28} />,
    title: 'Full Stack',
    description: 'End-to-end development: UI/UX, REST APIs, and cloud deployment.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Layers size={28} />,
    title: 'System Design',
    description: 'Architecting scalable systems with clean, maintainable code.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Zap size={28} />,
    title: 'Automation',
    description: 'Web scraping, task automation & intelligent bot development.',
    color: 'from-yellow-500 to-amber-500',
  },
];

const techSkills = [
  { name: 'React / TypeScript', level: 90 },
  { name: 'Python / Django', level: 88 },
  { name: 'Node.js / Express', level: 82 },
  { name: 'Machine Learning', level: 78 },
  { name: 'PostgreSQL / MongoDB', level: 80 },
  { name: 'Docker / Cloud', level: 70 },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.reveal-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" ref={sectionRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 reveal-card section-hidden">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
          </div>

          {/* Bio + Skills grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Left: Bio */}
            <div className="reveal-card section-hidden space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Hi, I'm <span className="gradient-text">Ashish Kumar</span> 👋
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                A passionate Full Stack Developer and Machine Learning Engineer based in India.
                I specialize in building end-to-end web applications and intelligent systems that solve real-world problems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With expertise spanning React, Node.js, Python, and PyTorch, I bring ideas to life through
                clean code, thoughtful design, and cutting-edge technology. Whether it's a web app or an ML pipeline,
                I'm dedicated to delivering high-quality solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '9+', label: 'Projects' },
                  { value: '3+', label: 'Years Exp.' },
                  { value: '100%', label: 'Dedication' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-black gradient-text">{stat.value}</div>
                    <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Skill bars */}
            <div className="reveal-card section-hidden space-y-5" ref={el => { if (el) barsRef.current[0] = el; }}>
              <h3 className="text-xl font-bold text-white mb-6">Technical Proficiency</h3>
              {techSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-inner"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 reveal-card section-hidden group cursor-default"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
