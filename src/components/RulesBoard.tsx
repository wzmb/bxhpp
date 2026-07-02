import SectionHeader from '@/components/SectionHeader'
import type { RuleSection } from '@/utils/content'

type RulesBoardProps = {
  sections: RuleSection[]
  notes: string[]
}

export default function RulesBoard({ sections, notes }: RulesBoardProps) {
  return (
    <section id="rules" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          eyebrow="挑战规则"
          title="有仪式感，也有秩序感"
          description="规则并不是为了增加距离，而是为了让挑战更从容、守擂更公平，让每一场对阵都更有准备、更有分寸。"
        />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="surface-card rounded-[28px] p-6"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-sm font-semibold text-brand-gold">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-main">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <p key={item} className="text-sm leading-7 text-soft sm:text-base">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-[28px] border border-brand-orange/20 surface-note p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-orange/80">备注提醒</p>
            <div className="mt-5 space-y-4">
              {notes.map((note, index) => (
                <div
                  key={note}
                  className="surface-panel rounded-2xl p-4 text-sm leading-7 text-soft"
                >
                  <span className="mr-3 font-semibold text-brand-gold">0{index + 1}</span>
                  {note}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
