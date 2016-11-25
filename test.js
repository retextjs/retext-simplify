'use strict';

var test = require('tape');
var retext = require('retext');
var simplify = require('./');

test('simplify', function (t) {
  t.plan(4);

  retext()
    .use(simplify)
    .process([
      'You can utilize a shorter word.',
      'Be advised, don’t do this.',
      'That’s the appropriate thing to do.'
    ].join('\n'), function (err, file) {
      t.ifError(err, 'should not fail (#1)');

      t.deepEqual(
        file.messages.map(String),
        [
          '1:9-1:16: Replace “utilize” with “use”',
          '2:1-2:11: Remove “Be advised”',
          '3:12-3:23: Replace “appropriate” with “proper”, ' +
          '“right”, or remove it'
        ],
        'should warn about simpler synonyms'
      );
    });

  retext()
    .use(simplify, {ignore: ['utilize']})
    .process([
      'You can utilize a shorter word.',
      'Be advised, don’t do this.',
      'That’s the appropriate thing to do.'
    ].join('\n'), function (err, file) {
      t.ifError(err, 'should not fail (#2)');

      t.deepEqual(
        file.messages.map(String),
        [
          '2:1-2:11: Remove “Be advised”',
          '3:12-3:23: Replace “appropriate” with “proper”, ' +
          '“right”, or remove it'
        ],
        'should not warn for `ignore`d phrases'
      );
    });
});
