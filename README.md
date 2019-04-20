# Batpod

![batpod](./docs/images/batpod.jpg)

## Table of Contents

- [TODO](#todo)
- [Intergrate Airbnb Style Guide with ESLint and Prettier](#intergrate-airbnb-style-guide-with-eslint-and-prettier)
- [Routes Design](#routes-design)
- [Security](#security)

## TODO

- Study Firebase CDN and Cache
- Optimize module import and build
- Share ESLints

## Intergrate Airbnb Style Guide with ESLint and Prettier

Basicly intergration solution followed the guide write on [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a). But there are some custom updates:

- Add `browser` to `env` to support browser global variables ([No more env: browser? #1002](https://github.com/airbnb/javascript/issues/1002))
- Allow `.js` as JSX file name extension
- Allow devDependencies import in webpack ([The `imports` in tests for the rule `import/no-extraneous-dependencies` #959](https://github.com/airbnb/javascript/issues/959))

Other Refrences:

- [Trouble with react/jsx-one-expression-per-line #1921](https://github.com/yannickcr/eslint-plugin-react/issues/1921)

## Routes Design

- `www.comingdb.com`/`comingdb.com`
  - `game.comingdb.com`/`comingdb.com/game`/`www.comingdb.com/game`
  - `movie.comingdb.com`/`comingdb.com/movie`/`www.comingdb.com/movie`
  - `admin.comingdb.com`/`comingdb.com/admin`/`www.comingdb.com/admin`

## Security

- [Do you need to hide your Firebase API keys for Ionic apps?](https://javebratt.com/hide-firebase-api/)
- [Is it safe to expose Firebase apiKey to the public?](https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public)
- [How to restrict Firebase data modification?](https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification)
