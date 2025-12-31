export interface PageRoute {
  path: string;
  slug: string;
  keyword: string;
  name: string;
  titleFr?: string;
  titleEn?: string;
}

export const frenchRoutes: PageRoute[] = [
  { path: '/fr', slug: 'home', keyword: 'gestion locative Nendaz', name: 'Accueil', titleFr: 'Gestion Locative Nendaz | Peaks Point' },
  { path: '/fr/gestion-location-nendaz', slug: 'gestion-location', keyword: 'gestion location Nendaz', name: 'Gestion Location Nendaz', titleFr: 'Gestion Location Nendaz | Peaks Point' },
  { path: '/fr/gestion-airbnb-nendaz', slug: 'gestion-airbnb', keyword: 'gestion Airbnb Nendaz', name: 'Gestion Airbnb Nendaz', titleFr: 'Gestion Airbnb Nendaz | Peaks Point' },
  { path: '/fr/conciergerie-nendaz', slug: 'conciergerie', keyword: 'conciergerie Nendaz', name: 'Conciergerie Nendaz', titleFr: 'Conciergerie Nendaz | Peaks Point' },
  { path: '/fr/location-chalet-nendaz', slug: 'location-chalet', keyword: 'location chalet Nendaz', name: 'Location Chalet Nendaz', titleFr: 'Location Chalet Nendaz | Peaks Point' },
  { path: '/fr/gestion-chalet-nendaz', slug: 'gestion-chalet', keyword: 'gestion chalet Nendaz', name: 'Gestion Chalet Nendaz', titleFr: 'Gestion Chalet Nendaz | Peaks Point' },
  { path: '/fr/gestion-residence-secondaire-nendaz', slug: 'residence-secondaire', keyword: 'gestion résidence secondaire Nendaz', name: 'Gestion Résidence Secondaire Nendaz', titleFr: 'Gestion Résidence Secondaire Nendaz | Peaks Point' },
  { path: '/fr/agence-location-nendaz', slug: 'agence-location', keyword: 'agence de location Nendaz', name: 'Agence de Location Nendaz', titleFr: 'Agence de Location Nendaz | Peaks Point' },
  { path: '/fr/gestion-immeuble-locatif-valais', slug: 'immeuble-locatif', keyword: 'gestion immeuble locatif Valais', name: 'Gestion Immeuble Locatif Valais', titleFr: 'Gestion Immeuble Locatif Valais | Peaks Point' },
  { path: '/fr/agence-gestion-locative-nendaz', slug: 'agence-gestion', keyword: 'agence gestion locative Nendaz', name: 'Agence Gestion Locative Nendaz', titleFr: 'Agence Gestion Locative Nendaz | Peaks Point' },
];

export const englishRoutes: PageRoute[] = [
  { path: '/en', slug: 'home', keyword: 'property management Nendaz', name: 'Home', titleEn: 'Property Management Nendaz | Peaks Point' },
  { path: '/en/airbnb-management-nendaz', slug: 'airbnb-management', keyword: 'Airbnb management Nendaz', name: 'Airbnb Management Nendaz', titleEn: 'Airbnb Management Nendaz | Peaks Point' },
  { path: '/en/short-term-rental-management-nendaz', slug: 'short-term-rental', keyword: 'short term rental management Nendaz', name: 'Short Term Rental Management Nendaz', titleEn: 'Short Term Rental Management Nendaz | Peaks Point' },
  { path: '/en/chalet-management-nendaz', slug: 'chalet-management', keyword: 'chalet management Nendaz', name: 'Chalet Management Nendaz', titleEn: 'Chalet Management Nendaz | Peaks Point' },
  { path: '/en/concierge-service-nendaz', slug: 'concierge-service', keyword: 'concierge service Nendaz', name: 'Concierge Service Nendaz', titleEn: 'Concierge Service Nendaz | Peaks Point' },
  { path: '/en/luxury-chalet-management-nendaz', slug: 'luxury-chalet', keyword: 'luxury chalet management Nendaz', name: 'Luxury Chalet Management Nendaz', titleEn: 'Luxury Chalet Management Nendaz | Peaks Point' },
  { path: '/en/holiday-rental-management-nendaz', slug: 'holiday-rental', keyword: 'holiday rental management Nendaz', name: 'Holiday Rental Management Nendaz', titleEn: 'Holiday Rental Management Nendaz | Peaks Point' },
  { path: '/en/chalet-rental-nendaz', slug: 'chalet-rental', keyword: 'chalet rental Nendaz', name: 'Chalet Rental Nendaz', titleEn: 'Chalet Rental Nendaz | Peaks Point' },
  { path: '/en/second-home-management-nendaz', slug: 'second-home', keyword: 'second home management Nendaz', name: 'Second Home Management Nendaz', titleEn: 'Second Home Management Nendaz | Peaks Point' },
  { path: '/en/airbnb-concierge-nendaz', slug: 'airbnb-concierge', keyword: 'Airbnb concierge Nendaz', name: 'Airbnb Concierge Nendaz', titleEn: 'Airbnb Concierge Nendaz | Peaks Point' },
];

export const allRoutes = [...frenchRoutes, ...englishRoutes];
