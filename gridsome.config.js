module.exports = {
  siteName: 'Loke Carlsson',
  siteUrl: 'https://loke.dev',
  titleTemplate: '%s - Portfolio & Blog',
  siteDescription: 'As a frontend developer, I focus on solving problems and creating beautiful user interfaces. You can read about stuff I\'m passionate of in my blog.',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.ANALYTICS_ID,
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'ProjectPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'journal/**/*.md',
        typeName: 'JournalPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/journal/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/about': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/projects': {
            changefreq: 'weekly',
            priority: 0.9
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1920,
        height: 1080
      }
    },
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
