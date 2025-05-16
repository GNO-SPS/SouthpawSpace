// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Uses the SITE_URL env var in production, defaults to localhost for local testing
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  // exclude draft or private paths if needed
  // exclude: ['/drafts/*'],
};
