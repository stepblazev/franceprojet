
  /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:  process.env.NEXT_PUBLIC_DOMEN,
  exclude: ['/icon.svg', '/apple-icon.png', '/manifest.webmanifest', '/tags/*'],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
      policies: [
          {
              userAgent: '*',
              allow: '/',
          }
      ]
  }
}