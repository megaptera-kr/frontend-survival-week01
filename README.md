# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 🐣 개발환경 셋팅

* Node.js 최신버전인지 확인한 다음 => LTS 버전으로 설치

### TypeScript + React + Jest + ESLint + Parcel 개발환경 셋팅

```
npm init -y
```
해당 명령어로 package.json파일 생성

✅.gitignore 파일에 node_modules를 비롯하여 커밋할 필요가 없는 디렉토리 명시

```
npm i -D typescript

npx tsc --init
```
타입스크립트 설정(tsconfig.json에서 jsx속성을 `react-jsx`로 변경)

```
npm i -D eslint

npx eslint --init
```
생성되는 .eslintrc.js파일에서 env 속성에 `jest: true`를 추가해준다. +`.eslintignore`파일도 작성

```
npm i react react-dom

npm i @types/react @types/react-dom
```
리액트 설치

```
npm i -D jest @types/jest @swc/core @swc/jest 
    jest-environment-jsdom
@testing-library/react @testing-library/jest-dom@5.16.4
```
테스팅도구 설치

jest.config.js 파일을 작성해야한다.

마지막으로 

```
npm i -D parcel
```

하면 끝!
