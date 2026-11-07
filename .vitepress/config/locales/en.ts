import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const en: LocaleInterface = {
  lang: 'en',
  label: 'English',
  description: 'The Kura guide: the administrative and financial platform of NextBoxx.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'Kura Guide',

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Read the guide',
        link: '/en/guide/translation',
        activeMatch: '/en/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Release notes',
            link: 'https://github.com/edpage-hq/kura-web/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Report a problem',
            link: 'https://github.com/edpage-hq/kura-guide/issues',
            target: '_blank',
            rel: 'noopener',
          },
        ],
      },
      { component: 'VersionSwitcher' },
    ],
  }
}

function sidebarGuide(): SidebarItemType[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [{ text: 'English edition', link: 'translation' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  en: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        displayDetails: 'Display detailed list',
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          navigateText: 'to navigate',
          closeText: 'to close',
        },
      },
    },
  },
}
