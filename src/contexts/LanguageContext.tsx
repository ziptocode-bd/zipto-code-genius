import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("ziptocode-lang");
    return (stored === "bn" ? "bn" : "en") as Language;
  });

  const toggleLanguage = () => {
    const next = language === "en" ? "bn" : "en";
    setLanguage(next);
    localStorage.setItem("ziptocode-lang", next);
  };

  const t = (en: string, bn: string) => (language === "en" ? en : bn);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
