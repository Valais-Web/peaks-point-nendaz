import { Home, Users, Sparkles, Wrench, FileText, Shield } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection = ({ lang }: ServicesSectionProps) => {
  const t = getTranslation(lang);

  const services = [
    { icon: Home, ...t.services.rental },
    { icon: Users, ...t.services.guest },
    { icon: Sparkles, ...t.services.cleaning },
    { icon: Wrench, ...t.services.maintenance },
    { icon: FileText, ...t.services.admin },
    { icon: Shield, ...t.services.owner },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-foreground mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
