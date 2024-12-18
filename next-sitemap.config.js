const { default: apiUrl } = require("./services/config");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${apiUrl}`, // آدرس لوکال خود را اینجا قرار دهید
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true, // تولید فایل robots.txt
  exclude: ["/protected-page", "/awesome/secret-page"], // صفحاتی که نمی‌خواهید در نقشه باشند
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/shop"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/blog"),
  ],
};
