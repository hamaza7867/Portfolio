'use client';

import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Send, Loader2, Briefcase, Globe } from 'lucide-react';
import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Hamaza7867@gmail.com', href: 'mailto:Hamaza7867@gmail.com', accent: '#3B82F6' },
  { icon: Phone, label: 'Phone', value: '+92 304-8898000', href: 'tel:+923048898000', accent: '#8B5CF6' },
  { icon: MapPin, label: 'Location', value: 'Mansoorah, Lahore', href: null, accent: '#10B981' },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ali-hamza-akbar' },
  { icon: Github, label: 'GitHub', url: 'https://github.com/hamaza7867' },
  { icon: Briefcase, label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01e526f6593afde6af?mp_source=share' },
  { icon: Globe, label: 'WordPress', url: 'https://profiles.wordpress.org/hamaza7867/' },
];

const projectTypes = [
  'SaaS App',
  'Web API',
  'DevOps & Deploy',
  'Performance Audit',
  'WordPress',
  'General Inquiry',
];

const budgetRanges = [
  '< $1k',
  '$1k - $3k',
  '$3k - $5k',
  '$5k+',
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState('SaaS App');
  const [selectedBudget, setSelectedBudget] = useState('$1k - $3k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot state
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Load Turnstile script dynamically
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).turnstile && turnstileRef.current) {
        widgetIdRef.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAAEA394KvZ5B8o743',
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (!turnstileToken) {
      toast({
        title: 'Verification Required',
        description: 'Please complete the CAPTCHA verification.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://emailworker.hamaza7867.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          projectType: selectedType,
          budget: selectedBudget,
          message,
          website, // Honeypot payload
          turnstileToken, // CAPTCHA token
        }),
      });

      const data = await response.json() as { success?: boolean; error?: string };

      if (response.ok && data.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you shortly.',
        });
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset turnstile
        if ((window as any).turnstile && widgetIdRef.current) {
          (window as any).turnstile.reset(widgetIdRef.current);
        }
        setTurnstileToken(null);
      } else {
        throw new Error(data.error || 'Failed to send inquiry.');
      }
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-surface-2/20">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-green)' }} />
            <p className="text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>
              Contact
            </p>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Let's work together
          </h2>
          <p className="text-sm max-w-xl mb-14" style={{ color: 'var(--text-secondary)' }}>
            Open to SaaS, backend, and full-stack work. Or just want to connect? My inbox is always open.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — Contact info */}
          <div className="lg:col-span-5 space-y-5">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {};
              return (
                <ScrollReveal key={item.label} delay={i * 0.06}>
                  <Wrapper {...wrapperProps}>
                    <div className="glass-hover p-5 flex items-center gap-4 cursor-pointer">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.accent}12` }}
                      >
                        <item.icon size={18} style={{ color: item.accent }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] mb-0.5" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                          {item.label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.value}</p>
                      </div>
                    </div>
                  </Wrapper>
                </ScrollReveal>
              );
            })}

            {/* Social links */}
            <div className="space-y-3 pt-2">
              {socials.map((social, i) => (
                <ScrollReveal key={social.label} delay={0.2 + i * 0.06}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-hover flex items-center justify-between p-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon size={16} style={{ color: 'var(--text-secondary)' }} />
                      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{social.label}</span>
                    </div>
                    <span className="flex-shrink-0">
                      <ArrowUpRight size={13} style={{ color: 'var(--text-secondary)' }} />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <div className="card p-5 sm:p-8 bg-surface border-variant shadow-lg shadow-slate-100/50">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-6" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Send a message
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-sm outline-none transition-all focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
                      style={{
                        background: 'var(--ground)',
                        border: '1px solid var(--border-variant)',
                        color: 'var(--text)',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@domain.com"
                      className="w-full px-4 py-3 text-sm outline-none transition-all focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
                      style={{
                        background: 'var(--ground)',
                        border: '1px solid var(--border-variant)',
                        color: 'var(--text)',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                </div>

                {/* Honeypot field for spam prevention */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Project Type Selector */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = selectedType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className="px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
                          style={{
                            background: isSelected ? 'var(--accent-cyan)' : 'var(--ground)',
                            color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                            borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-variant)',
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selector */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((budget) => {
                      const isSelected = selectedBudget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className="px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
                          style={{
                            background: isSelected ? 'var(--accent-cyan)' : 'var(--ground)',
                            color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                            borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-variant)',
                          }}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 text-sm outline-none transition-all resize-none focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
                    style={{
                      background: 'var(--ground)',
                      border: '1px solid var(--border-variant)',
                      color: 'var(--text)',
                      borderRadius: '8px',
                    }}
                  />
                {/* Cloudflare Turnstile Verification */}
                <div className="flex justify-start my-4 overflow-hidden w-full origin-left max-w-full scale-[0.85] sm:scale-100">
                  <div ref={turnstileRef} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'var(--accent-cyan)',
                    color: 'var(--primary-foreground)',
                    borderRadius: '8px',
                    border: '1px solid #1E293B'
                  }}
                >
                  {loading ? (
                    <>
                      Sending...
                      <Loader2 className="animate-spin" size={14} />
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
