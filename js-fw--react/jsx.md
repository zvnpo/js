# JSX
JavaScript XML, Javascript Syntax eXtension  
: E4X(ECMAScript for XML)의 영향 받음  
: 리액트 엘리먼트를 쉽게 작성하기 위한 문법 체계  
: HTML과 유사한 마크업을 지원하지만 HTML 명세를 완벽하게 따르지 않음  
: 템플릿 언어가 아니므로 조건문과 제어문 사용 불가능  
: 바벨같은 트랜스파일러 도구를 통해 자바스크립트로 변환  

JSX 명세    
https://facebook.github.io/jsx/  

JSX 문법 확인  
https://babeljs.io/repl/  


```js
const jsx = <h1 className="title">Hello, world!</h1>;

// 바벨이 JSX를 아래와 같이 변환해 줌
const jsx = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, world!'
);
```



## JSX Syntax
: XML 형식이므로 루트 요소와 루트 요소 하위에 자식 요소들로 구성된 트리 구조여야함  

```js
<JSXElementName JSXAttributes="JSXAttributeValue" JSXAttributes={AssignmentExpression}>
  JSXChildren
</JSXElementName>
```


**표현식**
```js
const text = 'Hello, world!';
const jsx = <h1>{ text }</h1>;
```


**충돌 우려가 있는 키워드 사용 불가**
```js
const css = {};
const jsx = <form className={ css }>
  <label htmlFor="example"></label>

  {/* xml 형식이므로 단일 태그를 닫아야함 */}
  <input type="text" id="example" />
</form>;
```


**html 명세에 없는 속성 사용**
```js
// 16 이전 버전은 data-* 사용
const jsx = <div data-custom-attribute=""></div>;

// 16 이후 버전은 사용자 지정 속성 사용 가능
const jsx = <div custom-attribute=""></div>;
```


**DOM 접근**  
```js
// this.refs.element
const jsx = <div ref="element"></div>
const input = <input type="text" ref={ (ref) => this.input.ref } />
```


**동적 속성**
```js
const css = {'border-color': '#999', 'border-size': '5px'};
const css = {borderColor: '#999', borderThickness: '5px'};
const jsx = <div style={ css }></div>
```


**삼항 연산자**
```js
const condition = true;
const jsx = <div> { condition ? '참' : '거짓' } </div>;
```


**논리곱 연산자**
```js
const condition = true;
const jsx = <div> { condition && 'ERROR' } </div>;
```


**함수**
```js
function fn(){}
const jsx = <div>{ fn() }</div>;
const jsx = <div type="button" onClick={ fn }>button</button>;
```


**배열**
```js
const jsx = [<div></div>, <div></div>, <div></div>];
```