export enum Language {
  EN = 'EN',
  FR = 'FR',
  IT = 'IT',
  ES = 'ES',
  AR = 'AR'
}

export interface Content {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    features: string;
    pricing: string;
    faq: string;
    contact: string;
    tryNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    status: string;
  };
  partners: {
    title: string;
  };
  showcase: {
    title: string;
    subtitle: string;
    category_movies: string;
    category_series: string;
    included_badge: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  supportedDevices: {
    title: string;
    subtitle: string;
    items: string[];
  };
  pricing: {
    title: string;
    paymentTitle: string;
    plans: {
      name: string;
      price: string;
      period: string;
      features: string[];
      button: string;
      recommended?: boolean;
    }[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  support: {
    title: string;
    desc: string;
    button: string;
  };
  footer: {
    rights: string;
    quickLinks: string;
    legal: string;
  };
}