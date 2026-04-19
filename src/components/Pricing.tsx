import { pricing, sectionHeaders } from "@/data/data";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.pricing;

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-primary bg-background"
                  : "border-border bg-background hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
                  {t("Most Popular", "সবচেয়ে জনপ্রিয়")}
                </span>
              )}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-1">{t(plan.name, plan.nameBn)}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t(plan.description, plan.descriptionBn)}</p>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.currency}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {(t(plan.features.join("|||"), plan.featuresBn.join("|||"))).split("|||").map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground shadow-primary hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary/30"
                }`}
              >
                {t(plan.ctaText, plan.ctaTextBn)}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
