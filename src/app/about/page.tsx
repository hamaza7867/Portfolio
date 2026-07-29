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
  'The Full Stack | Meta',
  'Intro to Android Dev | Meta',
  'AI For Everyone | DeepLearning.AI',
  'Cybersecurity Essentials | IBM',
  'Basics of Python | UniAthena',
  'WordPress & Freelancing | DigiSkills',
];

const awards = [
  'Certificate of Recognition | QDCAP (Qubit Dynamics)',
  'Certificate of Achievement | Art & Culture',
  'Workshop 3.0, UOL',
  'Certificate of Appreciation | Founders Meetup 2025, Brain-Creatives',
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
        {/* Core Summary (Full Width) */}
        <ScrollReveal className="lg:col-span-12">
          <div className="card p-8 bg-surface">
            <span className="text-xs font-mono text-slate-400 block mb-4">/* Professional Statement */</span>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image with high-tech glowing border */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-[var(--accent-cyan)] shadow-[0_0_20px_rgba(33,150,243,0.25)] flex-shrink-0">
                <img 
                  src="/ali-profile.jpeg" 
                  alt="Ali Hamza" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
                  I am a Full-Stack web & WordPress Developer focused on high-performance backend systems and SaaS product architecture. Over the last 3+ years, I have specialized in building reliable, low-latency applications that solve real-world problems. Whether it is constructing voice-automation pipelines or scaling multi-tenant database infrastructures, I enjoy diving deep into technical challenges.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
                  My flagship project, Voxis, is a multi-tenant voice-dialing platform with a sub-400ms conversational audio pipeline integrating WebRTC and Twilio, running Go microservices on Google Cloud. I also launched Voiceovers Digital, an AI long-form script narration SaaS, and Cyphex Mail, an agency-focused email automation tool.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
                  I believe in shipping clean, documented, and fully tested code. I frequently collaborate with modern AI tools to accelerate development workflows, allowing me to focus on system design, security, and performance-critical pathways.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education (Half Width) */}
        <ScrollReveal className="lg:col-span-6 flex flex-col" delay={0.1}>
          {/* Education Card */}
          <div className="card p-6 bg-surface flex-grow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded bg-ground text-primary">
                    <GraduationCap size={18} />
                  </span>
                  <h2 className="text-base font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                    Education
                  </h2>
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
          </div>
        </ScrollReveal>

        {/* Certifications (Half Width) */}
        <ScrollReveal className="lg:col-span-6 flex flex-col" delay={0.15}>
          {/* Certifications Card */}
          <div className="card p-6 bg-surface flex-grow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded bg-ground text-primary">
                    <ShieldCheck size={18} />
                  </span>
                  <h2 className="text-base font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                    Certifications
                  </h2>
                </div>
                <span className="font-mono text-xs text-slate-400">[02]</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  The Full Stack | Meta
                </a>
                <a href="https://www.coursera.org/learn/introduction-to-android-mobile-application-development" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  Intro to Android Dev | Meta
                </a>
                <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  AI For Everyone | DeepLearning.AI
                </a>
                <a href="https://www.coursera.org/specializations/ibm-cybersecurity-fundamentals-practicum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  Cybersecurity Essentials | IBM
                </a>
                <a href="https://uniathena.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  Basics of Python | UniAthena
                </a>
                <a href="https://www.digiskills.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                  WordPress & Freelancing | DigiSkills
                </a>
              </div>
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
