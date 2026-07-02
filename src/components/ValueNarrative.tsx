import SectionHeader from '@/components/SectionHeader'
import type { IntroBlock } from '@/utils/content'

type ValueNarrativeProps = {
  blocks: IntroBlock[]
}

export default function ValueNarrative({ blocks }: ValueNarrativeProps) {
  return (
    <section id="origin" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="创始初衷"
          title="从热爱出发，让球馆被温度记住"
          description="这里不是冷冰冰的榜单页面，而是先把俱乐部为什么存在讲清楚。因为共同热爱，所以值得共同呵护。"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <article
              key={`${block.emphasis}-${block.content}`}
              className="surface-card rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/40"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-orange/80">
                {block.emphasis}
              </p>
              <p className="text-sm leading-7 text-soft sm:text-base">{block.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
