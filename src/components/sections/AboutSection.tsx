import { MapPin, HandshakeIcon, TrendingUp, Eye } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';
import interiorImage from '@/assets/interior-living.jpg';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = getTranslation(lang);

  const features = [
    { icon: MapPin, ...t.about.local },
    { icon: HandshakeIcon, ...t.about.delegation },
    { icon: TrendingUp, ...t.about.performance },
    { icon: Eye, ...t.about.transparency },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={interiorImage}
                alt="Luxury chalet interior in Nendaz"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-foreground mb-8">{t.about.title}</h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-medium text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
