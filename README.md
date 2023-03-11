# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## React + TypeScript + Jest + Parcel + EsLint 개발 세팅

### 1. 작업할 폴더를 생성한다

```bash
mkdir my-app
cd my-app
```

### 2. npm 초기화

```bash
npm init 
또는
npm init -y
```

### 3. gitingore 생성

```bash
touch .gitignore
또는 직접 생성
```

#### 3-1. gitignore 내용

<https://www.toptal.com/developers/gitignore/> 를 통헤 생성하거나 원하는 내용을 추가한다.

### 4. TypeScript 설치

- DevDependencies로 설치함으로써 배포시에는 필요없는 패키지를 제외할 수 있다.
- 따라서 도구로써만 사용되는 패키지는 DevDependencies로 설치하는 것이 좋다.

```bash
npm i -D typescript
```

#### 4-1. tsconfig.json 생성

```bash
npx tsc --init
```

해당 명령어를 통해 tsconfig.json 파일이 생성되고,
해당 파일을 통해 필요한 TypeScript의 설정을 할 수 있다.
리액트 파일을 위해 설정해주거나, 하지않아도 무방하다.

```bash
"jsx": "react-jsx" 
```

### 5. ESLint 설치 및 설정

```bash
npm i -D eslint
npx eslint --init
```

```bash
You can also run this command directly using 'npm init @eslint/config'.

? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? …
❯ React
  Vue.js
  None of these

? Does your project use TypeScript? › Yes

? Where does your code run? …  (Press <space> to select,
<a> to toggle all, <i> to invert selection)
✔ Browser
  Node

? How would you like to define a style for your project? …
❯ Use a popular style guide
  Answer questions about your style

# XO 가이드 선택
? Which style guide do you want to follow? …
  Standard: https://github.com/standard/standard
❯ XO: https://github.com/xojs/eslint-config-xo

? What format do you want your config file to be in? …
❯ JavaScript
  YAML
  JSON


Checking peerDependencies of eslint-config-xo-typescript@latest
Checking peerDependencies of eslint-config-xo@latest

...


? Which package manager do you want to use? › npm
```

추후에 Jest를 설치할 것이기 때문에 미리 .eslintrc.js 파일에 jest 관련 설정을 추가하자

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    // jest 추가
    jest: true,
  },

....
}
```

### 6. .eslintrc.js 설정 및 eslintignore 생성

```bash
touch .eslintrc.js
```

그후 내용을 추가한다.

```bash
/node_modules/
/dist/
/.parcel-cache/
```

### 7. React 설치

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

### 8. 테스팅을 위한 도구인 Jest 설치
  
  ```bash
  npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
  ```

#### 8-1. jest.config.js를 생성하여 SWC와 TypeScript를 바라볼수 있도록 설정한다
  
```bash
touch jest.config.js
```

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

### 9. Parcel 설치

```bash
npm i -D parcel
```

### 10. package.json에 script 추가

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

#### 10-1. parcel 진입점 설정

```json
"source": "./index.html",
```

#### 10-2. parce static폴더의 파일을 정적으로 serve할 수 있도록 설정

```bash
npm install -D parcel-reporter-static-files-copy
```
  
#### 10-3. .parcelrc에 내용 추가

```bash
touch .parcelrc
```

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

### 11. index.html 생성

```bash
touch index.html
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>React Demo App</title>
  </head>
  <body>
    <div id ="root"></div>
    <p>Hello, world!</p>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```
