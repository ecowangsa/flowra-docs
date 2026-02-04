import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Beranda Dokumen',
    },
    {
      type: 'category',
      label: 'Ringkasan',
      collapsed: false,
      items: [
        'overview/what-is-flowra',
        'overview/philosophy',
        'overview/when-to-use',
      ],
    },
    {
      type: 'category',
      label: 'Mulai',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/project-structure',
        'getting-started/first-api',
      ],
    },
    {
      type: 'category',
      label: 'Konfigurasi',
      collapsed: true,
      items: [
        'configuration/overview',
        'configuration/environment',
      ],
    },
    {
      type: 'category',
      label: 'Konsep Inti',
      collapsed: true,
      items: [
        'architecture/request-lifecycle',
        'architecture/service-container',
        'architecture/modules',
      ],
    },
    {
      type: 'category',
      label: 'HTTP & Routing',
      collapsed: true,
      items: [
        'routing/routes-and-controllers',
        'routing/validation-and-errors',
      ],
    },
    {
      type: 'category',
      label: 'Lapisan Data',
      collapsed: true,
      items: [
        'data/knex-configuration',
        'data/models-and-queries',
        'data/migrations-and-seeds',
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      collapsed: true,
      items: [
        'cli/overview',
        'cli/commands',
        'cli/scaffolding-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Panduan',
      collapsed: true,
      items: [
        'security/overview',
        'testing/strategy',
        'deployment/guide',
        'recipes/common-tasks',
        'faq/index',
      ],
    },
    {
      type: 'category',
      label: 'Contoh',
      collapsed: true,
      items: [
        'examples/users-api',
        'examples/jwt-multer',
      ],
    },
    {
      type: 'category',
      label: 'Komunitas',
      collapsed: true,
      items: [
        'community/contributing',
        'community/code-of-conduct',
      ],
    },
    {
      type: 'category',
      label: 'Rilis & Dukungan',
      collapsed: true,
      items: [
        'release/overview',
        'release/upgrade-guide',
        'release/changelog',
      ],
    },
  ],
};

export default sidebars;
