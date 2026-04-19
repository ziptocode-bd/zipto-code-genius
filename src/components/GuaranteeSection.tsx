import { guarantees, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const GuaranteeSection = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.guarantee;

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <g.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{t(g.title, g.titleBn)}</h3>
              <p className="text-sm text-muted-foreground">{t(g.description, g.descriptionBn)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
