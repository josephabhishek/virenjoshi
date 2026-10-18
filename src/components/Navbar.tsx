import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT } from '@/data/site';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-premium' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-700 to-primary-900 text-gold-100 shadow-premium">
              <Sparkles className="h-5 w-5 text-gold-300" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg sm:text-xl font-semibold text-primary-900">
                Viren Joshi
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold-700">
                Astrologer
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink/70 hover:text-primary-700 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold-500 after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-4 py-2.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white shadow-premium hover:bg-primary-800 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-900 hover:bg-primary-50 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 bg-cream/98 backdrop-blur-md border-t border-gold-200/60' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              {n.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-forest-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
