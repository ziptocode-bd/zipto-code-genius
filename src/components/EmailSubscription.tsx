import { useState, useRef } from "react";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";
import { sectionHeaders } from "@/data/data";
import { useLanguage } from "@/contexts/LanguageContext";

type Stage = "idle" | "validating" | "sending" | "confirming" | "done";

const STEPS: { key: Stage; labelEn: string; labelBn: string }[] = [
  { key: "validating", labelEn: "Validating", labelBn: "যাচাই" },
  { key: "sending",    labelEn: "Sending",    labelBn: "পাঠানো" },
  { key: "confirming", labelEn: "Confirming", labelBn: "নিশ্চিত" },
];

const stageOrder: Stage[] = ["idle", "validating", "sending", "confirming", "done"];

const EmailSubscription = () => {
  const [email, setEmail]   = useState("");
  const [stage, setStage]   = useState<Stage>("idle");
  const [error, setError]   = useState(false);
  const { t } = useLanguage();
  const h = sectionHeaders.emailSub;
  const inputRef = useRef<HTMLInputElement>(null);

  const currentStepIndex = stageOrder.indexOf(stage);
  const isLoading = stage === "validating" || stage === "sending" || stage === "confirming";

  const getStepState = (stepKey: Stage) => {
    const stepIdx  = stageOrder.indexOf(stepKey);
    if (currentStepIndex > stepIdx) return "done";
    if (currentStepIndex === stepIdx) return "active";
    return "idle";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError(true);
      inputRef.current?.focus();
      return;
    }
    setError(false);

    const advance = (stages: Stage[], delays: number[]) => {
      stages.forEach((s, i) =>
        setTimeout(() => setStage(s), delays[i])
      );
    };
    advance(
      ["validating", "sending", "confirming", "done"],
      [0, 900, 1800, 2700]
    );
  };

  const handleReset = () => {
    setStage("idle");
    setEmail("");
    setError(false);
  };

  /* ── Success screen ── */
  if (stage === "done") {
    return (
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4">
            {/* animated check circle */}
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center
                            animate-[scale-in_0.4s_ease]">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400
                                       animate-[draw-check_0.5s_0.1s_ease_forwards]" />
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                {t("You're subscribed!", "সাবস্ক্রাইব হয়েছে!")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  `Confirmation sent to ${email}`,
                  `${email} এ নিশ্চিতকরণ পাঠানো হয়েছে`
                )}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="mt-2 text-xs text-muted-foreground underline underline-offset-4
                         hover:text-foreground transition-colors"
            >
              {t("Subscribe another email", "অন্য ইমেইল দিয়ে সাবস্ক্রাইব করুন")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ── Main form ── */
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">

          {/* heading */}
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            {t(h.title, h.titleBn)}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            {t(h.subtitle, h.subtitleBn)}
          </p>

          {/* form row — stacks vertically on mobile, side-by-side on sm+ */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
            <input
              ref={inputRef}
              type="email"
              required
              disabled={isLoading}
              placeholder={t("Enter your email", "আপনার ইমেইল দিন")}
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false); }}
              className={[
                "w-full sm:flex-1 px-4 py-3 rounded-lg border bg-background text-foreground text-sm",
                "placeholder:text-muted-foreground focus:outline-none transition-colors",
                "disabled:opacity-60 disabled:cursor-not-allowed",
                error
                  ? "border-destructive focus:border-destructive ring-1 ring-destructive/30"
                  : "border-border focus:border-primary",
              ].join(" ")}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-6 py-3 rounded-lg gradient-primary text-primary-foreground
                         font-semibold hover:opacity-90 active:scale-95 transition-all
                         flex items-center justify-center gap-2
                         disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span className="text-sm">
                {isLoading
                  ? t(
                      STEPS.find((s) => s.key === stage)?.labelEn ?? "Loading…",
                      STEPS.find((s) => s.key === stage)?.labelBn ?? "লোড হচ্ছে…"
                    ) + "…"
                  : t("Subscribe", "সাবস্ক্রাইব")}
              </span>
            </button>
          </form>

          {/* inline error */}
          {error && (
            <p className="mt-2 text-xs text-destructive text-left animate-[fade-in_0.2s_ease]">
              {t("Please enter a valid email address.", "সঠিক ইমেইল ঠিকানা দিন।")}
            </p>
          )}

          {/* step progress — only visible while loading */}
          <div
            className={[
              "flex items-center justify-center mt-5 gap-0 transition-all duration-300",
              isLoading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
            ].join(" ")}
          >
            {STEPS.map((step, idx) => {
              const state = getStepState(step.key);
              return (
                <div key={step.key} className="flex items-center">
                  {/* dot + label */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={[
                        "w-7 h-7 rounded-full border flex items-center justify-center text-xs font-medium transition-all duration-400",
                        state === "done"
                          ? "border-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600"
                          : state === "active"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground",
                      ].join(" ")}
                    >
                      {state === "done" ? (
                        <svg viewBox="0 0 14 14" className="w-3.5 h-3.5">
                          <path
                            d="M2 7l4 4 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <span
                      className={[
                        "text-[10px] transition-colors duration-300",
                        state === "done"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : state === "active"
                          ? "text-primary"
                          : "text-muted-foreground",
                      ].join(" ")}
                    >
                      {t(step.labelEn, step.labelBn)}
                    </span>
                  </div>

                  {/* connector line */}
                  {idx < STEPS.length - 1 && (
                    <div
                      className={[
                        "h-px w-8 mx-1 mb-4 transition-colors duration-400",
                        state === "done" ? "bg-emerald-500" : "bg-border",
                      ].join(" ")}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
