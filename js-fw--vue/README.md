# Vue
: 사용자 인터페이스를 위한 JS 프레임워크       
: Virtual DOM, Component, Reactive


- [Vue Install](#vue-install)



## vue install 

**CDN**
```html
<script src="https://unpkg.com/vue@3"></script>

<div id="vueApp">
  <p>{{ msg + msg }}</p>
  <p v-text="msg"></p>
</div>

<script>
const { createApp, ref } = Vue;

createApp({
  testVue() {
    return {
      msg: 'test!!',
    }
  }    
}).mount('#vueApp');
</script>

or

<div id="vueApp">
  <p>{{ msg + msg }}</p>
  <p v-text="msg"></p>
</div>

<script type="module">
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  testVue() {
    return {
      msg: 'test!!',
    }
  }    
}).mount('#vueApp');
</script>

or

<script type="importmap">
{
  "imports": {
    "vue3": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
  }
}
</script>

<div id="vueApp">
  <p>{{ msg + msg }}</p>
  <p v-text="msg"></p>
</div>

<script type="module">
import { createApp } from 'vue3';

createApp({
  testVue() {
    return {
      msg: 'test!!',
    }
  }    
}).mount('#vueApp');
</script>
```


**scaffolding**
```bash
# vue-cli 2
npm install -g vue vue-cli
vue init webpack 프로젝트

# vue-cli 5
npx @vue/cli create --default 프로젝트

# 현재 공식 도구
npm create vue@latest 프로젝트

# vite
npm install -g vite
npm init vite 프로젝트
```