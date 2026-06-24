import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'intro',
    'demarrage-rapide',
    {
      type: 'category',
      label: 'Projets & données',
      collapsed: false,
      items: [
        'projets',
        'importer-vos-donnees',
        'plans-de-codes',
        'plans-de-marques',
      ],
    },
    {
      type: 'category',
      label: 'Sessions d\'analyse',
      collapsed: false,
      items: [
        'sessions/index',
        'sessions/services',
        'sessions/creer-une-session',
        'sessions/resultats',
      ],
    },
    'tarification',
    'faq',
  ],
};

export default sidebars;
