import { MoonStar, SunMedium } from 'lucide-react'

type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? '切换为浅色模式' : '切换为深色模式'}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-soft surface-panel px-4 text-sm text-main transition hover:-translate-y-0.5 hover:border-brand-orange/40"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold/15 text-brand-orange">
        {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      </span>
      <span className="hidden sm:inline">{isDark ? '浅色' : '深色'}</span>
    </button>
  )
}
