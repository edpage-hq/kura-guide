import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const fr: LocaleInterface = {
  lang: 'fr',
  label: 'Français',
  description: 'Starter de documentation.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'Documentation',

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },

    outline: {
      label: 'Sur cette page',
    },

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    langMenuLabel: 'Changer de langue',
    returnToTopLabel: 'Retour au début de la page',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Passer an thème sombre',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Apparence',

    notFound: {
      title: 'PAGE NON TROUVEE',
      quote:
        'Mais si vous ne changez pas de direction et si vous continuez à regarder, vous risquez de vous retrouver là où vous allez.',
      linkLabel: "aller à l'accueil",
      linkText: "Me ramener à l'accueil",
      code: '404',
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Lire la documentation',
        link: '/guide/getting-started',
        activeMatch: '/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Notes de version',
            link: 'https://github.com/edpage-hq/guide-starter/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Signaler un problème',
            link: 'https://github.com/edpage-hq/guide-starter/issues',
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
      items: [{ text: 'Pour commencer', link: 'getting-started' }],
    },
    {
      text: 'Autres',
      collapsed: false,
      items: [{ text: 'A propos', link: 'about' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {
    translations: {
      button: {
        buttonText: 'Rechercher',
        buttonAriaLabel: 'Rechercher',
      },
      modal: {
        displayDetails: 'Afficher la liste détaillée',
        backButtonTitle: 'Retour',
        noResultsText: "Aucun résultat n'a été trouvé",
        resetButtonTitle: 'Réinitialiser la recherche',
        footer: {
          selectText: 'sélectionner',
          navigateText: 'naviguer',
          closeText: 'fermer',
        },
      },
    },
  },
}
