<h1 align="center">All Contributors Types</h1>

<p align="center">
	The contribution types supported by All Contributors, as data.
	🔣
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/all-contributors-types/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/all-contributors-types" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/all-contributors-types?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/all-contributors-types/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/all-contributors-types" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/all-contributors-types?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i all-contributors-types
```

```ts
import {
	contributionTypes,
	createContributionLink,
	isContributionTypeName,
} from "all-contributors-types";

contributionTypes.bug;
// { description: "Bug reports", link: "issues", symbol: "🐛" }

createContributionLink("bug", {
	login: "JoshuaKGoldberg",
	projectName: "all-contributors-types",
	projectOwner: "JoshuaKGoldberg",
});
// "https://github.com/JoshuaKGoldberg/all-contributors-types/issues?q=author%3AJoshuaKGoldberg"

isContributionTypeName("bug"); // true
isContributionTypeName("other"); // false
```

The data and links are kept in sync with [`all-contributors-cli`](https://github.com/all-contributors/cli)'s [emoji key](https://allcontributors.org/docs/en/emoji-key).

### `contributionTypes`

Each contribution type, keyed by name, with:

- `description`: human-readable description, such as `"Bug reports"`
- `link` _(optional)_: which kind of repository page it links to: `"commits"`, `"issues"`, or `"reviews"`
- `symbol`: emoji, such as `"🐛"`

The `ContributionTypeName` type is a union of all contribution type names.

### `createContributionLink`

Creates the URL a contribution links to in an All Contributors README table, the same as `all-contributors generate`.
Contribution types without a `link` get a `#type-login` anchor.

Options:

- `login` _(optional)_: username of the contributor
- `projectName`: name of the repository
- `projectOwner`: owner of the repository
- `repoHost` _(optional)_: base URL of the repository host, if not the default for `repoType`
- `repoType` _(optional)_: `"github"` _(default)_ or `"gitlab"`

### `isContributionTypeName`

Type guard for whether a string is a known `ContributionTypeName`.

## Why?

[all-contributors/cli#295 Expose contribution-types in separate package](https://www.npmjs.com/package/all-contributors-types) tracks a first-party package exposing these utilities and types.
In the meantime, this package approximates what all-contributors does.

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 🔣

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/all-contributors-types/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/all-contributors-types/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo framework](https://create.bingo).
