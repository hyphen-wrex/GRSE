const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(express.static(config.STATIC_PATH));
app.get('/', (req, res) => res.sendfile('index.html'));
app.post('/save', (req, res) => {
  res.sendStatus(200);
});

app.listen(config.PORT, () =>
  console.log(`Example app listening on port ${config.PORT}!`));

