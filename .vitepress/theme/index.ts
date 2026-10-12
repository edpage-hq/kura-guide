// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VersionSwitcher from '@viteplus/versions/components/version-switcher.component.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VersionSwitcher', VersionSwitcher)
  },
} satisfies Theme
