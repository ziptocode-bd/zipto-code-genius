import { process as processSteps, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.howWeWork;

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground font-heading font-bold flex items-center justify-center mx-auto mb-4 text-sm">
                {step.step}
              </div>
              <step.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{t(step.title, step.titleBn)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(step.description, step.descriptionBn)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
