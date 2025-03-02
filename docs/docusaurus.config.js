// docusaurus.config.js
module.exports = {
    title: 'Crypto Tracker Docs',
    tagline: 'Documentation for the Crypto Price Tracker',
    url: 'http://localhost',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Parth-Dua', // GitHub org/user name
    projectName: 'crypto-price-tracker', // Repo name

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                },
                
            },
        ],
    ],
};
