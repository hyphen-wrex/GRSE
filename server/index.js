const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const config = require('./config');

const adapter = new FileSync('db.json');
const app = express();
const db = low(adapter);

app.use(bodyParser.json());
app.use(express.static(config.STATIC_PATH));
app.get('/', (req, res) => res.sendfile('index.html'));
app.get('/api/users', (req, res) => {
  const users = db.get('users')
    .value();

  res.json(users);
});

app.listen(config.PORT, () =>
  console.log(`Example app listening on port ${config.PORT}!`));

