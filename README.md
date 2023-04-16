## Create TypeScript Project
#### create folders
```shell
mkdir inject_demo
cd inject_demo
mkdir src
```

#### create package.json
```shell
npm init --yes
npm install
```

#### Using WebStorm open project
#### Install typescript
```shell
npm i -D typescript ts-node
```
#### Setup tsconfig
```shell
./node_modules/.bin/tsc --init
```
#### Create a typescript file index.ts
```shell
echo 'console.log("Hi")' > src/index.ts
```
##### Run the script
The output shows our message: Hi
```shell
node --loader ts-node/esm src/index.ts
```

##### Next Step update package.json
```text
{
    "scripts": {
        "start": "node --loader ts-node/esm src/index.ts"
    }
}
```
Run shell
```shell
npm start
```
The output shows our message: Hi


## Unit Test Setting
#### add following to index.ts
```typescript
export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negatives = integers.filter(x => x < 0);

    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}

let result = add('1, 2, 4, 5');
console.log(result);
```
#### Run 
```shell
npm start
```
The output shows our message: Hi 12


#### install jest
```shell
npm install jest --save-dev
```
#### install ts-ject
```shell
npm install ts-jest --save-dev
```

#### install jext types
```shell
npm install @types/jest --save-dev
```

#### create test class for index.ts
```shell
touch tests/index.test.ts
```
#### copy tp index.test.ts
```typescript
import { add } from '../src/index';

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });
});
```

#### create a file named jest.config.js
```shell
touch jest.config.js
```
#### copy following to it
```typescript
module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```
#### in the webstorm
click the test 


#### setup tsconfig create tsconfig.json
```shell
./node_modules/.bin/tsc --init
```
##### Copy 
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

#### install tslint
```shell
npm install tslint
```
##### create tslint.json
```shell
./node_modules/.bin/tslint --init
```
##### copy to tslint.json
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
##### install eslione
```shell
npm install eslint
```
#### install esline inject and config, 
```shell
npm init @eslint/config
```
eslintrc.json shoud be created



### Add more script to package.json
```json
{
  "scripts": {
    "build-ts": "tsc",
    "build": "npm run build-ts && npm run lint",
    "debug": "nodemon --inspect dist/index.js",
    "lint": "tsc --noEmit && eslint \"**/*.{js,ts}\" --quiet --fix"
  }
}
```

##### .eslintrc.json
```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}

```


#### This are reference links
- [typescript-unit-testing](https://www.testim.io/blog/typescript-unit-testing-101/)
- [fastest-way-to-start-a-typescript-project](https://www.mailslurp.com/blog/fastest-way-to-start-a-typescript-project/)

