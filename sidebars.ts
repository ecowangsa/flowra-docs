import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'overview/what-is-flowra',
        'overview/philosophy',
        'overview/when-to-use',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/project-structure',
        'getting-started/first-api',
      ],
    },
    {
      type: 'category',
      label: 'Core Architecture',
      collapsed: true,
      items: [
        'architecture/request-lifecycle',
        'architecture/service-container',
        'architecture/modules',
      ],
    },
    {
      type: 'category',
      label: 'Routing & Modules',
      collapsed: true,
      items: [
        'routing/routes-and-controllers',
        'routing/validation-and-errors',
      ],
    },
    {
      type: 'category',
      label: 'Data & Database',
      collapsed: true,
      items: [
        'data/knex-configuration',
        'data/models-and-queries',
        'data/migrations-and-seeds',
      ],
    },
    {
      type: 'category',
      label: 'CLI & Tooling',
      collapsed: true,
      items: [
        'cli/overview',
        'cli/scaffolding-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Security & Testing',
      collapsed: true,
      items: [
        'security/overview',
        'testing/strategy',
      ],
    },
    {
      type: 'category',
      label: 'Deployment & Recipes',
      collapsed: true,
      items: [
        'deployment/guide',
        'recipes/common-tasks',
        'faq/index',
      ],
    },
  ],
};

export default sidebars;
