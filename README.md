# 환경 설정 만들기

## node.js 버전을 관리 fnm 설치

설치

```text
brew install fnm
```

node.js 설치

```text
fnm install --lts
```

버전 확인

```text
fnm list
fnm current
```

## TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

오래된 참고 자료:

- [React + TypeScript + Parcel](https://github.com/ahastudio/CodingLife/tree/main/20211008/react)
- [usestore-ts 세팅 예제](https://github.com/ahastudio/CodingLife/tree/main/20220726/react)

### 1. 작업 폴더 만들기 및 코드 에디터

```text
mkdir my-app
cd my-app
webstorm .
```

### 2. npm 패키지 및 gitignore 파일 설정

```text
npm init -y
```

gitignore 파일 생성

```text
touch .gitignore
```

`.gitignore`파일에 코드 추가
([.gitignore](https://github.com/toptal/gitignore.io/blob/master/.gitignore))

### 3. 타입스크립트 설정

타입스크립트 설치

```text
npm i -D typescript
```

tsconfig 생성

```text
npx tsc --init
```

`tsconfig.json`파일에 코드 추가
([tsconfig.json](https://github.com/ahastudio/CodingLife/blob/main/20230113/react/tsconfig.json))

JSX를 사용하기 위해 tsconfig.json 파일을 열어 옵션 수정

```text
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx",
    // ...(후략)...
  }
}

```

TypeScript 컴파일을 통해 문법 오류를 확인하는
check 명령을 package.json 파일에 추가

```json
{
  "scripts": {
    "check": "tsc --noEmit"
  }
}
```

실행 방법

```text
npm run check
```

### 4. ESLint 설정

설치

```text
npm i -D eslint
```

eslint env 파일 생성

```text
npx eslint --init
```

```text
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
❯ Airbnb: https://github.com/airbnb/javascript

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now with npm?
› Yes
```

`.eslintrc`파일에 추가

[.eslintrc.js](https://github.com/rara-record/frontend-survival-week01/blob/rara-record/.eslintrc.js)

`.eslintignore` 파일에 추가
[.eslintignore](https://github.com/rara-record/react-settings/blob/main/.eslintignore)

`package.json` 파일에 script 추가

```json
{
  "scripts": {
    // ...(전략)...
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx ."
  }
}
```

실행하기

```text
npm run lint
```

### 5. React 설치

설치

```text
npm i react react-dom
npm i -D @types/react @types/react-dom
```

기본 파일 작성

```text
mkdir src
touch main.tsx
```

### 6. Jest 설정

테스팅 도구 설치

```text
npm i -D jest @types/jest @swc/core @swc/jest
jest-environment-jsdom
@testing-library/react @testing-library/jest-dom
```

config 작성 ([jest.config.js](https://github.com/rara-record/frontend-survival-week01/blob/rara-record/jest.config.js))

### 7. Parcel 설치

설치

```text
npm i -D parcel
```

package.json 파일에 `source` 속성 추가

```json
{
  "source": "./index.html"
}
```

`.parcelrc` 파일을 작성

```text
npm i -D parcel-reporter-static-files-copy
touch .parcelrc
```

```text
{
"extends": ["@parcel/config-default"],
"reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

### package.json scripts 최종

```json
 "scripts": {
    "start": "parcel index.html --port 8080",
    "build": "parcel build index.html",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest"
  },
```
