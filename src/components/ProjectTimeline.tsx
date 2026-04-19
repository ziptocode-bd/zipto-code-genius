import { projectTimeline, sectionHeaders } from "@/data/data";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectTimeline = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.timeline;

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {projectTimeline.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-background border border-border"
            >
              <Clock className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{t(item.type, item.typeBn)}</h3>
              <p className="text-2xl font-heading font-bold text-primary mb-1">{t(item.duration, item.durationBn)}</p>
              <p className="text-xs text-muted-foreground">{t(item.complexity, item.complexityBn)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
