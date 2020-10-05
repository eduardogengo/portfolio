const PROXY_CONFIG = [
    {
        context: ['/apiemail'],
        target: 'https://formspree.io/f/xyybkkby',
        secure: true,
        logLevel: 'debug',
        pathRewrite: { '^/apiemail': ''}
    }
];

module.exports = PROXY_CONFIG