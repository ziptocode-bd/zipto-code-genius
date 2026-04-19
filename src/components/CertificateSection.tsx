import { certificate, sectionHeaders } from "@/data/data";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificateSection = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.certificate;

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-card">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Certificate Image */}
              <div className="p-4 md:p-6 flex items-center justify-center bg-secondary/30">
                <img
                  src={certificate.imageUrl}
                  alt={t(certificate.title, certificate.titleBn)}
                  className="w-full rounded-xl shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t("Verified", "যাচাইকৃত")}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {t(certificate.title, certificate.titleBn)}
                </h3>

                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">{t("Holder", "ধারক")}:</span> {certificate.holder}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">{t("Issued by", "প্রদানকারী")}:</span> {certificate.issuer}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t(certificate.description, certificate.descriptionBn)}
                </p>

                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold shadow-primary hover:opacity-90 transition-opacity w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("Verify Certificate", "সার্টিফিকেট যাচাই করুন")}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
