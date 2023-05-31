module.exports = {
    siteUrl: process.env.SITE_URL || 'https://vebi.lv',
    generateRobotsTxt: true,
    exclude: ["/facebook", "/google"],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://vebi.lv/sitemap-1.xml',
        ],
    }
};
