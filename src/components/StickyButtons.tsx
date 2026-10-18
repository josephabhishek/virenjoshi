import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/site';

export default function StickyButtons() {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 shadow-[0_-8px_24px_-8px_rgba(26,20,16,0.25)]">
        <a
          href={CONTACT.phoneHref}
          className="flex items-center justify-center gap-2 bg-primary-700 py-4 text-sm font-semibold text-white active:bg-primary-800 transition-colors"
        >
          <Phone className="h-5 w-5" /> Call
        </a>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-forest-600 py-4 text-sm font-semibold text-white active:bg-forest-700 transition-colors"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
      </div>

      {/* Desktop floating buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-forest-500 text-white shadow-glow-gold hover:bg-forest-600 transition-all hover:scale-110"
          aria-label="WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-forest-500 animate-pulse-ring" />
          <MessageCircle className="relative h-7 w-7" />
          <span className="absolute right-16 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-ink opacity-0 group-hover:opacity-100 transition-opacity shadow-premium pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
        <a
          href={CONTACT.phoneHref}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white shadow-premium hover:bg-primary-800 transition-all hover:scale-110"
          aria-label="Call"
        >
          <Phone className="h-7 w-7" />
          <span className="absolute right-16 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-ink opacity-0 group-hover:opacity-100 transition-opacity shadow-premium pointer-events-none">
            Call now
          </span>
        </a>
      </div>
    </>
  );
}
