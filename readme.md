# retext-simplify [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Check phrases for simpler alternatives with [**retext**][retext].

## Installation

[npm][]:

```bash
npm install retext-simplify
```

## Usage

```js
var retext = require('retext');
var simplify = require('retext-simplify');
var report = require('vfile-reporter');

retext()
    .use(simplify)
    .process([
        'You can utilize a shorter word.',
        'Be advised, don’t do this.',
        'That’s the appropriate thing to do.'
    ].join('\n'), function (err, file) {
        console.log(report(file));
    });
```

Yields:

```txt
   1:9-1:16  warning  Replace “utilize” with “use”                                utilize
   2:1-2:11  warning  Remove “Be advised”                                         be-advised
  3:12-3:23  warning  Replace “appropriate” with “proper”, “right”, or remove it  appropriate

⚠ 3 warnings
```

## API

### `retext().use(simplify[, options])`

Check phrases for simpler alternatives.

###### `options`

*   `ignore` (`Array.<string>`) — phrases _not_ to warn about.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/retext-simplify.svg

[travis]: https://travis-ci.org/wooorm/retext-simplify

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/retext-simplify.svg

[codecov]: https://codecov.io/github/wooorm/retext-simplify

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[retext]: https://github.com/wooorm/retext
