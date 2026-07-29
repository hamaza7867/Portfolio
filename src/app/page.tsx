'use client';

import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import ParticlesBackground from '@/components/portfolio/ParticlesBackground';
import ScrollReveal from '@/components/portfolio/ScrollReveal';
import Link from 'next/link';

const toolkit = [
  'Go',
  'Python',
  'Django',
  'React',
  'Next.js',
  'PostgreSQL',
  'Docker',
  'Git',
  'REST APIs',
];

const processes = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We scope the goals, targets, and technical parameters. You get an honest project blueprint, timeline, and fixed quote.',
  },
  {
    num: '02',
    title: 'Build in sprints',
    desc: 'Development happens in small, verifiable increments. You can inspect live progress early, with no black boxes or end-of-project surprises.',
  },
  {
    num: '03',
    title: 'Test & deploy',
    desc: 'Code is fully tested, containerized with Docker, and deployed via automated CI/CD to your target cloud with monitoring setup.',
  },
  {
    num: '04',
    title: 'Handover',
    desc: 'You receive clean, documented source code, a visual walkthrough recorded demo, and scheduled post-launch maintenance.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Hero />

      {/* Daily Toolkit band */}
      <section className="border-y bg-surface-2/20 py-8" style={{ borderColor: 'var(--border-variant)' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Daily toolkit
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {toolkit.map((item) => (
                <span key={item} className="text-sm font-semibold tracking-wide" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Work Process timeline */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-[1120px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                How I work
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                A process built for reliable delivery
              </h2>
              <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Clear scope definitions, transparent checkpoints, and zero guesswork at handover.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((proc, i) => (
              <ScrollReveal key={proc.num} delay={i * 0.05} className="flex">
                <div className="card p-7 w-full flex flex-col justify-between bg-surface group transition-all duration-300">
                  <div>
                    <div className="text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      {proc.num}
                    </div>
                    <h3 className="mt-4 text-base font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                      {proc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {proc.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Card band */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-[1120px] mx-auto px-6">
          <ScrollReveal>
            <div className="card relative overflow-hidden p-8 text-center sm:p-14 border-variant bg-surface shadow-xl shadow-slate-100/50">
              <div className="relative z-10">
                <h2 className="mx-auto max-w-xl text-2xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                  Have a project in mind?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Tell me what you're building. I'll get back to you within 24 hours with scoping, a timeline, and a fixed quote.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-1.5 px-6 py-3 text-sm font-bold uppercase tracking-wider cursor-pointer">
                    Start a project
                  </Link>
                  <a href="tel:+923048898000" className="btn-secondary inline-flex items-center gap-1.5 px-6 py-3 text-sm font-bold uppercase tracking-wider cursor-pointer">
                    Call details
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
