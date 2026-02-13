import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useLanguage();

  const navItems = [
    { 
      label: t("nav.platform"),
      href: "#plateforme",
      hasDropdown: true,
      items: [
        { label: t("nav.cvVideo"), href: "#cv-video" },
        { label: t("nav.cvIA"), href: "#cv-ia" },
        { label: t("nav.simulation"), href: "#simulation" },
        { label: t("nav.matching"), href: "#matching" },
        { label: t("nav.guide"), href: "#guide" },
      ]
    },
    { label: t("nav.useCases"), href: "#cas-usage" },
    { label: t("nav.jobibox"), href: "#jobibox" },
    { label: t("nav.pricing"), href: "#tarifs" },
    { label: t("nav.deployment"), href: "#deploiement" },
  ];

  return (
    <>
      {/* Announcement Banner */}
      <div className="announcement-gradient py-2.5 px-4 text-center text-white text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="animate-pulse">✨</span>
          {t("announcement")}
          <a href="#plateforme" className="underline underline-offset-2 ml-2 hover:opacity-80 transition-opacity">
            {t("announcement.discover")}
          </a>
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
              <span className="text-xl font-bold text-foreground">Jobissim</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </a>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Button variant="ghost" size="sm" asChild>
                <a href="#connexion">{t("nav.login")}</a>
              </Button>
              <Button size="sm" className="gradient-brand hover:opacity-90 transition-opacity text-white border-0" asChild>
                <a href="#demo">{t("nav.demo")}</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <nav className="container-wide py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <div className="flex justify-center pb-2">
                    <LanguageSwitcher />
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#connexion">{t("nav.login")}</a>
                  </Button>
                  <Button className="w-full gradient-brand text-white border-0" asChild>
                    <a href="#demo">{t("nav.demo")}</a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
