import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const AgenceGestionLocativeNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Agence Gestion Locative Nendaz | Peaks Point",
        description: "Agence de gestion locative à Nendaz, Valais. Peaks Point : expertise locale, gestion complète de chalets et appartements, revenus optimisés.",
        canonicalUrl: "/fr/agence-gestion-locative-nendaz",
        alternateUrl: "/en/property-management-nendaz",
        keyword: "agence gestion locative Nendaz",
      }}
      hero={{
        title: "Agence gestion locative à Nendaz",
        description: "Peaks Point, agence de gestion locative basée à Nendaz. Nous gérons votre bien immobilier avec l'expertise locale et le professionnalisme qu'il mérite.",
      }}
      content={{
        intro: "Une agence de gestion locative à Nendaz doit combiner expertise immobilière, connaissance du terrain et service client irréprochable. Peaks Point réunit ces qualités pour offrir aux propriétaires une gestion locative complète, performante et transparente.",
        sections: [
          {
            title: "Notre approche de la gestion locative",
            content: "Nous considérons chaque bien comme unique. Notre approche personnalisée commence par une analyse de votre propriété et de vos objectifs. Ensuite, nous définissons ensemble la stratégie la plus adaptée : location courte durée, longue durée, ou mixte selon les saisons.",
          },
          {
            title: "Performance et optimisation des revenus",
            content: "Notre objectif est de maximiser vos revenus locatifs sur l'année complète. Cela passe par une tarification intelligente, une commercialisation efficace et une minimisation des périodes de vacance. Nous suivons les indicateurs de performance et ajustons notre stratégie en conséquence.",
          },
          {
            title: "Qualité de service et satisfaction",
            content: "La réputation de votre bien dépend de l'expérience des locataires. Nous veillons à maintenir un niveau de service élevé : accueil professionnel, réactivité en cas de problème, propreté irréprochable. Cette qualité se traduit par de bonnes évaluations et une meilleure attractivité.",
          },
          {
            title: "Transparence et communication",
            content: "Vous êtes informé régulièrement de l'activité de votre bien. Rapports de performance, relevés financiers, comptes-rendus d'intervention : nous pratiquons une transparence totale. Votre interlocuteur dédié est disponible pour répondre à toutes vos questions.",
          },
        ],
        benefits: [
          "Analyse personnalisée de votre bien et de vos objectifs",
          "Stratégie locative sur mesure",
          "Commercialisation professionnelle",
          "Gestion des réservations et du calendrier",
          "Accueil et relation locataires",
          "Entretien et maintenance",
          "Gestion administrative et financière",
          "Reporting régulier et transparent",
          "Interlocuteur dédié basé à Nendaz",
        ],
      }}
    />
  );
};

export default AgenceGestionLocativeNendaz;
