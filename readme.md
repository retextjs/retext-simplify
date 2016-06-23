# retext-simplify [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

<!--lint disable heading-increment list-item-spacing-->

Check phrases for simpler alternatives with [**retext**][retext].

## Installation

[npm][npm-install]:

```bash
npm install retext-simplify
```

**retext-simplify** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

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
<stdin>
   1:9-1:16  warning  Replace “utilize” with “use”                                utilize
   2:1-2:11  warning  Remove “Be advised”                                         be advised
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

[npm-install]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/retext-simplify/releases

[license]: LICENSE

[author]: http://wooorm.com

[retext]: https://github.com/wooorm/retext
