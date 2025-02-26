import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import { apps } from "../src/data.js";

const links = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  ...apps.map((item) => ({
    url: `/app/${item.slug}`,
    changefreq: "daily",
    priority: 0.8,
    lastmod: new Date().toISOString(),
  })),
  {
    url: "/faqs",
    changefreq: "daily",
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
];

const sitemapStream = new SitemapStream({
  hostname: "https://appforge.netlify.app/",
});

const writeStream = fs.createWriteStream("./public/sitemap.xml");

sitemapStream.pipe(writeStream);

links.forEach((link) => {
  sitemapStream.write(link);
});

sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => {
    console.log("Sitemap generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
