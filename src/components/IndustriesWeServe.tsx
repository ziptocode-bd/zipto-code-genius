import { industries, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const IndustriesWeServe = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.industries;

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <ind.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">{t(ind.name, ind.nameBn)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
