import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative bg-gradient-to-b from-primary-950 to-primary-900 py-20 sm:py-28 overflow-hidden"
    >
      {/* starfield */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(1.5px 1.5px at 25% 20%, #fcd34d44, transparent), radial-gradient(1px 1px at 75% 40%, #ffffff33, transparent), radial-gradient(1.5px 1.5px at 50% 80%, #fcd34d33, transparent), radial-gradient(1px 1px at 10% 60%, #ffffff22, transparent)',
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Client Voices
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
            Stories of Clarity &amp; Change
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Real words from people who reached out. Shared with permission; names shortened for privacy.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group relative rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10 p-6 hover:border-gold-400/40 hover:bg-white/[0.1] transition-all duration-300"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-gold-400/60" />
              <div className="mt-3 flex gap-0.5 text-gold-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-white/80">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-400/40"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-white/50">{t.place}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs text-white/40">
          Individual experiences vary. Astrology offers guidance, not guaranteed outcomes.
        </p>
      </div>
    </section>
  );
}
