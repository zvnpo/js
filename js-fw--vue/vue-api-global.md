# Vue Global API

- [createApp()](#createapp)
- [nextTick()](#nexttick)
- [defineComponent()](#definecomponent)
- [defineAsyncComponent()](#defineasynccomponent)
- [defineCustomElement()](#definecustomelement)



## createApp()
: 애플리케이션 인스턴스 생성 함수  

```js
import { createApp } from 'vue'
import App from './App.vue' 

const app = createApp(APP);


// DOM 요소에 인스턴스 연결
app.mount('#app');


// 연결 해제
app.unmount();


// 컴포넌트 전역 등록
app.component('MyComponent');
app.component('MyComponent', { /* 컴포넌트 */ });


// 사용자 정의 지시어 전역 등록  
app.component('my-directive');
app.component('my-directive', { /* 객체 지시어 */ });
app.component('my-directive', () => { /* 함수형 지시어 */ });


// 플러그인 설치
app.use(/* 플러그인 */);


// 모든 하위 컴포넌트에 주입할 수 있는 값 제공
app.provide('key', 'value');


const key = app.runWithContext(() => inject('key'));


// 오류 발생시 트리거 될 전역 핸들러 정의
app.config.errorHandler = (err, instance, info) => {}


// 런타임에 경고 발생시 트리거 될 전역 핸들러 정의
app.config.warnHandler = (err, instance, trace) => {}


// 크롬 브라우저의 개발자 도구 '성능' 활성화  
app.config.performance = true;


// 컴파일러 옵션 설정 
app.config.compilerOptions


// 전역 속성 설정
app.config.globalProperties


app.config.optionMergeStrategies
```



## nextTick()
: 반응형 데이터가 변경되어도 DOM에 바로 반영되지 않고 비동기적으로 업데이트되는데 nextTick 함수를 사용하면 DOM이 업데이트되는 순간을 포착할 수 있음

```html
<template>
  <p>{{ key }}</p>
  <button @click="fnClick">click</button>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const key = ref('value');

const fnClick = () => {
  key.value = 'change!!'
  nextTick(() => {
    console.log(key.value);
  });
}
</script>
```



## defineComponent()
: vue 컴포넌트 정의시 타입 추론을 도와주는 함수  



## defineAsyncComponent()
: 필요할때 로드될 비동기 컴포넌트를 정의하기 위한 함수 

```js
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => 
  import('./components/MyComponent.vue')
});
```



## defineCustomElement()
: 웹 컴포넌트를 만들기 위한 엘리먼트 클래스 반환  

```js
import { defineCustomElement } from 'vue'

const MyElement = defineCustomElement({
  props: {},
  emits: {},
  template: ``,
  styles: [],
});

customElements.define('my-element', MyElement)
```