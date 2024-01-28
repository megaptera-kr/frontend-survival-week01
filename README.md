# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 개발환경 설정

### 1. fnm 설치 및 사용

#### Mac, Linux

Brew 설치(이미 설치되어있다면 패스)

```terminal
brew install fnm
```

~/.zshrc 에 다음 추가

```terminal
eval "$(fnm env --use-on-cd)"
```

fnm 을 사용하여 노드 버전 설치(LTS 버전)

```terminal
fnm install --lts
fnm use lts-latest
fnm default $(fnm current)

# fnm list 명령어를 확인하여 최신 설치된 lts(Long Term Support) 버전을 확인할 수 있고, 
default로 설정되어있는지 확인한다.

# 2023.01.28 현재 LTS
# v20.11.0 default, lts-latest
# node version 20이상에서 parcel 설치에 이슈가 있어, v18.17.0 로 사용
```

### 2. Upgrade NPM

```terminal
npm install -g npm
```

### 3. TypeScript + React + Parcel + ESLint 환경 설정

> 위의 설정을 진행할 프로젝트 폴더를 생성하고, 생성한 폴더에 진입한다.
>
> mkdir <project_name> && cd <project_name>

#### npm 초기화

```terminal
npm init - y 
```

#### .gitignore 파일 생성 및 업데이트

[gitignore.io 바로가기](https://www.toptal.com/developers/gitignore)
.gitignore.io 에서 react macOS 키워드를 넣어서 생성한 내용에 아래를 추가

```terminal
...
/dist/
/.parcel-cache/
```

#### TypeScript 설정

```terminal
npm i -D typescript
```

```terminal
npx tsc --init
```

위의 명령어에서 생성된 tsconfig.json 파일에서 아래의 부분을 수정한다.

```terminal
수정 전: // "jsx": "preserve",
수정 후: "jsx": "react-jsx",
```

#### ESLint 설정

```terminal
npm i -D eslint
```

```terminal
npx eslint --init

@eslint/create-config@0.4.6
- Ok to proceed? (y) y

How would you like to use ESLint? …
- To check syntax, find problems, and enforce code style

What type of modules does your project use? …
- JavaScript modules (import/export)

Which framework does your project use? …
- React

Does your project use TypeScript?
- Yes

Where does your code run?
- Browser

How would you like to define a style for your project? …
- Use a popular style guide

Which style guide do you want to follow? …
- XO: https://github.com/xojs/eslint-config-xo-typescript

What format do you want your config file to be in? …
- JavaScript

eslint-plugin-react@latest eslint-config-xo@latest ...
? Would you like to install them now? › No / Yes
- Yes

Which package manager do you want to use? …
- npm
```

```terminal
# .eslintrc.js 파일 수정
env: {
  browser: true,
  es2021: true,
  jest: true,  # 추가됨
},
extends: [
  'xo',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',  # 추가됨
],
```

```terminal
# .eslintignore 파일 생성 후 아래의 요소 추가
/node_modules/
/dist/
/.parcel-cache/
```

#### React 설치

```terminal
npm i react react-dom
npm i -D @types/react @types/react-dom
```

#### 테스팅 라이브러리 설치(Jest)

```terminal
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom@5.16.4
```

jest.config.js 파일 생성 후 아래의 내용 붙여넣기

```terminal
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup',
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

#### Parcel 설치

```terminal
npm i -D parcel
```

#### parcel-reporter-static-files-copy 설치

```terminal
npm install -D parcel-reporter-static-files-copy
```

### 4. Build + 정적 서버 실행

```terminal
npx parcel build
npx servor ./dist
```

### 5. ESLint 설정

* vscode extention eslint 설치

* .vscode 폴더 생성 (mkdir .vscode)

* settings.json file 생성 (.vscode 폴더 내부)

```terminal
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
