import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const ResidenceSecondaireNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Gestion Résidence Secondaire Nendaz | Peaks Point",
        description: "Gestion de résidence secondaire à Nendaz. Peaks Point surveille, entretient et gère votre propriété en Valais. Location optionnelle, tranquillité assurée.",
        canonicalUrl: "/fr/gestion-residence-secondaire-nendaz",
        alternateUrl: "/en/second-home-management-nendaz",
        keyword: "gestion résidence secondaire Nendaz",
      }}
      hero={{
        title: "Gestion résidence secondaire à Nendaz",
        description: "Votre résidence secondaire mérite une attention constante. Peaks Point assure la surveillance, l'entretien et la gestion de votre bien à Nendaz, avec ou sans location.",
      }}
      content={{
        intro: "Posséder une résidence secondaire à Nendaz, c'est profiter des Alpes valaisannes à chaque saison. Mais c'est aussi gérer un bien à distance, avec les défis que cela implique. Peaks Point vous offre la sérénité d'une gestion locale professionnelle, adaptée à votre utilisation du bien.",
        sections: [
          {
            title: "Surveillance et tranquillité d'esprit",
            content: "Votre résidence secondaire est surveillée régulièrement. Nous effectuons des inspections périodiques pour vérifier l'état général, détecter tout problème potentiel et nous assurer que tout fonctionne correctement. En cas d'incident, nous intervenons immédiatement et vous tenons informé.",
          },
          {
            title: "Entretien adapté au rythme des saisons",
            content: "Le climat montagnard impose des contraintes spécifiques. Préparation hivernale, purge des installations avant le gel, déneigement des accès, entretien printanier après la fonte des neiges, jardinage estival : nous adaptons nos interventions au cycle naturel de la montagne.",
          },
          {
            title: "Location pour optimiser votre investissement",
            content: "Si vous le souhaitez, nous pouvons mettre votre résidence secondaire en location pendant vos périodes d'absence. Revenus complémentaires, bien occupé et chauffé régulièrement : la location peut être une option intéressante, gérée selon vos conditions et votre disponibilité personnelle.",
          },
          {
            title: "Préparation de vos séjours",
            content: "Avant chaque visite, votre résidence est préparée selon vos souhaits. Chauffage activé à l'avance, ménage effectué, courses de base réalisées si vous le désirez. Vous arrivez dans un lieu accueillant, prêt à vous recevoir.",
          },
        ],
        benefits: [
          "Inspections régulières de votre propriété",
          "Surveillance des installations techniques",
          "Entretien saisonnier adapté à la montagne",
          "Gestion des urgences et interventions rapides",
          "Préparation personnalisée avant vos séjours",
          "Location optionnelle en votre absence",
          "Coordination avec les prestataires locaux",
          "Gestion du courrier et des démarches administratives",
          "Reporting régulier sur l'état de votre bien",
        ],
      }}
    />
  );
};

export default ResidenceSecondaireNendaz;
