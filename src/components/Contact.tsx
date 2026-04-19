import { useState } from "react";
import { contact, budgetRanges, projectTypes, projectTypesBn, sectionHeaders } from "@/data/data";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const h = sectionHeaders.contact;
  const [form, setForm] = useState({
    name: "",
    projectTitle: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `*New Project Inquiry* 🚀\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📁 *Project:* ${form.projectTitle}\n` +
      `🗂️ *Type:* ${form.projectType}\n` +
      `💰 *Budget:* ${form.budget}\n` +
      `📝 *Description:* ${form.description}`;

    const encodedMessage = encodeURIComponent(message);

    // Remove non-numeric characters from phone number
    const phoneNumber = contact.phone.replace(/\D/g, "");

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const types = t(projectTypes.join("|||"), projectTypesBn.join("|||")).split("|||");

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <SectionHeader title={t(h.title, h.titleBn)} subtitle={t(h.subtitle, h.subtitleBn)} />
        <div className="grid lg:grid-cols-5 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{t("Email", "ইমেইল")}</p>
                <p className="text-sm text-muted-foreground">{contact.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{t("Phone / WhatsApp", "ফোন / WhatsApp")}</p>
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{t("Location", "অবস্থান")}</p>
                <p className="text-sm text-muted-foreground">{t(contact.location, contact.locationBn)}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <input
              required
              placeholder={t("Your Name", "আপনার নাম")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              required
              placeholder={t("Project Title", "প্রজেক্টের নাম")}
              value={form.projectTitle}
              onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <select
                required
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">{t("Select Project Type", "প্রজেক্ট টাইপ নির্বাচন করুন")}</option>
                {types.map((ty, i) => (
                  <option key={i} value={ty}>{ty}</option>
                ))}
              </select>
              <select
                required
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">{t("Select Budget Range", "বাজেট পরিসীমা নির্বাচন করুন")}</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <textarea
              required
              rows={4}
              placeholder={t("Describe your project...", "আপনার প্রজেক্ট সম্পর্কে বলুন...")}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold shadow-primary hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              {t("Send via WhatsApp", "WhatsApp এ পাঠান")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
