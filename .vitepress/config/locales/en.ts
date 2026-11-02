import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const en: LocaleInterface = {
  lang: 'en',
  label: 'English',
  description:
    'Guide to Kura, the administrative and financial platform of NextBoxx: catalogue, cohorts, candidatures, billing, certification and documents.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'Kura Guide',

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },

    outline: {
      label: 'On this page',
    },

    lastUpdated: {
      text: 'Updated on',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    langMenuLabel: 'Change language',
    returnToTopLabel: 'Return to top of page',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Switch to dark theme',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Appearance',

    notFound: {
      title: 'PAGE NOT FOUND',
      quote: "This page doesn't exist, or it has moved.",
      linkLabel: 'go to home page',
      linkText: 'Take me home',
      code: '404',
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Read the guide',
        link: '/en/guide/overview',
        activeMatch: '/en/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Reference documentation',
            link: 'https://github.com/edpage-hq/kura-docs',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Release notes',
            link: 'https://github.com/edpage-hq/kura-guide/releases',
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
      text: 'Discover',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'overview' },
        { text: 'Getting started', link: 'getting-started' },
      ],
    },
    {
      text: 'Understand',
      collapsed: false,
      items: [
        { text: 'Architecture', link: 'architecture' },
        { text: 'Accounts and roles', link: 'roles' },
        { text: 'Learner journey', link: 'learner-journey' },
        { text: 'Core modules', link: 'core-modules' },
        { text: 'Extended activities', link: 'extended-modules' },
      ],
    },
    {
      text: 'Operate',
      collapsed: false,
      items: [
        { text: 'Billing', link: 'billing' },
        { text: 'Generated documents', link: 'documents' },
        { text: 'Integrations', link: 'integrations' },
      ],
    },
    {
      text: 'Contribute',
      collapsed: false,
      items: [
        { text: 'Development', link: 'development' },
        { text: 'Deployment', link: 'deployment' },
      ],
    },
    {
      text: 'Other',
      collapsed: false,
      items: [{ text: 'About', link: 'about' }],
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
