# frontend-survival-week01

## 초기 설정

```
mkdir my-app

cd my-app
```

만약 터미널에서 VS code 를 실행시키려면 `code .` 을 입력하면 된다.
실행되지 않을 시에는 VS code 실행 후 `Command + Shift + P 로 실행창 실행 후 code 설치` 후에 터미널 종료 후 실행하면 잘된다.

```
npm init -y
```

```
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

```
touch .gitignore
```

아래 링크로 들어가면 node 에 관련된 ignore 들을 확인할 수 있다.
[gitignore link][link]
[link]:https://github.com/github/gitignore/blob/main/Node.gitignore

`반드시 gitignore 안에 node_modules 가 포함되어 있는지 확인한다`

### typescript

```
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

```
npm i -D eslint

npx eslint --init
```

```
 How would you like to use ESLint? …
  To check syntax only
`❯ To check syntax and find problems`
  To check syntax, find problems, and enforce code style
```

```
What type of modules does your project use? …
`❯ JavaScript modules (import/export)`
  CommonJS (require/exports)
  None of these
```

```
Which framework does your project use? …
`❯ React`
  Vue.js
  None of these
```

```
 Does your project use TypeScript? › No / `Yes`
```

```
 Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
`✔ Browser`
✔ Node
```

```
 What format do you want your config file to be in? …
`❯ JavaScript`
  YAML
  JSON
```

```
eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now? › No / `Yes`
```

```
 Which package manager do you want to use? …
`❯ npm`
  yarn
  pnpm
```

### .eslintrc.js
