'use client';

import { ArrowUpRight, X, Github, Sparkles, Folder } from 'lucide-react';
import { useState, useRef, MouseEvent, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const projects = [
  {
    name: 'Voxis',
    tagline: 'Multi-tenant voice dialer & lead intelligence',
    tag: 'Final Year Project',
    tagIcon: 'terminal' as const,
    accent: 'cyan' as const,
    bullets: [
      'Built a voice automation platform with Django, Angular, and three Go microservices. The whole call pipeline runs under 400ms.',
      'Connected Twilio and Telnyx for phone calls, built a WebRTC softphone, and set up bidirectional SMS and call logging.',
      'Wired up Deepgram for speech-to-text, Groq for AI conversation, and ElevenLabs for text-to-speech.',
    ],
    tech: ['Django', 'Angular', 'Go', 'WebRTC', 'Twilio', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    layout: 'wide' as const,
  },
  {
    name: 'Voiceovers Digital',
    tagline: 'AI narration SaaS for content creators',
    tag: 'SaaS',
    tagIcon: 'sparkles' as const,
    accent: 'purple' as const,
    bullets: [
      'TTS platform where creators turn 60-120 minute scripts into full audio narrations. Core rendering runs on a Python/Go ONNX microservice.',
      'React dashboard hosted on Astro, managing projects with 54 voice options.',
      'Cloudflare Workers + D1 backend handles billing, auth, and job queues.',
    ],
    tech: ['Go', 'Python', 'ONNX', 'React', 'Astro', 'Cloudflare Workers'],
    layout: 'normal' as const,
  },
  {
    name: 'Cyphex Mail',
    tagline: 'Email platform built for agencies',
    tag: 'SaaS',
    tagIcon: 'sparkles' as const,
    accent: 'green' as const,
    bullets: [
      'Full email platform — Next.js web app, React Native mobile app, Cloudflare Workers backend.',
      'AI reply drafting, mail merge campaigns, follow-up sequences, real-time open/click tracking.',
      'Real-time team chat with presence detection on custom WebSocket setup with AES-256-GCM encryption.',
    ],
    tech: ['Next.js', 'React Native', 'Cloudflare Workers', 'WebSocket', 'AES-256-GCM'],
    layout: 'normal' as const,
  },
  {
    name: 'Cyphex Image Hunter',
    tagline: 'Open-source WordPress plugin',
    tag: 'Open Source',
    tagIcon: 'github' as const,
    accent: 'cyan' as const,
    bullets: [
      'Free WordPress plugin for media management — stock search, image compression, WebP/AVIF conversion, and AI-generated alt text. Over 1,100 downloads.',
      'Plugin marketing site built with Astro.',
    ],
    tech: ['WordPress', 'PHP', 'Astro', 'WebP', 'AVIF'],
    layout: 'normal' as const,
  },
  {
    name: 'AI Pocket Mind',
    tagline: 'Multi-modal AI assistant app',
    tag: 'App',
    tagIcon: 'folder' as const,
    accent: 'purple' as const,
    bullets: [
      'AI assistant working with OpenAI, Groq, and Mistral APIs. Also runs privately on-device through a desktop bridge.',
      'Biometric lock, local SQLite chat history, and modular RAG setup for document-based Q&A.',
    ],
    tech: ['Flutter', 'OpenAI', 'Groq', 'Mistral', 'SQLite', 'RAG'],
    layout: 'normal' as const,
  },
  {
    name: 'AssetPacker.ai',
    tagline: 'Turn scripts into video asset bundles',
    tag: 'AI Tool',
    tagIcon: 'sparkles' as const,
    accent: 'green' as const,
    bullets: [
      'Client-side tool that uses an LLM to break prompts into scenes, then pulls matching stock footage from Pexels and Pixabay.',
      'Outputs a synced 1080p WebM video — all running in the browser.',
    ],
    tech: ['React', 'LLM', 'RecordRTC', 'Web Audio API', 'Pexels API'],
    layout: 'wide' as const,
  },
];

const webProjects = [
  { name: 'X2 Technologies', url: 'https://x2technologies.pk/', desc: 'Corporate website for a tech services company.', image: '/projects/x2tech.png' },
  { name: 'Cyphex Agency', url: 'https://cyphex.agency/', desc: 'Digital agency portfolio and services site.', image: '/projects/cyphex.png' },
  { name: 'XF Services LLC', url: 'https://xf-servicesllc.com/', desc: 'Professional services business site.', image: '/projects/xf-services.png' },
  { name: 'USA Local Businesses', url: 'https://usalocalbusinesses.com/', desc: 'Business directory with 300+ programmatic landing pages.', image: '/projects/usalocal.png' },
];

const accentMap = {
  cyan: { color: 'var(--accent-cyan)', muted: 'var(--accent-cyan-muted)', glow: 'var(--glow-cyan)' },
  purple: { color: 'var(--accent-purple)', muted: 'var(--accent-purple-muted)', glow: 'var(--glow-purple)' },
  green: { color: 'var(--accent-green)', muted: 'var(--accent-green-muted)', glow: 'var(--glow-green)' },
};

function TagIcon({ type }: { type: string }) {
  if (type === 'github') return <Github size={12} />;
  if (type === 'sparkles') return <Sparkles size={12} />;
  return <Folder size={12} />;
}

function TiltCard({ children, accent }: { children: React.ReactNode; accent: 'cyan' | 'purple' | 'green' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform('');
  }, []);

  return (
    <div
      ref={ref}
      className="card-glow transition-[transform] duration-200 ease-out h-full"
      style={{ transform, '--tilt-glow': accentMap[accent].glow } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-purple)' }} />
            <p className="text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
              Projects
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            What I've built
          </h2>
          <p className="text-sm max-w-xl mb-14" style={{ color: 'var(--text-tertiary)' }}>
            A mix of SaaS products, open-source tools, and client work — built with attention to architecture and detail.
          </p>
        </ScrollReveal>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {projects.map((project, i) => {
            const isWide = project.layout === 'wide';
            const colors = accentMap[project.accent];
            return (
              <ScrollReveal
                key={project.name}
                delay={i * 0.06}
                className={isWide ? 'md:col-span-2' : ''}
              >
                <TiltCard accent={project.accent}>
                  <div className={`p-6 md:p-7 ${isWide ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}>
                    <div className={isWide ? '' : ''}>
                      {/* Tag */}
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.1em] inline-flex items-center gap-1.5 px-2.5 py-1"
                          style={{
                            background: colors.muted,
                            color: colors.color,
                            fontFamily: 'var(--font-mono)',
                            borderRadius: '6px',
                          }}
                        >
                          <TagIcon type={project.tagIcon} />
                          {project.tag}
                        </span>
                      </div>

                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: colors.color }}>
                        {project.tagline}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {project.bullets.map((bullet, bi) => (
                          <li key={bi} className="text-xs leading-relaxed flex gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                            <span
                              className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                              style={{ background: colors.color, opacity: 0.5 }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:gap-2.5"
                      style={{ color: colors.color, fontFamily: 'var(--font-sans)' }}
                    >
                      Explore Case Study
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Brand sites */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-green)' }} />
            <p className="text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>
              Client Work
            </p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Brand Sites
          </h2>
          <p className="text-sm max-w-xl mb-12" style={{ color: 'var(--text-tertiary)' }}>
            Websites I've built for clients and companies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {webProjects.map((site) => (
            <ScrollReveal key={site.name}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="card h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden cursor-pointer">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, var(--ground) 0%, transparent 60%)' }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
                        {site.name}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: 'var(--accent-cyan)' }}
                      />
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {site.desc}
                    </p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
            style={{ background: 'var(--overlay-bg)', backdropFilter: 'blur(16px)' }}
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              className="absolute top-6 right-6 z-10"
              style={{
                color: 'var(--text)',
                background: 'var(--surface-container)',
                border: '1px solid var(--border-variant)',
                borderRadius: '8px',
                padding: '8px',
              }}
              onClick={() => setLightbox(null)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              <X size={18} />
            </motion.button>
            <motion.img
              src={lightbox}
              className="max-w-full max-h-full"
              style={{ border: '1px solid var(--border-variant)', borderRadius: '8px' }}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
