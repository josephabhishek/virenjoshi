import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Faq() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="bg-cream bg-grain py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
            Good to Know
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-primary-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-ink/60">
            Everything you might want to know before reaching out.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal rounded-2xl border border-gold-200/70 bg-white shadow-premium overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-semibold text-primary-900">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-ink/70 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
