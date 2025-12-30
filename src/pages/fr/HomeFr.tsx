import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { SEOContentSection } from '@/components/sections/SEOContentSection';
import { getTranslation } from '@/lib/i18n';

const HomeFr = () => {
  const t = getTranslation('fr');
  const keyword = "gestion locative Nendaz";

  return (
    <Layout lang="fr">
      <SEOHead
        title="Gestion Locative Nendaz | Peaks Point - Votre Partenaire Local"
        description="Gestion locative professionnelle à Nendaz, Valais. Peaks Point gère votre chalet ou appartement : location, entretien, conciergerie. Revenus optimisés."
        canonicalUrl="/fr"
        alternateUrl="/en"
        lang="fr"
        keyword={keyword}
      />
      
      <HeroSection
        title="Gestion locative à Nendaz"
        subtitle="Peaks Point"
        description="Votre partenaire local pour une gestion immobilière complète. Nous prenons en charge l'intégralité de votre bien en Valais : location, entretien, conciergerie. Revenus optimisés, tranquillité garantie."
        ctaText={t.hero.cta}
        ctaLink="/fr#contact"
        imageAlt={`${keyword} - Chalet de luxe avec vue sur les Alpes valaisannes`}
      />
      
      <ServicesSection lang="fr" />
      
      <SEOContentSection
        keyword={keyword}
        lang="fr"
        title="Pourquoi choisir Peaks Point pour votre gestion locative à Nendaz ?"
        paragraphs={[
          "La gestion locative à Nendaz requiert une expertise locale approfondie et une présence sur le terrain. Peaks Point, basé au cœur du Valais, offre un service de gestion locative complet qui libère les propriétaires de toutes les contraintes opérationnelles. Notre équipe multilingue (français, anglais, allemand, espagnol) gère chaque aspect de votre bien immobilier.",
          "Notre approche de la gestion locative à Nendaz combine optimisation des revenus et protection de votre patrimoine. Nous appliquons des stratégies tarifaires dynamiques adaptées à la saisonnalité alpine, maximisant votre taux d'occupation en hiver comme en été. La commercialisation sur les principales plateformes (Airbnb, Booking) est optimisée pour attirer une clientèle internationale exigeante.",
          "Choisir Peaks Point pour votre gestion locative à Nendaz, c'est bénéficier d'un interlocuteur unique pour la location, l'entretien, la maintenance et la conciergerie. Nous coordonnons les nettoyages professionnels, les interventions techniques, les check-in et check-out, vous offrant une tranquillité totale. Votre bien est entre de bonnes mains, et vous recevez des rapports réguliers sur ses performances."
        ]}
      />
      
      <AboutSection lang="fr" />
      <CTASection lang="fr" />
    </Layout>
  );
};

export default HomeFr;
