/**
 * @typedef {import('nlcst').Root} Root
 *
 * @typedef Options
 *   Configuration.
 * @property {string[]} [ignore]
 *   Phrases *not* to warn about (rule IDs).
 */

import {toString} from 'nlcst-to-string'
import {quotation} from 'quotation'
import {search} from 'nlcst-search'
import {pointStart, pointEnd} from 'unist-util-position'
import {patterns} from './patterns.js'

const source = 'retext-simplify'
const url = 'https://github.com/retextjs/retext-simplify#readme'

const keys = Object.keys(patterns)

/**
 * Plugin to check phrases for simpler alternatives.
 *
 * @type {import('unified').Plugin<[Options?], Root>}
 */
export default function retextSimplify(options = {}) {
  const ignore = options.ignore || []
  const searches =
    ignore.length > 0 ? keys.filter((d) => !ignore.includes(d)) : keys

  return (tree, file) => {
    search(tree, searches, (match, _, _1, phrase) => {
      const pattern = patterns[phrase]
      const actual = toString(match)
      const expected = pattern.replace

      Object.assign(
        file.message(
          pattern.omit && expected.length === 0
            ? 'Remove ' + quotation(actual, '`')
            : 'Replace ' +
                quotation(actual, '`') +
                ' with ' +
                quotation(expected, '`').join(', ') +
                (pattern.omit ? ', or remove it' : ''),
          {start: pointStart(match[0]), end: pointEnd(match[match.length - 1])},
          [source, phrase.replace(/\s+/g, '-').toLowerCase()].join(':')
        ),
        {actual, expected, url}
      )
    })
  }
}
