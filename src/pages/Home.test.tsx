import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import Home from '@/pages/Home'

describe('Home', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('light', 'dark')
  })

  it('renders the featured title, hero list and rules section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: /望京乒坛\s*三十六天罡/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('北小河畔英雄会 · 望京乒坛三十六天罡')).toBeInTheDocument()
    expect(screen.getByText('天罡守擂')).toBeInTheDocument()
    expect(screen.getByText('挑战者需带伴手礼，一球一瓶水皆是心意。')).toBeInTheDocument()
  })

  it('toggles global theme classes from dark to light', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(document.documentElement).toHaveClass('dark')

    fireEvent.click(screen.getByRole('button', { name: '切换为浅色模式' }))

    expect(document.documentElement).toHaveClass('light')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
