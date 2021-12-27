import test from 'tape'
import {retext} from 'retext'
import retextSimplify from './index.js'

test('retext-simplify', (t) => {
  t.plan(5)

  retext()
    .use(retextSimplify)
    .process('You can utilize a shorter word.')
    .then((file) => {
      t.deepEqual(
        JSON.parse(JSON.stringify(file.messages)),
        [
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
            expected: ['use'],
            url: 'https://github.com/retextjs/retext-simplify#readme'
          }
        ],
        'should emit messages'
      )
    }, t.ifErr)

  retext()
    .use(retextSimplify)
    .process('In order for this to work, clap your hands.')
    .then((file) => {
      t.deepEqual(
        file.messages.map((d) => String(d)),
        ['1:1-1:13: Replace `In order for` with `for`'],
        'should warn about wordiness'
      )
    }, t.ifErr)

  retext()
    .use(retextSimplify)
    .process(
      'You can utilize a shorter word.\nBe advised, don’t do this.\nThat’s the appropriate thing to do.'
    )
    .then((file) => {
      t.deepEqual(
        file.messages.map((d) => String(d)),
        [
          '1:9-1:16: Replace `utilize` with `use`',
          '2:1-2:11: Remove `Be advised`',
          '3:12-3:23: Replace `appropriate` with `proper`, `right`, or remove it'
        ],
        'should warn about simpler synonyms'
      )
    }, t.ifErr)

  retext()
    .use(retextSimplify, {ignore: ['utilize']})
    .process('You can utilize a shorter word.')
    .then((file) => {
      t.deepEqual(
        file.messages.map((d) => String(d)),
        [],
        'should not warn for ignored phrases'
      )
    }, t.ifErr)

  retext()
    .use(retextSimplify)
    .process('This method has no effect')
    .then((file) => {
      t.deepEqual(
        file.messages.map((d) => String(d)),
        [
          '1:13-1:26: Replace `has no effect` with `does nothing`, `does not apply`',
          '1:20-1:26: Replace `effect` with `choose`, `pick`, `result`'
        ],
        'should warn about simpler synonyms'
      )
    }, t.ifErr)
})
