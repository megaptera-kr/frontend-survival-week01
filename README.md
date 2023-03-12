# Setting

## 1. npm 프로젝트 생성

```bash
mkdir project-name
cd project-name
npm init -y
```

### - package.json 설정

```json
  "source": "index.html",
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

### - .gitignore 설정

```bash
touch .gitignore
```

[`.gitignore`](https://github.com/github/gitignore/blob/main/Node.gitignore) 내용 작성

## 2. typescript 설정

```bash
npm i -D typescript
npx tsc --init
```

`tsconfig.json`

```javascript
"jsx": "react-jsx",
```

## 3. eslint 설정

```bash
npm i -D eslint
npx eslint --init
```

```bash
# 설치 옵션
proceed? y
to check syntax, find problems, and enforce code style
javascript modules (import/export)
react
typescript
borwser
style guide
XO
javascript
```

`.eslintrc.js` 설정 추가

```bash
env: {
  "jest": true
},
extends: [
  'plugin:react/jsx-runtime',
],
```

`.eslintignore` 작성

## 4. react 설치

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

## 5. Test (Jest 설치)

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom

touch jest.config.js
```

`jest.config.js` 작성

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup',
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

## 6. parcel 설치

```bash
npm i -D parcel
```

## 7. 기본 코드 작성

- `index.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>React 환경설정</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="src/main.tsx"></script>
</body>
</html>
```

- `src/main.tsx`

```bash
mkdir src
touch src/main.tsx
```

```typescript
import ReactDOM from 'react-dom/client';

function App() {
 return (
  <p>Hello, world!</p>
 );
}

const element = document.getElementById('root');

if (element) {
 const root = ReactDOM.createRoot(element);

 root.render(<App />);
}
```
