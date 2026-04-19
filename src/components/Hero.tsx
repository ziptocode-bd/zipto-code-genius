import { hero } from "@/data/data";
import { ArrowRight, Play, Globe, CheckCircle2, Zap, Code2, BarChart2, Minus, Square } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const BrowserMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    className="relative w-full max-w-2xl mx-auto"
  >
    {/* Glow behind mockup */}
    <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-3xl scale-95 translate-y-4" />

    {/* Browser window */}
    <div className="rounded-2xl overflow-hidden border border-border/60 shadow-2xl bg-card backdrop-blur-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 mx-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background/60 border border-border/40 text-xs text-muted-foreground max-w-xs mx-auto">
            <Globe className="w-3 h-3 text-primary/60" />
            <span>https://ziptocode.netlify.app</span>
          </div>
        </div>
        <div className="flex gap-1.5 opacity-50">
          <div className="w-4 h-4 rounded border border-border/60 flex items-center justify-center">
            <Minus className="w-2 h-2" />
          </div>
          <div className="w-4 h-4 rounded border border-border/60 flex items-center justify-center">
            <Square className="w-2 h-2" />
          </div>
        </div>
      </div>

      {/* App content */}
      <div className="bg-background p-4 space-y-3">
        {/* Top stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Projects", value: "50+", color: "text-primary", bg: "bg-primary/10", icon: <Code2 className="w-3 h-3" /> },
            { label: "Clients", value: "30+", color: "text-green-500", bg: "bg-green-500/10", icon: <CheckCircle2 className="w-3 h-3" /> },
            { label: "Uptime", value: "99%", color: "text-accent", bg: "bg-accent/10", icon: <Zap className="w-3 h-3" /> },
          ].map((stat) => (
            <div key={stat.label} className={`rounded-xl p-2.5 ${stat.bg} border border-border/30`}>
              <div className={`flex items-center gap-1 ${stat.color} mb-1`}>
                {stat.icon}
                <span className="text-xs font-medium opacity-80">{stat.label}</span>
              </div>
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="rounded-xl border border-border/30 bg-muted/30 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-foreground/70 flex items-center gap-1">
              <BarChart2 className="w-3 h-3 text-primary" /> Project Delivery
            </span>
            <span className="text-xs text-muted-foreground">This Year</span>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 50, 80, 70, 90, 75, 85, 60, 95, 78, 88].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-primary/20 flex flex-col justify-end"
                style={{ height: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                <motion.div
                  className="w-full rounded-sm bg-primary/70"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.05, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["Jan","Mar","May","Jul","Sep","Nov"].map(m => (
              <span key={m} className="text-[9px] text-muted-foreground">{m}</span>
            ))}
          </div>
        </div>

        {/* Project list with corrected tech stack */}
        <div className="space-y-1.5">
          {[
            { name: "E-Commerce Platform", status: "Delivered", tech: "React + Firebase", color: "text-green-500" },
            { name: "LMS EdTech App", status: "In Progress", tech: "React + TypeScript", color: "text-yellow-500" },
          ].map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/40 border border-border/20 hover:bg-muted/60 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">{project.name}</p>
                  <p className="text-[10px] text-muted-foreground">{project.tech}</p>
                </div>
              </div>
              <span className={`text-[10px] font-semibold ${project.color}`}>{project.status}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom code snippet */}
        <div className="rounded-xl border border-border/30 bg-zinc-950/80 p-3 font-mono text-[10px]">
          <div className="flex gap-2 mb-1.5">
            <span className="text-zinc-500">//</span>
            <span className="text-zinc-400">ZiptoCode Tech Solution</span>
          </div>
          <div className="space-y-0.5">
            <p><span className="text-blue-400">const</span> <span className="text-green-400">project</span> <span className="text-zinc-400">= await</span> <span className="text-yellow-400">ZiptoCode</span><span className="text-zinc-400">.</span><span className="text-blue-300">build</span><span className="text-zinc-400">{"({"}</span></p>
            <p className="pl-4"><span className="text-orange-400">idea</span><span className="text-zinc-400">: </span><span className="text-green-300">"your vision"</span><span className="text-zinc-400">,</span></p>
            <p className="pl-4"><span className="text-orange-400">quality</span><span className="text-zinc-400">: </span><span className="text-purple-300">"excellence"</span><span className="text-zinc-400">,</span></p>
            <p><span className="text-zinc-400">{"});"}</span></p>
            <p className="mt-1"><span className="text-zinc-500">// </span><span className="text-green-400">✓ Delivered on time, every time.</span></p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center py-16 overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t(hero.badgeText, hero.badgeTextBn)}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                {t(hero.headline, hero.headlineBn)}
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none mx-auto mb-10 leading-relaxed">
                {t(hero.subtext, hero.subtextBn)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg gradient-primary text-primary-foreground font-semibold shadow-primary hover:opacity-90 transition-opacity"
                >
                  {t(hero.cta, hero.ctaBn)}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-card text-foreground font-semibold hover:border-primary/30 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  {t(hero.ctaSecondary, hero.ctaSecondaryBn)}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Browser mockup — desktop only */}
          <div className="hidden lg:block">
            <BrowserMockup />
          </div>
        </div>

        {/* Mobile mockup (below text on small screens) */}
        <div className="lg:hidden mt-12">
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
