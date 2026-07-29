'use client';

import { Terminal, Database, ShieldAlert, Cpu, Palette } from 'lucide-react';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Terminal,
    accent: 'cyan',
    desc: 'Core server-side scripting, compiled languages, and modern frameworks.',
    skills: ['Go', 'Python (Django)', 'JavaScript (ES6+)', 'PHP'],
  },
  {
    title: 'Frontend & Architecture',
    icon: Palette,
    accent: 'purple',
    desc: 'Responsive styling libraries, structured frameworks, and fast static sites.',
    skills: ['React', 'Angular', 'Astro', 'Tailwind CSS'],
  },
  {
    title: 'Systems & APIs',
    icon: Cpu,
    accent: 'green',
    desc: 'Connecting distributed systems, building lead engines, and routing streams.',
    skills: ['REST APIs', 'Microservices', 'WebRTC', 'Multi-tenant SaaS'],
  },
  {
    title: 'Data & Queues',
    icon: Database,
    accent: 'cyan',
    desc: 'Relational data structures, keyspace storage, and async workers.',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Celery'],
  },
  {
    title: 'Infrastructure & CI/CD',
    icon: ShieldAlert,
    accent: 'purple',
    desc: 'Container orchestrators, cloud deployments, edge workers, and audit monitors.',
    skills: ['Docker', 'AWS (EC2/S3)', 'Google Cloud Run', 'Cloudflare Workers', 'Jenkins', 'SonarQube', 'CI/CD Pipelines'],
  },
];

export default function SkillsPage() {
  return (
    <div className="py-16 md:py-24 max-w-[1120px] mx-auto px-6">
      {/* Page Title */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-cyan)' }} />
          <p className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            // dependencies.yaml
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          My technical toolkit
        </h1>
        <p className="text-sm mb-12 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          The backend technologies, relational databases, cloud configurations, and frontend structures I work with on a daily basis to deploy reliable SaaS.
        </p>
      </ScrollReveal>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          const accentColor = cat.accent === 'cyan' ? 'var(--accent-cyan)' : cat.accent === 'purple' ? 'var(--accent-purple)' : 'var(--accent-green)';
          return (
            <ScrollReveal key={cat.title} delay={i * 0.05}>
              <div className="card p-8 bg-surface border-variant h-full hover:shadow-md transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-surface-2" style={{ color: accentColor }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                    {cat.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-3 py-1.5 rounded bg-ground text-secondary"
                      style={{ color: 'var(--text-secondary)', border: '1px solid var(--border-variant)', fontFamily: 'var(--font-mono)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
