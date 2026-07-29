'use client';

import { AppWindow, Cpu, Layout, Cloud, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

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

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 max-w-[1120px] mx-auto px-6 relative z-10">
      {/* Background Dot-Grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0 opacity-40" />

      {/* Page Title */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 border border-primary/20 rounded">
            [ INITIALIZING_SERVICES ]
          </span>
          <div className="h-[1px] flex-grow border-t border-dashed border-border" />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          SERVICES &amp; <span className="text-primary italic">SOLUTIONS.</span>
        </h1>
        <p className="text-base sm:text-lg mb-12 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Hire me for a focused piece or own the whole stack end-to-end. Every engagement ships clean, documented, and deployed.
        </p>
      </ScrollReveal>

      {/* Services Grid */}
      <div className="grid gap-px bg-slate-200 overflow-hidden rounded-xl border border-variant sm:grid-cols-2 lg:grid-cols-3 relative z-10" style={{ background: 'var(--border-variant)', borderColor: 'var(--border-variant)' }}>
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
  );
}
