import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:raj955197@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactLinks = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'raj955197@gmail.com',
      href: 'mailto:raj955197@gmail.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      value: 'ashishkumar-india',
      href: 'https://github.com/ashishkumar-india',
      gradient: 'from-slate-500 to-slate-700',
    },
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/ashishkumar-india',
      gradient: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Let's Talk</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether it's a freelance project, full-time opportunity, or just a tech conversation —
                I'd love to hear from you!
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Available Mon–Sat, 9AM–8PM IST</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <span>raj955197@gmail.com</span>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-3 pt-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                >
                  <div className={`flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-r ${link.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-semibold">{link.label}</div>
                    <div className="text-slate-400 text-xs truncate">{link.value}</div>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900/60 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/60 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900/60 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 rounded-xl relative z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {sent ? '✓ Message Sent!' : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
}
