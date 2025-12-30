import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const ConciergerieNendaz = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Conciergerie Nendaz | Peaks Point - Services de Conciergerie",
        description: "Service de conciergerie à Nendaz, Valais. Peaks Point offre une conciergerie complète pour propriétaires : accueil, entretien, gestion de votre bien.",
        canonicalUrl: "/fr/conciergerie-nendaz",
        alternateUrl: "/en/concierge-service-nendaz",
        keyword: "conciergerie Nendaz",
      }}
      hero={{
        title: "Conciergerie à Nendaz",
        description: "Un service de conciergerie sur mesure pour votre propriété à Nendaz. Accueil des voyageurs, entretien du bien, coordination des prestataires : nous sommes votre point de contact unique.",
      }}
      content={{
        intro: "La conciergerie à Nendaz va au-delà de la simple gestion locative. C'est un service personnalisé qui prend en charge tous les aspects de votre propriété, que vous louiez à court terme, à long terme, ou que vous souhaitiez simplement que votre résidence secondaire soit prête à vous accueillir à tout moment.",
        sections: [
          {
            title: "Un service adapté à vos besoins",
            content: "Chaque propriétaire a des attentes différentes. Notre service de conciergerie s'adapte à votre situation : gestion locative complète, simple surveillance du bien, préparation avant vos séjours personnels, ou combinaison de ces services. Nous définissons ensemble le niveau d'accompagnement qui vous convient.",
          },
          {
            title: "Accueil et relation voyageurs",
            content: "L'accueil est un moment clé de l'expérience locative. Notre équipe assure des check-in personnalisés, présente le logement et ses équipements, fournit des recommandations locales et reste disponible tout au long du séjour pour répondre aux questions et résoudre les éventuels problèmes.",
          },
          {
            title: "Entretien et surveillance",
            content: "Votre bien mérite une attention régulière. Nous effectuons des inspections périodiques, coordonnons les interventions d'entretien (jardinage, déneigement, petites réparations), surveillons les installations techniques et vous alertons en cas de besoin. La hors-saison est particulièrement importante pour préserver votre investissement.",
          },
          {
            title: "Coordination des prestataires",
            content: "Artisans, entreprises de nettoyage, jardiniers, techniciens : nous gérons l'ensemble des intervenants pour vous. Un seul numéro à appeler, un seul interlocuteur qui connaît votre bien et coordonne toutes les prestations nécessaires.",
          },
        ],
        benefits: [
          "Accueil personnalisé des voyageurs et locataires",
          "Check-in et check-out flexibles",
          "Inspections régulières de votre propriété",
          "Coordination des interventions d'entretien",
          "Gestion des urgences et problèmes techniques",
          "Préparation du bien avant vos séjours personnels",
          "Surveillance hors-saison",
          "Interface unique avec tous les prestataires",
          "Disponibilité et réactivité locale",
        ],
      }}
    />
  );
};

export default ConciergerieNendaz;
