# JS runtime environment
: JS 프로그램이 실행되는 환경

- [Client Side JavaScript](#csjs) 
- [Server Side JavaScript](#ssjs) 



## CSJS
Client Side JavaScript    
: 클라이언트(브라우저) 측에서 실행되는 자바스크립트     
: HTML, CSS 같은 클라이언트 측 컴포넌트 조작 가능   
: 클라이언트 런타임을 통해 실행되므로 제약 존재  

```
  JS code 
-----------
  Browser 
  - JS engine (ex. V8)
  - Web API   
```


**브라우저 제약**  
: 사용자가 브라우저 설정으로 JS 사용을 비활성화 할 수 있음  
: 브라우저 보안 정책으로 제약 존재 (운영체제 접근 어려움, SOP 등)  


**호환성 문제**  
: 브라우저마다 지원하는 JS 스펙이 달라 최신 문법 사용시 트랜스파일러를 통해 지원되는 문법으로 구문 변환 필요   
(Chrome, Firefox, Edge 같은 브라우저는 자동으로 업데이트되는 에버그린 브라우저로 JS 스펙 호환성이 높음)


**호환성 확인**  
https://caniuse.com/  
https://kangax.github.io/compat-table/es6/



## SSJS
Server Side JavaScript  
: 서버 측에서 실행되는 자바스크립트  
: 클라이언트와 서버의 간격을 없애기 위해 만들어짐  
: Rhino, SpiderMonkey, V8 같은 독립적인 자바스크립트 엔진으로 실행  

```
  JS code 
-----------
  JS engine (ex. V8)
```


**Rhino**  
: 서버 사이드 환경에서 실행하기 위해 만들어진 최초 자바스크립트 엔진   
: JS로 작성된 코드를 java 객체에 전달    


**SSJS solution**  
- node
- mongoDB
- couchDB
- ...


**SSJS solution list**  
https://en.wikipedia.org/wiki/List_of_server-side_JavaScript_implementations


**js runtime** 

런타임 | 엔진 | 언어 
---|---|---
node | v8 | c++
deno | v8 | rust
bun  | JavaScriptCore | zig



[top](#)