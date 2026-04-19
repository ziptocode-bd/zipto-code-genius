import { announcement } from "@/data/data";
import { useLanguage } from "@/contexts/LanguageContext";

const AnnouncementBar = () => {
  const { t } = useLanguage();

  return (
    <div className="gradient-primary py-2 overflow-hidden relative z-50">
      <div className="animate-marquee-fast whitespace-nowrap flex gap-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="text-primary-foreground text-sm font-medium inline-block">
            {t(announcement.text, announcement.textBn)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
