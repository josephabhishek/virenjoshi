import { Phone, MessageCircle, Quote, CalendarCheck, Globe2, Languages } from 'lucide-react';
import { CONTACT } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';
import ZodiacWheel from './ZodiacWheel';

const STATS = [
  { icon: CalendarCheck, label: '15+ years', sub: 'of practice' },
  { icon: Globe2, label: '5,000+', sub: 'consultations' },
  { icon: Languages, label: 'Hindi · English', sub: 'sessions in' },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* image side */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* decorative ring */}
              <ZodiacWheel
                size={460}
                className="absolute -inset-8 text-gold-400/40 animate-spin-slower"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-premium ring-4 ring-gold-200/60">
                <img
                  src="https://images.pexels.com/photos/17946770/pexels-photo-17946770.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt="Astrologer Viren Joshi"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-premium">
                  <p className="font-display text-xl font-semibold text-primary-900">Viren Joshi</p>
                  <p className="text-sm text-ink/60">Practicing Astrologer · Vedic &amp; Kundali</p>
                </div>
              </div>
              {/* floating quote chip */}
              <div className="absolute -top-4 -left-4 hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400 text-primary-900 shadow-glow-gold rotate-[-8deg]">
                <Quote className="h-7 w-7" />
              </div>
            </div>
          </div>

          {/* text side */}
          <div className="reveal order-1 lg:order-2" style={{ transitionDelay: '120ms' }}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
              About the Astrologer
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-primary-900 leading-tight">
              A calm, practical voice for life's hardest questions
            </h2>
            <div className="mt-6 space-y-4 text-ink/70 text-base sm:text-lg leading-relaxed">
              <p>
                Viren Joshi has spent over fifteen years studying Vedic astrology and the way it
                intersects with everyday human struggles — love that falters, marriages that strain,
                families that drift apart.
              </p>
              <p>
                His approach is not about fear or prediction alone. He reads your chart, listens to
                your story, and helps you see the pattern beneath the confusion — so you can make
                clearer, calmer decisions.
              </p>
              <p>
                Every consultation is confidential and unhurried. Whether you connect by phone or
                WhatsApp, you speak with Viren ji directly.
              </p>
            </div>

            {/* stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gold-200/70 bg-cream p-4 text-center"
                >
                  <s.icon className="h-5 w-5 mx-auto text-primary-700" />
                  <p className="mt-2 font-display text-lg sm:text-xl font-semibold text-primary-900">
                    {s.label}
                  </p>
                  <p className="text-xs text-ink/55">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-700 px-6 py-3.5 text-base font-semibold text-white shadow-premium hover:bg-primary-800 transition-colors"
              >
                <Phone className="h-5 w-5" /> Book a Call
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forest-500 px-6 py-3.5 text-base font-semibold text-white hover:bg-forest-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
