import keys from 'object-keys'
import toString from 'nlcst-to-string'
import quote from 'quotation'
import search from 'nlcst-search'
import position from 'unist-util-position'
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
        reason = 'Remove ' + quote(actual, '`')
      } else {
        reason =
          'Replace ' +
          quote(actual, '`') +
          ' with ' +
          quote(expected, '`').join(', ')

        if (pattern.omit) {
          reason += ', or remove it'
        }
      }

      message = file.message(
        reason,
        {
          start: position.start(match[0]),
          end: position.end(match[match.length - 1])
        },
        [source, id].join(':')
      )

      message.actual = actual
      message.expected = expected
    }
  }
}
