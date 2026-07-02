import '@testing-library/jest-dom/vitest'

const storage = new Map<string, string>()

const localStorageMock = {
  getItem: (key: string) => storage.get(key) ?? null,
  setItem: (key: string, value: string) => {
    storage.set(key, String(value))
  },
  removeItem: (key: string) => {
    storage.delete(key)
  },
  clear: () => {
    storage.clear()
  },
}

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: localStorageMock,
})

Object.defineProperty(globalThis, 'localStorage', {
  writable: true,
  value: localStorageMock,
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: query.includes('dark'),
    media: query,
    onchange: null,
    addListener: () => { },
    removeListener: () => { },
    addEventListener: () => { },
    removeEventListener: () => { },
    dispatchEvent: () => false,
  }),
})
