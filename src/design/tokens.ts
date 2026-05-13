import { client } from '../../client.config'

export const tokens = {
  colors: client.brand.colors,
  fonts: client.brand.fonts,
  borderRadius: client.brand.borderRadius,
  cssVars: {
    '--color-primary': client.brand.colors.primary,
    '--color-secondary': client.brand.colors.secondary,
    '--color-accent': client.brand.colors.accent,
    '--color-background': client.brand.colors.background,
    '--color-text': client.brand.colors.text,
    '--color-muted': client.brand.colors.muted,
    '--font-heading': client.brand.fonts.heading,
    '--font-body': client.brand.fonts.body,
    '--radius': client.brand.borderRadius,
  },
}

export function injectTokens() {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  Object.entries(tokens.cssVars).forEach(([k, v]) => root.style.setProperty(k, v))
}
