import { testimonials, sectionHeaders } from "@/data/data";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.testimonials;

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(item.text, item.textBn)}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{t(item.role, item.roleBn)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
