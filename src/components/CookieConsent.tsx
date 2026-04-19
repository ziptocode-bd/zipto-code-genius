import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 p-4 rounded-xl bg-card border border-border shadow-card">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm text-foreground font-medium mb-1">{t("Cookie Notice", "কুকি নোটিশ")}</p>
          <p className="text-xs text-muted-foreground mb-3">{t("We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.", "আমরা আপনার অভিজ্ঞতা উন্নত করতে কুকি ব্যবহার করি। এই সাইটে ভিজিট অব্যাহত রেখে আপনি আমাদের কুকি ব্যবহারে সম্মত হচ্ছেন।")}</p>
          <div className="flex gap-2">
            <button onClick={accept} className="px-4 py-1.5 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
              {t("Accept", "গ্রহণ")}
            </button>
            <button onClick={accept} className="px-4 py-1.5 rounded-lg border border-border text-foreground text-xs font-medium hover:border-primary/30 transition-colors">
              {t("Decline", "প্রত্যাখ্যান")}
            </button>
          </div>
        </div>
        <button onClick={accept} className="text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
