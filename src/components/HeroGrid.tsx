import SectionHeader from '@/components/SectionHeader'
import type { HeroItem } from '@/utils/content'

type HeroGridProps = {
  heroes: HeroItem[]
}

export default function HeroGrid({ heroes }: HeroGridProps) {
  return (
    <section id="heroes" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="第一季英雄榜"
          title="北小河畔英雄会 · 望京乒坛三十六天罡"
          description="以 2026 年 6 月 30 日为节点，第一季英雄榜正式亮相。每一位上榜者，都代表着球馆里的个性、坚持与球风风骨。"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {heroes.map((hero) => (
            <article
              key={hero.rank}
              className="surface-card group overflow-hidden rounded-[26px] p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/75">
                    第 {hero.rank} 席
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-main">{hero.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {hero.name ? `英雄名册：${hero.name}` : '英雄名册：待以本名示人'}
                  </p>
                </div>
                <span className="rank-ghost font-display text-5xl leading-none transition duration-300 group-hover:text-brand-orange/25">
                  {hero.rank}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
