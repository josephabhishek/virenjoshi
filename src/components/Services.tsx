import * as Icons from 'lucide-react';
import { Phone, MessageCircle, ArrowRight, Sparkles, type LucideIcon } from 'lucide-react';
import { SERVICES, CONTACT } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" ref={ref} className="relative bg-cream bg-grain py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
            What I Help With
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-primary-900 leading-tight">
            Areas of Guidance
          </h2>
          <p className="mt-4 text-ink/60 text-base sm:text-lg leading-relaxed">
            From matters of the heart to family harmony and life direction — every session is tailored to where you stand right now.
          </p>
        </div>

        {/* grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[s.icon] ?? Sparkles;
            return (
              <div
                key={s.title}
                className="reveal group relative rounded-2xl border border-gold-200/70 bg-white p-7 shadow-premium hover:border-gold-400 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-gold-100 text-primary-700 group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-gold-200 transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{s.desc}</p>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 group-hover:text-primary-800 transition-colors"
                >
                  Discuss this
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA band */}
        <div className="reveal mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-950 px-6 py-10 sm:px-12 sm:py-14 text-center shadow-premium relative">
          <div className="absolute inset-0 bg-radial-glow opacity-50" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-4xl font-semibold text-white">
              Discuss Your Problem with <span className="text-gold-gradient">Viren Joshi</span> Today
            </h3>
            <p className="mt-3 text-white/70 max-w-xl mx-auto">
              One conversation can bring clarity. Reach out now — your story stays between us.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow-gold hover:bg-primary-400 transition-colors"
              >
                <Phone className="h-5 w-5" /> {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forest-500 px-7 py-3.5 text-base font-semibold text-white hover:bg-forest-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
