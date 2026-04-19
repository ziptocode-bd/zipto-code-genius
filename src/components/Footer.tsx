import { footer, contact } from "@/data/data";
import { Github, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="pt-16 pb-6 border-t border-border">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-lg text-foreground">ZiptoCode</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(footer.description, footer.descriptionBn)}</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("Quick Links", "দ্রুত লিংক")}</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t(link.label, link.labelBn)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("Services", "সেবা")}</h4>
            <ul className="space-y-2">
              {footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t(link.label, link.labelBn)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("Connect", "সংযোগ")}</h4>
            <div className="flex gap-3">
              <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ZiptoCode Tech Solution. {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
