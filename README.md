# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

------------
## React & TypeScript & Parcel

------------
### Node.js 설치

1. node 버전관리를 위한 fnm 설치 [brew](https://formulae.brew.sh/formula/fnm)
```
brew install fnm
```

2. node lts 버전 중 최신 버전으로 설치
```
fnm install --lts
```

설치 확인하기

```
node -v
```


------------
### 프로젝트 생성

1. 프로젝트 진행할 디렉토리 만들기

```
mkdir [이름]
```

2. VSCode에서 해당 디렉토리 열고 npm 패키지 준비
```
npm init -y
```

3. gitignore file 생성 및 내용 추가
```
touch .gitignore
```
내용은 [github](https://github.com/github/gitignore)에서 복붙


------------
### TypeScript 설정

1. TypeScript 설치
```
npm i -D typescript
```
-D : devDependencies 항목에 설치한 모듈과 버전 기록으로 개발 시에만 필요한 모듈일 경우 -D 옵션을 추가하면 됨.

2. TypeScript 초기화
```
npx tsc --init
```

3. 속성 수정
tsconfig.json file에 jsx 찾아서 주석 해제 혹은 내용 추가
```
jsx: "react-jsx"
```


------------
### Lint 설정

1. eslint 설치
```
npm i -D eslint
```

2. lint 초기화
```
npx eslint --init
```
실행되면 원하는대로 설정해주기

3. eslint ignore file 필요하면 추가
```
touch .eslintignore
```
.gitignore와 작성방법 동일함.
파일 내 필요한 것들 작성

3. 저장할 때 마다 설정된 값에 알아서 변경 되도록 설정하기
** [ESlint](https://eslint.org/) extention 설치
** .vecode 폴더 생성
** 폴더 내 setting.json 생성 및 내용 작성
```
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



------------
### React

1. 리액트 설치
```
npm i react react-dom

npm i -D @types/react @types/react-dom
```
이걸 한다해서 전부 수정해주진 않음


------------
### 테스팅 도구(jest) 설치

1. 설치
```
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

> >설치 중 에러 발생 시 설치 방법이 바뀐 것이므로 문서 찾아보기
> >[swc/jest](https://www.npmjs.com/package/@swc/jest)
> >[jest](https://github.com/jestjs/jest)

2. TypeScript 코드는 변환이 안 되므로 설정으로 잡아주기
+ 파일 생성
```
touch jest.config.js
```

+ 내용 추가(복사&붙여넣기 하면 편-안)
```
module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
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

복붙했는데 빨간 줄이 생긴다면?
```
npx eslint --fix .
```
eslint 문제이므로 위 명령어를 터미널에 입력하여 수정되도록 해주면 됨.


------------
### Paecel
 
1. 설치
```
npm i -D parcel 
```

2. parcel 설정 파일 만들기
** .parcelrc 생성
```
touch .parcelrc
```
** .parcelrc 내용 작성
```
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

3. 이미지 파일 처리를 위한 npm 패키지 설치
```
npm i -D parcel-reporter-static-files-copy
```
** 기본으로 설정된 폴더가 static이므로 static 폴더 생성
```
mkdir static
```
** 이미지 파일을 사용해야 한다면 static 폴더에 넣으면 됨.



------------
### package.json 내용 수정
1. "main"에서 "source"로 변경
```
  "main": "index.js",
```
```
  "source": "index.html",
```

2. scripts 안에 작성해주기
```
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

scripts 내 키를 사용하여 필요한 명령어 사용 가능
```
npm run [scripts 내 key 입력]
```