'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('linux', function (t) {
  var pwd = proxyquire('./', {
    'global/process': {
      env: {
        PWD: '/you/are/here'
      }
    }
  })

  t.equal(pwd(), '/you/are/here')

  t.end()
})

test('windows', function (t) {
  var pwd = proxyquire('./', {
    'global/process': {
      env: {
        PWD: undefined
      },
      cwd: () => '/you/are/here/win'
    }
  })

  t.equal(pwd(), '/you/are/here/win')

  t.end()
})
