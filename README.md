# frontend-survival-week01

개발환경 세팅을 위한 가이드

## TypeScript + React + Jest + Parcel 개발환경 세팅

### npm 패키지 세팅

`npm init -y` : 전부 yes로 하기

package.json이 생김

```JS
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

`scripts` 안에 있는걸 실행할 수 있음 ex) npm test

### git ignore 파일 세팅

엄청 큰 node_module이나 불필요한 파일이 커밋되는 일 방지

`.gitignore` 만들어서 내용작성

[github](https://github.com/github/gitignore/blob/main/Node.gitignore)의
node 추천

### 타입스크립트 설치

```bash
npm i -D typescript
```

D 옵션으로 타입스크립트를 설치하면 package.json에 devDependencies으로 타입스크립트가 들어옴

dependencies와 devDependecies의 차이 : dependency는 프로그램에서 직접 사용할 것,
 devDependencies는 환경에서 사용할 것(툴, 도구로서 사용하는 것).

배포시에는 devDependencies는 생략가능

타입스크립트 컴파일러 설치

```bash
npx tsc --init
```

npx는 node_modules/.bin 안에 있는것을 실행해주는 것

npx는 내가 패키지를 설치 안했어도 다른 곳에 받아서 실행해주기도 함

`npm i -D`로 설치한걸 npx로 많이 실행함

tsconfig.json이 생김 -> jsx 주석해제

### ESLint 설치

```bash
npm i -D eslint
npx eslint --init
```

```plain-text
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · xo-typescript
✔ What format do you want your config file to be in? · JavaScript

✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm
```

`.eslintrc.js`가 생성됨

env 밑에 `jest: true` 추가

`.eslintignore` 파일을 만들어서 아래 내용 추가

```plain-text
/node_modules/
/dist/
/.parcel-cache/
```

### 리액트 설치

```bash
npm i react react-dom
```

타입스크립트를 위해 설치

```bash
npm i -D @types/react @types/react-dom
```

### 테스팅 도구(jest, swc) 설치

``` bash
npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom
 @testing-library/react @testing-library/jest-dom
```

jest.config.js 파일 생성

SWC를 사용하도록 설정

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          jsx: true,
          decorators: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};
```

### eslint 사용하기

`npx eslint <경로>` 검사하기

`npx eslint --fix` 수정하기

### Parcel 설치

parcel은 웹서버를 띄워줌

```bash
npm i -D parcel
```

package.json 수정

``` js
"source": "./index.html", // main을 수정
"scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  },
```

### 테스트

index.html 생성

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>Sample</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```

./src/main.tsx

```ts
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <p>HELLO WORLD</p>
  );
}

const element = document.getElementById('root');
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<App/>);
}
```

React를 import 하지 않아 생기는 lint 에러는 .eslintrc.js에 다음을 추가해서 해결

```js
extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'xo',
  ],
```

`npm start`로 parcel에서 정상 작동 확인

static 이미지 사용을 위한 설정

parcel-reporter-static-files-copy 패키지 설치

```bash
npm i -D parcel-reporter-static-files-copy
```

.parcelrc 파일 만들어 작성

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

static 폴더 안에 이미지를 넣어 사용할 수 있음

배포시에는 dist 폴더 밑으로 들어가 배포됨

빌드 + 정적 서버 실행

```bash
npm run build #npx parcel build
npx servor ./dist
```
