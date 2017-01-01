# start-mochista

[![npm](https://img.shields.io/npm/v/start-mochista.svg?style=flat-square)](https://www.npmjs.com/package/start-mochista)

[Mochista] task for [Start]

[mochista]: https://www.npmjs.com/package/mochista
[start]: https://www.npmjs.com/package/start

## Install

```sh
npm install --save-dev start-mochista
# or
yarn add --dev start-mochista
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import mochista from 'start-mochista';

const start = Start(reporter());

export const test = () => start(
  mochista({
    ...
  })
);
```

## Arguments

`mochista(config)`

* `config` – mochista config
