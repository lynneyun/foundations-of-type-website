module.exports = {
    siteMetadata: {
        siteTitle: `Foundations of Type Design`,
        defaultTitle: `Foundations of Type Design`,
        siteTitleShort: `Foundations of Type Design`,
        siteDescription: `In this all-comprehensive course, students will learn about the foundations of type design, how to get started on designing their first typeface, and how to plan out a series of styles.`,
        siteUrl: `https://typedesignschool.com`,
        siteAuthor: `@lynneyun`,
        siteImage: `/banner.png`,
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
