export interface PageRoute {
  path: string;
  slug: string;
  keyword: string;
  titleFr?: string;
  titleEn?: string;
}

export const frenchRoutes: PageRoute[] = [
  { path: '/fr', slug: 'home', keyword: 'gestion locative Nendaz', titleFr: 'Gestion Locative Nendaz | Peaks Point' },
  { path: '/fr/gestion-location-nendaz', slug: 'gestion-location', keyword: 'gestion location Nendaz', titleFr: 'Gestion Location Nendaz | Peaks Point' },
  { path: '/fr/gestion-airbnb-nendaz', slug: 'gestion-airbnb', keyword: 'gestion Airbnb Nendaz', titleFr: 'Gestion Airbnb Nendaz | Peaks Point' },
  { path: '/fr/conciergerie-nendaz', slug: 'conciergerie', keyword: 'conciergerie Nendaz', titleFr: 'Conciergerie Nendaz | Peaks Point' },
  { path: '/fr/location-chalet-nendaz', slug: 'location-chalet', keyword: 'location chalet Nendaz', titleFr: 'Location Chalet Nendaz | Peaks Point' },
  { path: '/fr/gestion-chalet-nendaz', slug: 'gestion-chalet', keyword: 'gestion chalet Nendaz', titleFr: 'Gestion Chalet Nendaz | Peaks Point' },
  { path: '/fr/gestion-residence-secondaire-nendaz', slug: 'residence-secondaire', keyword: 'gestion résidence secondaire Nendaz', titleFr: 'Gestion Résidence Secondaire Nendaz | Peaks Point' },
  { path: '/fr/agence-location-nendaz', slug: 'agence-location', keyword: 'agence de location Nendaz', titleFr: 'Agence de Location Nendaz | Peaks Point' },
  { path: '/fr/gestion-immeuble-locatif-valais', slug: 'immeuble-locatif', keyword: 'gestion immeuble locatif Valais', titleFr: 'Gestion Immeuble Locatif Valais | Peaks Point' },
  { path: '/fr/agence-gestion-locative-nendaz', slug: 'agence-gestion', keyword: 'agence gestion locative Nendaz', titleFr: 'Agence Gestion Locative Nendaz | Peaks Point' },
];

export const englishRoutes: PageRoute[] = [
  { path: '/en', slug: 'home', keyword: 'property management Nendaz', titleEn: 'Property Management Nendaz | Peaks Point' },
  { path: '/en/airbnb-management-nendaz', slug: 'airbnb-management', keyword: 'Airbnb management Nendaz', titleEn: 'Airbnb Management Nendaz | Peaks Point' },
  { path: '/en/short-term-rental-management-nendaz', slug: 'short-term-rental', keyword: 'short term rental management Nendaz', titleEn: 'Short Term Rental Management Nendaz | Peaks Point' },
  { path: '/en/chalet-management-nendaz', slug: 'chalet-management', keyword: 'chalet management Nendaz', titleEn: 'Chalet Management Nendaz | Peaks Point' },
  { path: '/en/concierge-service-nendaz', slug: 'concierge-service', keyword: 'concierge service Nendaz', titleEn: 'Concierge Service Nendaz | Peaks Point' },
  { path: '/en/luxury-chalet-management-nendaz', slug: 'luxury-chalet', keyword: 'luxury chalet management Nendaz', titleEn: 'Luxury Chalet Management Nendaz | Peaks Point' },
  { path: '/en/holiday-rental-management-nendaz', slug: 'holiday-rental', keyword: 'holiday rental management Nendaz', titleEn: 'Holiday Rental Management Nendaz | Peaks Point' },
  { path: '/en/chalet-rental-nendaz', slug: 'chalet-rental', keyword: 'chalet rental Nendaz', titleEn: 'Chalet Rental Nendaz | Peaks Point' },
  { path: '/en/second-home-management-nendaz', slug: 'second-home', keyword: 'second home management Nendaz', titleEn: 'Second Home Management Nendaz | Peaks Point' },
  { path: '/en/airbnb-concierge-nendaz', slug: 'airbnb-concierge', keyword: 'Airbnb concierge Nendaz', titleEn: 'Airbnb Concierge Nendaz | Peaks Point' },
];

export const allRoutes = [...frenchRoutes, ...englishRoutes];
