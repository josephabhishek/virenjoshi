export const CONTACT = {
  phone: '+91 83849 98484',
  phoneHref: 'tel:+918384998484',
  whatsapp: '918384998484',
  whatsappHref: 'https://wa.me/918384998484?text=Hello%20Viren%20Joshi%2C%20I%20would%20like%20to%20discuss%20a%20personal%20matter.',
  email: 'contact@virenjoshi.com',
  location: 'Online & In-Person Consultation · India',
};

export type Service = {
  icon: string;
  title: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    icon: 'Heart',
    title: 'Love Problems',
    desc: 'Guidance for misunderstandings, fading affection, and one-sided love that feels stuck.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Love Marriage',
    desc: 'Support for couples facing family approval, inter-caste, or commitment concerns.',
  },
  {
    icon: 'Users',
    title: 'Husband-Wife Disputes',
    desc: 'Restore peace, trust, and understanding in your marriage through astrological insight.',
  },
  {
    icon: 'Sparkles',
    title: 'Lost Love Back',
    desc: 'Reconnect with a former partner when the bond still holds meaning for both of you.',
  },
  {
    icon: 'Link',
    title: 'Relationship Problems',
    desc: 'Clarity for drifting connections, repeated conflicts, and emotional distance.',
  },
  {
    icon: 'Home',
    title: 'Family Problems',
    desc: 'Ease household tension, sibling rivalry, and generational differences respectfully.',
  },
  {
    icon: 'Ring',
    title: 'Marriage Problems',
    desc: 'Address delays, compatibility doubts, and post-marriage friction with clarity.',
  },
  {
    icon: 'ScrollText',
    title: 'Kundli Consultation',
    desc: 'Detailed birth-chart analysis for career, health, timing, and life direction.',
  },
  {
    icon: 'Compass',
    title: 'Personal Guidance',
    desc: 'One-on-one sessions for life decisions, crossroads moments, and inner balance.',
  },
];

export type Testimonial = {
  name: string;
  place: string;
  text: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ananya R.',
    place: 'Pune, Maharashtra',
    text: 'The consultation was calm and deeply personal. Viren ji understood our situation without judgment and gave us practical steps. My husband and I are talking again.',
    image: 'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Rohan M.',
    place: 'Ahmedabad, Gujarat',
    text: 'I was skeptical at first, but the kundli reading was remarkably specific. The timing advice he gave me actually lined up with how things unfolded at work.',
    image: 'https://images.pexels.com/photos/9271168/pexels-photo-9271168.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Priya S.',
    place: 'Jaipur, Rajasthan',
    text: 'What I appreciated most was the confidentiality. I could share things I never told anyone. The guidance felt human, not generic predictions.',
    image: 'https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Kavya D.',
    place: 'Bengaluru, Karnataka',
    text: 'After my breakup I felt lost. The session helped me see the pattern in my relationships. I am in a healthier place now and finally at peace.',
    image: 'https://images.pexels.com/photos/31217825/pexels-photo-31217825.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: 'Are the consultations confidential?',
    a: 'Yes, completely. Every conversation — whether on phone, WhatsApp, or in person — is private. Nothing you share is discussed with anyone else.',
  },
  {
    q: 'How do online consultations work?',
    a: 'You can connect over a phone call or WhatsApp. After understanding your concern, Viren ji reviews your birth details and walks you through the reading and suggested steps.',
  },
  {
    q: 'What details do I need to provide?',
    a: 'Typically your date, time, and place of birth for a kundli-based reading. For relationship guidance, a brief description of the situation is enough to begin.',
  },
  {
    q: 'Is there a guarantee that my problem will be solved?',
    a: 'No ethical astrologer can guarantee an outcome. Viren ji offers clarity, perspective, and practical guidance — but your choices and effort remain central to the result.',
  },
  {
    q: 'How long is a typical session?',
    a: 'A first consultation usually runs 30–45 minutes. Follow-up sessions can be shorter and are scheduled as needed.',
  },
  {
    q: 'Do you consult people outside India?',
    a: 'Yes. Online consultations are available for clients worldwide. Time zones are accommodated when booking.',
  },
];
