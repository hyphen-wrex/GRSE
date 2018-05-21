const path = require('path');

let config = {
  STATIC_PATH: path.join(__dirname, '/../client/public'),
};

if (process.env.NODE_ENV === 'development') {
  config = Object.assign(config, {
    PORT: 3020,
  });
} else {
  config = {};
}

module.exports = config;
