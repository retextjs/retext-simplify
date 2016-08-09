/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module retext:simplify
 * @fileoverview Check phrases for simpler alternatives.
 */

'use strict';

/* Dependencies. */
var keys = require('object-keys');
var difference = require('lodash.difference');
var nlcstToString = require('nlcst-to-string');
var quotation = require('quotation');
var search = require('nlcst-search');
var patterns = require('./index.json');

/* Expose. */
module.exports = simplify;

/* List of all phrases. */
var list = keys(patterns);

/**
 * Attacher.
 *
 * @param {Retext} processor
 *   - Instance.
 * @param {Object?} [options]
 *   - Configuration.
 * @param {Array.<string>?} [options.ignore]
 *   - List of phrases to *not* warn about.
 * @return {Function} - `transformer`.
 */
function simplify(processor, options) {
  var ignore = (options || {}).ignore || [];
  var phrases = difference(list, ignore);

  return transformer;

  /**
   * Search `tree` for validations.
   *
   * @param {Node} tree - NLCST node.
   * @param {VFile} file - Virtual file.
   */
  function transformer(tree, file) {
    search(tree, phrases, function (match, position, parent, phrase) {
      var pattern = patterns[phrase];
      var replace = pattern.replace;
      var value = quotation(nlcstToString(match), '“', '”');
      var message;

      if (pattern.omit && !replace.length) {
        message = 'Remove ' + value;
      } else {
        message = 'Replace ' + value + ' with ' + quotation(replace, '“', '”').join(', ');

        if (pattern.omit) {
          message += ', or remove it';
        }
      }

      message = file.warn(message, {
        start: match[0].position.start,
        end: match[match.length - 1].position.end
      });

      message.ruleId = phrase.replace(/\s+/g, '-').toLowerCase();
      message.source = 'retext-simplify';
    });
  }
}
