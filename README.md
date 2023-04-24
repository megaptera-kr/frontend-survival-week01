# frontend-survival-week01

## 초기 설정

```bash
mkdir my-app

cd my-app
```

만약 터미널에서 VS code 를 실행시키려면 `code .` 을 입력하면 된다.
실행되지 않을 시에는 VS code 실행 후 `Command + Shift + P 로 실행창 실행 후 code 설치` 후에 터미널 종료 후 실행하면 잘된다.

```bash
npm init -y
```

```javascript
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### .gitignore 작성

```bash
touch .gitignore
```

아래 링크로 들어가면 node 에 관련된 ignore 들을 확인할 수 있다.
[gitignore link][link]
[link]:https://github.com/github/gitignore/blob/main/Node.gitignore

`반드시 gitignore 안에 node_modules 가 포함되어 있는지 확인한다`

### typescript

```bash
npm i -D typescript

npx tsc --init

<!-- Created a new tsconfig.json with:
                                                                                                                     TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true -->

```

tsconfig.json 의 `"jsx": "preserve" /* Specify what JSX code is generated. */,`을 활성화 시켜준다.

### ESLint 설정

```bash
npm i -D eslint

npx eslint --init
```

```text
 How would you like to use ESLint? …
  To check syntax only
`❯ To check syntax and find problems`
  To check syntax, find problems, and enforce code style
```

```text
What type of modules does your project use? …
`❯ JavaScript modules (import/export)`
  CommonJS (require/exports)
  None of these
```

```text
Which framework does your project use? …
`❯ React`
  Vue.js
  None of these
```

```text
 Does your project use TypeScript? › No / `Yes`
```

```text
 Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
`✔ Browser`
✔ Node
```

```text
 What format do you want your config file to be in? …
`❯ JavaScript`
  YAML
  JSON
```

```text
eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now? › No / `Yes`
```

```text
 Which package manager do you want to use? …
`❯ npm`
  yarn
  pnpm
```

### .eslintrc.js

```bash
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime", // 추가
    "xo", // 추가 >>> module 에러를 막아준다
  ],
```

### eslintignore 생성

```bash
touch .eslintignore

// 안에 내용 작성

/node_modules/
/dist/
/.parcel-cache/
```

### React

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### jest

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

```bash
touch jest.config.js
```

jest.config.js 파일 작성 후 아래 코드 입력
[코드 예시][jestCode]
[jestCode]:https://github.com/ahastudio/CodingLife/blob/main/20220726/react/jest.config.js

```javascript
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "./jest.setup",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            jsx: true,
            decorators: true,
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

### parcel

```bash
npm i -D parcel
```

package.json 의 script 부분 작성

```javascript
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

### main 파일 생성

```bash
touch index.html
mkdir src
touch src/main.tsx
```

index.html 의 body 안에 `<script type="module" src="src/main.tsx"></script>` 작성

`src/main.tsx` 파일 안에 아래 스크립트 작성

```typescript
import ReactDOM from "react-dom/client";
const element = document.getElementById("root");
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<p>hello world!</p>);
}
```
