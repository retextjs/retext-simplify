import {toString} from 'nlcst-to-string'
import {quotation} from 'quotation'
import {search} from 'nlcst-search'
import {pointStart, pointEnd} from 'unist-util-position'
import {patterns} from './patterns.js'

const source = 'retext-simplify'

const list = Object.keys(patterns)

export default function retextSimplify(options) {
  const ignore = (options || {}).ignore || []

  return transformer

  function transformer(tree, file) {
    search(tree, list, finder)

    function finder(match, index, parent, phrase) {
      const id = phrase.replace(/\s+/g, '-').toLowerCase()
      const pattern = patterns[phrase]
      const expected = pattern.replace
      const actual = toString(match)
      let reason

      if (ignore.includes(id)) {
        return
      }

      if (pattern.omit && expected.length === 0) {
        reason = 'Remove ' + quotation(actual, '`')
      } else {
        reason =
          'Replace ' +
          quotation(actual, '`') +
          ' with ' +
          quotation(expected, '`').join(', ')

        if (pattern.omit) {
          reason += ', or remove it'
        }
      }

      Object.assign(
        file.message(
          reason,
          {
            start: pointStart(match[0]),
            end: pointEnd(match[match.length - 1])
          },
          [source, id].join(':')
        ),
        {actual, expected}
      )
    }
  }
}
