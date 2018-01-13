'use strict';

// set up compatibility for ES modules
require = require('@std/esm')(module, { cjs: true });
module.exports = require('./main.mjs').default;
