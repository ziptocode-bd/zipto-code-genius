import { ArrowRight } from "lucide-react";
import { midPageCTA } from "@/data/data";
import { useLanguage } from "@/contexts/LanguageContext";

const MidPageCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-2xl gradient-primary p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            {t(midPageCTA.heading, midPageCTA.headingBn)}
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            {t(midPageCTA.subtext, midPageCTA.subtextBn)}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            {t(midPageCTA.cta, midPageCTA.ctaBn)}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
