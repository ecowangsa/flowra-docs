import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const flowraVersion = '1.0.3';
const algoliaAppId = process.env.ALGOLIA_APP_ID;
const algoliaApiKey = process.env.ALGOLIA_API_KEY;
const algoliaIndexName = process.env.ALGOLIA_INDEX_NAME;
const algoliaConfig =
  algoliaAppId && algoliaApiKey && algoliaIndexName
    ? {
        appId: algoliaAppId,
        apiKey: algoliaApiKey,
        indexName: algoliaIndexName,
        contextualSearch: true,
      }
    : undefined;

const config: Config = {
  title: 'Flowra',
  tagline: 'Modular Node.js services with an expressive CLI and a clear architecture.',
  favicon: 'img/favicon.ico',
  url: 'https://flowra.id',
  baseUrl: '/',
  organizationName: 'ecowangsa',
  projectName: 'flowra-docs',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  customFields: {
    flowraVersion,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: 'en',
      },
    ],
  ],
  themeConfig: {
    image: 'img/og-flowra.png',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'light',
    },
    navbar: {
      title: 'Flowra',
      logo: {
        alt: 'Flowra logo',
        src: 'img/flowra.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'cli/overview',
          position: 'left',
          label: 'CLI',
        },
        {
          type: 'doc',
          docId: 'examples/users-api',
          position: 'left',
          label: 'Examples',
        },
        {
          type: 'doc',
          docId: 'release/overview',
          position: 'left',
          label: 'Releases',
        },
        {
          href: 'https://github.com/ecowangsa/flowra-cli',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
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
          title: 'Get Started',
          items: [
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'First API',
              to: '/docs/getting-started/first-api',
            },
            {
              label: 'CLI Commands',
              to: '/docs/cli/commands',
            },
          ],
        },
        {
          title: 'Framework',
          items: [
            {
              label: 'Modules',
              to: '/docs/architecture/modules',
            },
            {
              label: 'Service Container',
              to: '/docs/architecture/service-container',
            },
            {
              label: 'Data Layer',
              to: '/docs/data/knex-configuration',
            },
          ],
        },
        {
          title: 'Release',
          items: [
            {
              label: 'Versioning',
              to: '/docs/release/overview',
            },
            {
              label: 'Upgrade Guide',
              to: '/docs/release/upgrade-guide',
            },
            {
              label: 'Changelog',
              to: '/docs/release/changelog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Contributing',
              to: '/docs/community/contributing',
            },
            {
              label: 'Code of Conduct',
              to: '/docs/community/code-of-conduct',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/ecowangsa/flowra-cli/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/ecowangsa/flowra-cli/discussions',
            },
            {
              label: 'Security',
              to: '/docs/security/overview',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Flowra Team, MIT License`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json'],
    },
    ...(algoliaConfig ? {algolia: algoliaConfig} : {}),
  },
};

export default config;
