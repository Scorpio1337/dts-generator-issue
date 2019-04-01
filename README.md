# Examples of dts-bundle-generator issue

Package URL: https://www.npmjs.com/package/dts-bundle-generator

## Required behavior

- Using 'fs' module (or other node.js core packages) in TypeScript
- TypeScript compilation is success
- DTS bundle generator build valid declaration file
- TS Lint check is success

## Problem descriptions

When my code import `fs` package, DTS bundle generator generate invalid declaration file.

## Examples

### example-not-working

My original code.

Importing `fs` package as usual normal way

```typescript
import * as fs from 'fs'
``` 

Using `Stats` object via namespace `fs.Stats`

Declaration file import only `{Stats}` and throw error `Cannot find namespace 'fs'.`

__I think that this is right usage and this one should work__

### example-lint-error

Using two imports from one package works fine, but it is not valid according TS lint


```typescript
import * as fs from 'fs'
import {Stats} from 'fs'
``` 

### example-working

Working solution that we import only `Stats` and `fs` package is required.

It's working solution, but really ugly.

```typescript
import {Stats} from 'fs';
const fs = require('fs');
```