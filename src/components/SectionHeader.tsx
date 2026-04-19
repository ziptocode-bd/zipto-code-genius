const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{title}</h2>
    <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
  </div>
);

export default SectionHeader;
