import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const GestionLocationNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Gestion Location Nendaz | Peaks Point - Gestion Locative",
        description: "Service de gestion location à Nendaz, Valais. Peaks Point optimise la location de votre chalet ou appartement avec une gestion professionnelle complète.",
        canonicalUrl: "/fr/gestion-location-nendaz",
        alternateUrl: "/en/airbnb-management-nendaz",
        keyword: "gestion location Nendaz",
      }}
      hero={{
        title: "Gestion location à Nendaz",
        description: "Confiez-nous la gestion complète de votre location à Nendaz. Notre équipe locale assure la commercialisation, la gestion des voyageurs et l'entretien de votre bien.",
      }}
      content={{
        intro: "La gestion location à Nendaz requiert une connaissance approfondie du marché local et de ses spécificités saisonnières. Peaks Point vous offre un service de gestion locative complet, adapté aux exigences du marché valaisan et aux attentes des propriétaires qui souhaitent déléguer sans compromis.",
        sections: [
          {
            title: "Une commercialisation optimisée pour Nendaz",
            content: "Notre approche de la gestion location repose sur une stratégie tarifaire dynamique. Nous adaptons les prix en fonction de la saisonnalité (hiver, été, entre-saisons), des événements locaux et de la demande en temps réel. Votre bien est diffusé sur les principales plateformes de réservation avec des annonces professionnelles et optimisées.",
          },
          {
            title: "Gestion des voyageurs sans effort",
            content: "De la première demande à la remise des clés, nous gérons l'intégralité de la relation avec vos locataires. Communication réactive, check-in flexible, résolution des problèmes : vous n'avez aucune décision quotidienne à prendre. Notre équipe multilingue (français, anglais, allemand, espagnol) accueille une clientèle internationale.",
          },
          {
            title: "Entretien et maintenance de votre bien",
            content: "La gestion location ne s'arrête pas à la commercialisation. Nous assurons l'entretien régulier de votre propriété : nettoyage professionnel après chaque séjour, inspections périodiques, coordination avec les artisans locaux pour les interventions préventives et curatives. Votre bien est protégé sur le long terme.",
          },
          {
            title: "Transparence et reporting",
            content: "Vous recevez des rapports réguliers sur les performances de votre bien : taux d'occupation, revenus générés, interventions réalisées. Nous croyons en une relation de confiance basée sur la transparence totale. Un seul interlocuteur pour toutes vos questions.",
          },
        ],
        benefits: [
          "Création et optimisation des annonces sur toutes les plateformes",
          "Stratégie tarifaire dynamique adaptée à la saisonnalité",
          "Gestion des réservations et du calendrier",
          "Communication avec les voyageurs (avant, pendant, après)",
          "Coordination check-in / check-out",
          "Nettoyage professionnel et gestion du linge",
          "Inspections régulières et maintenance préventive",
          "Reporting mensuel transparent",
          "Encaissement des loyers et gestion administrative",
        ],
      }}
    />
  );
};

export default GestionLocationNendaz;
