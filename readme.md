# retext-simplify [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Check phrases for simpler alternatives with [**retext**][retext].

## Installation

[npm][npm-install]:

```bash
npm install retext-simplify
```

**retext-simplify** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var retext = require('retext');
var simplify = require('retext-simplify');
var report = require('vfile-reporter');

retext()
    .use(simplify)
    .process('You can utilize a shorter word', function (err, file) {
        console.log(report(file));
    });
```

Yields:

```txt
<stdin>
   3:1-5:57  warning  Very hard to read sentence

⚠ 1 warning
```

## API

### `retext.use(simplify)`

Check phrases for simpler alternatives.

**Parameters**

*   `simplify` — This plug-in.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/retext-simplify.svg

[travis]: https://travis-ci.org/wooorm/retext-simplify

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/retext-simplify.svg

[codecov]: https://codecov.io/github/wooorm/retext-simplify

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/retext-simplify/releases

[license]: LICENSE

[author]: http://wooorm.com

[retext]: https://github.com/wooorm/retext
