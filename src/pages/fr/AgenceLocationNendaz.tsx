import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const AgenceLocationNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Agence de Location Nendaz | Peaks Point - Agence Locative",
        description: "Agence de location à Nendaz spécialisée dans la gestion locative de chalets et appartements. Peaks Point : votre partenaire local de confiance.",
        canonicalUrl: "/fr/agence-location-nendaz",
        alternateUrl: "/en/property-management-nendaz",
        keyword: "agence de location Nendaz",
      }}
      hero={{
        title: "Agence de location à Nendaz",
        description: "Peaks Point, votre agence de location locale à Nendaz. Expertise du marché valaisan, gestion professionnelle, proximité et réactivité pour votre bien.",
      }}
      content={{
        intro: "Choisir une agence de location pour gérer votre bien à Nendaz est une décision importante. Peaks Point combine l'expertise du marché local, la rigueur professionnelle et la proximité nécessaire pour une gestion locative efficace. Nous sommes basés à Nendaz et connaissons intimement le territoire.",
        sections: [
          {
            title: "Une agence ancrée localement",
            content: "Notre équipe vit et travaille à Nendaz. Nous connaissons la station, ses quartiers, ses spécificités. Cette proximité nous permet de réagir rapidement, de comprendre les attentes des locataires et d'anticiper les besoins de maintenance liés à l'environnement montagnard.",
          },
          {
            title: "Expertise du marché locatif valaisan",
            content: "Le marché de la location à Nendaz a ses propres dynamiques : double saisonnalité, clientèle internationale, concurrence avec d'autres stations. Nous analysons ces facteurs pour positionner votre bien de manière optimale et maximiser vos revenus sur l'année complète.",
          },
          {
            title: "Gestion complète et transparente",
            content: "En tant qu'agence de location, nous gérons l'ensemble du processus : évaluation du bien, définition de la stratégie, commercialisation, gestion des locataires, entretien, administration. Vous bénéficiez d'un reporting clair et régulier sur les performances.",
          },
          {
            title: "Un partenariat sur le long terme",
            content: "Nous ne cherchons pas des clients ponctuels, mais des partenariats durables. La protection de votre investissement sur le long terme guide toutes nos décisions. Nous gérons votre bien comme s'il était le nôtre.",
          },
        ],
        benefits: [
          "Évaluation gratuite de votre bien",
          "Conseil sur le positionnement tarifaire",
          "Commercialisation professionnelle multi-canaux",
          "Gestion des réservations et du calendrier",
          "Accueil et suivi des locataires",
          "Entretien et maintenance régulière",
          "Gestion administrative complète",
          "Reporting mensuel détaillé",
          "Interlocuteur unique disponible localement",
        ],
      }}
    />
  );
};

export default AgenceLocationNendaz;
