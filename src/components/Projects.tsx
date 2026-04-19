import { useState } from "react";
import { projects, sectionHeaders } from "@/data/data";
import { ExternalLink, ShoppingCart, Copy, Check, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <motion.div
      layout
      className="rounded-xl bg-card border border-border shadow-card overflow-hidden hover:shadow-primary hover:border-primary/30 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <project.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
            {t(project.category, project.categoryBn)}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t(project.description, project.descriptionBn)}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">{tag}</span>
          ))}
        </div>

        {project.demoEmail && (
          <button onClick={() => setExpanded(!expanded)} className="text-xs text-primary font-medium flex items-center gap-1 mb-3 hover:underline">
            <Eye className="w-3 h-3" />
            {expanded ? t("Hide", "লুকান") : t("Show", "দেখুন")} {t("Demo Credentials", "ডেমো ক্রেডেনশিয়াল")}
          </button>
        )}

        <AnimatePresence>
          {expanded && project.demoEmail && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-4"
            >
              <div className="p-3 rounded-lg bg-secondary text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Email: <span className="text-foreground">{project.demoEmail}</span></span>
                  <button onClick={() => copyToClipboard(project.demoEmail, "email")} className="text-primary hover:text-primary/80">
                    {copiedField === "email" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("Password", "পাসওয়ার্ড")}: <span className="text-foreground">{project.demoPassword}</span></span>
                  <button onClick={() => copyToClipboard(project.demoPassword, "pass")} className="text-primary hover:text-primary/80">
                    {copiedField === "pass" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/30 transition-colors">
            <ExternalLink className="w-3.5 h-3.5" /> {t("Live Demo", "লাইভ ডেমো")}
          </a>
          <a href={project.storeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <ShoppingCart className="w-3.5 h-3.5" /> {t("Buy Code", "কোড কিনুন")}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 6);
  const { t } = useLanguage();
  const h = sectionHeaders.projects;

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {displayed.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {projects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/30 transition-colors"
            >
              {showAll ? t("Show Less", "কম দেখুন") : t(`View All ${projects.length} Projects`, `সকল ${projects.length}টি প্রজেক্ট দেখুন`)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
