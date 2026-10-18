import { Sparkles, Phone, MessageCircle, Mail, Heart } from 'lucide-react';
import { CONTACT } from '@/data/site';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white/70 pt-16 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800">
                <Sparkles className="h-5 w-5 text-gold-300" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold text-white">Viren Joshi</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-gold-300">
                  Astrologer
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              Personalized, confidential astrological guidance for love, marriage, and life
              problems. Available online and in person.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-white/60 hover:text-gold-300 transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-300" />
                <a href={CONTACT.phoneHref} className="hover:text-gold-300 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-300" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300 transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Astrologer Viren Joshi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Astrology offers guidance, not guaranteed outcomes · Built with
            <Heart className="h-3.5 w-3.5 text-primary-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
