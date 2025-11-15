import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Flowra Documentation',
  tagline: 'Official guide to building modular, production-ready Node.js services with Flowra.',
  favicon: 'img/favicon.ico',
  url: 'https://docs.flowra.dev',
  baseUrl: '/',
  organizationName: 'ecowangsa',
  projectName: 'flowra-docs',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ecowangsa/flowra-docs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
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
          href: 'https://github.com/ecowangsa/flowra',
          label: 'GitHub',
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
          title: 'Guides',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture/request-lifecycle',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/ecowangsa/flowra/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/ecowangsa/flowra/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Flowra Framework',
              href: 'https://github.com/ecowangsa/flowra',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/flowrajs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flowra`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript'],
    },
  },
};

export default config;
