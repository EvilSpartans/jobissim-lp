import { motion, useInView, animate } from "framer-motion";
import { LayoutDashboard, Building2, Users, TrendingUp, FileDown, Shield, Database, Video, BarChart3, UserCheck, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 1.5 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("fr-FR") + suffix),
    });
    return () => controls.stop();
  }, [isInView, target, duration, suffix]);

  return <span ref={ref}>{display}</span>;
}

export function Administration() {
  const { t } = useLanguage();

  const features = [
    {
      icon: LayoutDashboard,
      title: t("admin.dashboard.title"),
      description: t("admin.dashboard.item1"),
    },
    {
      icon: Building2,
      title: t("admin.users.title"),
      description: t("admin.users.item1"),
    },
    {
      icon: Users,
      title: t("admin.cvtheque.title"),
      description: t("admin.cvtheque.item1"),
    },
    {
      icon: TrendingUp,
      title: t("admin.stats.title"),
      description: t("admin.stats.item1"),
    },
    {
      icon: FileDown,
      title: t("admin.api.title"),
      description: t("admin.api.item1"),
    },
    {
      icon: Shield,
      title: t("rgpd.badge"),
      description: t("rgpd.consent.desc"),
    },
  ];

  const databases = [
    {
      icon: Database,
      title: t("admin.cvtheque.title"),
      description: t("admin.cvtheque.item2"),
      count: "+12 000",
    },
    {
      icon: Video,
      title: t("admin.cvvideotheque.title"),
      description: t("admin.cvvideotheque.item2"),
      count: "+8 000",
    },
  ];

  const stats = [
    { value: 847, suffix: "", label: t("admin.stats.item1"), icon: BarChart3 },
    { value: 85, suffix: "%", label: t("admin.stats.item2"), icon: UserCheck },
    { value: 312, suffix: "", label: t("admin.stats.item3"), icon: Send },
  ];

  const chartData = [
    { height: 35, prev: 28, label: "Lun" },
    { height: 58, prev: 45, label: "Mar" },
    { height: 42, prev: 50, label: "Mer" },
    { height: 75, prev: 60, label: "Jeu" },
    { height: 53, prev: 48, label: "Ven" },
    { height: 88, prev: 70, label: "Sam" },
    { height: 65, prev: 55, label: "Dim" },
  ];

  return (
    <section id="administration" className="section-spacing-lg gradient-surface">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-feature mx-auto mb-4">
            <span>{t("admin.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("admin.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("admin.description")}
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Features grid */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-border"
            style={{ boxShadow: "var(--shadow-xl), 0 0 60px -20px hsl(230 80% 60% / 0.15)" }}
          >
            {/* Dark header bar */}
            <div className="bg-foreground px-6 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: "hsl(0 84% 60%)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "hsl(45 93% 58%)" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "hsl(142 76% 46%)" }} />
              <span className="ml-3 text-xs text-primary-foreground/60 font-medium tracking-wide">dashboard.jobissim.com</span>
            </div>

            <div className="bg-white p-7">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="relative overflow-hidden rounded-xl p-5 bg-secondary/60"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium truncate">
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-xl border border-border p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-foreground">Activité hebdomadaire</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full gradient-brand" />
                      <span className="text-[10px] text-muted-foreground">Candidatures</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      <span className="text-[10px] text-muted-foreground">Sem. précédente</span>
                    </div>
                  </div>
                </div>
                {/* Line chart style bourse */}
                <div className="h-36 relative">
                  <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 30, 60, 90].map((y) => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4 4" />
                    ))}
                    {/* Previous week area */}
                    <motion.path
                      d={`M0,${120 - chartData[0].prev * 1.1} ${chartData.map((d, i) => `L${i * 50},${120 - d.prev * 1.1}`).join(" ")} L300,${120 - chartData[6].prev * 1.1} L300,120 L0,120 Z`}
                      fill="hsl(var(--muted-foreground) / 0.06)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    />
                    {/* Previous week line */}
                    <motion.path
                      d={`M0,${120 - chartData[0].prev * 1.1} ${chartData.map((d, i) => `L${i * 50},${120 - d.prev * 1.1}`).join(" ")}`}
                      fill="none"
                      stroke="hsl(var(--muted-foreground) / 0.25)"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    />
                    {/* Gradient fill */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(270 70% 55%)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="hsl(270 70% 55%)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d={`M0,${120 - chartData[0].height * 1.1} ${chartData.map((d, i) => `L${i * 50},${120 - d.height * 1.1}`).join(" ")} L300,${120 - chartData[6].height * 1.1} L300,120 L0,120 Z`}
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    />
                    {/* Current week line */}
                    <motion.path
                      d={`M0,${120 - chartData[0].height * 1.1} ${chartData.map((d, i) => `L${i * 50},${120 - d.height * 1.1}`).join(" ")}`}
                      fill="none"
                      stroke="hsl(270 70% 55%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    />
                    {/* Data points */}
                    {chartData.map((d, i) => (
                      <motion.circle
                        key={i}
                        cx={i * 50}
                        cy={120 - d.height * 1.1}
                        r="3"
                        fill="hsl(var(--background))"
                        stroke="hsl(270 70% 55%)"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                      />
                    ))}
                  </svg>
                  {/* Day labels */}
                  <div className="flex justify-between mt-1">
                    {chartData.map((bar, i) => (
                      <span key={i} className="text-[10px] text-muted-foreground font-medium text-center" style={{ width: "14.28%" }}>{bar.label}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Databases inside dashboard */}
              <div className="grid gap-3">
                {databases.map((db, i) => (
                  <motion.div
                    key={db.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group rounded-xl p-4 border border-border bg-secondary/30 hover:bg-secondary/60 transition-colors flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm">
                      <db.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm truncate">{db.title}</h4>
                        <span className="text-xs font-bold gradient-text flex-shrink-0">{db.count}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{db.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}