'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('linux', function (t) {
  var pwd = proxyquire('./', {
    'global/process': {
      platform: 'darwin',
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
      platform: 'win32'
    },
    child_process: {
      execFileSync: function (command, args, options) {
        t.equal(command, 'cd')
        t.notOk(args)
        t.deepEqual(options, {encoding: 'utf8'})
        return '/you/are/here/win'
      }
    }
  })

  t.equal(pwd(), '/you/are/here/win')

  t.end()
})
