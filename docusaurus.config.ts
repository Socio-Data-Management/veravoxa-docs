import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VeraVoxa',
  tagline: 'Analysez vos verbatims en quelques clics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.veravoxa.com',
  baseUrl: '/',

  organizationName: 'SOCIO-DM',
  projectName: 'veravoxa-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: { label: 'Français', htmlLang: 'fr-FR' },
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/veravoxa-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VeraVoxa',
      logo: {
        alt: 'Socio Data Management',
        src: 'img/Socio-Green.png',
        style: { height: '32px', width: 'auto' },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/tarification',
          label: 'Tarification',
          position: 'left',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            { label: 'Démarrage rapide', to: '/demarrage-rapide' },
            { label: 'Créer une session', to: '/sessions/creer-une-session' },
            { label: 'Télécharger les résultats', to: '/sessions/resultats' },
          ],
        },
        {
          title: 'Références',
          items: [
            { label: 'Tarification', to: '/tarification' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Support',
              href: 'mailto:contact@socio-dm.com',
            },
            {
              label: 'SOCIO-DM',
              href: 'https://www.socio-dm.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SOCIO-DM. Tous droits réservés.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
