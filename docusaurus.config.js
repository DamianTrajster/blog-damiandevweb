// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog Damian Dev Web',
  tagline: 'Tutoriales y guias sobre desarrollo web',
  favicon: 'img/logo-blog.png',

  // Set the production url of your site here
  url: 'https://DamianTrajster.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog-damiandevweb',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DamianTrajster', // Usually your GitHub org/user name.
  projectName: 'blog-damiandevweb', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Damian_Dev_Web',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-blog.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guias',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/DamianTrajster',
            label: 'GitHub',
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
                label: 'Guias',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Mis Redes',
            items: [
              {
                label: 'Instgram',
                href: 'https://www.instagram.com/damian_dev_web/',
              },
              {
                label: 'Bio',
                href: 'https://lnk-bio-damian-dev-web.netlify.app/',
              },
              {
                label: 'Linkedin',
                href: 'hhttps://github.com/DamianTrajster',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DamianTrajster',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Damian_Dev_Web hecho con ❤️ para CFP20 `,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
