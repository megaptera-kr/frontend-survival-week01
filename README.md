# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

### 1. `package.json` 파일 생성

```bash
npm init -y
```

* -y : npm init에 무조건 yes로 대답한다는 옵션

### 2. `.gitignore` 파일 작성

⚠️ `node_modules`, `dist` , `.parcel-cache` 필수

* [github에서 기본 제공하는 gitignore - Node Ver.](https://github.com/github/gitignore/blob/main/Node.gitignore)

### 3. 타입스크립트 설정

```bash
# 타입스크립트 설치
npm i -D typescript

# 타입스크립트 컴파일러를 실행해 tsconfig.json 파일 생성 
npx tsc --init
```

### 4. `tsconfig.json` 파일의 jsx 속성을 변경

"jsx"의 주석을 해제하고, "jsx": "react-jsx"로 설정 변경

[tsconfig 설정 참고 사이트](https://www.typescriptlang.org/tsconfig)  
[jsx 설정](https://www.typescriptlang.org/ko/docs/handbook/jsx.html)

### 5. ESLint 설정

```bash
# ESLint 설치
npm i -D eslint

# eslint를 실행해 .eslintrc.js 파일 생성
npx eslint --init
```

```md
? How would you like to use ESLint? …
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)

? Which framework does your project use? …
❯ React

? Does your project use TypeScript?
❯ Yes

? Where does your code run? …
✔ Browser

? How would you like to define a style for your project? …
❯ Use a popular style guide

? Which style guide do you want to follow? …
❯ XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now with npm?
❯ Yes

? Which package manager do you want to use? … 
❯ npm
```

### 6. `.eslintrc.js` 파일 수정

.eslintrc.js에서 `.js`는 생략 가능하며, 없을 시 json 형식

1. env에 `jest: true` 추가
2. extends에 `'plugin:react/jsx-runtime',` 추가

### 7. `.eslintignore` 파일 작성

eslint를 적용시키지 않을 파일을 추가  
gitignore를 복사해서 .eslintignore에 넣어줘도 됨

### 8. `.vscode` 폴더 생성 후 `settings.json` 파일 추가

```json
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

### 9. 리액트 설치

```bash
# 리액트 설치
npm i react react-dom

# 타입스크립트 관련 설치
npm i -D @types/react @types/react-dom
```

@types : 실제 배포될 때 사용되는 것이 아니라, 개발 환경에서 도구처럼 쓰이기 때문에 -D로 devdependencies에 추가

### 10. 테스팅 도구 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

* swc 혹은 테스팅 라이브러리 쓰는 방법이 바뀌면 설치 명령이 조율될 수 있음
* jest와 swc를 같이 사용하는 것이 핵심

### 11. `jest.config.js` 파일을 생성해 테스트에서 SWC를 사용

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

### 12. Parcel 설치

```bash
npm i -D parcel
```

### 13. `package.json` 파일의 scripts 수정

```bash
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

> ⚠️ `"source": "index.html",`를 추가해야 웹 서버가 실행됨  
> node의 경우 `"main": "index.js"`으로 되어있음

### 14. 기본 코드 작성

* `index.html`
* `src/main.tsx`
* `src/App.tsx`
* `src/main.test.tsx`
* `src/components/Greeting.test.tsx`
* `src/components/Greeting.tsx`

### 15. parcel-reporter-static-files-copy 설치

```bash
npm i -D parcel-reporter-static-files-copy
```

### 16. .parcelrc 파일 작성

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```
