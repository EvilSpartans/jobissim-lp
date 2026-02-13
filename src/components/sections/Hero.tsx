import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Video, Mic, BookOpen, Bot, Target, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnchorLink } from "@/components/AnchorLink";
import heroVisual from "@/assets/landing/hero-visual.png";

export function Hero() {
  const { t } = useLanguage();

  const features = [
  { icon: Video, label: t("features.cvVideo.title") },
  { icon: Mic, label: t("features.cvIA.title") },
  { icon: BookOpen, label: t("features.guide.title") },
  { icon: Bot, label: t("features.simulation.title") },
  { icon: Target, label: t("features.matching.title") },
  { icon: LayoutDashboard, label: t("hero.feature.dashboard") }];


  const stats = [
  { value: "+200", label: t("hero.stat.partners") },
  { value: "+1M", label: t("hero.stat.presence") },
  { value: "+40K", label: t("hero.stat.creation") }];


  return (
    <section className="gradient-hero section-spacing-lg overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            {/* Badge */}
            <div className="badge-feature mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {t("hero.badge")}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("hero.title.1")}{" "}
              <span className="gradient-text">{t("hero.title.2")}</span>{" "}
              {t("hero.title.3")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              {t("hero.description")}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((feature) =>
              <div
                key={feature.label}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm text-muted-foreground border border-gray-100 shadow-sm">

                  <feature.icon className="w-4 h-4 text-brand-blue" />
                  {feature.label}
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gradient-brand text-white border-0 gap-2 text-base px-8" asChild>
                <AnchorLink to="demo">
                  {t("hero.cta.demo")}
                  <ArrowRight className="w-4 h-4" />
                </AnchorLink>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
                <AnchorLink to="plateforme">
                  <Play className="w-4 h-4" />
                  {t("hero.cta.video")}
                </AnchorLink>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {t("hero.trust.deployment")}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {t("hero.trust.support")}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {t("hero.trust.stats")}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {t("hero.trust.coaching")}
              </span>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">

            <div className="hero-mockup">
              <div className="hero-mockup-inner bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-3xl">
                {/* Mockup content */}
                <div className="space-y-6">
                  {/* Browser dots */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  {/* Content preview */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl gradient-brand"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    
                    {/* Video placeholder */}
                    <div className="relative aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="h-8 bg-gray-200 rounded-lg flex-1"></div>
                      <div className="h-8 bg-gray-200 rounded-lg flex-1"></div>
                      <div className="h-8 bg-gray-200 rounded-lg flex-1"></div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">

                  <div className="text-2xl font-bold gradient-text">
                  </div>
                  
                </motion.div>

                <motion.div animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    
                    <div className="text-xs text-muted-foreground">{t("hero.mockup.inMinutes")}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">

          {stats.map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}