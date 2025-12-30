import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language, getTranslation } from '@/lib/i18n';
import { frenchRoutes, englishRoutes } from '@/lib/routes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  lang: Language;
}

export const Header = ({ lang }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = getTranslation(lang);
  
  const routes = lang === 'fr' ? frenchRoutes : englishRoutes;
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const otherLangLabel = lang === 'fr' ? 'EN' : 'FR';
  
  // Get equivalent route in other language
  const getCurrentAlternateRoute = () => {
    const currentPath = location.pathname;
    const currentRoute = routes.find(r => r.path === currentPath);
    if (!currentRoute) return `/${otherLang}`;
    
    const otherRoutes = lang === 'fr' ? englishRoutes : frenchRoutes;
    const index = routes.indexOf(currentRoute);
    return otherRoutes[index]?.path || `/${otherLang}`;
  };

  const serviceRoutes = routes.slice(1, 6);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to={`/${lang}`} 
            className="font-heading text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Peaks Point
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to={`/${lang}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.home}
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.services}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {serviceRoutes.map((route) => (
                  <DropdownMenuItem key={route.path} asChild>
                    <Link to={route.path} className="w-full cursor-pointer">
                      {route.keyword}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-4">
              <Link 
                to={getCurrentAlternateRoute()}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {otherLangLabel}
              </Link>
              
              <Button variant="default" size="sm" asChild>
                <Link to={`/${lang}#contact`}>
                  {t.hero.cta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to={`/${lang}`}
                className="text-base font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{t.nav.services}</p>
                {serviceRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="block pl-4 py-1 text-sm text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {route.keyword}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link 
                  to={getCurrentAlternateRoute()}
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {otherLangLabel}
                </Link>
                
                <Button variant="default" size="sm" asChild className="flex-1">
                  <Link to={`/${lang}#contact`} onClick={() => setMobileMenuOpen(false)}>
                    {t.hero.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
