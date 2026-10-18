import { ShieldCheck, UserCheck, Headset } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Confidential Consultations',
    desc: 'Every conversation stays private. You can share openly, without judgment.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Guidance',
    desc: 'No copied readings. Each session is shaped around your chart and situation.',
  },
  {
    icon: Headset,
    title: 'Easy Online Consultation',
    desc: 'Connect from anywhere by phone or WhatsApp — no travel, no waiting rooms.',
  },
];

export default function Trust() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="trust" ref={ref} className="relative -mt-px bg-cream bg-grain py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="reveal group rounded-2xl border border-gold-200/70 bg-white p-6 sm:p-7 shadow-premium hover:shadow-glow-gold transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-gold-200 shadow-premium group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
