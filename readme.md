# retext-simplify

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**retext**][retext] plugin to check phrases for simpler alternatives.

## Install

[npm][]:

```sh
npm install retext-simplify
```

## Use

Say we have the following file, `example.txt`:

```txt
You can utilize a shorter word.
Be advised, don’t do this.
That’s the appropriate thing to do.
```

…and our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var retext = require('retext')
var simplify = require('retext-simplify')

retext()
  .use(simplify)
  .process(vfile.readSync('example.txt'), function(err, file) {
    console.error(report(err || file))
  })
```

Yields:

```txt
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

`Array.<string>` — phrases *not* to warn about.

## Related

*   [`retext-equality`](https://github.com/retextjs/retext-equality)
    — Check possible insensitive, inconsiderate language
*   [`retext-intensify`](https://github.com/retextjs/retext-intensify)
    — Check for weak and mitigating wording
*   [`retext-passive`](https://github.com/retextjs/retext-passive)
    — Check passive voice
*   [`retext-profanities`](https://github.com/retextjs/retext-profanities)
    — Check profane and vulgar wording

## Contribute

See [`contributing.md`][contributing] in [`retextjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/retextjs/retext-simplify.svg

[build]: https://travis-ci.org/retextjs/retext-simplify

[coverage-badge]: https://img.shields.io/codecov/c/github/retextjs/retext-simplify.svg

[coverage]: https://codecov.io/github/retextjs/retext-simplify

[downloads-badge]: https://img.shields.io/npm/dm/retext-simplify.svg

[downloads]: https://www.npmjs.com/package/retext-simplify

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-simplify.svg

[size]: https://bundlephobia.com/result?p=retext-simplify

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/retext

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/retextjs/.github

[contributing]: https://github.com/retextjs/.github/blob/master/contributing.md

[support]: https://github.com/retextjs/.github/blob/master/support.md

[coc]: https://github.com/retextjs/.github/blob/master/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext
