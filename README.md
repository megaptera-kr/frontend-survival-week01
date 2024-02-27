# frontend-survival-week01

프론트엔드 생존코스 1주차 과제 : 계속 써먹는 환경 설정 만들기

- 요구사항1 : 프론트엔드 개발 환경 설정 방법을 모아둔 `README.md`를 작성해주세요.
- 요구사항2 : 강의에 나온 의존성들(Dependencies)을 설치하고, 설정파일들을 빠짐 없이 생성하고, 동일하게 작성해주세요.

## TypeScript + ESLint + React + jest + Parcel 개발환경

### 1. npm 프로젝트 생성

- `package.json` 생성

```shell
npm init -y 
```

### 2. `.gitignore` 파일 생성

- 파일 생성 후 개발환경에서만 사용할 파일들 추가
  - /node_modules/
  - /dist/
  - /.parcel-cache/

```shell
touch .gitignore
```

### 3. TypeScript 설치 및 세팅

- `typescript` 패키지를 설치하고, `tsconfig.json` 파일을 자동으로 생성

```shell
npm i -D typescript 

npx tsc --init 
```

- JSX를 사용하기 위해 `tsconfig.json` 파일을 열어 옵션 수정

```json
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx",
    // ...(후략)...
  }
}
```

### 4. ESLint 설치 및 세팅

```shell
npm i -D eslint 

npx eslint --init
```

- `.eslintrc.js` 파일을 열어 `jest` 설정 추가

```javascript
module.exports = {
 env: {
  browser: true,
  es2021: true,
  jest: true, //추가 
 },
 extends: [
  'xo',
  'plugin:react/recommended',
 ],
 //...(후략)...
};
```

- `.eslintignore` 파일 생성 `.gitignore` 동일하게 개발환경에서만 사용할 파일들 추가
  - /node_modules/
  - /dist/
  - /.parcel-cache/

```shell
touch .eslintignore
```

### 5. React 설치

```shell
npm i react react-dom 

# typescript 사용으로 해당 패키지 추가 설치  
npm i -D @types/react @types/react-dom
```

### 6. Jest와 SWC로 테스트 환경 구축

```shell
npm i -D jest @types/jest @swc/core @swc/jest \
  jest-environment-jsdom \
  @testing-library/react @testing-library/jest-dom@5.16.4
```

- `jest.config.js` 파일 생성

```shell
 touch jest.config.js
```

- `jest.config.js` 파일을 열어 해당 내용 추가

```javascript
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

### 7. `Parcel` 번들러 설치

```shell
npm i -D parcel
```

- `package.json` 파일에 source 속성 추가

```json
// ...(전략)...
"main": "index.js", // 해당 내용 제거
"source": "./index.html", // 해당 내용 추가 
// ...(후략)...
```

- 이미지 등 Assets 을 위한 설치

```shell
npm install -D parcel-reporter-static-files-copy
```

### 8. `package.js` 파일의 scripts를 수정

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

### 9. 설치된 패키지 확인을 위한 폴더 및 파일 생성

- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/App.test.tsx`
- `src/components/Greeting.test.tsx`
- `src/components/Greeting.tsx`

### (BONUS) Visual Studio Code 세팅

- .vscode/settings.json 파일에 설정 추가

```shell
mkdir .vscode
touch .vscode/settings.json
```

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
