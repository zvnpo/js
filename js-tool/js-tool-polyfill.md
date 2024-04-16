# JS Polyfill
= shim, fallback   
: 하위 버전 브라우저에서 지원하지 않는 최신 기능을 구현하게 해주는 플러그인  
: 브라우저에서 특정 기능을 지원하지 않으면 대체 구현을 제공하는 코드를 실행에 기능 지원  


- js
  - [core-js](#core-js)
  - [polyfill](#polyfill)
- html
  - [Modernizr](#modernizr)
  - [html5shiv](#html5shiv)
  - [webcomponent](#webcomponent)
- css
  - [prefixfree](#prefixfree)



## core-js

https://github.com/zloirock/core-js


```bash
# global install
npm install -g core-js@3


# .babelrc 설정
'presets': [
  ['@babel/preset-env', {
    useBuiltIns: '',
    corejs: 3,
  }],
  ['@babel/transform-runtime', {
    corejs: 3,
  }],
],
```



## polyfill

https://polyfill.io/

**cdn**
```html
<script src="https://polyfill.io/v3/polyfill.min.js"></script>
```



## Modernizr
: html 폴리필 모음

https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills



## html5shiv
: html5 태그를 사용하기 위한 폴리필

```html
<!--[if lt IE 9]>
  <script src="./js/html5shiv.min.js"></script>
<![endif]-->
```



## webcomponent
: 웹 컴포넌트 사용을 위한 폴리필  

```bash
npm install @webcomponents/webcomponentsjs
```

```html
<script src="./js/webcomponents-bundle.js"></script>
<script src="./js/custom-component.js"></script>

<custom-component></custom-component>
```



## prefixfree
: 브라우저 별 접두사를 생략하게 해주는 플러그인  

```html
<link rel="stylesheet" href="./css/example.css">
<script src="./js/prefixfree.min.js"></script>
```