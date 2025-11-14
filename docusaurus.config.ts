import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Flowra Documentation',
  tagline: 'A modular, expressive Node.js framework for building scalable web applications - featuring CLI-driven architecture, service container, and seamless module integration.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'ecowangsa',
  projectName: 'flowra-docs',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/en',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0.0',
            },
          },
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'id',
        path: 'docs/id',
        routeBasePath: 'docs/id',
        sidebarPath: './sidebars.id.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'Bahasa Indonesia',
          },
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
        alt: 'Flowra Logo',
        src: 'img/flowra.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation (EN)',
        },
        {
          to: '/docs/id/overview',
          label: 'Dokumentasi (ID)',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          versions: {
            current: {
              label: '1.0.0',
            },
          },
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview (EN)',
              to: '/docs/overview',
            },
            {
              label: 'Ikhtisar (ID)',
              to: '/docs/id/overview',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/flowra.js/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flowra, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
