const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://89.111.154.70:8000/',
      changeOrigin: true,
    })
  );
};