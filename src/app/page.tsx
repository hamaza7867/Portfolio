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
    desc: 'Development happens in small, verifiable increments. You can inspect live progress early — no black boxes or end-of-project surprises.',
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

function Footer() {
  return (
    <footer className="border-t bg-surface" style={{ borderColor: 'var(--border-variant)' }}>
      <div className="max-w-[1120px] mx-auto px-6 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg font-bold" style={{ background: 'var(--accent-cyan)', color: 'var(--primary-foreground)' }}>
                AH
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--text)' }}>Ali Hamza</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Software engineer building production backend systems, multi-tenant SaaS, REST APIs, and automated DevOps pipelines. Available for projects.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full" style={{ background: 'var(--accent-cyan)', opacity: 0.55 }}></span>
                <span className="relative inline-flex size-2.5 rounded-full" style={{ background: 'var(--accent-cyan)' }}></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Available for work
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/hamaza7867"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border transition-colors hover:border-[var(--accent-cyan)]"
                style={{ borderColor: 'var(--border-variant)', background: 'var(--surface-2)' }}
              >
                <i className="fab fa-github" style={{ color: 'var(--text-secondary)' }}></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ali-hamza-akbar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border transition-colors hover:border-[var(--accent-cyan)]"
                style={{ borderColor: 'var(--border-variant)', background: 'var(--surface-2)' }}
              >
                <i className="fab fa-linkedin-in" style={{ color: 'var(--text-secondary)' }}></i>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>About</Link></li>
              <li><Link href="/projects" className="transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>Work</Link></li>
              <li><Link href="/skills" className="transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>Skills</Link></li>
              <li><Link href="/experience" className="transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>Experience</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:Hamaza7867@gmail.com" className="flex items-center gap-3 transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>
                  <i className="fas fa-envelope w-4 text-center"></i> Hamaza7867@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923048898000" className="flex items-center gap-3 transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>
                  <i className="fas fa-phone w-4 text-center"></i> +92 304-8898000
                </a>
              </li>
              <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                <i className="fas fa-location-dot w-4 text-center"></i> Lahore, Punjab, Pakistan
              </li>
            </ul>
            <Link href="/contact" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 mt-5 text-xs font-bold uppercase tracking-wider transition-all border rounded-lg hover:border-[var(--accent-cyan)]" style={{ borderColor: 'var(--border-variant)', color: 'var(--text-secondary)' }}>
              Start a project
            </Link>
          </div>
        </div>
        <hr className="my-10" style={{ borderColor: 'var(--border-variant)' }} />
        <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row" style={{ color: 'var(--text-secondary)' }}>
          <p className="mono">&copy; {new Date().getFullYear()} Ali Hamza — Software Engineer</p>
          <p className="mono">Built with Next.js 16 · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

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

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4 border border-variant" style={{ background: 'var(--border-variant)' }}>
            {processes.map((proc, i) => (
              <ScrollReveal key={proc.num} delay={i * 0.05} className="flex">
                <div className="p-7 w-full flex flex-col justify-between bg-surface group transition-all duration-300">
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
                  <Link href="/contact" className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg bg-accent-cyan cursor-pointer" style={{ background: 'var(--accent-cyan)', color: 'var(--primary-foreground)', border: '1px solid #1E293B' }}>
                    Start a project
                  </Link>
                  <a href="tel:+923048898000" className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg border cursor-pointer hover:border-[var(--accent-cyan)] transition-colors" style={{ borderColor: 'var(--border-variant)', color: 'var(--text-secondary)' }}>
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
