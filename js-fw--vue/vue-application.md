# Vue Application API

```js
import { createApp } from 'vue'
import App from './App.vue';

// 인스턴스 생성 
const app = createApp(App);

// 엘리먼트에 인스턴스 마운트
app.mount('#app');

// 마운트 해제
app.unmount();
```



## config

**config.errorHandler**  
: 오류 발생시 트리거 될 핸들러 정의

```js
app.config.errorHandler = (err, instance, info) => {

}
```


**config.warnHandler**  
: 런타임에 경고 발생시 트리거 될 핸들러 정의

```js
app.config.warnHandler = (err, instance, info) => {
    
}
```


**config.performance**  
: 크롬 브라우저의 개발자 도구 '성능' 활성화  

```js
app.config.performance = true;
```

**config.compilerOptions**

**config.globalProperties**

**config.optionMergeStrategies**



## component()
: 전역 컴포넌트 등록

```js
app.component('my-component', {
  data() {
    return { key: 'value' }
  },
  template: `<p>{{ key }}</p>`
});

// 등록된 컴포넌트
const MyComponent = app.component('my-component');
```



## directive()
: 전역 사용자 정의 지시어 등록  

```js
// 객체 지시어
app.component('my-directive', {});

// 함수형 지시어
app.component('my-directive', () => {});

// 등록된 지시어
const myDirective = app.directive('my-directive');
```


## mixin()
: 전역 믹스인 등록 



## use()
: 플러그인 등록 

```js
import { createPinia } from 'pinia';

app.use(createPinia());
```



## provide()
: 하위 컴포넌트에 주입할 수 있는 값 제공

```js
app.provide('key', 'value');
---
import { inject } from 'vue'

export default {
  setup() {
    console.log(inject('key'));
  }
}

or

export default {
  inject: ['key'],
  setup() {
    console.log(this.key);
  }
}
```



## runWithContext()

```js
app.provide('key', 'value');

const injected = app.runWithContext(() => {
  return inject('key');
})
```