const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // Implement your search logic here
  res.send(`Search results for: ${query}`);
});

app.listen(3000, () => {
  console.log('Search engine is running on port 3000');
});
