export function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-4 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[.22em] before:h-px before:w-9 before:bg-current ${light ? "text-[#E4C98F]" : "text-gold"}`}>{eyebrow}</p>
      <h2 className={`font-serif text-[clamp(2.8rem,6vw,5.2rem)] font-normal leading-[.98] tracking-[-.035em] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-6 max-w-2xl text-[17px] leading-8 ${light ? "text-white/68" : "text-ink/65"}`}>{description}</p> : null}
    </div>
  );
}
