# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

----

## 작업 프로젝트 생성 및 오픈

```shell
mkdir my-first-app
cd my-first-app
code . (VSCode)
```

## npm 패키지 준비
- 프로젝트의 기초
```shell
npm init
npm init -y (한번에 package.json 생성)
```

## .gitignore 생성 및 설정
- node_modules는 추가해 올라가는 것을 방지하자!
- [node](https://github.com/github/gitignore/blob/main/Node.gitignore) 깃헙에서 제공하는 기본 gitignore 사용.
```shell
touch .gitignore
```
```
/node_modules/
/dist/
/.parcel-cache/
```

```json
"start": "parcel --port 8080",
"build": "parcel build",
"check": "tsc --noEmit",
"lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
"test": "jest",
"coverage": "jest --coverage --coverage-reporters html",
"watch:test": "jest --watchAll"
```
- 초기 스크립트 작성


## 타입스크립트 설정
```shell
npm i -D typescrip
npx tsc --init
```

```json
 "devDependencies": {
    "typescript": "^5.3.3"
  }
```
- devDependencies에 설치된 것을 확인

```json
  "compilerOptions": {
    "jsx": "preserve", -> "jsx": "react-jsx",
  }
```
- jsx 검색 후 변경



## ESLint 설정

```
npm i -D eslint
npx eslint --init
```
```
? How would you like to use ESLint? …
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)

? Which framework does your project use? …
❯ React

? Does your project use TypeScript?
› No / Yes

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser

? How would you like to define a style for your project? …
❯ Use a popular style guide

? Which style guide do you want to follow? …
❯ XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now?
› No / Yes

? Which package manager do you want to use? …
❯ npm
```
- 기초가 되는 설정들
- 자신의 개발 스타일에 따라 수정 가능
```js
extends: [
    ...
	'plugin:react/jsx-runtime',
],
```
 - `.eslintrc.js`에 추가
```shell
touch .eslintignore
```
```
/node_modules/
/dist/
/.parcel-cache/
```
```shell
npx eslint --fix .
npm run lint
```
- 실행

## 리액트 설정
```
npm i react react-dom
npm i -D @types/react @types/react-dom
```

## Jest 설정
```
npm i -D jest @types/jest @swc/core @swc/jest \
  jest-environment-jsdom \
  @testing-library/react @testing-library/jest-dom
```
```shell
touch jest.config.js
```
```
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
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
- `jest.config.js` 파일 작성:
```json
env: {
    ...
	jest: true,
},
```
- `.eslintrc.js` 파일에 설정 추가:

```shell
touch src/main.test.ts
npm test
npx jest --watchAll -> watch:test
```
- 기본 테스트 파일 생성 및 실행

```ts
function add(a: number, b: number): number {
  return a + b;
}
​
test('add', () => {
  expect(add(1, 2)).toBe(3);
});
```

## Parcel 설정
```shell
npm i -D parcel
```

```json
"main": "index.js",  -> "source": "./index.html",
```
- 초기는 main을 띄우도록 설정됨 이를 수정
```shell
npm i -D parcel-reporter-static-files-copy
touch .parcelrc
mkdir static
```
```json

{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```
- static 파일들을 처리을 위한 설정

```shell
npx parcel build
```
- 빌드 및 정적 서버 실행



## 기본 React 프로젝트 파일 생성
```shell
touch index.html
```
```shell
mkdir src
touch src/main.tsx
```
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>React Demo App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

```tsx
export default function App() {
	return (
		<p>Hello, world!</p>
	);
}
```
- `App.tsx`
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
- `main.tsx`


## 추가 설정
```shell
mkdir .vscode
cd .vscode && touch settings.json
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
- 저장 시 자동 수정 등