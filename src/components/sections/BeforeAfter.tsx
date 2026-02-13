import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function BeforeAfter() {
  const { t } = useLanguage();

  const beforeItemsB2B = [
    t("beforeAfter.btob.before.item1"),
    t("beforeAfter.btob.before.item2"),
    t("beforeAfter.btob.before.item3"),
    t("beforeAfter.btob.before.item4"),
    t("beforeAfter.btob.before.item5"),
    t("beforeAfter.btob.before.item6"),
  ];

  const afterItemsB2B = [
    t("beforeAfter.btob.after.item1"),
    t("beforeAfter.btob.after.item2"),
    t("beforeAfter.btob.after.item3"),
    t("beforeAfter.btob.after.item4"),
    t("beforeAfter.btob.after.item5"),
    t("beforeAfter.btob.after.item6"),
  ];

  const beforeItemsB2C = [
    t("beforeAfter.btoc.before.item1"),
    t("beforeAfter.btoc.before.item2"),
    t("beforeAfter.btoc.before.item3"),
    t("beforeAfter.btoc.before.item4"),
    t("beforeAfter.btoc.before.item5"),
  ];

  const afterItemsB2C = [
    t("beforeAfter.btoc.after.item1"),
    t("beforeAfter.btoc.after.item2"),
    t("beforeAfter.btoc.after.item3"),
    t("beforeAfter.btoc.after.item4"),
    t("beforeAfter.btoc.after.item5"),
  ];

  return (
    <section id="avant-apres" className="section-spacing-lg">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-feature mx-auto mb-4">
            <span>{t("beforeAfter.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("beforeAfter.title")}
          </h2>
        </motion.div>

        {/* B2B Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-center mb-8">{t("beforeAfter.btob.title")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-red-700">
                <X className="w-5 h-5" />
                {t("beforeAfter.btob.before")}
              </h4>
              <ul className="space-y-4">
                {beforeItemsB2B.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-700" />
                    </div>
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                {t("beforeAfter.btob.after")}
              </h4>
              <ul className="space-y-4">
                {afterItemsB2B.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-700" />
                    </div>
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* B2C Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-center mb-8">{t("beforeAfter.btoc.title")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-red-700">
                <X className="w-5 h-5" />
                {t("beforeAfter.btob.before")}
              </h4>
              <ul className="space-y-4">
                {beforeItemsB2C.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-700" />
                    </div>
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                {t("beforeAfter.btob.after")}
              </h4>
              <ul className="space-y-4">
                {afterItemsB2C.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-700" />
                    </div>
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="gradient-brand text-white border-0" asChild>
            <a href="#demo">
              {t("nav.demo")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
