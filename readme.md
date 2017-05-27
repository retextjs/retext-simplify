# retext-simplify [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Check phrases for simpler alternatives with [**retext**][retext].

## Installation

[npm][]:

```bash
npm install retext-simplify
```

## Usage

Say we have the following file, `example.txt`:

```text
You can utilize a shorter word.
Be advised, don’t do this.
That’s the appropriate thing to do.
```

And our script, `example.js`, looks as follows:

```javascript
var vfile = require('to-vfile');
var report = require('vfile-reporter');
var retext = require('retext');
var simplify = require('retext-simplify');

retext()
  .use(simplify)
  .process(vfile.readSync('example.txt'), function (err, file) {
    console.error(report(err || file));
  });
```

Yields:

```text
example.txt
   1:9-1:16  warning  Replace “utilize” with “use”                                utilize      retext-simplify
   2:1-2:11  warning  Remove “Be advised”                                         be-advised   retext-simplify
  3:12-3:23  warning  Replace “appropriate” with “proper”, “right”, or remove it  appropriate  retext-simplify

⚠ 3 warnings
```

## API

### `retext().use(simplify[, options])`

Check phrases for simpler alternatives.

###### `options.ignore`

`Array.<string>` — phrases _not_ to warn about.

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
