'use strict';

const path = require('path');
const directory = path.dirname(module.filename);

module.exports = {
  apps: [
    {
      name: 'fishing frontend',
      script: 'npm run start',
      env: {
        NODE_ENV: 'production',
        NODE_PATH: directory
      }
    }
  ]
};
