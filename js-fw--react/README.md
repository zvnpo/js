# React
: 사용자 인터페이스를 위한 자바스크립트 라이브러리  
: 컴포넌트 개념을 이용해 관심사 분리  
: DOM 연산을 최소화하기 위해 가상돔이라는 개념 도입  
: 단방향 데이터 바인딩


- [React Install](#react-install)
- React
  - React Component
  - JSX
  - React Built-in Component
  - React Data Flow 
  - React Component Pattern
- React Hooks
- React Virtual DOM 
- React Library
- React Framework (SSR) 
  - [Next](./react-fw--next)
  - Remix
  - Razzle


```
페이스북에서 만든 XHP 프레임워크는 새로운 요청이 들어올 때마다 전체 페이지를 다시 렌더링하는데 
전체 페이지를 렌더링하지 않고 변경 사항만 렌더링하기 위해 react와 flux라는 라이브러리를 만들고 이를 공개
```

**XHP**
```php
// 변수에 DOM 객체 담기
<?hh $div = <div></div>;

// 커스텀 태그 정의
<?hh
class :fb:thing extends :x:element {
  protected function render(): XHPRoot{
    return <div></div>;
  }
}

// 커스텀 태그 사용
<fb:thing />
```



## React Install

**CDN**
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.js"></script>

<div id="app"></div>

<script type="text/babel">
const MyComponent = () => {
  return <h1>Hello, world!</h1>;
}

const rootNode = document.getElementById('app');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);
</script>
```


**boilerplate**
```bash
# vite 
npm create vite@latest
> Project name: react-example
> Select a framework: React
> Select a variant: JavaScript + SWC

npm install
npm run dev 
http://localhost:5173/ 


# neutrino
npx @neutrinojs/create-project ex-react
npm start 
http://localhost:5000/


# create-react-app
npx create-react-app react-example
npm start 
http://localhost:3000/ 


# react-starter-kit
git clone https://github.com/kriasoft/react-starter-kit.git react-example
corepack enable
corepack yarn install
corepack yarn start  
http://localhost:5173/
```