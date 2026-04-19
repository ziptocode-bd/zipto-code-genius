import { team, sectionHeaders } from "@/data/data";
import { Github, Linkedin, Globe, User } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.team;

  return (
    <section id="team" className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{t(member.role, member.roleBn)}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(member.description, member.descriptionBn)}</p>
              <div className="flex justify-center gap-3">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.portfolio && (
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
