import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Users, Sparkles, Wrench, FileText, Shield, TrendingUp, MapPin, Calendar, Key, CheckCircle } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';
import heroServices from '@/assets/hero-services.png';
import interiorImage from '@/assets/interior-living.jpg';

interface ServicePageTemplateProps {
  lang: Language;
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    alternateUrl: string;
    keyword: string;
  };
  hero: {
    title: string;
    description: string;
  };
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
    benefits: string[];
  };
}

export const ServicePageTemplate = ({ lang, seo, hero, content }: ServicePageTemplateProps) => {
  const t = getTranslation(lang);

  const services = [
    { icon: Home, title: lang === 'fr' ? 'Location & Commercialisation' : 'Rental & Marketing' },
    { icon: Users, title: lang === 'fr' ? 'Gestion des voyageurs' : 'Guest Management' },
    { icon: Sparkles, title: lang === 'fr' ? 'Nettoyage & Entretien' : 'Cleaning & Turnover' },
    { icon: Wrench, title: lang === 'fr' ? 'Maintenance & Suivi' : 'Maintenance & Monitoring' },
    { icon: FileText, title: lang === 'fr' ? 'Gestion administrative' : 'Administrative Management' },
    { icon: Shield, title: lang === 'fr' ? 'Protection du bien' : 'Asset Protection' },
  ];

  return (
    <Layout lang={lang}>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalUrl={seo.canonicalUrl}
        alternateUrl={seo.alternateUrl}
        lang={lang}
        keyword={seo.keyword}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroServices}
            alt={`${seo.keyword} - Peaks Point`}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, hsla(215, 35%, 20%, 0.6) 0%, hsla(215, 35%, 15%, 0.85) 100%)' }}
          />
        </div>

        <div className="container-wide relative z-10 py-24">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 text-lg mb-4 animate-fade-up opacity-0 font-body">
              Peaks Point
            </p>
            <h1 className="text-primary-foreground mb-6 animate-fade-up opacity-0 delay-100">
              {hero.title}
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up opacity-0 delay-200 font-body">
              {hero.description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {content.intro}
                </p>

                {content.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-heading text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}

                {/* SEO Text Block */}
                <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6 my-8">
                  <h3 className="text-xl font-heading text-foreground mb-4">
                    {lang === 'fr' ? `Votre expert en ${seo.keyword}` : `Your expert in ${seo.keyword}`}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lang === 'fr' 
                      ? `Peaks Point est votre partenaire de confiance pour ${seo.keyword}. Notre équipe locale, basée à Nendaz au cœur du Valais, comprend les spécificités du marché alpin et vous accompagne avec un service sur mesure. De la commercialisation à la maintenance, en passant par la gestion des voyageurs et l'entretien régulier, nous assurons une prise en charge complète de votre bien immobilier.`
                      : `Peaks Point is your trusted partner for ${seo.keyword}. Our local team, based in Nendaz in the heart of Valais, understands the specifics of the alpine market and supports you with a tailored service. From marketing to maintenance, guest management and regular upkeep, we ensure complete care for your property.`
                    }
                  </p>
                </div>

                {/* Benefits List */}
                <div className="bg-secondary/50 rounded-lg p-8 my-8">
                  <h3 className="text-xl font-heading text-foreground mb-6">
                    {lang === 'fr' ? 'Ce que nous prenons en charge' : 'What we handle'}
                  </h3>
                  <ul className="space-y-3">
                    {content.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-8">
                  <h3 className="font-heading text-xl mb-4">
                    {lang === 'fr' ? 'Discutons de votre projet' : 'Let\'s discuss your project'}
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    {lang === 'fr' 
                      ? 'Contactez-nous pour une évaluation personnalisée de votre bien.'
                      : 'Contact us for a personalised assessment of your property.'
                    }
                  </p>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to={`/${lang}/contact`}>
                      {t.cta.button}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Services Overview */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-heading text-lg mb-4 text-foreground">
                    {lang === 'fr' ? 'Nos services incluent' : 'Our services include'}
                  </h4>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <service.icon className="h-4 w-4 text-accent" />
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Nendaz, Valais, {lang === 'fr' ? 'Suisse' : 'Switzerland'}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-primary-foreground mb-6">{t.cta.title}</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            {t.cta.description}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to={`/${lang}/contact`} className="group">
              {t.cta.button}
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
