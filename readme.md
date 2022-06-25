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

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

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
import {readSync} from 'to-vfile'
import {reporter} from 'vfile-reporter'
import {retext} from 'retext'
import retextSimplify from 'retext-simplify'

const file = readSync('example.txt')

retext()
  .use(retextSimplify)
  .process(file)
  .then((file) => {
    console.error(reporter(file))
  })
```

Yields:

```txt
example.txt
   1:9-1:16  warning  Replace `utilize` with `use`                                utilize      retext-simplify
   2:1-2:11  warning  Remove `Be advised`                                         be-advised   retext-simplify
  3:12-3:23  warning  Replace `appropriate` with `proper`, `right`, or remove it  appropriate  retext-simplify

⚠ 3 warnings
```

## API

This package exports no identifiers.
The default export is `retextSimplify`.

### `unified().use(retextSimplify[, options])`

Check phrases for simpler alternatives.

###### `options.ignore`

Phrases *not* to warn about (`Array<string>` - `ruleId`s).

### Messages

Each message is emitted as a [`VFileMessage`][message] on `file`, with the
following fields:

###### `message.source`

Name of this plugin (`'retext-simplify'`).

###### `message.ruleId`

Normalized not ok phrase (`string`, such as `'utilize'`).

###### `message.actual`

Current not ok phrase (`string`, such as `'Utilize'`).

###### `message.expected`

List of suggestions (`Array<string>`, such as `['use']`).

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

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/retextjs/retext-simplify/workflows/main/badge.svg

[build]: https://github.com/retextjs/retext-simplify/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/retextjs/retext-simplify.svg

[coverage]: https://codecov.io/github/retextjs/retext-simplify

[downloads-badge]: https://img.shields.io/npm/dm/retext-simplify.svg

[downloads]: https://www.npmjs.com/package/retext-simplify

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-simplify.svg

[size]: https://bundlephobia.com/result?p=retext-simplify

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/retextjs/retext/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/retextjs/.github

[contributing]: https://github.com/retextjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/retextjs/.github/blob/HEAD/support.md

[coc]: https://github.com/retextjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext

[message]: https://github.com/vfile/vfile-message
