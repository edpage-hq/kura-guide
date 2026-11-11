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
        link: '/en/guide/bienvenue',
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
      items: [
        { text: 'Welcome', link: 'bienvenue' },
        { text: 'Getting started', link: 'premiers-pas' },
      ],
    },
    {
      text: "The learner's journey",
      collapsed: false,
      items: [
        { text: 'Candidature and admission', link: 'apprenant/candidature' },
        { text: 'Enrolment and agreement', link: 'apprenant/inscription' },
        { text: 'Payments', link: 'apprenant/paiements' },
        { text: 'Following your training', link: 'apprenant/formation' },
        { text: 'Certificate and Canopé', link: 'apprenant/certification' },
      ],
    },
    {
      text: 'Companies and funders',
      collapsed: false,
      items: [
        { text: 'Funding learners', link: 'entreprises/financeur' },
        { text: 'Training your teams on quote', link: 'entreprises/formation-sur-devis' },
        { text: 'Recruiting certified profiles', link: 'entreprises/recrutement' },
      ],
    },
    {
      text: 'The pedagogical team',
      collapsed: false,
      items: [
        { text: 'Lead Trainer', link: 'equipe/formateur' },
        { text: 'Coach-Tutor', link: 'equipe/coach-tuteur' },
        { text: 'Admissions Advisor', link: 'equipe/conseiller' },
      ],
    },
    {
      text: 'Pedagogical Coordinator',
      collapsed: false,
      items: [
        { text: 'Catalogue and QCM banks', link: 'coordinateur/catalogue' },
        { text: 'Cohorts', link: 'coordinateur/cohortes' },
        { text: 'Enrolments and agreements', link: 'coordinateur/inscriptions' },
        { text: 'Billing', link: 'coordinateur/facturation' },
        { text: 'Results and certification', link: 'coordinateur/resultats' },
        { text: 'Remunerations', link: 'coordinateur/remunerations' },
        { text: 'Communication', link: 'coordinateur/communication' },
      ],
    },
    {
      text: 'Extended activities',
      collapsed: false,
      items: [
        { text: 'Events', link: 'activites/evenements' },
        { text: 'Funding an event', link: 'activites/financement-evenements' },
        { text: "L'Éclosion", link: 'activites/eclosion' },
        { text: 'Technology partnerships', link: 'activites/partenariats' },
      ],
    },
    {
      text: 'Direction',
      collapsed: false,
      items: [{ text: 'Direction and reporting', link: 'direction/pilotage' }],
    },
    {
      text: 'Administrator',
      collapsed: false,
      items: [
        { text: 'Accounts and roles', link: 'administrateur/comptes-et-roles' },
        { text: 'Settings', link: 'administrateur/reglages' },
        { text: 'Monitoring and control', link: 'administrateur/suivi' },
      ],
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
