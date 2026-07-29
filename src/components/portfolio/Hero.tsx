'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  { value: '3+ Years', label: 'Backend Experience', code: 'env.EXP_YEARS >= 3' },
  { value: '30+ Projects', label: 'Shipped & Maintained', code: 'len(db.projects) > 30' },
  { value: 'Go · Python', label: 'Core Language Stack', code: 'import "go", "python"' },
];

export default function Hero() {
  const words = [
    'SaaS products.',
    'backend systems.',
    'WordPress plugins.',
    'WordPress websites.',
    'optimized websites.',
    'scalable APIs.',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24 bg-background">
      {/* Editorial Grid Grid lines background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text column */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border bg-surface text-xs font-semibold"
            style={{ borderColor: 'var(--border-variant)', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            SYSTEMS &middot; DEPLOYED
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] min-h-[100px] sm:min-h-[140px]"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            I build{' '}
            <span style={{ color: 'var(--accent-cyan)' }}>
              {currentText}
            </span>
            <span className="animate-pulse" style={{ color: 'var(--accent-cyan)' }}>|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            I am Ali Hamza, a software engineer specializing in multi-tenant architectures, real-time telephony pipelines, and automated DevOps configurations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider cursor-pointer"
            >
              View Work <ArrowRight size={15} />
            </Link>
            <a
              href="/Ali_Hamza_CV.pdf"
              download="Ali_Hamza_CV.pdf"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider cursor-pointer"
            >
              <FileDown size={15} /> Resume (PDF)
            </a>
          </motion.div>
        </div>

        {/* Visual Code Editor Pane Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 relative w-full rounded-xl border bg-surface shadow-lg overflow-hidden"
          style={{ borderColor: 'var(--border-variant)' }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b bg-ground" style={{ borderColor: 'var(--border-variant)' }}>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60" style={{ fontFamily: 'var(--font-mono)' }}>
              ali_hamza.go
            </span>
            <span className="w-8" />
          </div>

          {/* Code Body */}
          <div className="p-6 text-xs leading-relaxed space-y-1" style={{ fontFamily: 'var(--font-mono)' }}>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">1</span>
              <span><span className="text-blue-600">package</span> main</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">2</span>
              <span><span className="text-blue-600">import</span> <span className="text-emerald-600">&quot;github.com/hamaza7867/ali&quot;</span></span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">3</span>
              <span />
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">4</span>
              <span><span className="text-blue-600">func</span> <span className="text-indigo-600 font-semibold">GetProfile</span>() *Developer &#123;</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">5</span>
              <span>  <span className="text-blue-600">return</span> &amp;Developer&#123;</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">6</span>
              <span>    Name: <span className="text-emerald-600">&quot;Ali Hamza&quot;</span>,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">7</span>
              <span>    Role: <span className="text-emerald-600">&quot;Backend &amp; SaaS Engineer&quot;</span>,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">8</span>
              <span>    Core: []string&#123;<span className="text-emerald-600">&quot;Go&quot;</span>, <span className="text-emerald-600">&quot;Python&quot;</span>, <span className="text-emerald-600">&quot;Docker&quot;</span>&#125;,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">9</span>
              <span>    Status: <span className="text-emerald-600">&quot;Available for freelance/contracts&quot;</span>,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">10</span>
              <span>  &#125;</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-400 select-none w-4 text-right">11</span>
              <span>&#125;</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats container band */}
      <div className="absolute bottom-6 left-0 right-0 max-w-[1120px] mx-auto px-6 hidden md:block">
        <div className="grid grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden" style={{ background: 'var(--border-variant)' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
              className="p-5 bg-surface text-center"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {stat.code}
              </div>
              <div className="text-2xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
