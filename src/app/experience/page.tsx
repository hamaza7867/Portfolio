'use client';

import { Calendar, Building, FileDown, GitCommit } from 'lucide-react';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

const experiences = [
  {
    commit: 'c7d9a8f',
    role: 'Software Engineer',
    company: 'Comverse Media, Lahore',
    period: 'Jan 2026 – Jul 2026',
    desc: 'Own performance engineering, security monitoring, and backend upkeep across a network of 21 international publisher and media platforms. Rolled out caching strategy, script deferral, and layout optimizations at scale, landing perfect desktop and mobile performance-audit scores.',
  },
  {
    commit: 'b4a8e2d',
    role: 'Full-Stack WordPress Developer',
    company: 'X2 Technologies (with Tech Process LLC)',
    period: 'Sep 2025 – Jan 2026',
    desc: 'Developed backend logic, filtering, and routing for usalocalbusinesses.com, a directory platform with custom search and user dashboards. Constructed and scaled a programmatic routing framework generating directory and service sub-pages at volume. Led legacy security remediation — isolated and removed malicious file injections via FTP/SFTP to restore platform stability.',
  },
  {
    commit: 'e8c2f5a',
    role: 'Freelance & Independent Projects',
    company: 'Self-employed',
    period: 'Ongoing',
    desc: 'Architect and deliver full-stack SaaS solutions, managing technical scoping, database design, and end-to-end deployment. Provide consultancy for independent businesses: site infrastructure, hosting migrations, and performance-bottleneck resolution for high-traffic platforms.',
  },
  {
    commit: 'a0e9f1c',
    role: 'Web Developer',
    company: 'Lineup Digital',
    period: 'Mar 2023 – Jan 2025',
    desc: 'Delivered responsive websites from mockups; wrote custom PHP functions and lightweight themes instead of relying on heavy page builders. Tracked down and fixed plugin conflicts, styling bugs, and performance slowdowns; collaborated with design teams through Git.',
  },
];

export default function ExperiencePage() {
  return (
    <div className="py-16 md:py-24 max-w-[800px] mx-auto px-6">
      {/* Title */}
      <ScrollReveal className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-purple)' }} />
          <p className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
            // git_history.log
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          My professional history
        </h1>
        <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
          A history of engineering backend SaaS platforms, setting up cloud pipelines, and building freelance products.
        </p>
        <a
          href="/Ali_Hamza_CV.pdf"
          download="Ali_Hamza_CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all bg-accent-cyan cursor-pointer"
          style={{ background: 'var(--accent-cyan)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-mono)' }}
        >
          <FileDown size={16} /> Download CV / Resume
        </a>
      </ScrollReveal>

      {/* Vertical Git commit timeline */}
      <div className="relative border-l-2 ml-4 pl-8 space-y-12" style={{ borderColor: 'var(--border-variant)' }}>
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.role + i} delay={i * 0.05} className="relative">
            {/* Timeline node marker (Git Commit Node) */}
            <span
              className="absolute -left-[45px] top-1.5 w-6 h-6 rounded-full border-4 bg-background flex items-center justify-center transition-all duration-300 hover:scale-125"
              style={{ borderColor: 'var(--accent-cyan)' }}
            >
              <GitCommit size={12} style={{ color: 'var(--accent-cyan)' }} />
            </span>

            <div className="card p-6 bg-surface border-variant shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <span className="text-xs font-mono font-bold bg-ground border px-2 py-0.5 rounded" style={{ borderColor: 'var(--border-variant)', color: 'var(--accent-cyan)' }}>
                    commit {exp.commit}
                  </span>
                  <span className="text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>&middot;</span>
                  <Building size={16} style={{ color: 'var(--text-secondary)' }} />
                  <span className="text-sm font-bold">{exp.company}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                {exp.role}
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {exp.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
