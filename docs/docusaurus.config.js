module.exports = {
  title: 'Synapse Extension',
  tagline: 'An extension wallet for Nervos CKB.',
  url: 'https://getsynapse.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rebase-network', // Usually your GitHub org/user name.
  projectName: 'synapse-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Synapse',
      logo: {
        alt: 'Synapse Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Developers',
          position: 'left',
        },
        {
          href: 'https://github.com/rebase-network/synapse-extension',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Developer',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rebase-network/synapse-extension',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Synapse`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'sdk',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/rebase-network/synapse-website/edit/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
