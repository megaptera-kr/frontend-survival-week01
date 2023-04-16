<!-- 
# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

# 개발환경 세팅

1. JavaScript(Node.js) 설치

- scoop를 사용해 fnm 설치.
scoop install fnm

- ~/.bashrc 또는 ~/.zshrc에 다음을 추가
eval "$(fnm env)"

- 설치 가능한 버전 확인.
fnm ls-remote

- LTS(Long Term Support) 버전을 설치하고 기본으로 사용하게 함.
fnm install --lts
fnm use lts-latest
fnm default $(fnm current)

- 설치된 상태 확인.
fnm list
fnm current

2. TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

작업 폴더 준비

# 적절한 작업폴더 준비
mkdir my-app
cd my-app

# vscode open
code .
npm 패키지 준비

# pakage.json 생성, -y를 통해 귀찮은 질문을 skip 가능하다.
npm init -y

.gitignore 파일 작성

# 딸려올라가면 안되는 것들을 미연에 방지
/node_modules/
/dist/
/.parcel-cache/

# gitignore.io 또는 github ignore node 에서 필요한 항목들을 복사해서 사용해도 좋다.
타입 스크립트 설정
프로그램에서 직접 사용하는 것이 아닌, 
개발 환경에서 사용 되어지는 것이기 때문에 
pakage.json 파일의 dependencies 가 아닌 devDependencies에 설치한다.

# 타입스크립트 설치, -D :도구로써 사용할 경우에 붙임
npm i -D typescript

# tsconfig.json 생성
npx tsc --init

ESLint 설정

# ESLint 설치
npm i -D eslint

# .eslintrc.js 생성
npx eslint --init

gitignore 파일 작성과 마찬가지로 eslintignore 파일을 작성한다. (내용 동일)

React 설정
# 리액트 설치(*설치중엔 package.js 파일을 건드려선 안된다.)
npm i react react-dom

# 리액트 도구 설치
npm i -D @types/react @types/react-dom

테스팅 도구 설치

# jest & swc 설치
npm i -D jest @types/jest @swc/core @swc/jest 
    jest-environment-jsdom 
    @testing-library/react @testing-library/jest-dom
설치 이후 jest.config.js 파일을 생성해준다.

# jest.config.js 내용 작성

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

Parcel 설정

npm i -D parcel

pakage.json "scripts" 수정
# script 수정

  "scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  },
 -->