import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface CTASectionProps {
  lang: Language;
}

export const CTASection = ({ lang }: CTASectionProps) => {
  const t = getTranslation(lang);

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-primary-foreground mb-6">{t.cta.title}</h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          {t.cta.description}
        </p>
        <Button variant="hero" size="xl" asChild>
          <a href="mailto:contact@peakspoint.ch" className="group">
            {t.cta.button}
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};
