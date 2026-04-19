import { whyChooseUs, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.whyChooseUs;

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-5 rounded-xl bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{t(item.title, item.titleBn)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.description, item.descriptionBn)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
