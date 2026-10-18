import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const message = String(data.get('message') || '');
    const text = `Hello Viren Joshi,%0A%0AName: ${encodeURIComponent(name)}%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, '_blank');
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* left: info */}
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
              Get in Touch
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-primary-900 leading-tight">
              Let's talk through what's weighing on you
            </h2>
            <p className="mt-4 text-ink/65 text-base sm:text-lg leading-relaxed">
              Reach out by phone, WhatsApp, or the form. Viren ji personally reads every message
              and responds with care. Your details stay private.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-gold-200/70 bg-cream p-4 sm:p-5 hover:border-primary-400 hover:shadow-premium transition-all"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700 text-white shadow-premium group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink/50">Call</span>
                  <span className="block font-display text-lg font-semibold text-primary-900">
                    {CONTACT.phone}
                  </span>
                </span>
              </a>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gold-200/70 bg-cream p-4 sm:p-5 hover:border-forest-500 hover:shadow-premium transition-all"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-white shadow-premium group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink/50">WhatsApp</span>
                  <span className="block font-display text-lg font-semibold text-primary-900">
                    Chat instantly
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-gold-200/70 bg-cream p-4 sm:p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white shadow-premium">
                  <Mail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink/50">Email</span>
                  <span className="block font-display text-lg font-semibold text-primary-900">
                    {CONTACT.email}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gold-200/70 bg-cream p-4 sm:p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-700 text-white shadow-premium">
                  <MapPin className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink/50">Location</span>
                  <span className="block font-display text-lg font-semibold text-primary-900">
                    {CONTACT.location}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-gold-200/70 bg-cream p-6 sm:p-8 shadow-premium"
            >
              <h3 className="font-display text-2xl font-semibold text-primary-900">
                Send a Message
              </h3>
              <p className="mt-1 text-sm text-ink/55">
                Fill this in and it opens in WhatsApp, ready to send.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">Your Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="e.g. Ananya"
                    className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">Phone (optional)</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 ..."
                    className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    What would you like to discuss?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Share briefly what's on your mind..."
                    className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-700 px-6 py-4 text-base font-semibold text-white shadow-premium hover:bg-primary-800 transition-colors active:scale-[0.98]"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </button>

              {sent && (
                <p className="mt-4 flex items-center gap-2 rounded-xl bg-forest-50 text-forest-700 px-4 py-3 text-sm">
                  <CheckCircle2 className="h-5 w-5" />
                  Opening WhatsApp with your message...
                </p>
              )}

              <p className="mt-4 text-center text-xs text-ink/45">
                By sending, you agree to be contacted regarding your query. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
