interface SEOContentSectionProps {
  keyword: string;
  title: string;
  paragraphs: string[];
  lang: 'fr' | 'en';
}

export const SEOContentSection = ({ keyword, title, paragraphs, lang }: SEOContentSectionProps) => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-8 text-center">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              {lang === 'fr' ? 'Votre partenaire local pour' : 'Your local partner for'} {keyword}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
