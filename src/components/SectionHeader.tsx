type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <header className={`max-w-2xl space-y-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold/80">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight text-main sm:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-7 text-soft sm:text-base">{description}</p>
      </div>
    </header>
  )
}
