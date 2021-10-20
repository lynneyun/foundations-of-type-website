module.exports = {
    siteMetadata: {
        siteTitle: `Foundations of Type Design`,
        defaultTitle: `Foundations of Type Design`,
        siteTitleShort: `Foundations of Type Design`,
        siteDescription: `An accessible online course that covers the foundations of latin type design.`,
        siteUrl: `https://typedesignschool.com`,
        siteAuthor: `@lynneyun`,
        siteImage: `https://github.com/lynneyun/foundations-of-type-website/blob/master/static/banner.png?raw=true`,
        siteLanguage: `en`,
        themeColor: `#8257E6`,
        basePath: `/`,
    },
    flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [{
            resolve: `@rocketseat/gatsby-theme-docs`,
            options: {
                configPath: `src/config`,
                docsPath: `src/docs`,
                repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Rocketseat Gatsby Themes`,
                short_name: `RS Gatsby Themes`,
                start_url: `/`,
                background_color: `#ffffff`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        // {
        //   resolve: `gatsby-plugin-google-analytics`,
        //   options: {
        //     trackingId: `YOUR_ANALYTICS_ID`,
        //   },
        // },
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://rocketdocs.netlify.app`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
