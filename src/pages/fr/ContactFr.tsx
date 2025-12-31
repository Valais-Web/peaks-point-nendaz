import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  email: z.string().trim().email("Adresse email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  telephone: z.string().trim().max(30, "Le téléphone doit faire moins de 30 caractères").optional(),
  message: z
    .string()
    .trim()
    .min(1, "Le message est requis")
    .max(2000, "Le message doit faire moins de 2000 caractères"),
});

const ContactFr = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const form = formRef.current;
      if (!form) return;

      // Clear honeypot
      const honeypot = form.querySelector<HTMLInputElement>('input[name="bot-field"]');
      if (honeypot) honeypot.value = "";

      const formDataObj = new FormData(form);
      const urlEncodedData = new URLSearchParams(formDataObj as unknown as Record<string, string>).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message envoyé",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout lang="fr">
      <SEOHead
        title="Contact | Peaks Point - Gestion Locative Nendaz"
        description="Contactez Peaks Point pour la gestion de votre bien à Nendaz. Notre équipe locale vous répond rapidement pour discuter de votre projet immobilier."
        canonicalUrl="/fr/contact"
        alternateUrl="/en/contact"
        lang="fr"
        keyword="contact gestion locative Nendaz"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/80 text-lg mb-4 animate-fade-up opacity-0 font-body">Peaks Point</p>
            <h1 className="text-primary-foreground mb-6 animate-fade-up opacity-0 delay-100">Contactez-nous</h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed animate-fade-up opacity-0 delay-200 font-body">
              Discutons de votre projet immobilier à Nendaz. Notre équipe locale vous répond rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-6">Envoyez-nous un message</h2>

              {isSubmitted ? (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-heading text-foreground mb-2">Message envoyé</h3>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  name="contact"
                  method="POST"
                  action="/"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Honeypot - off-screen, not display:none */}
                  <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                    <Label htmlFor="bot-field">Ne pas remplir</Label>
                    <Input type="text" name="bot-field" id="bot-field" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className={errors.nom ? "border-destructive" : ""}
                    />
                    {errors.nom && <p className="text-sm text-destructive">{errors.nom}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+41 XX XXX XX XX"
                      className={errors.telephone ? "border-destructive" : ""}
                    />
                    {errors.telephone && <p className="text-sm text-destructive">{errors.telephone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou posez-nous vos questions..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-6">Nos coordonnées</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Basés à Nendaz au cœur du Valais, nous sommes disponibles pour discuter de votre projet de gestion
                  immobilière.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Nendaz, Valais
                      <br />
                      Suisse
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:contact@peakspoint.ch" className="text-accent hover:underline">
                      contact@peakspoint.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Téléphone</h3>
                    <a href="tel:+41275521300" className="text-accent hover:underline">
                      +41 27 552 13 00
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-secondary/50 rounded-lg p-6 mt-8">
                <h3 className="font-heading text-lg text-foreground mb-4">Pourquoi nous contacter ?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Évaluation gratuite de votre bien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Réponse sous 24 heures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Équipe locale multilingue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Sans engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactFr;
