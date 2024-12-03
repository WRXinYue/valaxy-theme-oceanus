import type { ThemeConfig } from './types'
import { defineTheme } from 'valaxy'
import { defaultThemeConfig, generateSafelist } from './node'

export default defineTheme<ThemeConfig>((options) => {
  const { theme } = options

  return {
    themeConfig: {
      ...defaultThemeConfig,
      header: {
        title: theme.toUpperCase(),
      },
    },
    unocss: {
      safelist: generateSafelist(options.config.themeConfig),
    },
  }
})
