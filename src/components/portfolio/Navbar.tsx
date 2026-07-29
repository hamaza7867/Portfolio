'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon, FileDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const isDark = theme === 'dark';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <nav
        className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between transition-all duration-300"
        style={{
          ...(scrolled
            ? {
                background: isDark ? 'rgba(15, 20, 24, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border-variant)',
              }
            : {}),
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="flex size-9 items-center justify-center rounded-lg font-bold transition-transform duration-200 group-hover:scale-105"
            style={{
              background: 'var(--accent-cyan)',
              color: '#FFFFFF',
            }}
          >
            AH
          </div>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--text)' }}
          >
            Ali Hamza
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm relative pb-1 transition-colors mono tracking-wide font-medium"
                style={{
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px]"
                    style={{ background: 'var(--accent-cyan)', borderRadius: '1px' }}
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-surface-2 cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition-all cursor-pointer"
            style={{
              background: 'var(--accent-cyan)',
              color: 'var(--primary-foreground)',
              border: '1px solid #1E293B',
              borderRadius: '6px',
            }}
          >
            Hire me
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer"
            style={{ color: 'var(--text)' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 px-6 py-6"
            style={{
              background: isDark ? 'rgba(15, 20, 24, 0.97)' : 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border-variant)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base font-medium transition-colors"
                  style={{
                    color: pathname === link.href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] mt-2 cursor-pointer"
                style={{
                  background: 'var(--accent-cyan)',
                  color: 'var(--primary-foreground)',
                  border: '1px solid #1E293B',
                  borderRadius: '6px',
                }}
              >
                Hire me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
