import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const fr: LocaleInterface = {
  lang: 'fr',
  label: 'Français',
  description: 'Le guide de Kura, la plateforme administrative et financière de NextBoxx.',

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
        text: 'Lire le guide',
        link: '/guide/bienvenue',
        activeMatch: '/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Notes de version',
            link: 'https://github.com/edpage-hq/kura-web/releases',
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
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Bienvenue', link: 'bienvenue' },
        { text: 'Premiers pas', link: 'premiers-pas' },
      ],
    },
    {
      text: "Parcours de l'apprenant",
      collapsed: false,
      items: [
        { text: 'Candidature et admission', link: 'apprenant/candidature' },
        { text: 'Inscription et convention', link: 'apprenant/inscription' },
        { text: 'Paiements', link: 'apprenant/paiements' },
        { text: 'Suivre sa formation', link: 'apprenant/formation' },
        { text: 'Certificat et Canopé', link: 'apprenant/certification' },
      ],
    },
    {
      text: 'Entreprises et financeurs',
      collapsed: false,
      items: [
        { text: 'Financer des apprenants', link: 'entreprises/financeur' },
        { text: 'Former vos équipes sur devis', link: 'entreprises/formation-sur-devis' },
        { text: 'Recruter des profils certifiés', link: 'entreprises/recrutement' },
      ],
    },
    {
      text: "L'équipe pédagogique",
      collapsed: false,
      items: [
        { text: 'Formateur Principal', link: 'equipe/formateur' },
        { text: 'Coach-Tuteur', link: 'equipe/coach-tuteur' },
        { text: 'Conseiller admissions', link: 'equipe/conseiller' },
      ],
    },
    {
      text: 'Coordinateur pédagogique',
      collapsed: false,
      items: [
        { text: 'Catalogue et banques QCM', link: 'coordinateur/catalogue' },
        { text: 'Les cohortes', link: 'coordinateur/cohortes' },
        { text: 'Inscriptions et conventions', link: 'coordinateur/inscriptions' },
        { text: 'Facturation', link: 'coordinateur/facturation' },
        { text: 'Résultats et certification', link: 'coordinateur/resultats' },
        { text: 'Rémunérations et commissions', link: 'coordinateur/remunerations' },
        { text: 'Communication', link: 'coordinateur/communication' },
      ],
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
