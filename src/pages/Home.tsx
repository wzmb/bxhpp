import ThemeToggle from '@/components/ThemeToggle'
import HeroGrid from '@/components/HeroGrid'
import HeroIntro from '@/components/HeroIntro'
import RulesBoard from '@/components/RulesBoard'
import ValueNarrative from '@/components/ValueNarrative'
import { useTheme } from '@/hooks/useTheme'
import { heroList, introBlocks, pageStats, ruleNotes, ruleSections } from '@/utils/content'

export default function Home() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <main className="bg-page relative min-h-screen overflow-hidden text-main">
      <div className="page-aura pointer-events-none absolute inset-0" />
      <div className="grid-surface pointer-events-none absolute inset-0 opacity-35" />

      <div className="relative z-10">
        <header className="px-4 pt-4 sm:px-6 lg:px-8">
          <div className="surface-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-brand-gold/80">BXHPP Club</p>
              <p className="mt-1 text-sm text-soft">北小河乒乓球俱乐部</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#heroes"
                className="hidden rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.25em] text-soft transition hover:border-brand-orange/50 hover:text-main sm:inline-flex"
              >
                英雄榜
              </a>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
          </div>
        </header>

        <HeroIntro stats={pageStats} />
        <ValueNarrative blocks={introBlocks} />
        <HeroGrid heroes={heroList} />
        <RulesBoard sections={ruleSections} notes={ruleNotes} />

        <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <div className="surface-card mx-auto flex max-w-6xl flex-col gap-6 rounded-[32px] p-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">收束</p>
              <h2 className="mt-4 font-display text-3xl text-main sm:text-4xl">
                愿这里始终是一个有温度的球馆
              </h2>
              <p className="mt-4 text-sm leading-7 text-soft sm:text-base">
                北小河畔英雄会不是终点，而是把热爱留在球馆里的方式。榜上有名，场下有情，来去之间，彼此成就。
              </p>
            </div>
            <div className="text-sm leading-7 text-muted">
              <p>专题首发：2026 年 6 月 30 日</p>
              <p>挑战时间：每周二、四、六晚 8 点</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
