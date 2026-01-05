import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';
import { frenchRoutes, englishRoutes } from '@/lib/routes';
import ValaisWebLogo from '@/assets/white-valais-web-blanc.png';

interface FooterProps {
  lang: Language;
}

export const Footer = ({ lang }: FooterProps) => {
  const t = getTranslation(lang);
  const routes = lang === 'fr' ? frenchRoutes : englishRoutes;
  const otherLang = lang === 'fr' ? 'en' : 'fr';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={`/${lang}`} className="font-heading text-2xl font-semibold">
              Peaks Point
            </Link>
            <p className="mt-4 text-primary-foreground/80 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
              <span>{t.footer.location}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">{t.footer.services}</h4>
            <ul className="space-y-3">
              {routes.slice(1, 6).map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@peakspoint.ch"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  contact@peakspoint.ch
                </a>
              </li>
              <li>
                <a
                  href="tel:+41275521300"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +41 27 552 13 00
                </a>
              </li>
            </ul>

            {/* Language Switch */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <Link
                to={`/${otherLang}`}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {lang === 'fr' ? 'English' : 'Français'}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Peaks Point. {t.footer.rights}
          </p>
          {/* Valais Web backlink */}
          <a
            href="https://valaisweb.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <span>Website built and managed by</span>
            <img
              src={ValaisWebLogo}
              alt="Valais Web"
              className="h-4 w-auto"
            />
          </a>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to={`/${lang}`} className="hover:text-primary-foreground transition-colors">
              FR
            </Link>
            <Link to={`/${otherLang}`} className="hover:text-primary-foreground transition-colors">
              EN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
