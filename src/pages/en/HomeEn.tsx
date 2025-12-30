import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { SEOContentSection } from '@/components/sections/SEOContentSection';
import { getTranslation } from '@/lib/i18n';

const HomeEn = () => {
  const t = getTranslation('en');
  const keyword = "property management Nendaz";

  return (
    <Layout lang="en">
      <SEOHead
        title="Property Management Nendaz | Peaks Point - Your Local Partner"
        description="Professional property management in Nendaz, Valais. Peaks Point manages your chalet or apartment: rental, maintenance, concierge. Optimised revenue."
        canonicalUrl="/en"
        alternateUrl="/fr"
        lang="en"
        keyword={keyword}
      />
      
      <HeroSection
        title="Property Management in Nendaz"
        subtitle="Peaks Point"
        description="Your local partner for complete property management. We handle everything for your Valais property: rentals, maintenance, concierge services. Optimised revenue, guaranteed peace of mind."
        ctaText={t.hero.cta}
        ctaLink="/en#contact"
        imageAlt={`${keyword} - Luxury chalet with Swiss Alps mountain view`}
      />
      
      <ServicesSection lang="en" />
      
      <SEOContentSection
        keyword={keyword}
        lang="en"
        title="Why choose Peaks Point for property management in Nendaz?"
        paragraphs={[
          "Property management in Nendaz requires deep local expertise and an on-the-ground presence. Peaks Point, based in the heart of Valais, offers a comprehensive property management service that frees owners from all operational constraints. Our multilingual team (French, English, German, Spanish) manages every aspect of your real estate investment.",
          "Our approach to property management in Nendaz combines revenue optimisation with asset protection. We apply dynamic pricing strategies adapted to alpine seasonality, maximising your occupancy rate in winter and summer alike. Marketing on major platforms (Airbnb, Booking) is optimised to attract discerning international guests.",
          "Choosing Peaks Point for property management in Nendaz means having a single point of contact for rentals, upkeep, maintenance, and concierge services. We coordinate professional cleaning, technical interventions, check-ins and check-outs, giving you complete peace of mind. Your property is in safe hands, and you receive regular reports on its performance."
        ]}
      />
      
      <AboutSection lang="en" />
      <CTASection lang="en" />
    </Layout>
  );
};

export default HomeEn;
