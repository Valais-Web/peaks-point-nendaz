import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroWinter from '@/assets/hero-winter.jpg';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroSection = ({ title, subtitle, description, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWinter}
          alt="Luxury chalet in Nendaz with mountain view"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, hsla(215, 35%, 20%, 0.6) 0%, hsla(215, 35%, 15%, 0.85) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-24">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-4 animate-fade-up opacity-0 font-body">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-primary-foreground mb-6 animate-fade-up opacity-0 delay-100">
            {title}
          </h1>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-up opacity-0 delay-200 font-body">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to={ctaLink} className="group">
                {ctaText}
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
