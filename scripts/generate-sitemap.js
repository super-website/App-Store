import { createSitemap } from 'sitemap'
console.log(createSitemap)

import fs from 'fs'

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Add more routes as needed
]

const sitemap = createSitemap({
  hostname: 'https://app-factory.netlify.app/',
  cacheTime: 600000, // 600 sec - cache purge period
  urls: links,
})

fs.writeFileSync('./public/sitemap.xml', sitemap.toString())
