'use client';

import { useState } from 'react';
import { Sparkles, Terminal, Github, ExternalLink, Lock } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

const projects = [
  {
    name: 'AI Pocket Mind',
    tagline: 'Multi-Modal AI Assistant App',
    category: 'AI',
    icon: Sparkles,
    preview: '/projects/pocket-mind.webp',
    desc: 'Designed a Dual AI Core supporting cloud APIs (OpenAI, Groq, Mistral) and local private processing via a custom Desktop Bridge, with biometric security, SQLite-backed local history, and a modular RAG architecture.',
    techs: ['Electron', 'React', 'Node.js', 'SQLite', 'OpenAI', 'Groq', 'Mistral', 'RAG'],
    github: null,
    live: null,
  },
  {
    name: 'AssetPacker.ai',
    tagline: 'Script-to-Media Engine',
    category: 'AI',
    icon: Sparkles,
    preview: '/projects/assetpacker.webp',
    desc: 'Developed a client-side, BYOAPI engine converting text prompts into curated, voiceover-ready video asset bundles via LLM-driven scene segmentation, with a media curation pipeline parallel-searching Pexels and Pixabay by LLM-based ranking.',
    techs: ['React', 'Next.js', 'LLM', 'Pexels API', 'Pixabay API', 'TypeScript'],
    github: null,
    live: 'https://assetpacker.ai',
  },
  {
    name: 'Voiceovers Digital',
    tagline: 'Production-Grade TTS SaaS',
    category: 'SaaS',
    icon: Sparkles,
    preview: '/projects/voiceovers.webp',
    desc: 'Shipped a hyper-realistic TTS platform featuring a high-performance Python/Go ONNX-based microservice and a Cloudflare Workers backend. Designed a React Studio dashboard (Astro/React) allowing creators to convert 60-120 minute scripts into 24kHz WAV narration masters.',
    techs: ['Go', 'Python', 'ONNX', 'React', 'Astro', 'Cloudflare Workers', 'D1 SQLite'],
    github: null,
    live: 'https://voiceovers.digital',
  },
  {
    name: 'Cyphex Mail',
    category: 'SaaS',
    tagline: 'Agency-Focused Multi-Tenant Email Platform',
    icon: Sparkles,
    preview: '/projects/cyphex-mail.webp',
    desc: 'Launched a production-grade email platform with a Next.js web app, React Native mobile client, and edge-deployed Cloudflare Workers for routing. Added AI-assisted reply drafting, mail merge campaigns, follow-ups, and real-time open/click tracking. Integrated team chat on WebSockets, TOTP 2FA, and AES-256-GCM encryption.',
    techs: ['Next.js', 'React Native', 'Cloudflare Workers', 'WebSocket', 'TOTP 2FA', 'AES-256-GCM'],
    github: null,
    live: 'https://mail.cyphex.agency',
  },
  {
    name: 'Cyphex Image Hunter',
    category: 'OSS',
    tagline: 'Open-Source WordPress Plugin + Marketing Site',
    icon: Github,
    preview: '/projects/image-hunter-wp.webp',
    desc: 'Published a free WordPress media-management plugin (stock search, local compression, WebP/AVIF, AI alt text) with 1,114+ downloads. Designed and built the plugin\'s Astro marketing site, including feature pages, use cases, and a documentation-style guide.',
    techs: ['PHP', 'WordPress API', 'Astro', 'OpenAI'],
    github: 'https://github.com/hamaza7867/cyphex-image-hunter',
    live: 'https://wordpress.org/plugins/cyphex-image-hunter',
  },
  {
    name: 'Cyphex Agency',
    tagline: 'Digital Agency Website',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/cyphex-agency.webp',
    desc: 'Built and launched the Cyphex Agency website with custom WordPress theme, service pages, contact forms, and performance-optimized delivery. Serves as the main brand presence for the Cyphex product suite.',
    techs: ['WordPress', 'PHP', 'CSS', 'Performance Optimization'],
    github: null,
    live: 'https://cyphex.agency',
  },
  {
    name: 'USA Local Businesses',
    tagline: 'Business Directory Platform',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/usalocalbusinesses.webp',
    desc: 'Developed backend logic, filtering, and routing for usalocalbusinesses.com, a directory platform with custom search and user dashboards. Constructed and scaled a programmatic routing framework generating directory and service sub-pages at volume.',
    techs: ['WordPress', 'PHP', 'Custom Search', 'MySQL'],
    github: null,
    live: 'https://usalocalbusinesses.com',
  },
  {
    name: 'X2 Technologies',
    tagline: 'Marketing Agency Site',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/x2tech.webp',
    desc: 'Built the X2 Technologies marketing website including service pages, lead capture forms, and blog infrastructure. Worked alongside Tech Process LLC to deliver a performant, SEO-optimised WordPress site.',
    techs: ['WordPress', 'PHP', 'SEO', 'Performance'],
    github: null,
    live: 'https://x2technologies.com',
  },
  {
    name: 'Adrimo Paris',
    tagline: 'Luxury French E-Commerce',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/adrimo.webp',
    desc: 'Delivered a premium Shopify storefront for Adrimo Paris — a French luxury candles and diffusers brand — featuring custom UI design, optimized product pages, speed optimization (90+ mobile Lighthouse), and clean performance-first delivery.',
    techs: ['Shopify', 'Liquid', 'CSS', 'E-Commerce', 'Speed Optimization'],
    github: null,
    live: 'https://adrimo.com',
  },
  {
    name: 'XF Services LLC',
    tagline: 'Digital Marketing & Consult agency',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/xf-services.webp',
    desc: 'Created a high-converting digital marketing and consultancy platform website featuring customized lead generation funnels, service lists, case studies, and performance optimization.',
    techs: ['WordPress', 'PHP', 'CSS', 'Lead Generation'],
    github: null,
    live: 'https://xf-servicesllc.com',
  },
  {
    name: 'Gardening Yard',
    tagline: 'Niche Gardening Publication',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/gardening.webp',
    desc: 'Built a clean, content-first gardening advice portal with custom categorization, layout, and optimized speed metrics for publication delivery.',
    techs: ['WordPress', 'PHP', 'CSS', 'Content Delivery'],
    github: null,
    live: 'https://gardeningyard.com',
  },
  {
    name: 'Emotional Tails',
    tagline: 'Parenting & Lifestyle Blog',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/emotionaltails.webp',
    desc: 'Delivered a beautiful parenting and family-oriented blog layout with interactive article browsing, categorization, and premium design attributes.',
    techs: ['WordPress', 'PHP', 'CSS', 'Blog Layout'],
    github: null,
    live: 'https://emotionaltails.com',
  },
  {
    name: 'All About Hike',
    tagline: 'Hiking & Outdoor Adventure Guide',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/allabouthike.webp',
    desc: 'Developed a responsive blog layout for hiking enthusiasts with advanced filtering for gear guides, navigation tips, and outdoor destinations.',
    techs: ['WordPress', 'PHP', 'SEO', 'Responsive UI'],
    github: null,
    live: 'https://allabouthike.com',
  },
  {
    name: 'Family Guide Base',
    tagline: 'Family Resource & Advice Portal',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/familyguide.webp',
    desc: 'Designed and shipped a child development and family activity advice web portal with optimized layouts and newsletter integrations.',
    techs: ['WordPress', 'PHP', 'CSS', 'Subscription Hub'],
    github: null,
    live: 'https://familyguidebase.com',
  },
  {
    name: 'Eco Grotto',
    tagline: 'Eco-Friendly & Sustainable Living blog',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/ecogrotto.webp',
    desc: 'Constructed an environmental news and sustainable practices blog utilizing modern, content-first typography layouts and fast delivery.',
    techs: ['WordPress', 'PHP', 'SEO', 'Performance Optimization'],
    github: null,
    live: 'https://ecogrotto.com',
  },
  {
    name: 'Web Free World',
    tagline: 'Tech Tips & Digital Safety Guides',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/webfreeworld.webp',
    desc: 'Built an online resource portal documenting smartphone, laptop, and internet safety guides with search capabilities and light/dark interface features.',
    techs: ['WordPress', 'PHP', 'CSS', 'Resource Center'],
    github: null,
    live: 'https://webfreeworld.com',
  },
  {
    name: 'Piecan',
    tagline: 'Cooking & Recipe Directory',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/piecan.webp',
    desc: 'Created an interactive food recipe directory with custom filtering, search functionality, cooking guides, and card design elements.',
    techs: ['WordPress', 'PHP', 'CSS', 'Recipe Schema'],
    github: null,
    live: 'https://piecan.com',
  },
  {
    name: 'Open Gates Farm',
    tagline: 'Sustainable Agriculture Blog',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/opengates.webp',
    desc: 'Shipped a sustainable farming and backyard gardening advice platform with full responsive capabilities and article galleries.',
    techs: ['WordPress', 'PHP', 'CSS', 'Agriculture Theme'],
    github: null,
    live: 'https://opengatesfarm.com',
  },
  {
    name: 'Travel Prides',
    tagline: 'Global Tourism Guide & Blog',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/travelprides.webp',
    desc: 'Engineered an interactive solo and family travel destination directory with budget filters and geolocation tags.',
    techs: ['WordPress', 'PHP', 'CSS', 'Directory Schema'],
    github: null,
    live: 'https://travelprides.com',
  },
  {
    name: 'Prime RAM',
    tagline: 'Tech Reviews & Hardware Comparison Portal',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/primeram.webp',
    desc: 'Published a tech optimization resource website featuring detailed computer upgrade tips, hardware comparisons, and graphics guides.',
    techs: ['WordPress', 'PHP', 'SEO', 'Hardware Database'],
    github: null,
    live: 'https://primeram.com',
  },
  {
    name: 'Fouries',
    tagline: 'Beauty, Style & Fashion Advice',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/fouries.webp',
    desc: 'Launched a fashion-trends and style guide blog with visual highlights, clean grid system layout, and responsive image loading.',
    techs: ['WordPress', 'PHP', 'Liquid', 'Visual Grid'],
    github: null,
    live: 'https://fouries.com',
  },
  {
    name: 'Eats PEI',
    tagline: 'Local Food & Culinary Review Hub',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/eatspei.webp',
    desc: 'Designed and deployed a local culinary hub for Prince Edward Island restaurants featuring menus, food guides, and blog articles.',
    techs: ['WordPress', 'PHP', 'CSS', 'Local SEO'],
    github: null,
    live: 'https://eatspei.com',
  },
  {
    name: 'Canada Telegraph',
    tagline: 'National Lifestyle & Travel Magazine',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/canadatelegraph.webp',
    desc: 'Constructed a comprehensive Canadian seasons, travel, and local heritage blog featuring high-definition photo grids and fast server response times.',
    techs: ['WordPress', 'PHP', 'CSS', 'Magazine Layout'],
    github: null,
    live: 'https://canadatelegraph.com',
  },
  {
    name: 'Furry Vault',
    tagline: 'Pet Health & Grooming Blog',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/furryvault.webp',
    desc: 'Shipped a pet-care publication system providing articles, vet guides, and food reviews with dynamic sorting options.',
    techs: ['WordPress', 'PHP', 'SEO', 'Pet Directory'],
    github: null,
    live: 'https://furryvault.com',
  },
  {
    name: 'Frag Ridge',
    tagline: 'Fragrance & Perfume Directory',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/fragridge.webp',
    desc: 'Built an elegant fragrance and designer cologne review repository listing scent reviews and recommendation lists.',
    techs: ['WordPress', 'PHP', 'CSS', 'Directory Schema'],
    github: null,
    live: 'https://fragridge.com',
  },
  {
    name: 'Gadget Hollow',
    tagline: 'Consumer Electronics & Review Website',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/gadgethollow.webp',
    desc: 'Published an electronic gear guide, accessory review, and gaming resource platform with affiliate schema structures.',
    techs: ['WordPress', 'PHP', 'SEO', 'Affiliate Tools'],
    github: null,
    live: 'https://gadgethollow.com',
  },
  {
    name: 'Homestead Movements',
    tagline: 'Rural Homesteading & Self-Sufficiency blog',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/homestead.webp',
    desc: 'Designed an organic farming, raising livestock, and self-sufficient living blog platform showcasing optimized reading layouts.',
    techs: ['WordPress', 'PHP', 'CSS', 'Blog Theme'],
    github: null,
    live: 'https://homesteadmovements.com',
  },
  {
    name: 'Tech Daily Base',
    tagline: 'AI News & Smart Tech Portal',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/techdaily.webp',
    desc: 'Delivered a daily smart technology, artificial intelligence, and software application review platform website.',
    techs: ['WordPress', 'PHP', 'CSS', 'Tech Schema'],
    github: null,
    live: 'https://techdailybase.com',
  },
  {
    name: 'Fast Speed Internet US',
    tagline: 'Broadband Providers & ISP search directory',
    category: 'Web',
    icon: Terminal,
    preview: '/projects/fastspeed.webp',
    desc: 'Engineered a zip-code based ISP lookup search directory assisting users in finding top high-speed internet providers.',
    techs: ['WordPress', 'PHP', 'MySQL', 'Search Engine'],
    github: null,
    live: 'https://fastspeedinternet.us',
  },
  {
    name: 'Voxis',
    tagline: 'Multi-Tenant Voice Dialer & Lead Intelligence Platform',
    category: 'SaaS',
    icon: Terminal,
    preview: '/projects/voxis/page_dialer.webp',
    desc: 'Architected a multi-tenant voice-automation platform using Django, Angular, and three Go microservices, achieving sub-400ms end-to-end voice latency. Integrated Twilio/Telnyx telephony with a custom WebRTC softphone. Built a 3-tier lead discovery engine (Playwright, Go scraper, Groq AI) and conversational voice pipeline.',
    techs: ['Go', 'Django', 'Angular', 'WebRTC', 'Twilio', 'PostgreSQL', 'Redis', 'Docker', 'AWS EC2'],
    github: null,
    live: null,
  },
];

const categories = ['All', 'SaaS', 'AI', 'OSS', 'Web'];

const sortedProjects = [
  ...projects.filter(p => !p.name.toLowerCase().includes('cyphex')),
  ...projects.filter(p => p.name.toLowerCase().includes('cyphex'))
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? sortedProjects
    : sortedProjects.filter(p => p.category === activeTab);

  return (
    <div className="py-16 md:py-24 max-w-[1120px] mx-auto px-6">
      {/* Title */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-purple)' }} />
          <p className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
            // systems_index.json
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          Projects I&apos;ve shipped
        </h1>
      </ScrollReveal>

      {/* Category Tabs */}
      <ScrollReveal className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => {
          const isSelected = activeTab === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
              style={{
                background: isSelected ? 'var(--accent-purple)' : 'var(--surface)',
                color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                borderColor: isSelected ? 'var(--accent-purple)' : 'var(--border-variant)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {cat}
            </button>
          );
        })}
      </ScrollReveal>

      {/* Projects Grid */}
      <h2 className="sr-only">Project Showcases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((proj, i) => {
          const Icon = proj.icon;
          return (
            <ScrollReveal key={proj.name} delay={i * 0.05} className="flex">
              <div className="card flex flex-col justify-between w-full bg-surface border-variant hover:shadow-lg transition-all duration-300 shadow-sm overflow-hidden rounded-xl">
                {/* Screenshot Preview */}
                {proj.preview ? (
                  <div className="relative w-full h-44 overflow-hidden border-b border-variant">
                    <Image
                      src={proj.preview}
                      alt={`${proj.name} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      priority={i < 2}
                      loading={i >= 2 ? "lazy" : "eager"}
                    />
                  </div>
                ) : (
                  <div
                    className="relative w-full h-44 border-b border-variant flex items-center justify-center"
                    style={{ background: 'var(--surface-2)' }}
                  >
                    <div className="flex flex-col items-center gap-2 opacity-30">
                      <Lock size={28} style={{ color: 'var(--text-tertiary)' }} />
                      <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>Private / Internal</span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-lg bg-surface-2" style={{ color: 'var(--accent-purple)' }}>
                      <Icon size={18} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded"
                      style={{
                        background: 'var(--ground)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-variant)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                    {proj.name}
                  </h3>
                  <p className="text-sm font-semibold mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {proj.tagline}
                  </p>
                  <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
                    {proj.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-variant">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.techs.map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-2.5 py-0.5 rounded" style={{ color: 'var(--text-secondary)', border: '1px solid var(--border-variant)', fontFamily: 'var(--font-mono)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors hover:text-[var(--accent-purple)]"
                          style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}
                        >
                          Visit site <ExternalLink size={13} />
                        </a>
                      )}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors hover:text-[var(--accent-purple)]"
                          style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}
                        >
                          GitHub <Github size={13} />
                        </a>
                      )}
                      {!proj.live && !proj.github && (
                        <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                          <Lock size={13} /> Private enterprise repo
                        </span>
                      )}
                    </div>
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
