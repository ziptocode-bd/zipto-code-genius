import { techStack, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const TechItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
    <img src={icon} alt={name} className="w-10 h-10" loading="lazy" />
    <span className="text-xs font-medium text-muted-foreground">{name}</span>
  </div>
);

const TechStack = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.techStack;

  const sections = [
    { title: "Frontend", items: techStack.frontend },
    { title: "Backend", items: techStack.backend },
    { title: "Hosting", items: techStack.hosting },
    { title: "Tools", items: techStack.tools },
  ];

  return (
    <section id="techstack" className="py-20 bg-card">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                {t(section.title, techStack.sectionTitles[section.title as keyof typeof techStack.sectionTitles] || section.title)}
              </h3>
              <div className="flex flex-wrap gap-4">
                {section.items.map((item) => (
                  <TechItem key={item.name} {...item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
