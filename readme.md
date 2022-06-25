# retext-simplify

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[retext][]** plugin to check for simpler alternatives.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(retextSimplify[, options])`](#unifieduseretextsimplify-options)
*   [Messages](#messages)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([retext][]) plugin to check for simpler
alternatives.
For example it suggest `use` instead of `utilize`.

## When should I use this?

You can opt-into this plugin when you’re dealing with content that might contain
overlong words or phrases, and have authors that can fix that content.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+, or 18.0+), install with [npm][]:

```sh
npm install retext-simplify
```

In Deno with [`esm.sh`][esmsh]:

```js
import retextSimplify from 'https://esm.sh/retext-simplify@7'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import retextSimplify from 'https://esm.sh/retext-simplify@7?bundle'
</script>
```

## Use

Say our document `example.txt` contains:

```txt
You can utilize a shorter word.
Be advised, don’t do this.
That’s the appropriate thing to do.
```

…and our module `example.js` looks as follows:

```js
import {read} from 'to-vfile'
import {reporter} from 'vfile-reporter'
import {retext} from 'retext'
import retextSimplify from 'retext-simplify'

const file = retext()
  .use(retextSimplify)
  .process(readSync('example.txt'))

console.error(reporter(file))
```

…now running `node example.js` yields:

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

Check for simpler alternatives.

##### `options`

Configuration (optional).

###### `options.ignore`

`ruleId` of phrases *not* to warn about (`Array<string>`).

## Messages

Each message is emitted as a [`VFileMessage`][vfile-message] on `file`, with
the following fields:

###### `message.source`

Name of this plugin (`'retext-simplify'`).

###### `message.ruleId`

Normalized not ok phrase (`string`, such as `'utilize'`).

###### `message.actual`

Current not ok phrase (`string`, such as `'Utilize'`).

###### `message.expected`

List of suggestions (`Array<string>`, such as `['use']`).

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Options`.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, 16.0+, and 18.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Related

*   [`retext-equality`](https://github.com/retextjs/retext-equality)
    — check possible insensitive, inconsiderate language
*   [`retext-intensify`](https://github.com/retextjs/retext-intensify)
    — check for weak and mitigating wording
*   [`retext-passive`](https://github.com/retextjs/retext-passive)
    — check passive voice
*   [`retext-profanities`](https://github.com/retextjs/retext-profanities)
    — check profane and vulgar wording

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[health]: https://github.com/retextjs/.github

[contributing]: https://github.com/retextjs/.github/blob/main/contributing.md

[support]: https://github.com/retextjs/.github/blob/main/support.md

[coc]: https://github.com/retextjs/.github/blob/main/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[unified]: https://github.com/unifiedjs/unified

[retext]: https://github.com/retextjs/retext

[vfile-message]: https://github.com/vfile/vfile-message
