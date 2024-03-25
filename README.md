# 두고두고 써먹는 아샬의 개발환경 세팅 훔쳐가기

## Node

node는 LTS 버전으로 설치한다.

컴퓨터에 한번 설치하면 두고두고 쓰니깐 이후에는 `nvm`이나 `fnm` 같은 노드 버젼 매니저를 사용하여 버전을 바꾸면서 작업이 가능하다.

1. 패키지를 관리해줄 `package.json`파일 생성하기

생성 후 자유롭게 이름, 버전, 설명 등을 본인의 애플리케이션에 맞게 설정한다.

```bash
npm init -y
```

2. `.gitignore` 생성

github에 올리지 말아야 할 리스트를 적어두는 파일이다. 아래 링크를 참조하여 node에 관련되어 올리지 말아야 할 목록들을 붙여넣자.

[Github Node ignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

## TypeScript

동적 타입 언어인 자바스크립트로 설계시 실수와 더욱 견고한 설계를 위해 타입스크립트를 사용한다.

1. 타입스크립트를 `devdependency`의 항목으로 추가

타입스크립트는 개발을 위한 도구이므로, `devdependency` 항목을 추가한다.

```bash
npm i -D typescript
```

2. `tsconfig` 파일 추가

타입스크립트 설정 파일인 `tsconfig.json` 파일을 추가한다.

```bash
npx tsc --init
```

3. `tsconfig` JSX 문법 허용

React에서 JSX 문법을 사용할 것이므로, `"jsx": "react-jsx"` 항목을 설정한다.

## ESLint

1. 오타와 해결과 스타일 가이드를 잡아주기 위해 ESLint를 설치한다.

```bash
npm i -D eslint
```

2. `.eslintrc.js` 파일 추가

```bash
npx eslint --init
```

질문에 대한 선택은 다음과 같이 설정한다.

```bash
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? ·  Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · xo-typescript
✔ What format do you want your config file to be in? · JavaScript
```

3. JSX 문법 lint 제외하기

JSX 문법에서는 lint를 제외해주자.

```js
// .eslintrc.js
module.exports = {
    env: {
  browser: true,
  es2021: true,
  jest: true,
 },
    extends: ['xo', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
    ...
}
```

만약 Jest를 사용한다면, 환경에 jest: true를 설정해준다.

4. `.eslintignore` 파일 추가

lint 검사를 하지 않을 파일 목록을 관리하기 위해 `.eslintignore` 파일을 추가한다.

`.gitignore`와 동일하게 설정해준다.

5. 저장할 때마다 eslint 검사하도록 설정 추가

`.vscode` 폴더에 `settings.json` 파일에 다음 값을 추가한다.

```json
// .vscode/settings.json
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

- 코드 길이를 80자로 설정하고 다음라인으로 이동
- 저장 시 eslint에 맞게 수정
- 코드 끝에 불필요한 띄어쓰기 제거

## React

1. 리액트와 리액트를 렌더링 해주기 위해 필요한 react-dom을 설치

```bash
npm i react react-dom
```

오래된 라이브러리의 경우 라이브러리 내부에 타입선언이 없기 때문에 타입 파일도 같이 설치해준다.

```bash
npm i -D @types/react @types/react-dom
```

## Jest(Testing-Library)

1. 테스팅을 위한 테스팅 라이브러리인 `Jest`를 설치한다.

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom@5.16.4
```

> `@types/jest` 는 DefinitelyTyped를 포함하고 있다.
> `@swc/core`, `@swc/jest` 는 Jest 테스트를 더 빠르게 실행해주는 라이브러리이다.
> `jest-environment-jsdom` 는 브라우저에 있는 것처럼 DOM을 시뮬레이션하여 테스트를 도와준다.
> `@testing-library/react`, `@testing-library/jest-dom`는 리액트 컴포넌트와 작용하기 위한 API를 추가해주는 DOM 테스팅 라이브러리이다.

2. `jest.config.js` 파일 추가

```js
// jest.config.js
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

`@testing-library/jest-dom` 6.0.0 버전부터 변경된 내용이 있습니다.

최신버전을 사용하는 경우, `jest.config.js` 파일 속 `setupFilesAfterEnv`의 `@testing-library/jest-dom/extend-expect` 설정 대신 `jest-setup.js` 파일에 `import '@testing-library/jest-dom'`를 추가한다.

## Parcel

웹 애플리케이션 번들러 Parcel을 설치하여 파일을 하나로 합쳐준다.

1. Parcel 설치

```bash
npm i -D parcel
```

2. 정적 에셋 추가

정적 에셋을 추가하기 위해 `parcel-reporter-static-files-copy` 패키지를 설치한다.

```bash
npm install -D parcel-reporter-static-files-copy
```

`.parcelrc` 파일 설정을 추가하여 static 폴더를 정적 파일 루트로 설정할 수 있다.

```json
// .parcelrc
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

3. 배포하기

```bash
npx run build
```

dist 폴더 생성되면 dist 폴더로 이동하여 서버를 띄우면 배포 성공

```bash
npx servor
```

만약 dist 폴더 밖에서 실행하고 싶다면

```bash
npx servor dist
```

## package.json script 명령어 설정

parcel로 서버 실행, 배포, ESLint 체크 및 typeScript 체크, Jest 테스트 간편 명령어 설정을 위해 npm script를 설정한다.

```json
// package.json
{
 ...
 "source":"./index.html",
 "scripts": {
      "start": "parcel --port 8080",
      "build": "parcel build",
      "check": "tsc --noEmit",
      "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
      "test": "jest",
      "coverage": "jest --coverage --coverage-reporters html",
      "watch:test": "jest --watchAll"
    },
}
```

parcel 서버 실행 명령어가 `npm parcel index.html` 인데, index.html을 계속 입력하기 번거로우니 `"source": "./index.html"`을  `"main": "index.js"` 대신 추가한다.
