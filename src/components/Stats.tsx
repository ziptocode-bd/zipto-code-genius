import { stats } from "@/data/data";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-heading font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{t(stat.label, stat.labelBn)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
