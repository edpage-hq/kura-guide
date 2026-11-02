import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const fr: LocaleInterface = {
  lang: 'fr',
  label: 'Français',
  description:
    'Guide de Kura, la plateforme administrative et financière de NextBoxx : catalogue, cohortes, candidatures, facturation, certification et documents.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'Guide Kura',

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
    darkModeSwitchLabel: 'Passer au thème sombre',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Apparence',

    notFound: {
      title: 'PAGE NON TROUVÉE',
      quote: "Cette page n'existe pas, ou elle a été déplacée.",
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
        text: 'Lire le guide',
        link: '/guide/overview',
        activeMatch: '/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Documentation de référence',
            link: 'https://github.com/edpage-hq/kura-docs',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Notes de version',
            link: 'https://github.com/edpage-hq/kura-guide/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Signaler un problème',
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
      text: 'Découvrir',
      collapsed: false,
      items: [
        { text: 'Présentation', link: 'overview' },
        { text: 'Démarrage', link: 'getting-started' },
      ],
    },
    {
      text: 'Comprendre',
      collapsed: false,
      items: [
        { text: 'Architecture', link: 'architecture' },
        { text: 'Comptes et rôles', link: 'roles' },
        { text: 'Parcours apprenant', link: 'learner-journey' },
        { text: 'Modules du socle', link: 'core-modules' },
        { text: 'Activités élargies', link: 'extended-modules' },
      ],
    },
    {
      text: 'Exploiter',
      collapsed: false,
      items: [
        { text: 'Facturation', link: 'billing' },
        { text: 'Documents générés', link: 'documents' },
        { text: 'Intégrations', link: 'integrations' },
      ],
    },
    {
      text: 'Contribuer',
      collapsed: false,
      items: [
        { text: 'Développement', link: 'development' },
        { text: 'Déploiement', link: 'deployment' },
      ],
    },
    {
      text: 'Autres',
      collapsed: false,
      items: [{ text: 'À propos', link: 'about' }],
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
