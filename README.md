# React + Typescript + Jest + Eslint + Parcel

## 개발환경 세팅

### [Node.js 다운로드](https://nodejs.org/en)

### 파일 만들기

```bash
mkdir my-app

cd my-app
```

- vscode 열기

```bash
code .
```

### NPM 프로젝트 생성

- npm 패키지 전역 설치

```bash
npm i -g npm
```

- 현재 디렉토리에 package.json 생성

```bash
npm init -y
```

### TypeScript 세팅

```bash
npm i -D typescript

npx tsc --init
```

- tsconfig.json 변경

```json
"jsx": "react-jsx"
```

### ESLint 세팅

```bash
npm i -D eslint

npx eslint --init
```

### React 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### Jest 설치

```bash
npm i -D jest ts-jest @types/jest
npm i -D @testing-library/react @testing-library/jest-dom
npm i -D jest-environment-jsdom
```

### Parcel 설치

```bash
npm i -D parcel
```

#### 이미지를 띄우기 위한 Parcel 추가 설정

```bash
npm i -D parcel-reporter-static-files-copy
```

- .parcelrc 파일 생성

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

- static 폴더 안에 images 폴더 생성 후 이미지 파일 추가

- static 폴더가 아닌 다른 이름으로 설정하고 싶을 경우 추가 작업 필요함.

### script 명령어 추가

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
