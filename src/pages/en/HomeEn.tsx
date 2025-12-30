import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { getTranslation } from '@/lib/i18n';

const HomeEn = () => {
  const t = getTranslation('en');

  return (
    <Layout lang="en">
      <SEOHead
        title="Property Management Nendaz | Peaks Point - Your Local Partner"
        description="Professional property management in Nendaz, Valais. Peaks Point manages your chalet or apartment: rental, maintenance, concierge. Optimised revenue."
        canonicalUrl="/en"
        alternateUrl="/fr"
        lang="en"
        keyword="property management Nendaz"
      />
      
      <HeroSection
        title="Property Management in Nendaz"
        subtitle="Peaks Point"
        description="Your local partner for complete property management. We handle everything for your Valais property: rentals, maintenance, concierge services. Optimised revenue, guaranteed peace of mind."
        ctaText={t.hero.cta}
        ctaLink="/en#contact"
      />
      
      <ServicesSection lang="en" />
      <AboutSection lang="en" />
      <CTASection lang="en" />
    </Layout>
  );
};

export default HomeEn;
