import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck, Server, Key } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function RGPD() {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      icon: Server,
      title: t("rgpd.hosting.title"),
      description: t("rgpd.hosting.desc"),
    },
    {
      icon: Lock,
      title: t("rgpd.encryption.title"),
      description: t("rgpd.encryption.desc"),
    },
    {
      icon: FileCheck,
      title: t("rgpd.consent.title"),
      description: t("rgpd.consent.desc"),
    },
    {
      icon: UserCheck,
      title: t("rgpd.deletion.title"),
      description: t("rgpd.deletion.desc"),
    },
  ];

  return (
    <section id="rgpd" className="section-spacing-lg">
      <div className="container-wide">
        <div className="bg-gradient-to-br from-foreground to-gray-800 rounded-3xl p-6 md:p-8 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500 to-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                {t("rgpd.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("rgpd.title")}
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                {t("rgpd.description")}
              </p>
            </motion.div>

            {/* Main features */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
