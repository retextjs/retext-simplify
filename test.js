import assert from 'node:assert/strict'
import test from 'node:test'
import {retext} from 'retext'
import retextSimplify from './index.js'

test('retextSimplify', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'default'
    ])
  })

  await t.test('should emit a message w/ metadata', async function () {
    const file = await retext()
      .use(retextSimplify)
      .process('You can utilize a shorter word.')

    assert.deepEqual(
      JSON.parse(JSON.stringify({...file.messages[0], ancestors: []})),
      {
        ancestors: [],
        column: 9,
        fatal: false,
        message: 'Unexpected `utilize`, use `use` instead',
        line: 1,
        name: '1:9-1:16',
        place: {
          start: {line: 1, column: 9, offset: 8},
          end: {line: 1, column: 16, offset: 15}
        },
        reason: 'Unexpected `utilize`, use `use` instead',
        ruleId: 'utilize',
        source: 'retext-simplify',
        actual: 'utilize',
        expected: ['use'],
        url: 'https://github.com/retextjs/retext-simplify#readme'
      }
    )
  })

  await t.test('should emit messages about wordiness', async function () {
    const file = await retext()
      .use(retextSimplify)
      .process('In order for this to work, clap your hands.')

    assert.deepEqual(file.messages.map(String), [
      '1:1-1:13: Unexpected `In order for`, use `for` instead'
    ])
  })

  await t.test(
    'should emit messages about simpler synonyms',
    async function () {
      const file = await retext()
        .use(retextSimplify)
        .process(
          'You can utilize a shorter word.\nBe advised, don’t do this.\nThat’s the appropriate thing to do.'
        )

      assert.deepEqual(file.messages.map(String), [
        '1:9-1:16: Unexpected `utilize`, use `use` instead',
        '2:1-2:11: Unexpected `Be advised`, remove it',
        '3:12-3:23: Unexpected `appropriate`, remove it, or use `proper`, `right` instead'
      ])
    }
  )

  await t.test('should warn some more', async function () {
    const file = await retext()
      .use(retextSimplify)
      .process('This method has no effect')

    assert.deepEqual(file.messages.map(String), [
      '1:13-1:26: Unexpected `has no effect`, use `does nothing`, `does not apply` instead',
      '1:20-1:26: Unexpected `effect`, use `choose`, `pick`, `result` instead'
    ])
  })

  await t.test('should support `ignore`', async function () {
    const file = await retext()
      .use(retextSimplify, {ignore: ['utilize']})
      .process('You can utilize a shorter word.')

    assert.deepEqual(file.messages.map(String), [])
  })
})
