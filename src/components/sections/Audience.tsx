import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnchorLink } from "@/components/AnchorLink";

export function Audience() {
  const { t } = useLanguage();

  const audiences = [
    {
      id: "ecoles",
      icon: GraduationCap,
      title: t("audience.btob.schools"),
      enjeu: t("audience.btob.schools.desc"),
      solution: t("useCases.schools.solution.desc"),
      result: t("useCases.schools.result.desc"),
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "organismes",
      icon: BookOpen,
      title: t("audience.btob.training"),
      enjeu: t("audience.btob.training.desc"),
      solution: t("useCases.training.solution.desc"),
      result: t("useCases.training.result.desc"),
      color: "from-purple-500 to-violet-500",
    },
    {
      id: "acteurs-emploi",
      icon: Users,
      title: t("audience.btob.employment"),
      enjeu: t("audience.btob.employment.desc"),
      solution: t("useCases.employment.solution.desc"),
      result: t("useCases.employment.result.desc"),
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "interim",
      icon: Building2,
      title: t("audience.btob.interim"),
      enjeu: t("audience.btob.interim.desc"),
      solution: t("useCases.interim.solution.desc"),
      result: t("useCases.interim.result.desc"),
      color: "from-pink-500 to-rose-500",
    },
  ];

  const candidateBenefits = [
    t("beforeAfter.btoc.after.item1"),
    t("beforeAfter.btoc.after.item2"),
    t("beforeAfter.btoc.after.item3"),
    t("beforeAfter.btoc.after.item4"),
  ];

  return (
    <section id="pour-qui" className="section-spacing-lg gradient-surface">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("audience.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("audience.description")}
          </p>
        </motion.div>

        {/* B2B Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center flex-shrink-0`}>
                  <audience.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{audience.title}</h3>
                  <div className="badge-success text-xs">{audience.result}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("useCases.schools.challenge")}</span>
                  <p className="text-sm mt-1">{audience.enjeu}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("useCases.schools.solution")}</span>
                  <p className="text-sm mt-1">{audience.solution}</p>
                </div>
              </div>

              <Button variant="ghost" className="mt-6 w-full group-hover:bg-secondary" asChild>
                <a href={`#${audience.id}`}>
                  {t("nav.demo")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Candidate section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="badge-feature mb-4">
                <Users className="w-3.5 h-3.5" />
                {t("audience.btoc.title")}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t("audience.btoc.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("audience.btoc.description")}
              </p>
              <ul className="space-y-3 mb-6">
                {candidateBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="gradient-brand text-white border-0" asChild>
                <AnchorLink to="plateforme">
                  {t("announcement.discover")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AnchorLink>
              </Button>
            </div>
            <div className="w-full md:w-80 h-64 bg-gradient-to-br from-violet-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-brand flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text">+10 000</div>
                <div className="text-sm text-muted-foreground">{t("audience.btoc.title")}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
