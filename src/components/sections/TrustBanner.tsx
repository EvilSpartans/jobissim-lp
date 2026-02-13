import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const logos = [
  "France Travail",
  "IDRAC",
  "Actual",
  "Mission Locale",
  "Synergie",
  "Partnaire",
];

export function TrustBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="container-wide">
        <p className="text-center text-sm text-muted-foreground mb-8">
          {t("trust.title")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-gray-400 font-semibold text-lg"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
