'use client';

import { Code2, Server, Database, Cloud, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    accent: 'cyan' as const,
    skills: [
      'React & Next.js',
      'Angular',
      'Astro',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Interfaces',
      'Framer Motion',
    ],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    accent: 'purple' as const,
    skills: [
      'REST & WebSockets APIs',
      'Go (Gin/Fiber)',
      'Python (Django & DRF)',
      'Microservices',
      'WebRTC Communications',
      'WordPress Development',
    ],
  },
  {
    icon: Database,
    title: 'Databases & Cache',
    accent: 'green' as const,
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Redis Caching',
      'Celery Task Queues',
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Deploy',
    accent: 'cyan' as const,
    skills: [
      'Docker Containerization',
      'AWS (EC2 & S3)',
      'Google Cloud Run',
      'Cloudflare Workers',
      'GitHub Actions (CI/CD)',
      'Git Version Control',
    ],
  },
  {
    icon: Sparkles,
    title: 'Specializations',
    accent: 'purple' as const,
    skills: [
      'AES-256-GCM Encryption',
      'TOTP 2FA Authentication',
      'SPF / DKIM Email Security',
      'OpenAI & Groq Integration',
      'Deepgram STT & ElevenLabs TTS',
    ],
  },
];

const colorClasses = {
  cyan: {
    bg: 'var(--accent-cyan-dim)',
    text: 'var(--accent-cyan)',
  },
  purple: {
    bg: 'var(--accent-purple-dim)',
    text: 'var(--accent-purple)',
  },
  green: {
    bg: 'var(--accent-green-dim)',
    text: 'var(--accent-green)',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-[2px] rounded-full"
              style={{ background: 'var(--accent-cyan)' }}
            />
            <p
              className="text-xs uppercase tracking-[0.15em]"
              style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}
            >
              Skills
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-16"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            My technical toolkit
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const colors = colorClasses[cat.accent];
            return (
              <ScrollReveal key={cat.title} delay={i * 0.05} className="flex">
                <div className="card p-8 w-full flex flex-col bg-surface border-variant">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3
                      className="text-base font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-grow">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs transition-all duration-250 hover:scale-105"
                        style={{
                          background: 'var(--tag-bg)',
                          color: 'var(--tag-text)',
                          border: '1px solid var(--tag-border)',
                        }}
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
    </section>
  );
}
