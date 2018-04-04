'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  JWT_OBTAIN: '"http://localhost:8081/auth/obtain_token/"',
  JWT_REFRESH: '"http://localhost:8081/auth/refresh_token/"',
})
