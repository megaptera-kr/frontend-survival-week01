# 개발 환경 만들기

## 절차 및 의도

1. 패키지 초기 설정: 필요한 도구를 설치하기 위해 가장 먼저 수행

2. 메인 라이브러리/프레임워크 선택: 각기 다른 생태계를 가지며, 예속된 다른 도구의 선택에 영향을 주기
때문에 목적에 맞게 선택

3. 빌드 도구 선택: 번들링, 트랜스파일링, 개발 서버 등 필요한 기능을 목적에 맞게 제공하는 도구 선택

4. 코드 컨벤션 잡기: 작성할 코드의 품질을 개선할 수 있는 도구 설치

5. 테스팅 라이브러리 선택: 작성한 명세서를 자동 검증할 테스트 도구 선택

---

## 패키지 초기 설정

### npm 초기화 명령어 실행

```shell
npm init -y
```

### package.json 수정

```json
/* package.json */

{
  "name": "원하는 프로젝트 이름으로 수정하기",
  "version": "원하는 버전으로 수정하기",
  "description": "원하는 설명으로 수정하기",
  "scripts": {
    // 필요한 명령어 작성하기
  },
  "license": "원하는 라이센스로 수정하기"
}
```

---

## 메인 라이브러리 선택

### react 설치

```shell
npm i react react-dom
```

```shell
npm i -D @types/react @types/react-dom
```

---

## 빌드 도구 선택

### 파셀 설치 및 설정

```shell
npm i -D parcel
```

```json
/* package.json */

{
  "scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
  }
}
```

### 진입점 만들기

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>원하는 사이트 제목으로 수정</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

```tsx
/* main.tsx */

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

```tsx
/* App.tsx */

import React from 'react';

function App() {

  return (
    <p>Hello World!</p>
  );
}

export default App;
```

### .gitignore 빌드 관련 경로 추가

```text
dist
.parcel-cache
```

### 빌드 명령어 추가

```json
/* package.json */

"scripts": {
  "start": "parcel --port 8080",
  "build": "parcel build"
}
```

---

## 코드 컨벤션 잡기

### 타입스크립트 설치 및 설정

```shell
npm i -D typescript
```

```shell
npx tsc --init
```

```json
/* tsconfig.json */

{
  "compilerOptions": {
    "target": "es2016",
    "jsx": "react-jsx",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### 린트 설치 및 설정

```shell
npm i -D eslint
```

```shell
npx eslint --init
```

```js
/* .eslintrc.js */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'xo',
  ],
  overrides: [
    {
      extends: [
        'xo-typescript',
      ],
      files: [
        '*.ts',
        '*.tsx',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
  },
};
```

## 테스팅 라이브러리 선택

### jest 설치 및 설정

```shell
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

```json
/* package.json */

{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "coverage": "jest --coverage --coverage-reporters html"
  }
}
```

```js
/* jest.config.js */

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

```js
/* .eslintrc.js */

env: {
  jest: true,
},
```
