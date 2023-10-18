const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

// Define a route that handles requests and extracts the target website from a query parameter
app.get('/proxy', (req, res) => {
  const targetUrl = req.query.url; // Get the 'url' query parameter

  if (!targetUrl) {
    return res.status(400).send('Missing target URL');
  }

  proxy.web(req, res, { target: targetUrl });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
