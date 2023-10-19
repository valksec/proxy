const express = require('express');
const app = express();

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }
  res.redirect(url);
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
