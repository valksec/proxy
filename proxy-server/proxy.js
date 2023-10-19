const express = require('express');
const app = express();

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }

  // Check if the provided URL is valid
  if (!isValidUrl(url)) {
    return res.status(400).send('Invalid URL');
  }

  res.redirect(301, url);
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
