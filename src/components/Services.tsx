import { services, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.services;

  return (
    <section id="services" className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-primary hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:gradient-primary transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t(service.title, service.titleBn)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(service.description, service.descriptionBn)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
