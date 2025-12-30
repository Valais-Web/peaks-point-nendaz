import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const LocationChaletNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Location Chalet Nendaz | Peaks Point - Location de Chalets",
        description: "Location de chalet à Nendaz gérée par Peaks Point. Confiez votre chalet à des experts locaux : commercialisation, accueil, entretien. Revenus optimisés.",
        canonicalUrl: "/fr/location-chalet-nendaz",
        alternateUrl: "/en/chalet-rental-nendaz",
        keyword: "location chalet Nendaz",
      }}
      hero={{
        title: "Location chalet à Nendaz",
        description: "Rentabilisez votre chalet à Nendaz avec une gestion locative professionnelle. Notre équipe locale maximise vos revenus tout en préservant votre propriété.",
      }}
      content={{
        intro: "Posséder un chalet à Nendaz représente un investissement significatif. La location permet de générer des revenus tout en conservant la possibilité de profiter de votre bien. Peaks Point vous accompagne pour transformer votre chalet en source de revenus, sans les contraintes de la gestion quotidienne.",
        sections: [
          {
            title: "Le marché de la location de chalet à Nendaz",
            content: "Nendaz attire une clientèle internationale exigeante, en quête d'authenticité alpine et de confort. La station bénéficie d'une double saisonnalité attractive : ski de qualité en hiver, randonnées et VTT en été. Un chalet bien géré peut atteindre d'excellents taux d'occupation et des revenus significatifs.",
          },
          {
            title: "Valorisation de votre chalet",
            content: "Nous mettons en valeur les atouts uniques de votre chalet : vue sur les montagnes, cheminée, sauna, proximité des pistes ou des sentiers. Des photos professionnelles, des descriptions soignées et un positionnement tarifaire adapté permettent d'attirer une clientèle qualifiée prête à payer le juste prix.",
          },
          {
            title: "Gestion des séjours et des voyageurs",
            content: "De la réservation au départ, chaque étape est prise en charge. Nous gérons les demandes, confirmons les réservations, préparons le chalet, accueillons les voyageurs et assurons le suivi pendant leur séjour. Votre seule préoccupation : consulter les rapports de performance.",
          },
          {
            title: "Préservation de votre investissement",
            content: "Un chalet nécessite un entretien régulier, particulièrement dans un environnement montagnard. Nous veillons à la maintenance préventive, coordonnons les réparations nécessaires et effectuons des contrôles réguliers pour préserver la valeur de votre bien sur le long terme.",
          },
        ],
        benefits: [
          "Étude de marché et conseil sur le positionnement",
          "Photos et vidéos professionnelles de votre chalet",
          "Diffusion sur les principales plateformes de location",
          "Stratégie tarifaire adaptée à la saisonnalité alpine",
          "Accueil personnalisé des locataires",
          "Nettoyage complet et préparation entre chaque séjour",
          "Entretien du jardin et déneigement",
          "Maintenance préventive et coordination des artisans",
          "Reporting régulier sur les performances",
        ],
      }}
    />
  );
};

export default LocationChaletNendaz;
