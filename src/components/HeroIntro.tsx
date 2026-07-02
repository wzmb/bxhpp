import { ArrowDown, MapPin, Sparkles, Swords, Trophy } from 'lucide-react'

type HeroIntroProps = {
  stats: Array<{ label: string; value: string }>
}

export default function HeroIntro({ stats }: HeroIntroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
      <div className="hero-orbit absolute left-1/2 top-24 hidden h-72 w-72 -translate-x-1/2 rounded-full border border-brand-gold/[0.15] lg:block" />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <div className="surface-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-soft">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            北小河乒乓球俱乐部
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-orange/85">
              北小河畔英雄会
            </p>
            <h1 className="font-display text-5xl leading-[1.02] text-main sm:text-6xl lg:text-7xl">
              望京乒坛
              <span className="mt-2 block text-brand-gold">三十六天罡</span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-soft sm:text-lg">
              以创始初心为底色，以英雄榜为锋芒，把球馆里的热爱、秩序与荣誉感，浓缩进这一页。
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-main">
            <a
              href="#heroes"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-medium text-zinc-950 transition hover:bg-brand-gold"
            >
              <Trophy className="h-4 w-4" />
              查看英雄榜
            </a>
            <a
              href="#rules"
              className="surface-panel inline-flex items-center gap-2 rounded-full px-5 py-3 transition hover:border-brand-gold/50"
            >
              <Swords className="h-4 w-4" />
              挑战规则
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted">
            <MapPin className="h-4 w-4 text-brand-gold" />
            望京北小河公园球馆
          </div>
        </div>

        <aside className="surface-card relative rounded-[32px] p-6">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
          <p className="text-xs uppercase tracking-[0.35em] text-muted">第一季专题 / 2026.06.30</p>
          <div className="mt-6 grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-soft surface-deep p-4 shadow-[0_18px_40px_var(--shadow-color)]"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted">{stat.label}</p>
                <p className="mt-3 font-display text-3xl text-main">{stat.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#origin"
            className="mt-6 inline-flex items-center gap-2 text-sm text-brand-gold transition hover:text-brand-orange"
          >
            继续阅读创始初衷
            <ArrowDown className="h-4 w-4" />
          </a>
        </aside>
      </div>
    </section>
  )
}
