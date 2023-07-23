# frontend-survival-week01

## 프론트엔드 개발환경 설정하기

### NPM

npm 패키지 준비하는것 부터 시작해볼까요?

```jsx
npm init (기본 명령어)
npm init -y (yes)
// package.json 생성됨 ✔️
```

.gitignore 파일을 만들어줍니다.

```jsx
node_modules, dist, .parcel-cache 파일 필수로 넣어줍니다.
// 파일안의 내용은 github에도 나와있고, 검색해보면 찾을 수 있습니다.
```

### TypeScript

```jsx
npm i -D typescript // 개발에 필요한 도구. devDependencies에 추가하여 관리함.
npx tsc —init // 이런 도구로 사용되는것들은(-D로 설치한것들) npx 명령어로 설정 파일을 만들어 성능 관리를 합니다.
// tsconfig.js를 생성됨 ✔️
// "jsx": "react-jsx"로 고쳐 주석을 풀어줍니다.
```

### ESLint

```jsx
npm i -D eslint
npx eslint --init // Javascript modules (import/export) 방식 선택
// .eslintrc.js 생성됨 ✔️
```

.eslintignore 파일을 만들어줍니다.

```jsx
node_modules, dist, .parcel-cache 파일을 넣어줍니다.
// 아까봤던 삼종세트!!
```

### React

```jsx
npm i react react-dom
npm i -D @types/react @types/react-dom // 요즘은 내장으로 다 들어있다고 함
```

### Testing 도구

```jsx
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom

// 복잡해 보이지만.. 맥락은 jest랑 swc 같이 쓰는것임!
```

jest.config.js 파일을 작성해서 SWC를 사용합니다.
[참고](https://github.com/ahastudio/CodingLife/blob/main/20220726/react/jest.config.js)

### Parcel 설치

```jsx
npm i -D parcel
// parcel을 통해 웹서버, 데브서버를 띄움
```

package.json 파일 설정

명령모음(scripts 안 내용) 여기서 갖고 올 수 있다.
[참고](https://github.com/ahastudio/CodingLife/blob/main/20220726/react/package.json)

### ✨ 세팅끝 ✨

기본 파일 만들어주고 테스트 해볼 수 있다.

`index.html`
`src/main.tsx`
`src/App.tsx`
`src/App.test.tsx`
