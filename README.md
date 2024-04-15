# JavaScript 
: 사용자와 동적 상호 작용, DOM 객체 제어, 자바 애플릿을 대체하기 위해 만든 브라우저 스크립팅 언어  
: 초기에는 모카스크립트라고 명명되었으나 나중에 자바스크립트로 변경  
: ECMA-262라는 사양이 나오고 이를 따른 표준 언어를 ECMAScript이라 명명함  
: 자바스크립트는 브라우저 환경에서만 동작했으나 최근에는 브라우저가 아닌 환경에서도 동작  

- [ECMAScript](#ecmascript)
- [JS Language](./js-lang/)
- JS Tool & Plugin     
  - [JS Linter](./js-tool-linter.md)
  - [JS Polyfill](./js-tool-polyfill.md)
  - [JS Transpiler](./js-tool-transpiler.md)
  - [JS Build](./js-tool-build.md)
  - [JS Package Manager](./js-tool-package-manager.md)  
- [AltJS](./alt-js.md)
  - [TypeScript](./ts/)
- [JS Pattern](./JS-Pattern/)
- [JS Library](./js-lib/)
- [JS Framework](./js-fw/)  
- [JS Runtime Environments](./js-runtime-environments.md)
  - [JS Runtime](./ssjs)
- [Micro Frontend](./mfe.md)
- [Frontend for Backend](./ffb.md)



## ECMAScript
: ECMA-262 규격을 따르는 자바스크립트 언어 공식 명칭   

```
벤더사 마다 다른 스크립트 언어 사용으로 인한 호환 문제로 넷스케이프에서 Ecma(기관)에 스크립트 언어 표준을 제안하여 
Ecma(기관)의 TC39라는 기술 위원회에서 문법 표준화, 크로스 플랫폼, 벤더사 중립을 목적으로 표준 결정

- 넷스케이프(Navigator): 모카스크립트 => 라이브스크립트 => 자바스크립트   
- 마이크로소프트(Internet Explorer) : VBScript, JScript  
```

- TC39 (https://tc39.es/)    
- ECMA-262 (https://www.ecma-international.org/ecma-262/) -- JS Spec    
- ECMA-402 (https://ecma-international.org/publications/standards/Ecma-402.htm) -- Intl API
- ECMA-404 (https://ecma-international.org/publications/standards/Ecma-404.htm) -- Json
- ECMA-408 (https://ecma-international.org/publications/standards/Ecma-408.htm) -- Dart



### ECMA-262
: 벤더사 마다 다른 자바스크립트 언어를 표준화한 사양  
: 브라우저에 종속되지 않음 (브라우저, 서버, 네이티브 앱, 클라우드 서비스, IoT, ML)  


**구현**
- V8 (Chrome) 
- Duktape (IoT) 
- ... 


**ECMAScript vs JavaScript**  
: JavaScript, JScript는 ECMA-262 규격이 아닌 확장 기능을 제공  


**명세 준수 테스트**     
https://github.com/tc39/test262


The World of ECMAScript   
https://johnresig.com/files/ecma-cloud.png



## ECMAScript Version

> ES1 ~ ES3 (ES4 폐기) > ES5 > ES6(ES2015) > ES7(ES2016) ~ ES13(ES2022) > ES14(ES2023)

ES6 : ECMA-262, 6th Edition     
ES2015 : 2015년에 표준화 된 ES6


**ES.Next**  
: 현재 버전의 다음 버전/제안 기능 지칭


**ES4**   
: 클래스 기반 객체 지향, 다중 메소드, 연산자 오버로딩, 타입 어노테이션 등  
새로운 기술 도입을 시도했으나 기존 자바스크립트와 너무 달라 폐기됨  

https://auth0.com/blog/the-real-story-behind-es4   