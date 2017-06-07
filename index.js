'use strict'

var process = require('global/process')

module.exports = pwd

function pwd () {
  return process.env.PWD || process.cwd()
}
