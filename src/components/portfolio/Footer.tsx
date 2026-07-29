'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-surface" style={{ borderColor: 'var(--border-variant)' }}>
      <div className="max-w-[1120px] mx-auto px-6 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg font-bold" style={{ background: 'var(--accent-cyan)', color: '#FFFFFF' }}>
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
                <Github size={16} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-hamza-akbar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border transition-colors hover:border-[var(--accent-cyan)]"
                style={{ borderColor: 'var(--border-variant)', background: 'var(--surface-2)' }}
              >
                <Linkedin size={16} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01e526f6593afde6af?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border transition-colors hover:border-[var(--accent-cyan)]"
                style={{ borderColor: 'var(--border-variant)', background: 'var(--surface-2)' }}
                title="Upwork Profile"
              >
                <Briefcase size={16} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a
                href="https://profiles.wordpress.org/hamaza7867/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border transition-colors hover:border-[var(--accent-cyan)]"
                style={{ borderColor: 'var(--border-variant)', background: 'var(--surface-2)' }}
                title="WordPress Profile"
              >
                <Globe size={16} style={{ color: 'var(--text-secondary)' }} />
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
                  <Mail size={14} /> Hamaza7867@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923048898000" className="flex items-center gap-3 transition-colors hover:text-[var(--accent-cyan)]" style={{ color: 'var(--text-secondary)' }}>
                  <Phone size={14} /> +92 304-8898000
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <MapPin size={14} className="flex-shrink-0" /> Lahore, Punjab, Pakistan
              </li>
            </ul>
            <Link href="/contact" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 mt-5 text-xs font-bold uppercase tracking-wider transition-all border rounded-lg hover:border-[var(--accent-cyan)]" style={{ borderColor: 'var(--border-variant)', color: 'var(--text-secondary)' }}>
              Start a project
            </Link>
          </div>
        </div>
        <hr className="my-10" style={{ borderColor: 'var(--border-variant)' }} />
        <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row" style={{ color: 'var(--text-secondary)' }}>
          <p className="font-mono">&copy; {new Date().getFullYear()} Ali Hamza — Software Engineer</p>
          <p className="font-mono text-[10px] tracking-wider uppercase">Built with Next.js 16 · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
