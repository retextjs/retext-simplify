/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module retext:simplify
 * @fileoverview Check phrases for simpler alternatives.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var nlcstToString = require('nlcst-to-string');
var quotation = require('quotation');
var search = require('nlcst-search');
var patterns = require('./data/index.json');

/**
 * Search `tree` for validations.
 *
 * @param {Node} tree - NLCST node.
 * @param {VFile} file - Virtual file.
 */
function transformer(tree, file) {
    search(tree, patterns, function (match, position, parent, phrase) {
        var pattern = patterns[phrase];
        var replace = pattern.replace;
        var value = quotation(nlcstToString(match), '“', '”');
        var message;

        if (pattern.omit && !replace.length) {
            message = 'Remove ' + value;
        } else {
            message = 'Replace ' + value + ' with ' +
                quotation(replace, '“', '”').join(', ');

            if (pattern.omit) {
                message += ', or remove it';
            }
        }

        message = file.warn(message, {
            'start': match[0].position.start,
            'end': match[match.length - 1].position.end
        });

        message.ruleId = phrase;
        message.source = 'retext-simplify';
    });
}

/**
 * Attacher.
 *
 * @return {Function} - `transformer`.
 */
function attacher() {
    return transformer;
}

/*
 * Expose.
 */

module.exports = attacher;
