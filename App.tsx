import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ContentShowcase from './components/ContentShowcase';
import Features from './components/Features';
import SupportedDevices from './components/SupportedDevices';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Support from './components/Support';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import Intro from './components/Intro';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [showIntro, setShowIntro] = useState(true);
  const content = TRANSLATIONS[lang];

  useEffect(() => {
    // Handle RTL for Arabic
    if (lang === Language.AR) {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }

    // --- SEO ENGINE START ---

    // 1. Update Document Title
    document.title = content.seo.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', content.seo.description);

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', content.seo.keywords);

    // 4. Update Open Graph Data (Dynamic Social Previews)
    const updateMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('og:title', content.seo.title);
    updateMeta('og:description', content.seo.description);
    updateMeta('og:locale', lang.toLowerCase());

    // 5. Inject JSON-LD Schema (Google Rich Snippets)
    // This tells Google: "This is a Product with 4.9 stars and costs 49€"
    let schemaScript = document.querySelector('#schema-json-ld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', 'schema-json-ld');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "RedStream IPTV Premium Subscription",
      "image": "https://ibb.co/rK4kkZmD",
      "description": content.seo.description,
      "brand": {
        "@type": "Brand",
        "name": "RedStream"
      },
      "sku": "IPTV-12M-PREMIUM",
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "EUR",
        "price": "49.00",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    schemaScript.textContent = JSON.stringify(schemaData);

    // --- SEO ENGINE END ---

  }, [lang, content]);

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500 selection:text-white opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <style>{`
            @keyframes fadeIn {
              to { opacity: 1; }
            }
          `}</style>
          <Navbar 
            lang={lang} 
            content={content.nav} 
            onLanguageChange={setLang} 
          />
          <main>
            <Hero content={content.hero} />
            <Partners content={content.partners} />
            <ContentShowcase content={content.showcase} />
            <Features content={content.features} />
            <SupportedDevices content={content.supportedDevices} />
            <Pricing content={content.pricing} />
            <FAQ content={content.faq} />
            <Support content={content.support} />
          </main>
          <Footer content={content.footer} />
          <WhatsAppBtn />
        </div>
      )}
    </>
  );
}

export default App;