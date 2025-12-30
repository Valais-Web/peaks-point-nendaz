import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { getTranslation } from '@/lib/i18n';

const HomeFr = () => {
  const t = getTranslation('fr');

  return (
    <Layout lang="fr">
      <SEOHead
        title="Gestion Locative Nendaz | Peaks Point - Votre Partenaire Local"
        description="Gestion locative professionnelle à Nendaz, Valais. Peaks Point gère votre chalet ou appartement : location, entretien, conciergerie. Revenus optimisés."
        canonicalUrl="/fr"
        alternateUrl="/en"
        lang="fr"
        keyword="gestion locative Nendaz"
      />
      
      <HeroSection
        title="Gestion locative à Nendaz"
        subtitle="Peaks Point"
        description="Votre partenaire local pour une gestion immobilière complète. Nous prenons en charge l'intégralité de votre bien en Valais : location, entretien, conciergerie. Revenus optimisés, tranquillité garantie."
        ctaText={t.hero.cta}
        ctaLink="/fr#contact"
      />
      
      <ServicesSection lang="fr" />
      <AboutSection lang="fr" />
      <CTASection lang="fr" />
    </Layout>
  );
};

export default HomeFr;
