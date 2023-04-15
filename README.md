- [reference](https://www.testim.io/blog/typescript-unit-testing-101/)
- [web](https://github.com/microsoft/TypeScript-Node-Starter)

### Project infrastructure

```text
    root
        src
        tests
```

#### initilize projec in the project folder

```shell
npm init -y
```

## Project need npm install

```shell
npm install typescript --save-dev
npm i -D typescript ts-node
npm install --save-dev typescript tslint @types/node
npm install eslint
```

## Type script project setting

- setup tsconfig create tsconfig.json

```shell
./node_modules/.bin/tsc --init
```

#### change the tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
```

## Unit test

#### need npm install

```shell
npm install jest --save-dev
npm install ts-jest --save-dev
npm install @types/jest --save-dev
```

#### add jest.config.js

```js
module.exports = {
transform: {'^.+\\.ts?$': 'ts-jest'},
testEnvironment: 'node',
testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

## tslint setting

```shell
./node_modules/.bin/tslint --init
```

#### tslint.json will be created, add follow to tslint.json

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": false,
    "trailing-comma": false
  }
}
```

## eslint setting

```shell
touch .eslintrc.json
```

#### change it with

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}

```

## Change package.json

```text
   "build-ts": "tsc",
   "build": "npm run build-ts && npm run lint",
   "debug": "nodemon --inspect dist/index.js",
   "lint": "tsc --noEmit && eslint \"**/*.{js,ts}\" --quiet --fix"
   
```