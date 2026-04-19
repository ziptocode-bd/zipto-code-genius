import { useState, useEffect } from "react";
import { navLinks } from "@/data/data";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "glass-nav shadow-card" : "bg-card/80 backdrop-blur-sm"}`}>
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-foreground">ZiptoCode</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {t(link.label, link.labelBn)}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:border-primary/30 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:border-primary/30 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" />
            {language === "en" ? "BN" : "EN"}
          </button>

          <a href="#contact" className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold shadow-primary hover:opacity-90 transition-opacity">
            {t("Get Started", "শুরু করুন")}
          </a>
        </div>

        {/* Mobile toggles + menu */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary" aria-label="Toggle theme">
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button onClick={toggleLanguage} className="p-2 text-sm font-bold text-muted-foreground hover:text-primary" aria-label="Toggle language">
            {language === "en" ? "BN" : "EN"}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border bg-card"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                  {t(link.label, link.labelBn)}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold text-center">
                {t("Get Started", "শুরু করুন")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
