import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';

const AirbnbManagementNendaz = () => (
  <ServicePageTemplate
    lang="en"
    seo={{
      title: "Airbnb Management Nendaz | Peaks Point",
      description: "Professional Airbnb management in Nendaz, Valais. Peaks Point maximises your rental income: optimised listings, dynamic pricing, guest services.",
      canonicalUrl: "/en/airbnb-management-nendaz",
      alternateUrl: "/fr/gestion-airbnb-nendaz",
      keyword: "Airbnb management Nendaz",
    }}
    hero={{
      title: "Airbnb Management in Nendaz",
      description: "Maximise your Airbnb rental income in Nendaz. Our local team manages your listing, guests and property with proven expertise.",
    }}
    content={{
      intro: "Short-term rentals on Airbnb represent a significant opportunity for property owners in Nendaz. However, daily management can quickly become time-consuming. Peaks Point handles your entire Airbnb management, from listing creation to guest welcome.",
      sections: [
        { title: "Optimised Airbnb Listing", content: "We create listings that convert. Professional photos, engaging descriptions, highlighting your property's and Nendaz's best features: every detail is designed to attract guests and justify premium rates." },
        { title: "Intelligent Pricing Strategy", content: "Airbnb pricing requires constant attention. We adjust your rates based on ski season, summer, school holidays and local events. This dynamic approach maximises your annual revenue while maintaining optimal occupancy." },
        { title: "Guest Welcome & Support", content: "Every guest receives personalised attention. Quick communication, clear instructions, flexible check-in, availability during stays: we ensure a 5-star experience that translates into excellent reviews." },
        { title: "Complete Operational Management", content: "Between stays, our team coordinates professional cleaning, checks the property, restocks consumables and prepares for the next guests. You have nothing to manage day-to-day." },
      ],
      benefits: ["Optimised Airbnb listing with professional photos", "Dynamic pricing adapted to demand and seasonality", "Calendar management and multi-platform sync", "Fast response to guest enquiries", "Personalised check-in and check-out", "Cleaning and property preparation between stays", "Review management and online reputation", "Monthly performance reporting", "Support for any issues during stays"],
    }}
  />
);
export default AirbnbManagementNendaz;
