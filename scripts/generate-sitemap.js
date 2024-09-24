import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Add more routes as needed
]

// Create a writable stream
const sitemapStream = new SitemapStream({
  hostname: 'https://app-factory.netlify.app/',
})

// Pipe the sitemap stream to a file
const writeStream = fs.createWriteStream('./public/sitemap.xml')

sitemapStream.pipe(writeStream)

// Add URLs to the sitemap
links.forEach((link) => {
  sitemapStream.write(link)
})

// End the stream
sitemapStream.end()

// Optionally handle completion
streamToPromise(sitemapStream)
  .then(() => {
    console.log('Sitemap generated successfully!')
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err)
  })
