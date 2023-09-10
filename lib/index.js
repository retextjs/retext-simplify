/**
 * @typedef {import('nlcst').Root} Root
 *
 * @typedef {import('vfile').VFile} VFile
 */

/**
 * @typedef Options
 *   Configuration.
 * @property {ReadonlyArray<string> | null | undefined} [ignore]
 *   Phrases *not* to warn about (rule IDs) (optional).
 */

import {search} from 'nlcst-search'
import {toString} from 'nlcst-to-string'
import {quotation} from 'quotation'
import {pointEnd, pointStart} from 'unist-util-position'
import {patterns} from './patterns.js'

const source = 'retext-simplify'
const url = 'https://github.com/retextjs/retext-simplify#readme'

const keys = Object.keys(patterns)

/** @type {Readonly<Options>} */
const emptyOptions = {}
/** @type {ReadonlyArray<never>} */
const emptyIgnore = []

/**
 * Check phrases for simpler alternatives.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function retextSimplify(options) {
  const settings = options || emptyOptions
  const ignore = settings.ignore || emptyIgnore
  const searches =
    ignore.length > 0
      ? keys.filter(function (d) {
          return !ignore.includes(d)
        })
      : keys

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree, file) {
    search(tree, searches, function (match, _, parent, phrase) {
      const pattern = patterns[phrase]
      const actual = toString(match)
      const expected = [...pattern.replace]
      const start = pointStart(match[0])
      const end = pointEnd(match[match.length - 1])

      const message = file.message(
        'Unexpected ' +
          quotation(actual, '`') +
          (pattern.omit ? ', remove it' : ',') +
          (pattern.omit && expected.length > 0 ? ', or' : '') +
          (expected.length > 0
            ? ' use ' + quotation(expected, '`').join(', ') + ' instead'
            : ''),
        {
          ancestors: [parent],
          /* c8 ignore next -- verbose to test */
          place: start && end ? {start, end} : undefined,
          source,
          ruleId: phrase.replace(/\s+/g, '-').toLowerCase()
        }
      )

      message.actual = actual
      message.expected = expected
      message.url = url
    })
  }
}
