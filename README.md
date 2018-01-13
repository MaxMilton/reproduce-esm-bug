# Reproducible Case For @std/esm + Couchbase Bug

[![Greenkeeper badge](https://badges.greenkeeper.io/MaxMilton/reproduce-esm-bug.svg)](https://greenkeeper.io/)

## Overview

Minimal code to reproduce `@std/esm` bug: `Error: Module did not self-register.`.

Last known working version of `@std/esm` is `0.18.0`, which does not throw this error and produces the expected result as shown below.

For an overview of the code, please see comments in [main.mjs](https://github.com/MaxMilton/reproduce-esm-bug/blob/master/main.mjs).

### Usage

Install dependencies:

```bash
npm install
# or
yarn
```

Run the code:

```bash
npm start
# or
yarn start
```

### Current result

```bash
$ npm start

> reproduce-esm-bug@1.0.0 start /home/max/Development/LABS/reproduce-esm-bug
> node ./index.js

Error: Module did not self-register.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! reproduce-esm-bug@1.0.0 start: `node ./index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the reproduce-esm-bug@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/max/.npm/_logs/2018-01-13T20_29_19_544Z-debug.log
```

### Expected result

The code in [main.mjs](https://github.com/MaxMilton/reproduce-esm-bug/blob/master/main.mjs) simply mocks some functionality of couchbase, however couchbase's mock is current broken. The following error is the **expected result when `@std/esm` is working correctly**:

```bash
$ npm start

> reproduce-esm-bug@1.0.0 start /home/max/Development/LABS/reproduce-esm-bug
> node ./index.js

ReferenceError: cluster is not defined
    at Object.<anonymous> (file:///home/max/Development/LABS/reproduce-esm-bug/main.mjs:20:16)
    at Object.<anonymous> (file:///home/max/Development/LABS/reproduce-esm-bug/main.mjs:1)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! reproduce-esm-bug@1.0.0 start: `node ./index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the reproduce-esm-bug@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/max/.npm/_logs/2018-01-13T20_28_04_802Z-debug.log
```

## Licence

Code is released under MIT licence. See [LICENCE](https://github.com/MaxMilton/reproduce-esm-bug/blob/master/LICENSE).

-----

© 2018 [Max Milton](https://maxmilton.com)
