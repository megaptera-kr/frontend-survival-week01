# React + TypeScript + Jest + ESLint + Parcel 개발환경 설정하기

## JavaScript 개발 환경(Node.js) 세팅하기

현재일 기준 LTS 최신 버전과 설치되어 있는 모든 Node.js 버전 리스트를 확인한다.

```bash
node -v

fnm list
```

만약 최신 Node.js LTS 버전이 설치되지 않고 기본값으로 설정되어 있지 않다면, 설치 후 기본으로 사용하도록 한다.

```bash
fnm install --lts

fnm list

fnm default $(fnm current)
```

## 작업폴더에서 npm 프로젝트 생성하기

원하는 위치(보통은 태초마을의 work 폴더 내)에 `frontend-survival-week01`라는 이름의 폴더를 만들어 해당 폴더로 이동한다.

```bash
mkdir frontend-survival-week01

cd frontend-survival-week01
```

여기서 npm 프로젝트를 생성한다.  
`-y`플래그를 붙여줌으로써 별도의 질문-답을 하지 않고 npm 프로젝트를 생성할 수 있다.

```bash
npm init -y
```

이제 VS Code를 실행해서 새로 생성된 `package.json` 파일을 살펴보도록 하자.

```bash
code .
```

생성된 `package.json` 파일의 모습이 아래와 같다.  
폴더명으로 기본 지정된 `name`이나 그밖의 `description`, `author` 등 필요한 부분을 수정할 수 있다.  
참고로 `scripts` 안에 있는 키는 `npm run`을 앞에 붙여 실행할 수 있다. (예. `npm run test`)

```json
{
  "name": "frontend-survival-week01",
  "version": "1.0.0",
  "description": "프론트엔드 생존코스 1주차 과제",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mjjeon2645/frontend-survival-week01.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/mjjeon2645/frontend-survival-week01/issues"
  },
  "homepage": "https://github.com/mjjeon2645/frontend-survival-week01#readme"
}
```

## .gitignore 파일 설정하기

`.gitignore` 파일을 사전에 작성해서 `node_modules`와 같이  
용량이 크거나 커밋하지 않아도 되는(또는 하지 말아야 할) 것들이 커밋되는 일을 방지하도록 하자.

'github gitignore node'라고만 검색 해도 바로 예시를 볼 수 있다.  
<https://github.com/github/gitignore/blob/main/Node.gitignore>  
적어도 `node_modules`, `.parcel-cache`, `dist`는 꼭 포함되도록 신경써야 한다.  

먼저 `.gitignore` 파일이 없다면 생성하자.

```bash
touch .gitignore
```

생성된 `.gitignore` 파일에 이 튜토리얼만을 위한 간략 버전 / 또는 full 버전을 선택하여 적용한다.  

- 간략 버전

```bash
/node_modules/
/.parcel-cache/
/dist/
```

- full 버전

```bash
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
```

## TypeScript 세팅하기

`typescript` 패키지를 설치하고 `tsconfig.json` 파일을 자동으로 생성한다.  
💡 Tip. TypeScript나 ESLint와 같이 프로그램이 아닌 개발 환경에서만 사용되는 경우 패키지 설치 시 `-D` 플래그를 붙인다.

```bash
npm i -D typescript

npx tsc --init
```

`package.json` 파일에 의존성이 추가된 것을 확인할 수 있다.

```json
{
  "devDependencies": {
    "typescript": "^4.9.5"
  }
}
```

JSX를 사용하기 위해 `tsconfig.json` 파일에서 옵션을 수정해준다.

```json
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx",
    // ...(후략)...
  }
}
```

## ESLint 세팅하기

ESLint를 설치하고 `.eslintrc.js` 파일을 자동으로 생성한다.

```bash
npm i -D eslint

npx eslint --init
```

TypeScript의 `tsconfig.json` 파일 생성 때와는 다르게 몇 가지 질문에 답을 해야 한다.  
작성일(2023.02.03) 기준으로 아래와 같이 선택했다.

```bash
? How would you like to use ESLint? …
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)

? Which framework does your project use? …
❯ React

? Does your project use TypeScript?
› Yes

? Where does your code run? …
✔ Browser

? How would you like to define a style for your project? …
❯ Use a popular style guide

? Which style guide do you want to follow? …
❯ XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now?
› Yes

? Which package manager do you want to use? …
❯ npm
```

현재까지 `package.json` 파일에 포함된 의존성을 살펴보자.

```json
{
    "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.50.0",
    "@typescript-eslint/parser": "^5.50.0",
    "eslint": "^8.33.0",
    "eslint-config-xo": "^0.43.1",
    "eslint-config-xo-typescript": "^0.55.1",
    "eslint-plugin-react": "^7.32.2",
    "typescript": "^4.9.5"
  }
}
```

jest를 설치하고 해도 되지만, 미리 `.eslintrc.js` 파일 내 `env` 설정에 아래 내용과 같이 `jest: true,`를 추가해준다.

```javascript
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    // ...(후략)...
}
```

`package.json` 파일에 `lint` 명령을 추가해준다.

```json
{
  "scripts": {
    // ...(전략)...
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx ."
  },
}
```

다음으로 `.eslintignore` 파일을 생성한다.

```bash
touch .eslintignore
```

필요한 만큼 내용을 추가한다. 이번에는 simple 버전 내용을 추가해주었다.

```bash
/node_modules/
/.parcel-cache/
/dist/
```

lint 실행 및 fix를 수행하는 명령어

```bash
npm run lint
```

### TIP. VS Code 세팅

VS Code ESLint extension을 설치해준다.

```bash
https://marketplace.visualstudio.com/items\
?itemName=dbaeumer.vscode-eslint
```
  
`.vscode` 폴더 생성 후 하위에 `settings.json` 파일 생성

```bash
mkdir .vscode

touch .vscode/settings.json
```

이후 아래 내용을 세팅하면 파일 저장시마다 자동으로 lint & fix를 수행한다.

```json
{
    // 80 column에서 줄 그어주기
    "editor.rulers": [
        80
    ],
    // 저장할 때마다 자동으로 fix
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // save 할 때마다 필요없는 spaces 줄여주기
    "trailing-spaces.trimOnSave": true
}
```

## React 설치하기

아래와 같이 React를 설치한다.

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

이후 eslint, jest를 원활히 사용하기 위해 `.eslintrc.js`의 `extends`를 아래와 같이 설정해준다.

```javascript
  extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'xo',
    ],
```

## 테스팅 도구 세팅하기(Jest)

아래와 같이 테스팅 도구를 설치한다.

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

`jest.config.js` 파일을 생성

```bash
touch jest.config.js
```

그리고 아래와 같이 작성하여 테스트에서 SWC를 사용하도록 설정해준다.

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    // './jest.setup',
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

개발환경 전체를 세팅한 후 한번에 바꿔줘도 되지만, Jest와 관련해서는 `package.json`의 scripts를 아래와 같이 적용할 수 있다.

```json
{
  "scripts": {
    // ...(전략)...
    "test": "jest",
    "watch:test": "jest --watchAll",
    "coverage": "jest --coverage --coverage-reporters html",
  }
}
```

테스트 실행하기

```bash
npm test
```

## Parcel 설치하기

아래와 같이 Parcel을 설치해준다.

```bash
npm i -D parcel
```

설치 후 build 및 정상적인 실행을 위해 `package.json` 파일에서 몇 가지 수정을 해준다.

- `main`을 `source`로 바꾼 뒤 적용할 파일명 기재하기
Node의 경우 실행할 것을 `"main"`으로 잡아주게 되어있으나, 웹 서버를 띄울 것이기 때문에 아래와 같이 적용해준다.

```json
// 기존
"main": "index.js"

//수정
"source": "index.html"
```

- `scripts` 수정하기

```json
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

이제 웹서버를 띄우기 위해 `index.html`을 아래와 같이 작성한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>React Demo App</title>
</head>
<body>
    <p>Hello, world!</p>
</body>
</html>
```

서버를 실행해고 웹 브라우저에서 'Hello, world!' 문구를 확인한다.  
<http://localhost:8080/>

```bash
npm start
```

또는 빌드 + 정적 서버 실행을 아래와 같이 할 수도 있다.

```bash
npx parcel build

npx servor ./dist
```

### TIP. parcel 세팅할 때 같이 하면 좋은 두 가지 작업

1. package.json 파일에 source 속성 추가(위에서 언급)
`"source": "./index.html"`

2. static 폴더의 파일을 정적 파일로 serving할 수 있도록 하기
아래와 같이 parcel-reporter-static-files-copy를 설치한다.

```bash
npm i -D parcel-reporter-static-files-copy
```

`.parcelrc` 파일을 생성하고 아래와 같이 작성한다

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

이제 루트폴더에서 static 폴더를 만든 후 하위에 images, assets 등 추가로 폴더를 만든 후 이미지 파일을 저장하여 사용할 수 있다.

```bash
mkdir static
```

</br>

## 추가. React 기본 코드 작성 및 test 실행해보기

1. `index.html` 파일 수정하기

해당 파일을 아래와 같이 수정한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>React Demo App</title>
</head>
<body>
  <div id="root">
    Loading...
  </div>
  <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

`src/main.tsx` 파일을 아래와 같이 작성하자.

```javascript
import ReactDOM from 'react-dom/client';

import App from './App';

export default function main() {
 const element = document.getElementById('root');

 if (!element) {
  return;
 }

 const root = ReactDOM.createRoot(element);

 root.render(<App />);
}

main();
```

`src/App.tsx`와 `src/App.test.tsx` 파일을 각각 아래와 같이 작성하자.

```javascript
// src/App.tsx

export default function App() {
 return (
  <p>
   Hello, world!
  </p>
 );
}
```

```javascript
// src/App.test.tsx

import {render, screen} from '@testing-library/react';

import App from './App';

test('App', () => {
 render(<App />);

 expect(screen.getByText('Hello, world!'));
});
```

이제 테스트를 실행하여 결과를 확인해보자.

```bash
npm run watch:test
```
