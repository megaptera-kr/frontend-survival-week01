# Initial-settings

## TypeScript + React + Jest + ESLint + Parcel 개발 환경 설정

### 1. 폴더 생성 및 패키지 생성

```zsh
mkdir project-init

cd project-init
```

```zsh
npm init -y
```

### 2. `.gitignore` 파일을 작성

```zsh
touch .gitignore
```

💡 Tip

- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [gitignore examples in github](https://github.com/github/gitignore)

### 3. 타입스크립트 설정

```zsh
npm i -D typescript

npx tsc --init # 초기화 및 tsconfig.json 파일 생성
```

### 4. `tsconfig.json` 파일 수정

```json
{
  "compilerOptions": {
    ...
    "types": [
      "@testing-library/jest-dom" // @testing-library/jest-dom v6 이상을 위한 설정
    ],
    ...
    "jsx": "react-jsx", // react를 사용할 예정
    ...
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build", "dist"]
}
```

### 5. ESLint 설정

```zsh
npm i -D eslint

npx eslint --init

Ok to proceed? (y)
```

### 6. `.eslintrc.js` 파일 수정

```js
module.exports = {
 env: {
  browser: true,
  es2021: true,
  jest: true, // jest 설치 전 미리 세팅
 },
 extends: [
  'xo',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  // local에서 prettier를 사용하기 때문에 추가
  // 해당 과정은 prettier 설치 및 설정이 적용되어 있지 않습니다.
  'prettier',
 ],
 overrides: [
  {
   env: {
    node: true,
   },
   files: ['.eslintrc.{js,cjs}'],
   parserOptions: {
    sourceType: 'script',
   },
  },
  {
   extends: ['xo-typescript'],
   files: ['*.ts', '*.tsx'],
  },
 ],
 parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['react'],
 rules: {},
 settings: {
  react: {
   version: 'detect',
  },
 },
};
```

### 7. `.eslintignore` 파일을 작성

`.gitignore` 파일 내용과 일치해도 무방

### 8. 리액트 설치

```zsh
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### 9. 테스팅 도구 설치

```zsh
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

### 10. `jest.config.js` 파일을 작성해 테스트에서 SWC를 사용

```js
module.exports = {
 testEnvironment: 'jsdom',
 setupFilesAfterEnv: ['@testing-library/jest-dom'],
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

### 11. Parcel (bundler) 설치

```zsh
npm i -D parcel
```

### 12. `package.json` 파일의 scripts를 적절히 수정한다

```json
...
"scripts": {
  "start": "parcel --port 8080",
  "build": "parcel build",
  "check": "tsc --noEmit",
  "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
  "test": "jest",
  "coverage": "jest --coverage --coverage-reporters html",
  "watch:test": "jest --watchAll"
},
...
```

### 13. Parcel에서 정적 파일 빌드를 위한 설정

해당 설정을 해주어야 static 폴더의 파일을 정적 파일로 Serving할 수 있다(Assets)

```zsh
npm i -D parcel-reporter-static-files-copy
```

- 정적 파일 폴더 생성

```zsh
touch static # parcel-reporter-static-files-copy 기본 폴더
```

- `.parcelrc` 파일 root에 생성

```json
{
 "extends": [
  "@parcel/config-default"
 ],
 "reporters": [
  "...",
  "parcel-reporter-static-files-copy"
 ]
}
```

### 14. 기본 코드 추가

- `index.html`

```html
<!DOCTYPE html>
<html lang="=ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Initial Project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```

- `src/main.tsx`

```tsx
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

- `src/App.tsx`

```tsx
export default function App() {
 return <>Hello, world</>;
}
```

(선택)

- `src/App.test.tsx`
- `src/components/Greeting.test.tsx`
- `src/components/Greeting.tsx`
