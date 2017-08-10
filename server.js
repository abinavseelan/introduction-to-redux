const express = require('express');
const path = require('path');
const app = express();
const port = 1337;

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (request, response) => {
  response.header('Content-type', 'text/html');
  response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
