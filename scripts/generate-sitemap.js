import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/faqs', changefreq: 'daily', priority: 1.0 },
]

const sitemapStream = new SitemapStream({
  hostname: 'https://app-factory.netlify.app/',
})

const writeStream = fs.createWriteStream('./public/sitemap.xml')

sitemapStream.pipe(writeStream)

links.forEach((link) => {
  sitemapStream.write(link)
})

sitemapStream.end()

streamToPromise(sitemapStream)
  .then(() => {
    console.log('Sitemap generated successfully!')
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err)
  })
