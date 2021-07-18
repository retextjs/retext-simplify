import keys from 'object-keys'
import {toString} from 'nlcst-to-string'
import {quotation} from 'quotation'
import {search} from 'nlcst-search'
import {pointStart, pointEnd} from 'unist-util-position'
import {patterns} from './patterns.js'

var source = 'retext-simplify'

var list = keys(patterns)

export default function retextSimplify(options) {
  var ignore = (options || {}).ignore || []

  return transformer

  function transformer(tree, file) {
    search(tree, list, finder)

    function finder(match, index, parent, phrase) {
      var id = phrase.replace(/\s+/g, '-').toLowerCase()
      var pattern = patterns[phrase]
      var expected = pattern.replace
      var actual = toString(match)
      var reason
      var message

      if (ignore.indexOf(id) !== -1) {
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

      message = file.message(
        reason,
        {
          start: pointStart(match[0]),
          end: pointEnd(match[match.length - 1])
        },
        [source, id].join(':')
      )

      message.actual = actual
      message.expected = expected
    }
  }
}
