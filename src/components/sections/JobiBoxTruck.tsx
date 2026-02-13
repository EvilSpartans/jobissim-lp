import { motion } from "framer-motion";
import { Video, Bot, Mic, Briefcase, Truck, ArrowRight, Sparkles, Shield, Camera, MapPin, Monitor, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import jobibox1 from "@/assets/landing/jobibox-1.jpg";
import jobibox2 from "@/assets/landing/jobibox-2.jpg";
import jobibox3 from "@/assets/landing/jobibox-3.png";
import jobitruck1 from "@/assets/landing/jobitruck-1.jpeg";
import jobitruck2 from "@/assets/landing/jobitruck-2.jpg";
import jobitruck3 from "@/assets/landing/jobitruck-3.png";
import jobitruck4 from "@/assets/landing/jobitruck-4.png";

export function JobiBoxTruck() {
  const { t } = useLanguage();

  const jobiboxFeatures = [
    t("jobibox.feature1.title"),
    t("jobibox.feature2.title"),
    t("jobibox.feature3.title"),
    t("jobibox.feature4.title"),
  ];

  const jobitruckFeatures = [
    t("jobitruck.feature1.title"),
    t("jobitruck.feature2.title"),
    t("jobitruck.feature3.title"),
    t("jobitruck.feature4.title"),
  ];

  return (
    <section id="jobibox" className="section-spacing-lg">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-feature mx-auto mb-4">
            <span>Nos produits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            JobiBox & JobiTruck
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("jobibox.description")}
          </p>
        </motion.div>

        {/* Side by side cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* JobiBox */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/10] relative overflow-hidden grid grid-cols-3 gap-1">
              <img src={jobibox1} alt="JobiBox Mission Locale" className="w-full h-full object-cover object-[20%] rounded-tl-3xl" />
              <img src={jobibox2} alt="JobiBox Forum des Possibles" className="w-full h-full object-cover object-[20%]" />
              <img src={jobibox3} alt="JobiBox Adélie" className="w-full h-full object-cover object-[20%] rounded-tr-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-bold">JobiBox</p>
                <p className="text-sm opacity-90">{t("jobibox.title")}</p>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-muted-foreground mb-4 text-sm">{t("jobibox.description")}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {jobiboxFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-brand-purple flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full gradient-brand text-white border-0" asChild>
                <a href="https://jobibox.fr" target="_blank" rel="noopener noreferrer">
                  En savoir plus sur la JobiBox
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* JobiTruck */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/10] relative overflow-hidden grid grid-cols-3 grid-rows-3 gap-1">
              <img src={jobitruck3} alt="JobiTruck France Travail" className="w-full h-full object-cover col-span-2 row-span-3 rounded-tl-3xl" />
              <img src={jobitruck1} alt="JobiTruck CAPH" className="w-full h-full object-cover object-center rounded-tr-3xl" />
              <img src={jobitruck2} alt="JobiTruck Maisons & Cités" className="w-full h-full object-cover object-center" />
              <img src={jobitruck4} alt="JobiTruck SIA Habitat" className="w-full h-full object-cover object-bottom" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-bold">JobiTruck</p>
                <p className="text-sm opacity-90">{t("jobitruck.badge")}</p>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-muted-foreground mb-4 text-sm">{t("jobitruck.description")}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {jobitruckFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-brand-purple flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full gradient-brand text-white border-0" asChild>
                <a href="https://jobitruck.fr" target="_blank" rel="noopener noreferrer">
                  En savoir plus sur le JobiTruck
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
