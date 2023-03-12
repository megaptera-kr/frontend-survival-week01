# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 📒 TypeScript + React + Jest + Parcel + ESLint 환경설정

### 1. 작업할 생성 폴더 후 폴더에 접근한다

```bash
mkdir my-app
cd my-app
```

### 2. npm 패키지를 설치한다

```bash
npm init -y
```

### 3. .gitignore 파일 생성 및 내용을 추가한다

```bash
touch .gitignore

# https://www.toptal.com/developers/gitignore 파일 생성 또는 내용 추가 
```

### 4. TypeScript 설치 후 초기 설정을 해준다

```bash
npm i -D typescript
```

#### 4-1. 초기설정

```bash
npx tsc --init
```

#### 4-2. 초기 설정 후 아래와 가티 내용을 변경해준다

```javascript
"jsx": "react-jsx"
```

### 5. ESLint 설치

```bash
npm i -D eslint
```

#### 5-1. 초기설정을 해준다

```bash
npx eslint --init

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · xo
✔ What format do you want your config file to be in? · JavaScript
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

#### 5-2 초기설정 후 내용을 추가해준다

```javascript
    module.exports = {
        env: {
            browser: true,
            es2021: true,
            jest: true,
        },
        extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'xo'],
        overrides: [
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
    };
```

### 6. .eslintignore 파일 생성 후 내용을 추가 해준다

```bash
touch .eslintignore
```

### 7. React 설치해준다

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### 8. 테스팅 라이브러리를 설치 후 초기 설정을 해준다

``` bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

#### 8-1. 설정 파일 생성

```bash
touch jest.config.js
```

#### 8-2. 설정 내용

``` javascript
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            jsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
```

#### 9. Bundle를 위한 빌드도구 Parcel를 설치해준다

```bash
npm i -D parcel
```

##### 9-1. 정적 파일을 사용하기 위한 패키지 설치

```bash
npm i -D parcel-reporter-static-files-copy
```

##### 9-2. .parcelrc 파일 생성 후 초기 설정

```bash
touch .parcelrc 
```

```javascript
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

#### 10. package.json에 script 명령어를 추가 해준다

```javascrit
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

#### 11. React 프로젝트 구성 위한 파일 생성

- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/App.test.tsx`
- `src/components/Greeting.test.tsx`
- `src/components/Greeting.tsx`

##### 11-1 프로젝트 구동 시 index.html를 바라볼 수 있게 package.json 수정

```javascript
source : 'index.html'
```
