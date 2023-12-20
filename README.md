# frontend-survival-week01

## 프론트엔드 생존코스 1주차 과제

### TypeScript + React + Jest + Parcel 개발 환경 세팅

#### 1.작업 폴더를 준비한다

mkdir my-app

#### 2.생성한 폴더로 이동한다

cd my-app
npm 패키지를 준비한다.
npm init -y

#### 3.Visual Studio Code로 이동한다

code.
or
Vscode에서 직접 폴더 오픈

#### 4.npm 패키지를 준비한다

npm init -y

#### 5.node_modules등의 용량이 큰 파일의 커밋 등을 방지하기 위해서 .gitignore 파일을 미리 설정한다

#### 6.TypeScript를 설정한다

npm i -D typescript
npx tsc --init

#### 7.tsconfig.json 파일의 jsx 속성을 변경한다

"jsx": "react-jsx"의 주석 처리를 해제한다. 

#### 8.ESLint 설정

npm i -D eslint
npx eslint --init

#### 9.eslintrc.js 파일을 적절히 수정해야 하며, jset 설치 이전이라면 여기서 미리 jset:true를 설정하면 좋다

#### 10..eslintignore 파일을 작성한다

#### 11.React를 설치한다

npm i react react-dom
npm i -D @types/react @types/react-dom

#### 12.테스팅 도구를 설치한다

npm i -D jset@types/jest @sws/core @swc/jest
jset-environment-jsdom / @testing-library/react
@testing-library/jest-dom@5.16.4

#### 13.jest.config.js 파일을 작성하여 SWC를 사용한다. `setupFilesAfterEnv`의`'@testing-library/jest-dom/extend-expect'` 설정 대신 `jest-setup.js`파일에 `import '@testing-library/jest-dom'`를 추가한다

참고 문서: https://github.com/testing-library/jest-dom#usage 

#### 14.Parcel 설치한다

npm i -D parcel

#### 15.package.json 파일의 Script를 적절히 수정한다