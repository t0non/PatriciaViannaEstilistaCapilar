export function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow mb-4 flex items-center gap-3 before:h-px before:w-9 before:bg-current ${light ? "text-gold-soft" : "text-gold"}`}>{eyebrow}</p>
      <h2 className={`font-serif text-4xl font-light leading-[1.08] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-6 max-w-2xl text-base leading-8 ${light ? "text-white/70" : "text-ink/65"}`}>{description}</p> : null}
    </div>
  );
}
