# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

### 1. 프로젝트 파일 생성

```jsx
mkdir <project-name>

cd <project-name>
code .
```

### 2. npm init -y

```jsx
npm init -y
```

### 3. .gitignore 파일 생성

### 4. 타입스크립트 설치

```jsx
npm i -D typescript

npx tsc --init
```

jsx를 사용하기 위해 tsconfig.json 파일 내 설정 수정

```jsx
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx",
    // ...(후략)...
  }
}
```

TypeScript 컴파일을 통해 문법 오류를 확인하는 check 명령을 package.json 파일에 추가

```jsx
{
  "scripts": {
    "check": "tsc --noEmit"
  }
}
```

### 5. ESLint 설치

```jsx
npm i -D eslint

npx eslint --init
```

```jsx

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
❯ xo

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now with npm?
› Yes
```

XO 관련 의존성 제거하고, 에어비앤비 관련 의존성 설치.

```jsx
npm uninstall eslint-config-xo eslint-config-xo-typescript
npm i -D eslint-config-airbnb eslint-plugin-import /
         eslint-plugin-react eslint-plugin-react-hooks/
         eslint-plugin-jsx-a11y
```

.eslintrc.js 파일 수정:

```jsx
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', /
   'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
};
```

pacakge.json 파일에 lint 명령 추가:

```jsx
{
  "scripts": {
    // ...(전략)...
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx ."
  }
}
```

.eslintignore 파일 작성:

```jsx

/node_modules/
/dist/

```

.vscode 디렉터리 및 settings.json 파일 생성.

```jsx
mkdir.vscode;

touch.vscode / settings.json;
```

.vscode/settings.json 파일 작성하기

```jsx
{
    "editor.rulers": [
        80
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "trailing-spaces.trimOnSave": true
}
```

### 6. React 설치

```jsx
npm i react react-dom

npm i -D @types/react @types/react-dom
```

React 기본 코드 작성

```jsx
mkdir src
touch src/main.tsx
touch src/App.tsx
```

App.tsx:

```jsx
export default function App() {
  return <p>Hello, world!</p>;
}
```

main.tsx

```jsx
import * as ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('app');
ReactDOM.render(<App />, container);
```

### 6. Jest & React Testing Library 설치

```jsx
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

jest.config.js 파일 작성:

```jsx
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
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
      },
    ],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
```

`src/App.test.tsx` 파일 생성 후 작성:

```jsx
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders greeting message', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Hello, world!');
  });
});
```

pacakge.json 파일에 test 명령 추가:

```jsx
{
  "scripts": {
    // ...(전략)...
    "test": "jest"
  }
}
```

### 7. Parcel 설치

```jsx
npm install --save-dev parcel
```

pacakge.json 파일에 start 명령 추가:

```jsx

{
"scripts": {
"start": "parcel index.html --port 8080",
// ...(후략)...
}
}
```

.gitignore 파일에 Parcel 캐시 추가:

```jsx
/node_modules/ / dist / /.parcel-cache/;
```

.eslintignore 파일에 Parcel 캐시 추가:

```jsx
/node_modules/ / dist / /.parcel-cache/;
```

package.json 파일에 source 항목 추가.

```jsx
"source": "index.html",
```

parcel-reporter-static-files-copy 패키지 설치

```jsx
npm i -D parcel-reporter-static-files-copy
```

.parcelrc 파일 작성:

```jsx
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

static 폴더 생성

```jsx
mkdir static
```

package.json script 수정

```jsx
"scripts": {
  "start": "parcel --port 8080",
  "build": "parcel build",
  "check": "tsc --noEmit",
  "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
  "test": "jest",
  "coverage": "jest --coverage --coverage-reporters html",
  "watch:test": "jest --watchAll"
}
```
