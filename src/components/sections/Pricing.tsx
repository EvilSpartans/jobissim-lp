import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnchorLink } from "@/components/AnchorLink";

export function Pricing() {
  const { t } = useLanguage();

  const pricingPlans = [
  {
    name: t("pricing.starter.title"),
    description: t("pricing.starter.description"),
    price: t("pricing.starter.price"),
    noCommitment: true,
    modules: [t("pricing.starter.feature1"), t("pricing.starter.feature2"), t("pricing.starter.feature3"), t("pricing.starter.feature4"), t("pricing.starter.feature5")],
    cta: "7 jours gratuits",
    popular: false
  },
  {
    name: t("pricing.pro.title"),
    description: t("pricing.pro.description"),
    price: t("pricing.pro.price"),
    modules: [t("pricing.pro.feature1"), t("pricing.pro.feature2"), t("pricing.pro.feature3"), t("pricing.pro.feature4")],
    cta: t("pricing.pro.cta"),
    popular: true
  },
  {
    name: "Événementiel",
    description: "Animation clé en main",
    price: "À partir de 990€",
    modules: ["Bar à CV", "Casque VR", "JobiBox"],
    cta: "Demander un devis",
    popular: false
  },
  {
    name: t("pricing.enterprise.title"),
    description: t("pricing.enterprise.description"),
    price: t("pricing.enterprise.price"),
    modules: ["Job Tour", t("pricing.enterprise.feature1"), t("pricing.enterprise.feature2"), t("pricing.enterprise.feature3")],
    cta: t("pricing.enterprise.cta"),
    popular: false
  }];


  return (
    <section id="tarifs" className="section-spacing-lg gradient-surface">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <div className="badge-feature mx-auto mb-4">
            <span>{t("pricing.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) =>
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl p-6 border shadow-lg flex flex-col ${
            plan.popular ? "border-brand-purple ring-2 ring-brand-purple/20" : "border-gray-100"}`
            }>

              {plan.popular &&
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white gradient-brand">
                    <Star className="w-3 h-3" />
                    {t("pricing.pro.description")}
                  </span>
                </div>
            }

              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div>
                <p className="text-2xl font-bold">{plan.price}</p>
                {plan.noCommitment &&
              <p className="text-[11px] text-muted-foreground mt-0.5">Sans engagement</p>
              }
              </div>

              <ul className="space-y-2 mb-6 mt-5 flex-1">
                {plan.modules.map((module) =>
              <li key={module} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {module}
                  </li>
              )}
              </ul>

              <div className="mt-auto">
                <Button
                className={`w-full rounded-xl font-semibold ${plan.popular ? "gradient-brand text-white border-0 shadow-md hover:shadow-lg" : "bg-foreground text-background hover:bg-foreground/90"}`}
                variant={plan.popular ? "default" : "default"}
                asChild>

                  <AnchorLink to="demo" className="flex items-center justify-center gap-2">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </AnchorLink>
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Contact sales */}
        


      </div>
    </section>);

}