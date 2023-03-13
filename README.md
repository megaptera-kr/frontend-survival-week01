# 프론트엔드 개발 환경 세팅하기

## JavaScript 개발 환경 세팅

기존 설치된 Node.js version을 확인한 후 \
[FNM(Fast Node Manager)](https://github.com/Schniz/fnm#using-a-script)를 사용해서
현재 기준으로 **Node.js LTS(Long Term Support) version**을 설치합니다.

```bash
// Node.js version 확인
node --version  // v16.15.1

// Homebrew를 이용해 fnm 설치
brew install fnm

// `~/.bashrc` 또는 `~/.zshrc`에 다음 추가
eval "$(fnm env --use-on-cd)"

// Node.js LTS(Long Term Support) version 설치 및 사용
fnm install --lts
fnm use lts-latest

// 설치된 Node.js version 확인 및 지정한 버전 default로 설정
fnm list
fnm default $(fnm current)
```

## `TypeScript + React + Jest + Parcel` 개발 환경 세팅

### 1. 작업 폴더를 생성한 후 해당 폴더로 이동합니다

```bash
mkdir my-app
cd my-app
```

### 2. npm 패키지를 생성합니다

```bash
// -y를 통해서 기본 설정값으로 생성
npm init -y
```

### 3. `.gitignore` 파일을 추가합니다

`node_modules` 와 같은 파일들을 commit 하지 않도록 `.gitignore` 파일을 통해 방지할 수 있습니다.

```bash
/node_modules/
/dist/
/.parcel-cache/
```

위 3개의 파일은 반드시 `.gitignore` 파일에 넣어줘야하고, \ github에서 기본으로 제공하는
[.gitignore 파일](https://github.com/github/gitignore/blob/main/Node.gitignore)을
주로 사용합니다.

### 4. TypeScript를 세팅합니다

```bash
npm i -D typescript
npx tsc --init
```

`tsconfig.json` 파일에서 `"jsx": "preserve"` 주석을 해제하고,
`"jsx": "react-jsx"` 설정을 변경했습니다.\
참고로 Typescript는
[여러 가지의 JSX 모드](https://www.typescriptlang.org/ko/docs/handbook/jsx.html)를
제공하고 있습니다.\
`npm i -D`는 `npm install --save-dev`의 약어로서
`개발 환경`에서 사용하는 도구를 설치할 때 사용하는 명령어 입니다.\
서버 배포 시 `devDependencies`를 제외할 수 있어서 배포 크기를 줄일 수 있습니다.

```json
// package.json의 devDependencies key는 개발할 때만 사용하는 확장 모듈을 관리합니다.
"devDependencies": {
    "typescript": "^4.9.5"
  }
```

### 5. ESLint를 세팅합니다

```bash
npm i -D eslint
npx eslint --init
```

`ESLint` 세팅 시 나오는 질문 및 답변은 다음과 같습니다.

```bash
How would you like to use ESLint?
❯ To check syntax, find problems, and enforce code style
What type of modules does your project use?
❯ JavaScript modules (import/export)
Which framework does your project use?
❯ React
Does your project use TypeScript?
❯ Yes
Where does your code run?
❯ Browser
How would you like to define a style for your project?
❯ Use a popular style guide
Which style guide do you want to follow?
❯ XO: https://github.com/xojs/eslint-config-xo-typescript
What format do you want your config file to be in?
❯ JavaScript
Would you like to install them now?
❯ Yes
Which package manager do you want to use?
❯ npm
```

style guide는 현재 가장 많이 사용하는 `airbnb` style guide를 적용하고자 합니다.

```bash
// XO style guide 제거
npm uninstall eslint-config-xo \
    eslint-config-xo-typescript

// airbnb style guide 설치
npm i -D eslint-config-airbnb \
    eslint-plugin-import \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-jsx-a11y
```

- `.eslintrc.js` 파일을 적절히 수정합니다.

```bash
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
};
```

### 6. `.eslintignore` 파일을 추가합니다

`.eslintignore` 파일 내용은 `.gitignore` 파일과 동일하게 작성해줍니다.

### 7. `VS Code 설정 파일`을 생성합니다

- `.vscode` 폴더 생성 후 하위에 `setting.json` 파일을 생성합니다.

```bash
mkdir .vscode
touch .vscode/settings.json
```

- 아래 내용을 세팅해서 파일 저장시 자동으로 lint 실행 및 fix 하도록 합니다.

```json
{
  // 80 column에서 줄 긋기
  "editor.rulers": [80],
  // 저장 시 자동으로 fix하기
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // 저장 시 필요없는 spaces 줄여주기
  "trailing-spaces.trimOnSave": true
}
```

### 8. `React`를 설치합니다

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

### 9. `테스팅 도구`를 설치합니다

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

`테스팅 도구` 설치 내용은 다음과 같습니다.

1. Jest 및 SWC 지원 패키지 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest
```

2.React Testing Library 세팅

```bash
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### 10. `jest.config.js` 파일을 작성합니다

`jest.config.js 파일`
<https://github.com/ahastudio/CodingLife/blob/main/20220726/react/jest.config.js>
을 작성해서 테스트 시 [SWC(Speedy Web Compiler)](https://swc.rs/)를 사용할 수 있게 합니다.\
`setupFilesAfterEnv`의 내용 중 `./jest.setup`은 삭제합니다.

```bash
module.exports = {
  testEnvironment: 'jsdom',

  // React Testing Library 관련 설정(setupFilesAfterEnv)
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],

  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          jsx: true,

          // React Testing Library 관련 설정(decorators)
          decorators: true,

        },
        transform: {
          react: {
            runtime: 'automatic',
          },
          // React Testing Library 관련 설정(legacyDecorator, decoratorMetadata)
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
    }],
  },
};
```

### 11. `Parcel`을 설치합니다

```bash
npm i -D parcel
```

- 추천하는 설정 작업

  - `package.json` 파일에 source 속성 추가

  ```json
  "source" : "./index.html"
  ```

  - `parcel-reporter-static-files-copy` 패키지를 설치 후 `.parcelrc` 파일을 작성합니다.
    <https://github.com/elwin013/parcel-reporter-static-files-copy>
    아래 설정을 통해서 static 폴더의 파일을 정적 파일로 Serving할 수 있습니다.(이미지 등 Assets)

```json
{
  "extends": ["@parcel/config-default"],
  "reporters": ["...", "parcel-reporter-static-files-copy"]
}
```

### 12. `package.json` 파일의 scripts 내용을 수정합니다

아래의 `scripts` 내용을 참고하여 수정합니다.
<https://github.com/ahastudio/CodingLife/blob/main/20220726/react/package.json>

```json
"scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    // lint 관련 설정
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    // jest 관련 설정
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  },
```

현재 `packsge.json`의 `"main" : "index.js"`를 `"source" : "index.html"`로 수정합니다.
원래 node의 경우 실행 파일을 `"main"` 으로 잡아주는데,
해당 파일에서는 웹 서버를 띄울 것이기 때문에 `"source"`로 변경했습니다.

### 13. React 기본 코드를 작성합니다

1. `index.html` 파일 작성

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Demo App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```

2.`src/main.tsx` 파일 작성

```typescript
import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  const element = document.getElementById('root');
  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}

main();
```

3.`src/App.tsx` 파일 작성

```typescript
export default function App() {
  return <p>Hello, world!</p>;
}
```
