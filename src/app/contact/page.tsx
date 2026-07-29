'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

const projectTypes = [
  'Backend & APIs',
  'SaaS Product',
  'Web App Integration',
  'DevOps & Deployments',
  'Performance Fixes',
];

const budgetRanges = [
  '<$1k',
  '$1k - $3k',
  '$3k - $5k',
  '$5k+',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [selectedType, setSelectedType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setSelectedType('');
      setSelectedBudget('');
    }, 1200);
  };

  return (
    <div className="py-16 md:py-24 max-w-[1120px] mx-auto px-6">
      {/* Title */}
      <ScrollReveal className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] rounded-full" style={{ background: 'var(--accent-cyan)' }} />
          <p className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            // start_project.sh
          </p>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          Let&apos;s build something together
        </h1>
        <p className="text-xs max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Tell me about your product requirements. I will reply within 24 hours with scoping, a timeline, and a fixed quote.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Info panel */}
        <ScrollReveal className="lg:col-span-4 space-y-6">
          <div className="card p-6 bg-surface border-variant">
            <h3 className="text-sm font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
              Direct contact
            </h3>
            <ul className="space-y-4 text-xs">
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
              <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                <MapPin size={14} /> Lahore, Punjab, Pakistan
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Form Panel */}
        <ScrollReveal className="lg:col-span-8" delay={0.1}>
          <form onSubmit={handleSubmit} className="card p-8 bg-surface border-variant space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border bg-ground text-xs transition-all focus:outline-none focus:border-[var(--accent-cyan)]"
                  style={{ borderColor: 'var(--border-variant)', color: 'var(--text)' }}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border bg-ground text-xs transition-all focus:outline-none focus:border-[var(--accent-cyan)]"
                  style={{ borderColor: 'var(--border-variant)', color: 'var(--text)' }}
                />
              </div>
            </div>

            {/* Project Type Selector */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Project Type</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className="px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
                      style={{
                        background: isSelected ? 'var(--accent-cyan)' : 'var(--ground)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                        borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-variant)',
                        fontFamily: 'var(--font-mono)',
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
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Budget Range</label>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((budget) => {
                  const isSelected = selectedBudget === budget;
                  return (
                    <button
                      type="button"
                      key={budget}
                      onClick={() => setSelectedBudget(budget)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
                      style={{
                        background: isSelected ? 'var(--accent-cyan)' : 'var(--ground)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                        borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-variant)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Project Details</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about what you are building, timeline requirements, and functional specifications..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border bg-ground text-xs transition-all focus:outline-none focus:border-[var(--accent-cyan)]"
                style={{ borderColor: 'var(--border-variant)', color: 'var(--text)' }}
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all bg-accent-cyan cursor-pointer"
                style={{ background: 'var(--accent-cyan)', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Inquiry <Send size={12} />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="mt-4 text-xs font-bold text-green-600 flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Thank you! Inquiry sent successfully.
                </p>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
