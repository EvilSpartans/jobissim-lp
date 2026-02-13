import { motion } from "framer-motion";
import { Video, Bot, Mic, Briefcase, Sparkles, MapPin, Camera, Monitor, Lightbulb, Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnchorLink } from "@/components/AnchorLink";

export function JobiBox() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Video,
      title: t("features.cvVideo.title"),
      description: t("features.cvVideo.description"),
    },
    {
      icon: Bot,
      title: t("features.simulation.title"),
      description: t("features.simulation.description"),
    },
    {
      icon: Mic,
      title: t("features.cvIA.title"),
      description: t("features.cvIA.description"),
    },
    {
      icon: Briefcase,
      title: t("features.matching.title"),
      description: t("features.matching.description"),
    },
  ];

  const specs = [
    { icon: Sparkles, label: t("jobibox.feature1.title") },
    { icon: Shield, label: t("jobibox.feature2.title") },
    { icon: Camera, label: t("jobibox.feature3.title") },
    { icon: MapPin, label: t("jobibox.specs.dimensions") },
    { icon: Monitor, label: t("jobibox.specs.connection.value") },
    { icon: Lightbulb, label: t("jobibox.feature4.title") },
  ];

  const stats = [
    { value: "+100", label: "JobiBox" },
    { value: "+30 000", label: t("features.cvVideo.title") },
  ];

  return (
    <section id="jobibox" className="section-spacing-lg">
      <div className="container-wide">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-feature mb-6">
              <span>{t("jobibox.badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("jobibox.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t("jobibox.description")}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-brand text-white border-0" asChild>
                <AnchorLink to="demo">
                  {t("jobibox.cta")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AnchorLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <AnchorLink to="jobibox-video">
                  <Play className="w-4 h-4 mr-2" />
                  {t("hero.cta.video")}
                </AnchorLink>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-violet-100 via-blue-100 to-orange-100 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-3xl gradient-brand flex items-center justify-center mb-6 shadow-2xl">
                  <Video className="w-16 h-16 text-white" />
                </div>
                <p className="text-lg font-semibold">JobiBox</p>
                <p className="text-sm text-muted-foreground">{t("jobibox.title")}</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="text-xl font-bold gradient-text">3 min</div>
              <div className="text-xs text-muted-foreground">{t("hero.mockup.inMinutes")}</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-xl font-bold text-center mb-8">
            {t("jobibox.specs.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3">
                  <spec.icon className="w-6 h-6" />
                </div>
                <span className="text-sm">{spec.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
