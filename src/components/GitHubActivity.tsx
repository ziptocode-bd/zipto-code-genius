import { github, sectionHeaders } from "@/data/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Github, ExternalLink, Flame, BarChart2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GitHubActivity = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.github;

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeader
          title={t(h.title, h.titleBn)}
          subtitle={t(h.subtitle, h.subtitleBn)}
        />

        <div className="mt-10 flex flex-col gap-5">

          {/* Contribution Heatmap */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                <Github className="w-3.5 h-3.5 text-primary" />
              </span>
              {t("Contribution Heatmap", "কন্ট্রিবিউশন হিটম্যাপ")}
            </h3>
            <div className="w-full">
              <img
                src={`https://ghchart.rshah.org/6C63FF/${github.username}`}
                alt="GitHub Contribution Heatmap"
                className="w-full h-auto rounded-lg object-contain"
                style={{ maxHeight: "120px" }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Activity Graph */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                <BarChart2 className="w-3.5 h-3.5 text-primary" />
              </span>
              {t("Activity Graph", "অ্যাক্টিভিটি গ্রাফ")}
            </h3>
            <div className="w-full">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${github.username}&theme=minimal&hide_border=true&area=true&color=6C63FF&line=6C63FF&point=3ECF8E`}
                alt="GitHub Activity Graph"
                className="w-full h-auto rounded-lg object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                <Flame className="w-3.5 h-3.5 text-primary" />
              </span>
              {t("Contribution Streak", "কন্ট্রিবিউশন স্ট্রিক")}
            </h3>
            <div className="w-full">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${github.username}&theme=default&hide_border=true&ring=6C63FF&fire=3ECF8E&currStreakLabel=6C63FF`}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex justify-center pt-1"
          >
            <a
              href={github.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary hover:bg-primary/5 active:scale-95 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              {t("View GitHub Profile", "গিটহাব প্রোফাইল দেখুন")}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
