import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Building2, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
export function UseCases() {
  const {
    t
  } = useLanguage();
  const useCases = [{
    id: "ecoles",
    icon: GraduationCap,
    title: t("useCases.schools.title"),
    subtitle: t("useCases.schools.challenge.desc"),
    enjeux: [t("useCases.schools.enjeu1"), t("useCases.schools.enjeu2"), t("useCases.schools.enjeu3")],
    deployment: t("useCases.schools.solution.desc"),
    modules: [t("features.cvIA.title"), t("features.cvVideo.title"), t("features.guide.title"), t("features.simulation.title"), t("features.matching.title"), t("hero.feature.dashboard")],
    livrables: [t("useCases.schools.result.desc")]
  }, {
    id: "organismes",
    icon: BookOpen,
    title: t("useCases.training.title"),
    subtitle: t("useCases.training.challenge.desc"),
    enjeux: [t("useCases.training.enjeu1"), t("useCases.training.enjeu2"), t("useCases.training.enjeu3")],
    deployment: t("useCases.training.solution.desc"),
    modules: [t("features.cvIA.title"), t("features.cvVideo.title"), t("features.matching.title"), t("hero.feature.dashboard")],
    livrables: [t("useCases.training.result.desc")]
  }, {
    id: "acteurs-emploi",
    icon: Users,
    title: t("useCases.employment.title"),
    subtitle: t("useCases.employment.challenge.desc"),
    enjeux: [t("useCases.employment.enjeu1"), t("useCases.employment.enjeu2"), t("useCases.employment.enjeu3")],
    deployment: t("useCases.employment.solution.desc"),
    modules: [t("features.cvIA.title"), t("features.cvVideo.title"), t("features.guide.title"), t("features.matching.title"), t("hero.feature.dashboard")],
    livrables: [t("useCases.employment.result.desc")]
  }, {
    id: "interim",
    icon: Building2,
    title: t("useCases.interim.title"),
    subtitle: t("useCases.interim.challenge.desc"),
    enjeux: [t("useCases.interim.enjeu1"), t("useCases.interim.enjeu2"), t("useCases.interim.enjeu3")],
    deployment: t("useCases.interim.solution.desc"),
    modules: [t("features.cvVideo.title"), t("features.simulation.title"), t("features.matching.title"), t("useCases.interim.vivier")],
    livrables: [t("useCases.interim.result.desc")]
  }];
  return <section id="cas-usage" className="section-spacing-lg">
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
            <span>{t("useCases.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("useCases.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("useCases.description")}
          </p>
        </motion.div>

        {/* Use cases */}
        <div className="space-y-6">
          {useCases.map((useCase, index) => <motion.div key={useCase.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-[2fr_3fr]">
                {/* Left dark panel */}
                <div className="bg-[hsl(270,76%,35%)] text-white p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                  <p className="text-white/70 mb-4 whitespace-pre-line text-sm">{useCase.subtitle}</p>

                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    {t("useCases.schools.challenge")}
                  </h4>
                  <ul className="space-y-2">
                    {useCase.enjeux.map((enjeu, i) => <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {enjeu}
                      </li>)}
                  </ul>
                </div>

                {/* Right light panel */}
                <div className="bg-white p-6 md:p-8 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    {/* Déploiement */}
                    <div>
                      <h4 className="font-semibold uppercase tracking-wider text-brand-blue mb-2 text-sm">
                        {t("useCases.schools.solution")}
                      </h4>
                      <p className="text-muted-foreground text-sm">{useCase.deployment}</p>
                    </div>

                    {/* Modules utilisés */}
                    <div>
                      <h4 className="font-semibold uppercase tracking-wider text-brand-blue mb-2 text-sm">
                        Modules utilisés
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {useCase.modules.map(module => <span key={module} className="px-2 py-1 rounded-full font-medium border border-brand-blue/30 text-brand-blue bg-brand-blue/5 text-xs">
                            {module}
                          </span>)}
                      </div>
                    </div>
                  </div>

                  {/* Livrables & Reporting */}
                  <div className="mb-6">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {t("useCases.schools.result")}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {useCase.livrables.map(livrable => <span key={livrable} className="px-2 py-1 rounded-full font-medium border border-gray-200 text-foreground bg-secondary text-xs">
                          {livrable}
                        </span>)}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button size="sm" className="gradient-brand text-white border-0 gap-2 text-xs" asChild>
                      <a href="#demo">
                        {t("nav.demo")} {useCase.title}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}