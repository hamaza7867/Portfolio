'use client';

import { Code2, Server, Globe, Database, Cloud, Shield, GraduationCap, Award, Users, Lightbulb } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages & Frameworks',
    skills: ['Go', 'Python (Django)', 'JavaScript', 'PHP', 'React', 'Angular', 'Next.js', 'Astro', 'Flutter'],
    accent: 'cyan' as const,
  },
  {
    icon: Globe,
    title: 'Frontend',
    skills: ['React', 'Angular', 'Astro', 'Tailwind CSS', 'TypeScript'],
    accent: 'purple' as const,
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    skills: ['REST APIs', 'Microservices', 'WebRTC', 'Multi-tenant SaaS', 'WordPress'],
    accent: 'green' as const,
  },
  {
    icon: Database,
    title: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Celery', 'SQLite'],
    accent: 'cyan' as const,
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    skills: ['Docker', 'AWS (EC2/S3)', 'Google Cloud Run', 'Cloudflare Workers', 'Jenkins', 'CI/CD'],
    accent: 'purple' as const,
  },
  {
    icon: Shield,
    title: 'Security & AI',
    skills: ['AES-256-GCM', 'TOTP 2FA', 'SPF/DKIM', 'OpenAI', 'Groq LLM', 'Deepgram STT', 'ElevenLabs TTS'],
    accent: 'green' as const,
  },
];

const websites = [
  { name: 'USALocalBusinesses', url: 'usalocalbusinesses.com', category: 'Directory' },
  { name: 'EasyLink Networks', url: 'easylinknetworks.com', category: 'Tech' },
  { name: 'XF Services', url: 'xf-servicesllc.com', category: 'Business' },
  { name: 'Gardening Yard', url: 'gardeningyard.com', category: 'Blog' },
  { name: 'Emotional Tails', url: 'emotionaltails.com', category: 'Pets' },
  { name: 'All About Hike', url: 'allabouthike.com', category: 'Travel' },
  { name: 'Family Guide Base', url: 'familyguidebase.com', category: 'Lifestyle' },
  { name: 'EcoGrotto', url: 'ecogrotto.com', category: 'Eco' },
  { name: 'WebFreeWorld', url: 'WebFreeWorld.com', category: 'Tech' },
  { name: 'PieCan', url: 'PieCan.com', category: 'Food' },
  { name: 'OpenGates Farm', url: 'OpenGatesFarm.com', category: 'Agriculture' },
  { name: 'Travel Prides', url: 'TravelPrides.com', category: 'Travel' },
  { name: 'PrimeRam', url: 'PrimeRam.com', category: 'Tech' },
  { name: 'Fouries', url: 'Fouries.com', category: 'Ecommerce' },
  { name: 'EatsPEI', url: 'EatsPEI.com', category: 'Food' },
  { name: 'Canada Telegraph', url: 'CanadaTelegraph.com', category: 'News' },
  { name: 'FurryVault', url: 'furryvault.com', category: 'Pets' },
  { name: 'Fragridge', url: 'fragridge.com', category: 'Lifestyle' },
  { name: 'GadgetHollow', url: 'gadgethollow.com', category: 'Tech' },
  { name: 'Homestead Movements', url: 'homesteadmovements.com', category: 'Lifestyle' },
  { name: 'TechDailyBase', url: 'techdailybase.com', category: 'Tech' },
  { name: 'FastSpeed Internet', url: 'fastspeedinternet.us', category: 'ISP' },
];

const accentColors = {
  cyan: {
    muted: 'var(--accent-cyan-muted)',
    color: 'var(--accent-cyan)',
    glow: 'var(--glow-cyan)',
  },
  purple: {
    muted: 'var(--accent-purple-muted)',
    color: 'var(--accent-purple)',
    glow: 'var(--glow-purple)',
  },
  green: {
    muted: 'var(--accent-green-muted)',
    color: 'var(--accent-green)',
    glow: 'var(--glow-green)',
  },
};

function SkillTag({ skill, delay }: { skill: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <span
      ref={ref}
      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
      style={{
        background: 'var(--tag-bg)',
        color: 'var(--tag-text)',
        border: '1px solid var(--tag-border)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(8px)',
        transition: `all 0.3s ease ${delay}s`,
      }}
    >
      {skill}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
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
              About me
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-16"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            A bit more about me
          </h2>
        </ScrollReveal>

        {/* Bio + Education/Certs side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-28">
          {/* Bio — wider column */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="space-y-5">
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I&apos;m a software engineer based in Lahore, Pakistan. I
                mostly work on backend systems and SaaS products, but I also
                do full-stack work when a project needs it.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                My final year project was Voxis — a multi-tenant voice
                automation platform that handles real-time calls using Go
                microservices, Django, and Angular. I also built
                Voiceovers Digital, an AI narration SaaS that converts long
                scripts into studio-quality audio.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                On the side, I take on freelance projects building WordPress
                sites and providing performance consulting for businesses.
                I&apos;m currently studying Information Engineering Technology
                at the University of Lahore.
              </p>
            </div>
          </ScrollReveal>

          {/* Education + Certs */}
          <ScrollReveal delay={0.2} className="lg:col-span-2 space-y-4">
            {/* Education card */}
            <div className="card-glow p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--accent-cyan-muted)' }}
                >
                  <GraduationCap size={15} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <h3
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}
                >
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-sm" style={{ color: 'var(--text)' }}>
                    B.S. Information Engineering Technology
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                    University of Lahore &middot; 2023 – 2027 &middot; CGPA 3.47
                  </p>
                </div>
                <div
                  className="w-full h-px"
                  style={{ background: 'var(--border-color)' }}
                />
                <div>
                  <p className="font-medium text-sm" style={{ color: 'var(--text)' }}>
                    ICS
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                    BISE Lahore &middot; 2020 – 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications card */}
            <div className="card-glow p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--accent-purple-muted)' }}
                >
                  <Award size={15} style={{ color: 'var(--accent-purple)' }} />
                </div>
                <h3
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}
                >
                  Certifications
                </h3>
              </div>
              <div className="space-y-2">
                {[
                  'The Full Stack — Meta',
                  'Intro to Android Dev — Meta',
                  'AI For Everyone — DeepLearning.AI',
                  'Cybersecurity Essentials — IBM',
                  'Basics of Python — UniAthena',
                  'WordPress & Freelancing — DigiSkills',
                ].map((cert) => (
                  <p
                    key={cert}
                    className="text-xs py-0.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {cert}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="section-divider mb-28" />

        {/* Skills */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-[2px] rounded-full"
              style={{ background: 'var(--accent-purple)' }}
            />
            <p
              className="text-xs uppercase tracking-[0.15em]"
              style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}
            >
              Skills
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-14"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            What I work with
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {skillCategories.map((cat, ci) => {
            const colors = accentColors[cat.accent];
            return (
              <ScrollReveal key={cat.title} delay={ci * 0.06}>
                <div
                  className="card-glow glass-hover p-6 h-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: colors.muted }}
                    >
                      <cat.icon size={18} style={{ color: colors.color }} />
                    </div>
                    <h3
                      className="text-sm font-bold"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <SkillTag
                        key={skill}
                        skill={skill}
                        delay={si * 0.03 + ci * 0.06}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Divider */}
        <div className="section-divider mb-28" />

        {/* Websites I've built */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-[2px] rounded-full"
              style={{ background: 'var(--accent-green)' }}
            />
            <p
              className="text-xs uppercase tracking-[0.15em]"
              style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}
            >
              Websites
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Sites I&apos;ve built &amp; managed
          </h2>
          <p
            className="text-base md:text-lg mb-14 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Over the past few years I&apos;ve built, managed, or improved
            performance on these websites — ranging from business directories
            and news sites to e-commerce and niche blogs.
          </p>
        </ScrollReveal>

        {/* Website grid with categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-28">
          {websites.map((site, i) => (
            <ScrollReveal key={site.url} delay={i * 0.02}>
              <a
                href={`https://${site.url.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 px-4 py-4 rounded-xl text-sm transition-all duration-300 hover:translate-x-1"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-color)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border-hover)';
                  e.currentTarget.style.background = 'var(--surface-2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.background = 'var(--surface)';
                }}
              >
                <div className="flex flex-col items-start gap-1.5 flex-1 min-w-0">
                  <span
                    className="font-medium truncate w-full"
                    style={{ color: 'var(--text)' }}
                  >
                    {site.name}
                  </span>
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {site.category}
                  </span>
                </div>
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: 'var(--accent-cyan-muted)',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Community */}
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
              Community
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-10"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Beyond work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-glow glass-hover p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--accent-cyan-muted)' }}
                >
                  <Users size={18} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    Google Developer Groups
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                    Executive Member
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Organizing workshops and community events for local developers. Helping people learn and grow together.
              </p>
            </div>
            <div className="card-glow glass-hover p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--accent-purple-muted)' }}
                >
                  <Lightbulb size={18} style={{ color: 'var(--accent-purple)' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    Microsoft Student Ambassador
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                    Beta Ambassador
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Running cloud-focused learning sessions for students. Making Azure and modern dev tools more accessible.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
