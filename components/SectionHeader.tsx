type SectionHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ kicker, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-sm leading-7 text-ocean-muted sm:text-base">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;