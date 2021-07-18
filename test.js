import test from 'tape'
import {retext} from 'retext'
import retextSimplify from './index.js'

test('retext-simplify', (t) => {
  t.plan(4)

  retext()
    .use(retextSimplify)
    .process('You can utilize a shorter word.', (error, file) => {
      t.deepEqual(
        [error].concat(JSON.parse(JSON.stringify(file.messages))),
        [
          null,
          {
            name: '1:9-1:16',
            message: 'Replace `utilize` with `use`',
            reason: 'Replace `utilize` with `use`',
            line: 1,
            column: 9,
            source: 'retext-simplify',
            ruleId: 'utilize',
            position: {
              start: {line: 1, column: 9, offset: 8},
              end: {line: 1, column: 16, offset: 15}
            },
            fatal: false,
            actual: 'utilize',
            expected: ['use']
          }
        ],
        'should emit messages'
      )
    })

  retext()
    .use(retextSimplify)
    .process('In order for this to work, clap your hands.', (error, file) => {
      t.deepEqual(
        [error].concat(file.messages.map((d) => String(d))),
        [null, '1:1-1:13: Replace `In order for` with `for`'],
        'should warn about wordiness'
      )
    })

  retext()
    .use(retextSimplify)
    .process(
      'You can utilize a shorter word.\nBe advised, don’t do this.\nThat’s the appropriate thing to do.',
      (error, file) => {
        t.deepEqual(
          [error].concat(file.messages.map((d) => String(d))),
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
    .use(retextSimplify, {ignore: ['utilize']})
    .process('You can utilize a shorter word.', (error, file) => {
      t.deepEqual(
        [error].concat(file.messages.map((d) => String(d))),
        [null],
        'should not warn for ignored phrases'
      )
    })
})
