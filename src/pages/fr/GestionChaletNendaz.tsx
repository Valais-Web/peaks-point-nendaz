import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const GestionChaletNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Gestion Chalet Nendaz | Peaks Point - Gestion de Chalets",
        description: "Gestion de chalet à Nendaz par Peaks Point. Service complet de gestion locative, entretien et conciergerie pour votre chalet en Valais.",
        canonicalUrl: "/fr/gestion-chalet-nendaz",
        alternateUrl: "/en/chalet-management-nendaz",
        keyword: "gestion chalet Nendaz",
      }}
      hero={{
        title: "Gestion chalet à Nendaz",
        description: "Déléguer la gestion de votre chalet à Nendaz à une équipe locale expérimentée. Location, entretien, conciergerie : un seul interlocuteur pour tout.",
      }}
      content={{
        intro: "La gestion d'un chalet à Nendaz demande du temps, des compétences et une présence locale. Que vous souhaitiez louer votre bien ou simplement le maintenir en parfait état pour vos séjours, Peaks Point vous offre une solution de gestion complète et adaptée à vos objectifs.",
        sections: [
          {
            title: "Gestion locative de votre chalet",
            content: "Si vous souhaitez rentabiliser votre chalet, nous prenons en charge l'intégralité du processus locatif. Création des annonces, gestion des réservations, accueil des voyageurs, nettoyage, maintenance : vous n'avez aucune tâche opérationnelle à gérer. Notre connaissance du marché local vous garantit une stratégie adaptée.",
          },
          {
            title: "Entretien et maintenance",
            content: "Un chalet de montagne nécessite une attention particulière. Nous assurons l'entretien régulier : vérification des installations, préparation avant et après l'hiver, coordination des interventions techniques. Notre réseau d'artisans locaux de confiance intervient rapidement en cas de besoin.",
          },
          {
            title: "Surveillance et sécurité",
            content: "Votre chalet est surveillé même en votre absence. Inspections régulières, contrôle des systèmes (chauffage, électricité, plomberie), prévention des dégâts liés au gel ou à l'humidité. Nous vous alertons immédiatement en cas de problème et coordonnons les interventions nécessaires.",
          },
          {
            title: "Préparation de vos séjours personnels",
            content: "Quand vous décidez de venir profiter de votre chalet, tout est prêt. Chauffage activé, réfrigérateur garni selon vos souhaits, linge de maison frais : vous n'avez qu'à poser vos valises et profiter. C'est cela aussi, la gestion de chalet par Peaks Point.",
          },
        ],
        benefits: [
          "Gestion locative complète (courte ou longue durée)",
          "Commercialisation multi-plateformes optimisée",
          "Accueil et suivi des locataires",
          "Entretien intérieur et extérieur du chalet",
          "Maintenance préventive et curative",
          "Surveillance régulière du bien",
          "Préparation personnalisée pour vos séjours",
          "Gestion administrative (contrats, cautions, encaissements)",
          "Reporting transparent et régulier",
        ],
      }}
    />
  );
};

export default GestionChaletNendaz;
