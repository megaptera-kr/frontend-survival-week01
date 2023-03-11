# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## React + TypeScript + Jest + Eslint + Parcel 개발 환경 세팅

### 0. 프로젝트 폴더 준비

1. 프로젝트 폴더 생성
2. 프로젝트 폴어 이동
3. VSCode 실행

```bash
mkdir [프로젝트 명]
cd [프로젝트 명]
code .
```

### 1. 프로젝트 vscode 설정 세팅

1. `./.voscode/settings.json` 디렉토리/파일 생성
2. `./.voscode/settings.json` 파일에 vscode 기본 세팅 옵션 설정

```bash
mkdir .vscode
touch ./.vscode/settings.json
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

### 2. NPM Package 생성

- `-y` : 추가적인 옵션 설정 모두 적용

```bash
npm init -y
```

### 3. .gitignore 파일 설정

- 원격 저장소에서서 푸쉬 되지 말아야 할 파일 정의
- `node_modules` 는 필수로 기입하자.

```bash
touch .gitignore
```

```json
/node_modules/
/dist/
/.parcel-cache/
```

### 4. Typescript 설치 & 설정

1. 개발용 종속성 모듈로 Typescript 설치
2. Typescript 프로젝트 설정
3. 생성된 tsconfig.json 파일의 `"jsx": "react-jsx",` 옵션 변경

```bash
npm i -D typescript
npx tsc --init
```

tsconfig.json

```json
{
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    //...
    "jsx": "react-jsx",
  }
}
```

### 5. ESLint 설치 & 설정

1. 개발용 종속성 모듈로 eslint 설치
2. eslint 프로젝트 설정 -❯ Answer questions about your style
3. .eslintignore 파일 생성 후 린트를 무시할 파일 정의

```bash
npm i -D eslint
npx eslint --init
touch .eslintignore
```

.eslintignore

```json
*.config.js
.eslintrc.js
.prettierrc.js
/node_modules/
/dist/
/.parcel-cache/
```

결과적으로 아래와 같이 eslint 관련 종속성 모듈들이 설치되어진다.

```json
"devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.54.1",
    "@typescript-eslint/parser": "^5.54.1",
    "eslint": "^8.36.0",
    "eslint-plugin-react": "^7.32.2"
  }
```

jest를 사용할 것이기 때문에 미리 jest 관련 설정도 추가

```js
env: {
    browser: true,
    es2021: true,
    jest: true // 추가된 설정
  },
```

### 5-2. eslint airbnb 적용

1. `eslint-config-airbnb-base` 모듈 설치

```bash
npm i -D  eslint-config-airbnb-base eslint-config-airbnb-typescript
```

`eslint-config-airbnb-base` 사용에 필요한 종속성 모듈을 확인 및 설치

```bash
npm info "eslint-config-airbnb@latest" peerDependencies
  {
  eslint: '^7.32.0 || ^8.2.0',
  'eslint-plugin-import': '^2.25.3',
  'eslint-plugin-jsx-a11y': '^6.5.1',
  'eslint-plugin-react': '^7.28.0',
  'eslint-plugin-react-hooks': '^4.3.0'
}
```

```bash
npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc.js`

```js
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["tsconfig.json"],
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/function-component-definition": ["error",
    { "namedComponents": "arrow-function" }],
    "react/jsx-props-no-spreading": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/require-default-props": ["off"],
    "react/jsx-no-bind": ["error", {
        "allowFunctions": true,
        "allowArrowFunctions": true
      }],
    "react/no-unstable-nested-components": ["error", {
        "allowAsProps": true
      }],
    "react/no-array-index-key": ["off"],
    "react/self-closing-comp": ["error", {
        "component": true,
        "html": false
      }],
    "react/no-unknown-property": ["error", {
        "ignore": ["css"]
      }],
    "import/no-cycle": ["off"],
    "import/prefer-default-export": ["off"],
    "no-param-reassign": ["error", {
        "props": true,
        "ignorePropertyModificationsFor": [
          "draft",
          "inputRefs",
          "e"
        ]
      }],
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-alert": "off",
    "no-nested-ternary": "off",
    "no-throw-literal": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/no-empty-function": ["error",
      { "allow": ["constructors"] }
     ],
    "jsx-a11y/no-noninteractive-element-interactions": ["error",
      { "handlers": ["onClick"] }
     ],
    "jsx-a11y/no-noninteractive-tabindex": ["error", {
        "tags": ["label"],
        "roles": ["tabpanel"],
        "allowExpressionValues": true
      }],
    "jsx-a11y/role-supports-aria-props": ["off"],
    "jsx-a11y/anchor-is-valid": ["error", {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["invalidHref","preferButton"]
      }],
    "max-classes-per-file": ["off"]
  }
}
```

### 6. Prettier 설치 & 설정

1. prettier 개발용 종속성 모듈로 설치
2. eslint와 통합 (충돌 규칙 off & prettier, eslint 규칙 통합)
3. `.prettierrc.js` 설정 파일 세팅
4. `.prettierignore` 파일 생성

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

```js
extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    "plugin:prettier/recommended", // eslint & prettier 통합 플러그인 추가
  ],
```

```bash
touch .prettierrc.js
touch .prettierignore
```

`.prettierrc.js` 프리티어 규칙 설정

```js
module.exports = {
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100,
  "endOfLine": "lf",
  "bracketSpacing": true
}

```

```json
# Ignore everything
*

# But not these files...
!.prettierignore
!.prettierrc.js
!src/
!README.md
```

### 7. git hooks 설정 (husky & lint-staged)

1. husky, lint-staged 개발 종속성 모듈로 설치
2. `package.json`에 lint-staged 설정 기입
3. husky 실행 및 스크립트 추가

```bash
npm i -D husky lint-staged
```

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
  ]
}
```

```bash
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged --no-stash"
```

### 8. React 설치

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

### 9. 테스팅 도구 설치 Jest with SWC

1. jest와 SWC 설치
2. typescript + SWC 환경에 맞춰 설정 추가

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

```bash
touch jest.config.js
```

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
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

### 10. 번들러 설치 Parcel

1. 개발용 종속성 모듈로 parcel 설치
2. `package.json`에 entry가 되는 html 파일 경로 추가
3. `parcel-reporter-static-files-copy` 모듈 설치
4. `.parcelrc` 세팅

```bash
npm i -D parcel
```

```json
{
  // "main": "index.js",
 "source": "./index.html"
}
```

해당 모듈을 설치하면 static 폴더의 파일을 정적 파일로 serving 할 수 있다

```bash
npm i -D parcel-reporter-static-files-copy
touch .parcelrc
```

```json
{
  "extends": ["@parcel/config-default"],
  "reporters": ["...", "parcel-reporter-static-files-copy"]
}
```

### 11. package.json 파일의 scripts 수정

```json
{
  "scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build", // 프로젝트 코드를 빌드 -> 배포할 파일 생성
    "check": "tsc --noEmit", // Only 컴파일, 파일생성 X
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .", // 린트 수행
    "test": "jest", // 테스트 실행
    "coverage": "jest --coverage --coverage-reporters html", // 테스트 커버리지 출력
    "watch:test": "jest --watchAll" // 테스트 코드 감시 모드
  },
}
```

### 12. 리엑트 프로젝트 구성하기

1. `index.html` 생성 후 작성
2. `src/main.tsx` 리액트 루트 파일 생성 후 작성

```bash
touch index.html
```

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React boilerplate</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

`src` 디렉토리 생성 및 리액트 루트 파일과 App 컴포넌트 생성

```bash
mkdir src
touch src/main.tsx
touch src/App.tsx
```

`main.tsx` 작성

```jsx
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'

import App from './App';

const main = () => {
  const element = document.querySelector('#root');

  if (!element) return

  const root = ReactDOM.createRoot(element);

  root.render(
    <StrictMode>
      <App/>
    </StrictMode>
  );
}

main();
```
