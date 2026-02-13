import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

type ContactMode = "calendly" | "form" | "phone";

export function Demo() {
  const { t } = useLanguage();
  const [activeMode, setActiveMode] = useState<ContactMode>("calendly");

  const contactOptions = [
  {
    id: "calendly" as ContactMode,
    icon: Calendar,
    title: t("demo.contact.calendly"),
    description: t("demo.contact.calendly.desc")
  },
  {
    id: "form" as ContactMode,
    icon: Mail,
    title: t("demo.contact.form"),
    description: t("demo.contact.form.desc")
  },
  {
    id: "phone" as ContactMode,
    icon: Phone,
    title: t("demo.contact.phone"),
    description: t("demo.contact.phone.desc")
  }];


  return (
    <section id="demo" className="section-spacing-lg">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <div className="badge-feature mx-auto mb-4">
              <span>{t("demo.badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("demo.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t("demo.description")}
            </p>
          </motion.div>

          {/* Contact mode selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

            {contactOptions.map((option) =>
            <button
              key={option.id}
              onClick={() => setActiveMode(option.id)}
              className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
              activeMode === option.id ?
              "border-transparent bg-white shadow-xl" :
              "border-gray-100 bg-white/50 hover:border-gray-200 hover:shadow-md"}`
              }>

                {activeMode === option.id &&
              <div className="absolute inset-0 rounded-2xl gradient-brand opacity-10 pointer-events-none" />
              }
                <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                activeMode === option.id ?
                "gradient-brand text-white" :
                "bg-muted text-muted-foreground"}`
                }>

                  <option.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{option.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {option.description}
                </p>
              </button>
            )}
          </motion.div>

          {/* Content area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">

            {/* Calendly */}
            {activeMode === "calendly" &&
            <motion.div
              key="calendly"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full">

                <iframe
                src="https://calendly.com/martin-deleau/presentation-jobibox"
                width="100%"
                height="650"
                frameBorder="0"
                title="Calendly"
                className="rounded-3xl" />

              </motion.div>
            }

            {/* Contact form */}
            {activeMode === "form" &&
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12">

                <h3 className="font-bold text-lg mb-6">
                  {t("demo.contact.form.title")}
                </h3>
                <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t("demo.contact.form.phone")} *
                      </label>
                      <Input type="tel" placeholder="+33 6 00 00 00 00" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("demo.contact.form.subject")} *
                    </label>
                    <Input placeholder={t("demo.contact.form.subject.placeholder")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                    placeholder={t("demo.contact.form.message.placeholder")}
                    rows={4} />

                  </div>
                  <Button
                  size="lg"
                  className="w-full gradient-brand text-white border-0">

                    <Send className="w-4 h-4 mr-2" />
                    {t("demo.contact.form.send")}
                  </Button>
                </form>
              </motion.div>
            }

            {/* Phone */}
            {activeMode === "phone" &&
            <motion.div
              key="phone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 text-center">

                <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2">
                  {t("demo.contact.phone.title")}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  {t("demo.contact.phone.subtitle")}
                </p>
                <a
                href="tel:+33756896834"
                className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold gradient-text mb-6">

                  09 78 80 11 85
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  {t("demo.contact.phone.hours")}
                </p>
                <div className="mt-6">
                  <a href="tel:+33756896834">
                    <Button
                    size="lg"
                    className="gradient-brand text-white border-0">

                      <Phone className="w-4 h-4 mr-2" />
                      {t("demo.contact.phone.cta")}
                    </Button>
                  </a>
                </div>
              </motion.div>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}