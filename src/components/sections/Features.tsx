import { motion } from "framer-motion";
import { Video, Mic, Bot, Target, BookOpen, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Features() {
  const {
    t
  } = useLanguage();
  const modules = [{
    id: "cv-video",
    icon: Video,
    title: t("features.cvVideo.title"),
    shortDesc: t("features.cvVideo.description"),
    color: "from-violet-500 to-purple-600"
  }, {
    id: "cv-ia",
    icon: Mic,
    title: t("features.cvIA.title"),
    shortDesc: t("features.cvIA.description"),
    color: "from-blue-500 to-cyan-500"
  }, {
    id: "guide",
    icon: BookOpen,
    title: t("features.guide.title"),
    shortDesc: t("features.guide.description"),
    color: "from-emerald-500 to-teal-500"
  }, {
    id: "simulation",
    icon: Bot,
    title: t("features.simulation.title"),
    shortDesc: t("features.simulation.description"),
    color: "from-orange-500 to-amber-500"
  }, {
    id: "matching",
    icon: Target,
    title: t("features.matching.title"),
    shortDesc: t("features.matching.description"),
    color: "from-pink-500 to-rose-500"
  }];
  const videos = [{
    title: t("features.videos.title"),
    duration: "1 min"
  }, {
    title: t("features.cvVideo.title"),
    duration: "40s"
  }, {
    title: t("features.cvIA.title"),
    duration: "40s"
  }, {
    title: t("features.simulation.title"),
    duration: "40s"
  }, {
    title: t("features.matching.title"),
    duration: "40s"
  }];
  return <section id="plateforme" className="section-spacing-lg">
      <div className="container-wide">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <div className="badge-feature mx-auto mb-4">
            <span>{t("features.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("features.mainTitle.1")}<span className="gradient-text">{t("features.mainTitle.2")}</span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-1">
            {t("features.title").split("5")[0]}<span className="gradient-text">5</span>{t("features.title").split("5")[1]}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base mt-0">
            {t("features.description")}
          </p>
        </motion.div>

        {/* Modules grid with gradient bar separators */}
        <div className="flex flex-wrap justify-center gap-y-6 mb-20">
          {modules.map((module, index) => (
            <div key={module.id} className="flex items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="module-card group w-[200px] xl:w-[210px]"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{module.shortDesc}</p>
                <Button variant="ghost" size="sm" className="w-full group-hover:bg-secondary" asChild>
                  <a href={`#${module.id}`}>
                    {t("features.videos.watch")}
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </Button>
              </motion.div>

              {/* Gradient bar separator */}
              {index < modules.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-8">
                  <div className="w-[3px] h-3/5 rounded-full bg-gradient-to-b from-brand-blue via-brand-purple to-brand-orange opacity-40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video Gallery */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="bg-surface-sunken rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {t("features.videos.title")}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => <motion.div key={video.title + index} initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="video-card group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-10">
                  <span className="text-xs font-medium text-white/80">{video.duration}</span>
                  <h4 className="text-sm font-medium text-white mt-1 line-clamp-2">{video.title}</h4>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}