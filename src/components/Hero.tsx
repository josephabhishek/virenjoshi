import { Phone, MessageCircle, Star, ShieldCheck, ChevronDown } from 'lucide-react';
import { CONTACT } from '@/data/site';
import ZodiacWheel from './ZodiacWheel';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950"
    >
      {/* starfield background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 20% 30%, #fcd34d33, transparent), radial-gradient(1px 1px at 70% 20%, #ffffff55, transparent), radial-gradient(1.5px 1.5px at 40% 70%, #fcd34d44, transparent), radial-gradient(1px 1px at 85% 60%, #ffffff44, transparent), radial-gradient(2px 2px at 15% 85%, #fcd34d22, transparent), radial-gradient(1px 1px at 60% 45%, #ffffff33, transparent), radial-gradient(1.5px 1.5px at 90% 15%, #fcd34d33, transparent)',
          backgroundSize: '100% 100%',
        }}
      />

      {/* radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />

      {/* rotating zodiac wheel backdrop */}
      <ZodiacWheel
        size={560}
        className="hidden lg:block absolute -right-40 top-1/2 -translate-y-1/2 text-gold-300/40 animate-spin-slower"
      />
      <ZodiacWheel
        size={340}
        className="lg:hidden absolute -right-24 top-24 text-gold-300/30 animate-spin-slower"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32">
        <div className="max-w-3xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-gold-200 backdrop-blur-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            Trusted Astrological Guidance
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white animate-fade-up">
            Astrologer <span className="text-gold-gradient">Viren Joshi</span>
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl lg:text-3xl text-gold-100/90 italic animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Trusted Guidance for Love, Marriage &amp; Life Problems
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Personalized astrological guidance for your life's challenges. Confidential, compassionate, and grounded in years of practice.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={CONTACT.phoneHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-600 px-7 py-4 text-base font-semibold text-white shadow-glow-gold hover:bg-primary-500 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Phone className="h-5 w-5" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forest-500 px-7 py-4 text-base font-semibold text-white shadow-premium hover:bg-forest-600 transition-all hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* trust pills */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <ShieldCheck className="h-4 w-4 text-gold-300" />
              Confidential Consultations
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Star className="h-4 w-4 text-gold-300" />
              Personalized Guidance
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MessageCircle className="h-4 w-4 text-gold-300" />
              Easy Online Consultation
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#trust"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-200/60 hover:text-gold-200 transition-colors animate-float-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}
