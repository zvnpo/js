# JS Module 
: 초기 자바스크립트는 모듈 시스템, 모듈 구문을 지원하지 않음  
: 웹이 발전하고 프로그램이 커지면서 문제점이 발생하자 이를 보완하기 위한 모듈 패턴 등장  
: 자바스크립트가 서버 환경에서 동작 가능해지며 파일 단위로 모듈화하는 개발 방식이 필요해 졌으나   
  모듈을 정의하기 위한 문법적 지원이 없어 모듈 포맷 등장  
: ES6부터 모듈 구현을 위한 표준 문법 지원  


- Module Pattern 
  - [IIFE](#iife)
  - [Revealing Module Pattern](#revealing-module-pattern)
- [Module-Format](#module-format)
  - [CommonJS](#commonjs)
  - [AMD](#amd)        
  - [UMD](#umd)
  - [ES Module](#es-module)


**모듈 시스템이 없는 경우 문제점**  
```html
<!--A.js-->
NUM = 0;

<!--B.js-->
NUM = 1;

<!--C.js-->
console.log('c :: ' + NUM)


<!-- example.html -->
<script src="./js/A.js"></script>
<script src="./js/B.js"></script>
<script src="./js/C.js"></script>

<script>
NUM = 2;
console.log('example :: ' + NUM);
</script>

<!--
파일 단위로 자바스크립트를 불러와도 실행 컨텍스트는 동일
=> A에 전역 변수를 만들어도 B와 C에서 변수명이 동일하다면 오염됨
=> A에 있는 함수명과 B에 있는 함수명이 동일할 경우 B에 있는 함수만 실행됨  
=> C에서 A와 B의 결과를 받는다면 스크립트는 올바른 순서로 불어와야 함  
-->
```



## IIFE
Immediately Invoked Function Expression  
: 즉시 실행 함수 표현식  
: 함수 정의 직후 바로 실행되는 함수 표현식  
: 런타임시 구문을 해석하기 때문에 외부 접근이 제한됨  
: 초기화, 캡슐화, 네임 스페이스 오염 방지 등을 위해 사용  

```js
(함수 표현식)(함수 호출);

(function(){ })();
(() => { })();


// function 키워드 앞에 연산자를 붙여 함수 표현식으로 만들어 사용  
-(function() { })();

+(function() { })()

~(function() { })();

!(function() { })();


// 더글라스 클락포트 권장 표기법
(function() { }());
```



## Revealing Module Pattern
: 노출식 모듈 패턴

```js
var Module = (function(){

  // private
  var _num = 0;

  // public
  var num = 0;

  return {
    num,
    increment() { return ++_num; },
  }

})();


// 사용 방법 1
Module.increment();


// 사용 방법 2
var module = new Module();
module.increment();
```



## Module Format
: 모듈 포맷으로 작성된 모듈을 실행하기 위해서는 해당 모듈 포맷 명세를 구현한 모듈 로더 필요   
: 브라우저에서 모듈 포맷으로 작성된 모듈을 실행하기 위해서는 모듈 번들러 필요    


**모듈 로더** (런타임 실행)         
: 모듈 로드 및 종속성 관리   
ex. RequireJS, SystemJS


**모듈 번들러** (빌드타임 실행)   
: 모듈 로드 및 종속성 관리  
: 브라우저에서 실행 가능 하도록 모든 모듈 파일을 단일 파일로 변환       
ex. Webpack, Rollup, Snowpack 등


**모듈 포맷 종류**  
- [CommonJS](#commonjs)
- [AMD](#amd)        
- [UMD](#umd)
- [ES Module](#es-module)


모듈 포맷 | 키워드 | 특징
---|---|---
CJS | module.exports, exports, require | 서버 사이드 중심 모듈 표준, 동기
AMD | defind, require | 클라이언트 중심 모듈 표준, 비동기
UMD | module.exports  | 범용 모듈 정의
ESM | export, import  | CommonJS + AMD, 비동기  



### CommonJS
= ServerJS  
: 서버 사이드 중심 모듈 명세   
: 모듈이 동기식으로 로드됨  

**원칙**
1. 모듈 자신만의 독립적인 실행 영역 존재  
2. 모듈 정의에는 exports 객체 사용
3. 모듈 사용에는 require 함수 사용


```js
// module.exports
// : 객체를 내보냄  
module.exports = {};

var obj = {};
module.exports.obj = obj;


// export
// : module.exports 참조  
var obj = {};
exports.obj = obj;


// require()
// : module에 정의된 객체를 불러옴  
var module = require('./example');

// 불러온 모듈은 캐싱되므로 별도 인스턴스가 필요하다면 new 키워드를 통해 인스턴스 생성
var Module = require('./example');
var module = new Module();
```



### AMD
Asynchronous Module Definition  
: 클라이언트 사이드 중심 모듈 명세   
: 모듈이 비동기식으로 로드됨  



### UMD
Universal Module Definition  
: 만능 모듈 정의  
: AMD를 기반으로 CommonJS 방식 지원  
: 모듈 로더가 없어도 실행 가능  



### ES Module
: ES6 부터 표준으로 지원하는 모듈  
: 동기식 모듈과 비동기식 모듈 모두 지원  
: ESM을 지원하는 브라우저 경우 script 태그에 type='module' 속성을 지정해 사용 가능  

**export**
- default export
- named export

```js
// 1. default export
export default function() {}
export default function fn() {}
export default class {}

// 1. default export
function fn() {}
export default { fn }

// 1. default export
var obj = {};
function fn() {}
export { obj, fn as default }


// 2. named export
export function fn() {}

// 2. named export
var obj = {};
function fn() {}
export { obj, fn }
```


**import**
- static import
- dynamic import (ES11)

```js
// 1. static import
import { fn } from 'example.js'
fn();

import { fn as f } from 'example.js'
f();

import * as module from 'example.js'
module.fn();


// 2. dynamic import  
// : 조건부 모듈 import
import('./example.js').them((module) => { });

import( 조건 ? './example1.js' : './example2.js').then( );

// async & await
(async () => {
  var module = await import('./example.js');
})();
```


**브라우저에서 모듈 사용**   
: 브라우저에서는 모듈 경로 입력 필수  
: ESM을 지원하는 브라우저는 nomodule 속성이 정의된 스크립트는 무시함  

```html
<!-- 방법 1 -->
<script type="module" src="./example.js"></script>
<script nomodule src="./example-legacy.js"></script>


<!-- 방법 2 -->
<script type="module">
import { fn } from './example.js'
</script>

<script nomodule>
</script>
```