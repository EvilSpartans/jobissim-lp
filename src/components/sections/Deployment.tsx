import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Target, Settings, Rocket, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnchorLink } from "@/components/AnchorLink";

const stepIcons = [Target, Settings, Rocket, BarChart3];

export function Deployment() {
  const { t } = useLanguage();

  const steps = [
    {
      label: t("deployment.step1.label"),
      title: t("deployment.step1.title"),
      description: t("deployment.step1.desc"),
      items: [t("deployment.step1.item1"), t("deployment.step1.item2"), t("deployment.step1.item3")],
      duration: t("deployment.step1.duration"),
    },
    {
      label: t("deployment.step2.label"),
      title: t("deployment.step2.title"),
      description: t("deployment.step2.desc"),
      items: [t("deployment.step2.item1"), t("deployment.step2.item2"), t("deployment.step2.item3")],
      duration: t("deployment.step2.duration"),
    },
    {
      label: t("deployment.step3.label"),
      title: t("deployment.step3.title"),
      description: t("deployment.step3.desc"),
      items: [t("deployment.step3.item1"), t("deployment.step3.item2"), t("deployment.step3.item3")],
      duration: t("deployment.step3.duration"),
    },
    {
      label: t("deployment.step4.label"),
      title: t("deployment.step4.title"),
      description: t("deployment.step4.desc"),
      items: [t("deployment.step4.item1"), t("deployment.step4.item2"), t("deployment.step4.item3")],
      duration: t("deployment.step4.duration"),
    },
  ];

  return (
    <section id="deploiement" className="section-spacing-lg gradient-surface">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-success mx-auto mb-4">
            <span>{t("deployment.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("deployment.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("deployment.description")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Label */}
                <span className="text-sm font-semibold text-brand-blue mb-1">{step.label}</span>

                {/* Title */}
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                {/* Items */}
                <ul className="space-y-2 mb-auto">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>

        {/* Prérequis techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t("deployment.prereq.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("deployment.prereq.desc")}</p>
              <ul className="space-y-3">
                {[
                  t("deployment.prereq.item1"),
                  t("deployment.prereq.item2"),
                  t("deployment.prereq.item3"),
                  t("deployment.prereq.item4"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground mb-4">{t("deployment.prereq.cta.text")}</p>
              <Button size="lg" className="gradient-brand text-white border-0" asChild>
                <AnchorLink to="demo">
                  {t("deployment.cta")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AnchorLink>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
