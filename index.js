'use strict';

var keys = require('object-keys');
var difference = require('lodash.difference');
var nlcstToString = require('nlcst-to-string');
var quotation = require('quotation');
var search = require('nlcst-search');
var position = require('unist-util-position');
var patterns = require('./index.json');

module.exports = simplify;

var list = keys(patterns);

function simplify(options) {
  var ignore = (options || {}).ignore || [];
  var phrases = difference(list, ignore);

  return transformer;

  function transformer(tree, file) {
    search(tree, phrases, finder);

    function finder(match, index, parent, phrase) {
      var pattern = patterns[phrase];
      var replace = pattern.replace;
      var value = nlcstToString(match);
      var quoted = quotation(value, '“', '”');
      var reason;
      var message;

      if (pattern.omit && replace.length === 0) {
        reason = 'Remove ' + quoted;
      } else {
        reason = 'Replace ' + quoted + ' with ' + quotation(replace, '“', '”').join(', ');

        if (pattern.omit) {
          reason += ', or remove it';
        }
      }

      message = file.warn(reason, {
        start: position.start(match[0]),
        end: position.end(match[match.length - 1])
      });

      message.ruleId = phrase.replace(/\s+/g, '-').toLowerCase();
      message.source = 'retext-simplify';
      message.actual = value;
      message.expected = replace;
    }
  }
}
