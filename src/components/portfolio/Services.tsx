'use client';

import { AppWindow, Cpu, Layout, Cloud, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: AppWindow,
    code: 'class FullStackSaaS implements Service {',
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end development of custom multi-tenant SaaS products, complex workflows, and business dashboards using robust runtimes.',
    techs: ['Go', 'Python (Django)', 'Next.js', 'PostgreSQL'],
  },
  {
    icon: Cpu,
    code: 'class RestAPIEngine implements Service {',
    title: 'REST API Development',
    desc: 'Architecting clean, type-safe REST & WebSockets APIs with standard JSON payloads, robust rate limits, and clear docs.',
    techs: ['Django REST Framework', 'Go Gin', 'Redis', 'WebSockets'],
  },
  {
    icon: Layout,
    code: 'class FrontendClient implements Service {',
    title: 'Frontend Engineering',
    desc: 'Creating high-fidelity, responsive client interfaces matching designs perfectly with rich micro-animations and clean layouts.',
    techs: ['React', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Cloud,
    code: 'class CloudDeployment implements Service {',
    title: 'DevOps & Deployment',
    desc: 'Deploying dockerized services, setting up automated CI/CD runtimes, and configuring Cloudflare caching and Edge worker routers.',
    techs: ['Docker', 'AWS (EC2/S3)', 'Cloud Run', 'Cloudflare Workers'],
  },
  {
    icon: Zap,
    code: 'class PerformanceAudit implements Service {',
    title: 'Performance & Optimization',
    desc: 'Diagnosing frontend layout shifts, reducing main thread blockages, payload compression, and resolving query bottlenecks.',
    techs: ['LCP/INP Audits', 'Asset Bundling', 'Db Indexing', 'Redis Caching'],
  },
  {
    icon: ShieldCheck,
    code: 'class LiveMaintenance implements Service {',
    title: 'Maintenance & Support',
    desc: 'Ongoing site stability management, cleaning up site security breaches, database backups, and third-party API integrations.',
    techs: ['Security Audits', 'API Upgrades', 'Db Migration', 'SSL & DNS'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-surface-2/20 border-y border-variant" style={{ borderColor: 'var(--border-variant)' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-[2px] rounded-full"
              style={{ background: 'var(--accent-purple)' }}
            />
            <p
              className="text-xs uppercase tracking-[0.15em] font-semibold"
              style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}
            >
              Services
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Services I deliver
          </h2>
          <p
            className="text-sm max-w-2xl mb-12"
            style={{ color: 'var(--text-secondary)' }}
          >
            Hire me for a focused piece or own the whole stack end-to-end. Every engagement ships clean, documented, and deployed.
          </p>
        </ScrollReveal>

        <div className="grid gap-px bg-slate-200 overflow-hidden rounded-xl border border-variant sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--border-variant)', borderColor: 'var(--border-variant)' }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.05} className="flex">
                <div className="bg-surface p-7 w-full flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-200">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-xs text-slate-400 font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                        {service.code}
                      </div>
                      <div className="text-[10px] font-semibold text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
                        /* 0{i + 1} */
                      </div>
                    </div>

                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-2.5 text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t" style={{ borderColor: 'var(--border-variant)' }}>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-ground"
                          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
