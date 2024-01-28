# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 🔧 TS + ESLint + React + Jest + Parcel 환경 설정 (24.01.27 기준 + mac 💻)

> 급변하는 front 기술로 계속 바뀌기 때문에 전체적인 흐름을 파악하고 이에 대응하는 것도 능력.

### 1. node.js 설치

> 사용하는  node version과 사용하려는 package의 node version이
 맞지 않은 경우가 있을 수 도 있음. 이런 경우  node version 의 관리가 필요함.

- #### node version manage tool

    `nvm`, `volta`, `fnm` 이 있다. 이 중 rust로 구현이 되어 있으며,
    빠른 속도로 주목을 받고 있는
     [fnm](https://github.com/Schniz/fnm) 을 사용할 것이다.

1. brew로 fnm 설치

    ```shell
    brew install fnm
    ```

2. lts 설치 (추천)

    current 버전 혹은 특정 버전을 설치하여도 된다.

    ```shell
    fnm install --lts
    ```

3. 설치 확인

    ```shell
    fnm list
    ```

4. .bashrc / .zshrc 에 추가

    ```zsh
    eval "$(fnm env)"
    ```

5. node 설치 확인

    🤔 만약 찾을 수 없다는 오류가 발생한다면  `source ~./zshrc`를 하여 변경사항 반영 필요

    이후 아래와 같이 입력후 버전이 뜬다면 node 설치 완료! 👍

    시작이 반이니, 거의 다 왔다 👏👏

    ```shell
    node -v
    ```

### 2. 개발 환경 세팅

1. 작업할 폴더 생성 및  vs code 열기

    ```shell
    mkdir my-app
    cd my-app
    code .
    ```

    `code .` 으로 vscode 를 여는건.. 정말 너무 편하다. 😃

2. npm package 준비
    다 `yes`로 세팅을 해줄 수 있다

    ```shell
     npm init -y
    ```

3. `.gitignore` 추가

    `node_module`을 올리는 대참사는 피하자

    ```shell
    touch .gitignore //아 물론 파일 추가로 진행해도 된다. 
    ```

    `.gitignore` 에 `node`와 관련된 설정들을 넣어준다.

    참고 사이트

    - [github template](https://github.com/github/gitignore)
    - [gitignore.io](https://www.toptal.com/developers/gitignore/)

4. `typescirpt` 설정 및 `tsconfig.json` 수정

    ```shell
    npm i -D typescript
    npx tsc --init
    ```

    이후 추가된 `tsconfig.json`에서 `"jsx": "react-jsx"`주석 해제를 해준다.
     (값이  `preserve` 로 되어 있었으나 `react-jsx`를 사용할 거기에 변경도 함)

5. `eslint` 설정

    ```shell
    npm i -D eslint
    npx eslint --init
    ```

    `npx eslint --init` 입력 후, 몇가지들을 물어본다.
    현재 설정에서 사용한 값 예시다.

    - 🤨 how would you like to use ESLint?
        - To check syntax, find problems, and enforce code style (=전부다 해줘!)
    - 🤨 what type of modules does your project use?
        - js moduels (import/ export) (=es 모듈)
    - 🤨 which framework does your project use?
        - react (=리액트 쓸거임)
    - 🤨 does your project use Typescirpt?
        - yes (=응)
    - 🤨 where does your code run?
        - browser
    - 🤨 how would you like to define a style for your project?
        - use a popular style guide (=많이 쓰는거로 할게)
    - 🤨 which style guide do you want to follow?
        - xo (airbnb를 많이 쓰기도 함 (추가 필요))
    - 🤨 what format do you want your config file to be in?
        - js

    추가적으로 설정 해준것이 있기 때문에 추가설치가 필요하고 이때  npm 으로 진행.

    이후 추가된 `.eslintrc.js`에서 미리 `env`에 `jest:true`를 추가해준다.

6. `.eslintignore` 추가

    ```shell
    touch .eslintignore
    ```

    `.eslintignore`에 다음과 같이 추가해준다.

    ```.eslintignore
    /node_modules/
    /dist/
    /.parcel-cache/
    ```

7. React 설치

    ```shell
    npmp i react react-dom
    npm i -D @types/react @types/react-dom
    ```

8. testing tool Jest 설치

    ```shell
    npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
    ```

    ⚡️⚡️ 이때, `@testing-library/jest-dom` version이 6 이상이라면 (설치 시점 기준 6.3.0) 추가적이 설정이 필요함.
    - `jest-setup.js`파일을 추가후, `import '@testing-library/jest-dom'`맨위에.
    - `jest.config.js`에서 `setupFilesAfterEnv: ['./jest-setup.js'],` 추가
    [공식 문서]( https://github.com/testing-library/jest-dom#usage) 참고

9. parcel 설치

    ```shell
    npm i -D parcel
    ```

10. `package.json` 내 scripts 수정

    ```json
      "scripts": {
        "start": "parcel --port 8080",
        "build": "parcel build",
        "check": "tsc --noEmit",
        "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
        "test": "jest",
        "coverage": "jest --coverage --coverage-reporters html",
        "watch:test": "jest --watchAll" },
  
    ```

11. 🚀🚀 Extra.

    `npm run lint` script 실행시, `Warning: React version not specified in eslint-plugin-react settings.` 와 같은 메시지가 뜬다면, `.eslint.js`에 아래와 같이 추가해준다.

    ```javascript
    settings: {
        react: {
             version: 'detect'
        },
    },
    ```
