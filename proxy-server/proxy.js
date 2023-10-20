const express = require('express');
const axios = require('axios');
const app = express();

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the website');
  }
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
