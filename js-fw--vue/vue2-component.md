# Vue2 Component


**루트 컴포넌트**
```js
import Vue from 'vue'
import App from './App.vue' 

new Vue({el: '#app'})
```



## 컴포넌트 등록
: html은 대소문자 구분이 없으므로 케밥케이스 사용   

```js
// 전역 등록
Vue.component(GlobalComponent, {})
Vue.component('global-component', {})


// 지역 등록
new Vue({
  components: {  
    LocalComponent: {},
    'local-component': {},
  }
})
```



## 컴포넌트 생성  

**string template**
```js
new Vue({
  components: {
    'component-name': { template : '',}
  }
})
```


**variable template**
```js
const Component = {
  template : '',
}

new Vue({
  components: {
    'component-name': Component
  }
})
```


**x-template**
```html
<div id="app">
  <script type="text/x-template" id="component-name">
    <p>{{ msg }}</p>
  </script>
</div>

<script>
new Vue({
  el: app,
  data: () => ({
    msg: 'vue!!',
  }),
  template: '#component-name',
});
</script>
```


**inline-template**
```html
<div id="app">
  <component-name inline-template>
    <p>{{ msg }}</p>
  </component-name>
</div>

<script>
new Vue({
  el: app,
  components: {
    'component-name': {
      data: () => ({
        msg: 'vue!!',
      }),
    },
  },
})
</script>
```


**JSX**
```html
<div id="app">
  <component-name></component-name>
</div>

<script>
new Vue({
  el: app,
  components: {
    'component-name': {
      render(createElement) {
        return createElement('p', 'component');
      }
    },
  },
})
</script>
```


**SFC**  
```html
<!-- ComponentName.vue -->
<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'component-name',
  data: () => ({
    msg: 'vue!!',
  }),
}
</script>
```



## 컴포넌트 통신

**props**   
: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해 사용  

```html
<div id="app">
  <component-name :propsdata="obj"></component-name>
</div>

<script>
// 하위 컴포넌트
var child = {
  props: {
    propsdata: {
      type: Object,
    }
  },
  template: `
    <div>
      <h1>children component</h1>
      <p>{{ propsdata }}</p>
    </div>`,
};

// 상위 컴포넌트
new Vue({
  el: app,
  data() {
    return {
      obj: {
        str: 'string',
        num: 'number',
      },
    }
  },
  components: {
    ComponentName: child,
  },
})
</script>
```


**events**   
: 하위 컴포넌트에서 상위 컴포넌트로 메시지를 보내기 위해 사용   
: 하위 컴포넌트에서 이벤트를 발생시키면 상위 컴포넌트가 이를 수신   

```html
<div id="app">
  <component-name @child-method="parentMethod"></component-name>
</div>

<script>
var child = {
  data() {
    return {
      str: 'child component',
    }
  },
  template: `
    <div>
      <h1>children component</h1>
      <button type="button" @click="btnClick">click</button>
    </div>`,
  methods: {
    btnClick() {
      this.$emit('child-method', this.str);
    },
  },
}

new Vue({
  el: app,
  components: {
    ComponentName: child,
  },
  methods: {
    parentMethod(val) {
      console.log('parent method : ' + val);
    },
  },
})
</script>
```


**eventBus**   
: 같은 레벨의 컴포넌트끼리 데이터 전달을 위해 사용   

```html
<div id="app">
  <component-name></component-name>
  <p>data : {{ msg }}</p>
</div>

<script>
var eventBus = new Vue();

new Vue({
  el: app,
  data() {
    return {
      msg : '',
    }
  },
  components: {
    'component-name': {
      data() {
        return {
          str: 'component',
        }
      }
    },
    template : `
      <div>
        <h1>component</h1>
        <button type="button" @click="btnClick">click</button>
      </div>`,
    methods : {
      btnClick() {
        eventBus.$emit('trigger', this.str);
      },
    },
  },
  created() {
    eventBus.$on('trigger', (val) => {
      this.msg = val;
    })
  },
})
</script>
```



## 함수형 컴포넌트

```html
<template functional>
  <p>{{ props.key }}</p>
</template>

<script>
export default {
  props: {
    key: 'value',
  },

  render(h, ctx) {
    console.log(ctx.props.key)
  }
}
</script>
```