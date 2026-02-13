import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
export function Footer() {
  const {
    t
  } = useLanguage();
  const footerLinks = {
    plateforme: [{
      label: t("nav.cvVideo"),
      href: "#cv-video"
    }, {
      label: t("nav.cvIA"),
      href: "#cv-ia"
    }, {
      label: t("nav.simulation"),
      href: "#simulation"
    }, {
      label: t("nav.matching"),
      href: "#matching"
    }, {
      label: t("nav.guide"),
      href: "#guide"
    }],
    solutions: [{
      label: t("audience.btob.schools"),
      href: "#ecoles"
    }, {
      label: t("audience.btob.training"),
      href: "#organismes"
    }, {
      label: t("audience.btob.employment"),
      href: "#acteurs-emploi"
    }, {
      label: t("audience.btob.interim"),
      href: "#interim"
    }],
    produits: [{
      label: "JobiBox",
      href: "#jobibox"
    }, {
      label: "JobiTruck",
      href: "#jobitruck"
    }, {
      label: t("nav.pricing"),
      href: "#tarifs"
    }, {
      label: t("nav.demo"),
      href: "#demo"
    }],
    legal: [{
      label: t("footer.legal"),
      href: "#mentions-legales"
    }]
  };
  return <footer className="bg-foreground text-white">
      <div className="container-wide section-spacing">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <span className="text-2xl font-bold">Jobissim</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="space-y-3 text-gray-400">
              <a href="mailto:contact@jobissim.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                jobissim@jobissim.com
              </a>
              <a href="tel:0978801185" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                09 78 80 11 85
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                France
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-3">
              {footerLinks.plateforme.map(link => <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map(link => <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map(link => <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jobissim. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://fr.linkedin.com/company/jobissim" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/jobissim/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/Jobissim/" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}