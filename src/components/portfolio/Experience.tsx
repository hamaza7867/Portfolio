'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const jobs = [
  {
    period: 'Mar 2023 \u2013 Jan 2025',
    company: 'Lineup Digital',
    title: 'Web Developer',
    type: 'Full-time',
    color: 'cyan' as const,
    bullets: [
      'Built responsive websites from Figma mockups using custom PHP and lightweight themes \u2014 no page builders.',
      'Fixed plugin conflicts, CSS bugs, and performance issues. Worked closely with the design team and used Git for version control.',
    ],
  },
  {
    period: 'Sep 2025 \u2013 Jan 2026',
    company: 'X2 Technologies (with Tech Process LLC)',
    title: 'Full-Stack WordPress Developer',
    type: 'Full-time',
    color: 'purple' as const,
    bullets: [
      'Worked on usalocalbusinesses.com \u2014 a business directory with custom search, filtering, and user dashboards.',
      'Built a programmatic routing system that generates hundreds of landing pages for different locations and service categories.',
      'Cleaned up a security breach \u2014 found and removed injected malicious files via FTP/SFTP to get the platform stable again.',
    ],
  },
  {
    period: 'Jan 2026 \u2013 Jul 2026',
    company: 'Comverse Media, Lahore',
    title: 'Software Engineer',
    type: 'Full-time',
    color: 'green' as const,
    bullets: [
      'Handled performance, security, and backend maintenance for 21 international publisher and media websites.',
      'Set up caching, deferred scripts, and layout optimizations \u2014 got perfect scores on both desktop and mobile performance audits.',
    ],
  },
  {
    period: 'Ongoing',
    company: 'Freelance & Independent Projects',
    title: 'Full-Stack Developer',
    type: 'Freelance',
    color: 'cyan' as const,
    bullets: [
      'Build and ship full-stack SaaS products from scratch \u2014 from planning the database to deploying the final product.',
      'Help businesses with site infrastructure, hosting migrations, and fixing performance bottlenecks on high-traffic sites.',
    ],
  },
];

const awards = [
  { title: 'Certificate of Recognition', org: 'QDCAP (Qubit Dynamics)', color: 'cyan' as const },
  { title: 'Certificate of Achievement', org: 'Art & Culture Workshop 3.0, UOL', color: 'purple' as const },
  { title: 'Certificate of Appreciation', org: 'Founders Meetup 2025, Brain-Creatives', color: 'green' as const },
];

const colorMap = {
  cyan: { accent: 'var(--accent-cyan)', muted: 'var(--accent-cyan-muted)', glow: 'var(--glow-cyan)' },
  purple: { accent: 'var(--accent-purple)', muted: 'var(--accent-purple-muted)', glow: 'var(--glow-purple)' },
  green: { accent: 'var(--accent-green)', muted: 'var(--accent-green-muted)', glow: 'var(--glow-green)' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-cyan)' }} />
            <p className="text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              Experience
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Where I've worked
          </h2>
          <p className="text-sm max-w-xl mb-14" style={{ color: 'var(--text-tertiary)' }}>
            The companies and projects that shaped how I build things.
          </p>
        </ScrollReveal>

        {/* Job cards */}
        <div className="space-y-6 mb-20">
          {jobs.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.08}>
              <JobCard job={job} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Awards */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-purple)' }} />
            <p className="text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
              Recognition
            </p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Awards & Certificates
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <ScrollReveal key={award.title} delay={i * 0.08}>
              <div className="card-glow p-6 h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: colorMap[award.color].muted }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: colorMap[award.color].accent }} />
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
                  {award.title}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {award.org}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job, index }: { job: (typeof jobs)[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const colors = colorMap[job.color];

  return (
    <motion.div
      ref={ref}
      className="card-glow p-6 md:p-7"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: colors.accent, boxShadow: colors.glow }}
            />
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
              {job.title}
            </h3>
          </div>
          <p className="text-sm" style={{ color: colors.accent }}>
            {job.company}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1"
            style={{
              background: colors.muted,
              color: colors.accent,
              fontFamily: 'var(--font-mono)',
              borderRadius: '6px',
            }}
          >
            {job.type}
          </span>
          <span
            className="text-xs font-medium px-2.5 py-1"
            style={{
              background: 'var(--surface-container-lowest)',
              border: '1px solid var(--border-variant)',
              color: 'var(--text-tertiary)',
              fontFamily: 'var(--font-mono)',
              borderRadius: '6px',
            }}
          >
            {job.period}
          </span>
        </div>
      </div>

      <ul className="space-y-2.5">
        {job.bullets.map((bullet, bi) => (
          <li key={bi} className="text-sm leading-relaxed flex gap-2.5" style={{ color: 'var(--text-secondary)' }}>
            <span
              className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
              style={{ background: colors.accent, opacity: 0.6 }}
            />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
