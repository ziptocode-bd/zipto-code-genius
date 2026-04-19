import { faq, sectionHeaders } from "@/data/data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const h = sectionHeaders.faq;

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="max-w-3xl mx-auto mt-12 space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-background overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground text-sm pr-4">{t(item.question, item.questionBn)}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{t(item.answer, item.answerBn)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
