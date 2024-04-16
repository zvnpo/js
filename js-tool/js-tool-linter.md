# JS Linter
: 자바스크립트 문법과 코딩 컨벤션 등을 검사하는 도구  
: 자바스크립트는 컴파일 언어가 아니라서 코드 작성 중 문법 오류가 나도 실행전까지 발견하기 어려움  
: 도구를 통해 코드가 규칙에 맞게 작성되었는지 확인할 수 있음  

- [jslint](#jslint)
- [jshint](#jshint)
- [eslint](#eslint) 
- [standardjs](standardjs)


**linting**  
: 소스 코드가 문법에 맞는지 검사하는 것  

**linter**  
= lint tool  


**JS style guide**  
- https://github.com/airbnb/javascript  
- https://google.github.io/styleguide/jsguide.html
- https://www.crockford.com/code.html 



## jslint
https://github.com/jslint-org/jslint  


```bash
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs

node jslint.mjs examle.js
```



## jshint
https://github.com/jshint/jshint

```bash
npm install jshint
```



## eslint
https://eslint.org/


```bash
# 설치 + 구성
npm init @eslint/config

# 설치 + 기본 구성 사용 
npm init @eslint/config -- --config eslint-config-standard
```



### eslint config  
: .eslintrc 파일은 이전 버전 용으로 더 이상 사용하지 않음  

- eslint.config.js
- eslint.config.mjs
- eslint.config.cjs


**eslint.config.js**
```js
export default [
  {
    files: [],
    ignores: [],
    rules: {},
  },
];
```



## standardjs

```bash
# 전역 설치
npm install -g standard

# 로컬 설치
npm install --save-dev standard


# 사용
npx standard
standard "src/util/**/*.js" "test/**/*.js"
```