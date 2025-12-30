export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      gestionLocative: 'Gestion locative',
      gestionAirbnb: 'Gestion Airbnb',
      conciergerie: 'Conciergerie',
      locationChalet: 'Location chalet',
      gestionChalet: 'Gestion chalet',
      residenceSecondaire: 'Résidence secondaire',
      agenceLocation: 'Agence de location',
      immeubleLocatif: 'Immeuble locatif',
    },
    hero: {
      title: 'Gestion locative à Nendaz',
      subtitle: 'Votre partenaire local pour une gestion immobilière sans souci',
      description: 'Peaks Point prend en charge l\'intégralité de la gestion de votre bien en Valais. Revenus optimisés, tranquillité garantie.',
      cta: 'Nous contacter',
    },
    services: {
      title: 'Nos services',
      subtitle: 'Une prise en charge complète de votre bien',
      rental: {
        title: 'Location & Commercialisation',
        description: 'Création d\'annonces optimisées, stratégie tarifaire dynamique, distribution multi-canaux et gestion du calendrier.',
      },
      guest: {
        title: 'Gestion des voyageurs',
        description: 'Communication avec les hôtes, coordination check-in/check-out, gestion des accès et résolution des problèmes.',
      },
      cleaning: {
        title: 'Nettoyage & Entretien',
        description: 'Organisation du ménage professionnel, gestion du linge, contrôle qualité après chaque séjour.',
      },
      maintenance: {
        title: 'Maintenance & Suivi',
        description: 'Inspections régulières, entretien préventif, coordination avec les artisans locaux.',
      },
      admin: {
        title: 'Gestion administrative',
        description: 'Contrats, encaissement des loyers, gestion des cautions, reporting transparent.',
      },
      owner: {
        title: 'Expérience propriétaire',
        description: 'Un seul interlocuteur, aucune décision quotidienne requise, protection de votre investissement.',
      },
    },
    about: {
      title: 'Pourquoi Peaks Point ?',
      local: {
        title: 'Équipe locale',
        description: 'Basés à Nendaz, nous connaissons le marché, la saisonnalité et les spécificités locales.',
      },
      delegation: {
        title: 'Délégation totale',
        description: 'Vous ne gérez rien. Nous nous occupons de tout, du premier contact à la remise des clés.',
      },
      performance: {
        title: 'Performance optimisée',
        description: 'Stratégie tarifaire adaptée à la demande pour maximiser vos revenus annuels.',
      },
      transparency: {
        title: 'Transparence totale',
        description: 'Reporting clair, processus documentés, communication régulière.',
      },
    },
    cta: {
      title: 'Prêt à déléguer la gestion de votre bien ?',
      description: 'Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.',
      button: 'Nous contacter',
    },
    footer: {
      description: 'Gestion locative professionnelle à Nendaz, Valais. Votre partenaire de confiance pour la gestion de chalets et appartements.',
      services: 'Services',
      contact: 'Contact',
      location: 'Nendaz, Valais, Suisse',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      gestionLocative: 'Property Management',
      gestionAirbnb: 'Airbnb Management',
      conciergerie: 'Concierge Service',
      locationChalet: 'Chalet Rental',
      gestionChalet: 'Chalet Management',
      residenceSecondaire: 'Second Home',
      agenceLocation: 'Rental Agency',
      immeubleLocatif: 'Building Management',
    },
    hero: {
      title: 'Property Management in Nendaz',
      subtitle: 'Your local partner for hassle-free property management',
      description: 'Peaks Point handles the complete management of your property in Valais. Optimised revenue, guaranteed peace of mind.',
      cta: 'Get in touch',
    },
    services: {
      title: 'Our services',
      subtitle: 'Complete care for your property',
      rental: {
        title: 'Rental & Marketing',
        description: 'Optimised listings, dynamic pricing strategy, multi-channel distribution and calendar management.',
      },
      guest: {
        title: 'Guest Management',
        description: 'Guest communication, check-in/check-out coordination, access management and issue resolution.',
      },
      cleaning: {
        title: 'Cleaning & Turnover',
        description: 'Professional cleaning organisation, linen management, quality control after each stay.',
      },
      maintenance: {
        title: 'Maintenance & Monitoring',
        description: 'Regular inspections, preventive maintenance, coordination with local craftsmen.',
      },
      admin: {
        title: 'Administrative Management',
        description: 'Contracts, rent collection, deposit handling, transparent reporting.',
      },
      owner: {
        title: 'Owner Experience',
        description: 'Single point of contact, no day-to-day decisions required, asset protection.',
      },
    },
    about: {
      title: 'Why Peaks Point?',
      local: {
        title: 'Local Team',
        description: 'Based in Nendaz, we know the market, seasonality and local specifics.',
      },
      delegation: {
        title: 'Full Delegation',
        description: 'You manage nothing. We handle everything from first contact to key handover.',
      },
      performance: {
        title: 'Optimised Performance',
        description: 'Demand-driven pricing strategy to maximise your annual revenue.',
      },
      transparency: {
        title: 'Complete Transparency',
        description: 'Clear reporting, documented processes, regular communication.',
      },
    },
    cta: {
      title: 'Ready to delegate your property management?',
      description: 'Contact us to discuss your needs and discover how we can support you.',
      button: 'Get in touch',
    },
    footer: {
      description: 'Professional property management in Nendaz, Valais. Your trusted partner for chalet and apartment management.',
      services: 'Services',
      contact: 'Contact',
      location: 'Nendaz, Valais, Switzerland',
      rights: 'All rights reserved.',
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
