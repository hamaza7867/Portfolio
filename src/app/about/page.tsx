'use client';

import { GraduationCap, Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

const education = [
  {
    degree: 'B.S. Information Engineering Technology',
    school: 'University of Lahore',
    period: 'Oct 2023 – Oct 2027',
    desc: 'CGPA 3.47 / 4.0',
  },
  {
    degree: 'ICS',
    school: 'BISE Lahore',
    period: '2020 – 2022',
    desc: 'Intermediate in Computer Science.',
  },
  {
    degree: 'Matriculation',
    school: 'BISE Lahore',
    period: 'Completed',
    desc: 'Grade A+',
  },
];

const certifications = [
  'The Full Stack — Meta',
  'Intro to Android Dev — Meta',
  'AI For Everyone — DeepLearning.AI',
  'Cybersecurity Essentials — IBM',
  'Basics of Python — UniAthena',
  'WordPress & Freelancing — DigiSkills',
];

const awards = [
  'Certificate of Recognition — QDCAP (Qubit Dynamics)',
  'Certificate of Achievement — Art & Culture',
  'Workshop 3.0, UOL',
  'Certificate of Appreciation — Founders Meetup 2025, Brain-Creatives',
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

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 max-w-[1120px] mx-auto px-6 relative z-10">
      {/* Background Dot-Grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0 opacity-40" />

      {/* Page Title */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 border border-primary/20 rounded">
            [ INITIALIZING_BIO ]
          </span>
          <div className="h-[1px] flex-grow border-t border-dashed border-border" />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          JOURNEY &amp; <span className="text-primary italic">VALUES.</span>
        </h1>
        <p className="text-base sm:text-lg mb-12 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          A ledger of academic accomplishments, industry credentials, and personal software milestones that build up my core backend specialization.
        </p>
      </ScrollReveal>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 relative z-10">
        {/* Core Summary */}
        <ScrollReveal className="lg:col-span-7 space-y-6">
          <div className="card p-8 bg-surface">
            <span className="text-xs font-mono text-slate-400 block mb-4">/* Professional Statement */</span>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border border-[var(--accent-cyan)] shadow-[0_0_15px_rgba(33,150,243,0.2)] flex-shrink-0">
                <img 
                  src="/ali-profile.jpeg" 
                  alt="Ali Hamza" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
                  Full-Stack web & WordPress Developer focused on backend systems and SaaS product architecture. Built Voxis, a multi-tenant voice-automation platform with a sub-400ms real-time pipeline, and Voiceovers Digital, a long-form AI narration SaaS. Shipped a low-latency Go microservice on Google Cloud Run and an open-source WordPress plugin with its own Astro marketing site.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
                  Comfortable owning a project end to end — architecture, backend logic, API design, containerization, and deployment — and increasingly works alongside AI coding agents to speed up implementation while keeping design decisions, code review, and system architecture in his own hands.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education & Certs */}
        <ScrollReveal className="lg:col-span-5 space-y-6" delay={0.1}>
          {/* Education Card */}
          <div className="card p-6 bg-surface">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-ground text-primary">
                  <GraduationCap size={18} />
                </span>
                <h3 className="text-base font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                  Education
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400">[01]</span>
            </div>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 pl-4 border-dashed border-border">
                  <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{edu.degree}</p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    {edu.school} &middot; {edu.period}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="card p-6 bg-surface">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-ground text-primary">
                  <ShieldCheck size={18} />
                </span>
                <h3 className="text-base font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                  Certifications
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400">[02]</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((cert) => (
                <p key={cert} className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  {cert}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Awards section */}
      <ScrollReveal className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 border border-primary/20 rounded">
            [ AWARDS_LIST ]
          </span>
          <div className="h-[1px] flex-grow border-t border-dashed border-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {awards.map((award) => (
            <div key={award} className="card p-5 bg-surface flex items-center gap-3">
              <Award size={18} className="text-primary flex-shrink-0" />
              <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{award}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Managed Sites section */}
      <ScrollReveal className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 border border-primary/20 rounded">
            [ WORDPRESS_REGISTRY ]
          </span>
          <div className="h-[1px] flex-grow border-t border-dashed border-border" />
        </div>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          Managed Sites &amp; Blogs
        </h2>
        <p className="text-sm mb-10 max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          A list of business portals, ecommerce directories, and content sites where I have improved performance, optimized databases, or customized theme architectures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {websites.map((site) => (
            <a
              key={site.url}
              href={`https://${site.url.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex justify-between items-center bg-surface group hover:translate-x-1 transition-all duration-200"
            >
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{site.name}</p>
                <p className="text-xs uppercase font-bold tracking-wider mt-1" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  {site.category}
                </p>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded text-primary">
                <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
