'use strict'

var child = require('child_process')
var process = require('global/process')
var windows = process.platform === 'win32'

module.exports = pwd

function pwd () {
  return windows
    ? child.execFileSync('cd', null, {encoding: 'utf8'}).trim()
    : process.env.PWD
}
