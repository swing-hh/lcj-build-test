'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

let DEFAULT_ENV_CONFIG = 'dev';
if (prodEnv.USE_DEFAULT_ENV_CONFIG) {
  //设置为默认值
  prodEnv.ACTIVE_ENV_CONFIG = '"' + DEFAULT_ENV_CONFIG + '"';
}

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
