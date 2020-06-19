'use strict'

var test = require('tape')
var retext = require('retext')
var simplify = require('.')

test('simplify', function (t) {
  t.plan(4)

  retext()
    .use(simplify)
    .process('You can utilize a shorter word.', function (err, file) {
      t.deepEqual(
        [err].concat(JSON.parse(JSON.stringify(file.messages))),
        [
          null,
          {
            message: 'Replace `utilize` with `use`',
            name: '1:9-1:16',
            reason: 'Replace `utilize` with `use`',
            line: 1,
            column: 9,
            location: {
              start: {line: 1, column: 9, offset: 8},
              end: {line: 1, column: 16, offset: 15}
            },
            source: 'retext-simplify',
            ruleId: 'utilize',
            fatal: false,
            actual: 'utilize',
            expected: ['use']
          }
        ],
        'should emit messages'
      )
    })

  retext()
    .use(simplify)
    .process('In order for this to work, clap your hands.', function (
      err,
      file
    ) {
      t.deepEqual(
        [err].concat(file.messages.map(String)),
        [null, '1:1-1:13: Replace `In order for` with `for`'],
        'should warn about wordiness'
      )
    })

  retext()
    .use(simplify)
    .process(
      'You can utilize a shorter word.\nBe advised, don’t do this.\nThat’s the appropriate thing to do.',
      function (err, file) {
        t.deepEqual(
          [err].concat(file.messages.map(String)),
          [
            null,
            '1:9-1:16: Replace `utilize` with `use`',
            '2:1-2:11: Remove `Be advised`',
            '3:12-3:23: Replace `appropriate` with `proper`, `right`, or remove it'
          ],
          'should warn about simpler synonyms'
        )
      }
    )

  retext()
    .use(simplify, {ignore: ['utilize']})
    .process('You can utilize a shorter word.', function (err, file) {
      t.deepEqual(
        [err].concat(file.messages.map(String)),
        [null],
        'should not warn for ignored phrases'
      )
    })
})
