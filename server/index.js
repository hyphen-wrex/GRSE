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
app.get('/api/users/', (req, res) => {
  const users = db.get('users')
    .value();

  res.json(users);
});
app.get('/api/users/:username', (req, res) => {
  const { username } = req.params;
  const user = db.get('users')
    .find({ username })
    .value();

  res.json(user);
});
app.put('/api/users/:username', (req, res) => {
  const { username } = req.params;
  const { data } = req.body;
  try {
    const newEntries = db.update('users', users => users.map(user =>
      (user.username === username
        ? data
        : user)
    ))
      .write();
    res.json({ success: true, data: newEntries });
  } catch (error) {
    res.json({ success: false, error });
  }
});

app.listen(config.PORT, () =>
  console.log(`Example app listening on port ${config.PORT}!`));

