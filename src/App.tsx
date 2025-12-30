import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// French pages
import HomeFr from "./pages/fr/HomeFr";
import GestionLocationNendaz from "./pages/fr/GestionLocationNendaz";
import GestionAirbnbNendaz from "./pages/fr/GestionAirbnbNendaz";
import ConciergerieNendaz from "./pages/fr/ConciergerieNendaz";
import LocationChaletNendaz from "./pages/fr/LocationChaletNendaz";
import GestionChaletNendaz from "./pages/fr/GestionChaletNendaz";
import ResidenceSecondaireNendaz from "./pages/fr/ResidenceSecondaireNendaz";
import AgenceLocationNendaz from "./pages/fr/AgenceLocationNendaz";
import ImmeubleLocatifValais from "./pages/fr/ImmeubleLocatifValais";
import AgenceGestionLocativeNendaz from "./pages/fr/AgenceGestionLocativeNendaz";

// English pages
import HomeEn from "./pages/en/HomeEn";
import AirbnbManagementNendaz from "./pages/en/AirbnbManagementNendaz";
import ShortTermRentalNendaz from "./pages/en/ShortTermRentalNendaz";
import ChaletManagementNendaz from "./pages/en/ChaletManagementNendaz";
import ConciergeServiceNendaz from "./pages/en/ConciergeServiceNendaz";
import LuxuryChaletNendaz from "./pages/en/LuxuryChaletNendaz";
import HolidayRentalNendaz from "./pages/en/HolidayRentalNendaz";
import ChaletRentalNendaz from "./pages/en/ChaletRentalNendaz";
import SecondHomeNendaz from "./pages/en/SecondHomeNendaz";
import AirbnbConciergeNendaz from "./pages/en/AirbnbConciergeNendaz";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Redirect root to French */}
            <Route path="/" element={<Navigate to="/fr" replace />} />
            
            {/* French Routes */}
            <Route path="/fr" element={<HomeFr />} />
            <Route path="/fr/gestion-location-nendaz" element={<GestionLocationNendaz />} />
            <Route path="/fr/gestion-airbnb-nendaz" element={<GestionAirbnbNendaz />} />
            <Route path="/fr/conciergerie-nendaz" element={<ConciergerieNendaz />} />
            <Route path="/fr/location-chalet-nendaz" element={<LocationChaletNendaz />} />
            <Route path="/fr/gestion-chalet-nendaz" element={<GestionChaletNendaz />} />
            <Route path="/fr/gestion-residence-secondaire-nendaz" element={<ResidenceSecondaireNendaz />} />
            <Route path="/fr/agence-location-nendaz" element={<AgenceLocationNendaz />} />
            <Route path="/fr/gestion-immeuble-locatif-valais" element={<ImmeubleLocatifValais />} />
            <Route path="/fr/agence-gestion-locative-nendaz" element={<AgenceGestionLocativeNendaz />} />
            
            {/* English Routes */}
            <Route path="/en" element={<HomeEn />} />
            <Route path="/en/airbnb-management-nendaz" element={<AirbnbManagementNendaz />} />
            <Route path="/en/short-term-rental-management-nendaz" element={<ShortTermRentalNendaz />} />
            <Route path="/en/chalet-management-nendaz" element={<ChaletManagementNendaz />} />
            <Route path="/en/concierge-service-nendaz" element={<ConciergeServiceNendaz />} />
            <Route path="/en/luxury-chalet-management-nendaz" element={<LuxuryChaletNendaz />} />
            <Route path="/en/holiday-rental-management-nendaz" element={<HolidayRentalNendaz />} />
            <Route path="/en/chalet-rental-nendaz" element={<ChaletRentalNendaz />} />
            <Route path="/en/second-home-management-nendaz" element={<SecondHomeNendaz />} />
            <Route path="/en/airbnb-concierge-nendaz" element={<AirbnbConciergeNendaz />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
