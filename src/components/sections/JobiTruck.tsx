import { motion } from "framer-motion";
import { Truck, Video, Bot, Mic, Glasses, MessageSquare, Send, MapPin, Users, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnchorLink } from "@/components/AnchorLink";

export function JobiTruck() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      title: t("features.cvVideo.title"),
      description: t("features.cvVideo.description"),
    },
    {
      icon: Mic,
      title: t("features.cvIA.title"),
      description: t("features.cvIA.description"),
    },
    {
      icon: Bot,
      title: t("features.simulation.title"),
      description: t("features.simulation.description"),
    },
    {
      icon: Glasses,
      title: t("jobitruck.feature1.title"),
      description: t("jobitruck.feature1.desc"),
    },
    {
      icon: MessageSquare,
      title: t("jobitruck.feature2.title"),
      description: t("jobitruck.feature2.desc"),
    },
    {
      icon: Send,
      title: t("jobitruck.feature3.title"),
      description: t("jobitruck.feature3.desc"),
    },
  ];

  const stats = [
    { value: "350+", label: t("jobitruck.stats.events") },
    { value: "100%", label: t("jobitruck.feature4.title") },
    { value: "5 min", label: t("features.cvVideo.title") },
    { value: "Direct", label: t("jobitruck.stats.cities") },
  ];

  const targets = [
    { icon: MapPin, label: t("jobitruck.feature4.desc") },
    { icon: Users, label: t("jobitruck.feature3.title") },
    { icon: Building2, label: t("jobitruck.feature2.title") },
  ];

  return (
    <section id="jobitruck" className="section-spacing-lg gradient-surface">
      <div className="container-wide">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {t("jobitruck.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("jobitruck.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {t("jobitruck.description")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-brand text-white border-0" asChild>
                <AnchorLink to="demo">
                  {t("jobitruck.cta")}
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            <div className="aspect-video bg-gradient-to-br from-blue-100 via-violet-100 to-orange-100 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-3xl gradient-blue flex items-center justify-center mb-4 shadow-2xl">
                  <Truck className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg font-semibold">JobiTruck</p>
                <p className="text-sm text-muted-foreground">{t("jobitruck.badge")}</p>
              </div>
            </div>

            {/* Targets */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {targets.map((target) => (
                <div
                  key={target.label}
                  className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm"
                >
                  <target.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{target.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="jobitruck-concept"
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg mb-16"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-foreground" />
                </div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="gradient-brand text-white border-0" asChild>
            <AnchorLink to="demo">
              {t("jobitruck.cta")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </AnchorLink>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
