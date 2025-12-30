import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const ImmeubleLocatifValais = () => {
  return (
    <ServicePageTemplate
      lang="fr"
      seo={{
        title: "Gestion Immeuble Locatif Valais | Peaks Point",
        description: "Gestion d'immeuble locatif en Valais par Peaks Point. Administration, location, entretien de vos appartements. Solution complète pour propriétaires.",
        canonicalUrl: "/fr/gestion-immeuble-locatif-valais",
        alternateUrl: "/en/property-management-nendaz",
        keyword: "gestion immeuble locatif Valais",
      }}
      hero={{
        title: "Gestion immeuble locatif en Valais",
        description: "Peaks Point gère votre immeuble locatif en Valais. De la recherche de locataires à l'entretien des parties communes, une gestion rigoureuse et transparente.",
      }}
      content={{
        intro: "La gestion d'un immeuble locatif en Valais requiert des compétences spécifiques et une présence locale. Peaks Point propose aux propriétaires une solution de gestion complète, adaptée aux particularités du marché immobilier valaisan et aux exigences réglementaires suisses.",
        sections: [
          {
            title: "Gestion locative de vos appartements",
            content: "Nous prenons en charge la commercialisation de vos appartements, la sélection des locataires, la rédaction des baux et l'encaissement des loyers. Notre processus de sélection rigoureux minimise les risques d'impayés et de litiges. Chaque locataire est choisi avec soin.",
          },
          {
            title: "Entretien des parties communes et privatives",
            content: "L'état d'un immeuble dépend de la qualité de son entretien. Nous coordonnons le nettoyage régulier des parties communes, organisons les interventions de maintenance préventive et gérons les réparations nécessaires. Votre immeuble conserve sa valeur sur le long terme.",
          },
          {
            title: "Administration et conformité",
            content: "La gestion d'un immeuble implique de nombreuses obligations administratives. Nous assurons le suivi des charges, la régularisation annuelle, la gestion des assurances et le respect des normes en vigueur. Vous recevez des rapports réguliers sur la situation de votre bien.",
          },
          {
            title: "Relation avec les locataires",
            content: "Nous sommes l'interface entre vous et vos locataires. Réclamations, demandes, problèmes techniques : notre équipe gère les relations au quotidien, libérant votre temps tout en maintenant une qualité de service élevée.",
          },
        ],
        benefits: [
          "Commercialisation et recherche de locataires",
          "Sélection rigoureuse des candidats",
          "Rédaction et gestion des baux",
          "Encaissement des loyers et suivi des impayés",
          "États des lieux d'entrée et de sortie",
          "Entretien des parties communes et privatives",
          "Coordination des interventions techniques",
          "Gestion des charges et régularisations",
          "Reporting financier régulier",
        ],
      }}
    />
  );
};

export default ImmeubleLocatifValais;
