const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.originalUrl}`);
  console.log('Headers:', req.headers);
  next();
});

app.use('/api', createProxyMiddleware({
  target: 'https://myserver.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api', // optional, can be omitted if paths are identical
  },
  onProxyReq: (proxyReq, req, res) => {
    // You can manipulate headers here if needed
    console.log('Passing by...');
  },
  onError: (err, req, res) => {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
}));

app.listen(8080, () => {
  console.log('Gateway listening on http://localhost:8080');
});
