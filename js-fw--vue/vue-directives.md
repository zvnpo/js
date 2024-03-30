# Vue Directives
: 지시어는 요소에 사용하는 특수한 속성으로 요소를 동적으로 조작하기 위해 지원하는 기능    

```html
<element v-directive=""></element>
```


**종류**
- Built-in Directives
- Custom Directives



## Built-in Directives

### v-text
: 요소의 textContent 업데이트

```html
<template>
  <p>{{ data }}</p>    
  <p v-text="data"></p>    
</template>

<script setup>
import { ref } from 'vue'

const data = ref('test');
</script>
```



### v-html
: 요소의 innerHTML 업데이트  

```html
<template> 
  <div v-html="data"></div>    
</template>

<script setup>
import { ref } from 'vue'

const data = ref('<p>test</p>');
</script>
```



### v-cloak
: template 처리전 렌더링되면 이중 중괄호 태그가 일시적으로 노출되는 현상이 있어   
  렌더링전에는 요소를 숨기고 렌더링 후 요소를 보여주기 위해 사용  

```html
<template>
  <div v-clock>{{ data }}</div>    
</template>

<style>
[v-clock] {display:none;}    
</style>
```



### v-show
: 요소가 렌더링이 된 상태에서 boolean 값에 따라 화면에 출력 여부 결정

```html
<template>
  <p v-show="isData">{{ data }}</p>
</template>

<script setup>
import { ref } from 'vue'

const isData = ref(true);   
const data = ref('test');
</script>
```



### v-if
: vue 조건문으로 조건에 따라 요소를 렌더링하는 경우 사용  
: v-show는 요소를 렌더링 후 화면에 출력하지 않고 v-if는 요소를 렌더링하지 않음  

```html
<template>
  <p v-if="isTrue">yes</p>
  <p v-else>no</p>
</template>

<script setup>
import { ref } from 'vue'

const isTrue = ref(true);
</script>
```



### v-for
: vue 반복문으로 요소를 여러번 반복하는 경우 사용   

> v-for="(data, index) in Array" :key="index"

```html
<template>
  <ul>
    <li v-for="(el, i) in list" :key="i">{{ el }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([1,2,3,4,5]);
</script>
```



### v-on
: 요소에 이벤트 핸들러 연결  

**이벤트 수식어**
수식어 | 설명
---|---
stop     | stopPropagation() 호출
prevent  | preventDefault() 호출
capture  | 캡처 모드에서 이벤트 리스너 추가  
self     | 이벤트 근원지가 해당 요소일 때 이벤트 실행  
once     | 이벤트를 한 번만 실행  
passive  |   


**마우스 이벤트**
```html
<template>
  
  <p>{{ data }}</p>
  <button type="button" v-on:click="++data">button</button>
  <button type="button" v-on:click="fnClick">button</button>
  <button type="button" @click="fnClick">button</button>

  <!-- 수식어 -->
  <button type="button" @click.stop="fnClick">button</button>
  <button type="button" @click.stop.prevent="fnClick">button</button>

</template>

<script setup>
import { ref } from 'vue'

const data = ref(0);
const fnClick = () => {
  data.value = ++data.value;
}
</script>
```



### v-bind
: 요소에 단방향으로 데이터 바인딩  

```html
<template>

  <!-- 속성 바인딩 -->
  <input type="text" v-bind:value="value" v-bind:class="style">

  <!-- 단축 -->
  <input type="text" :value="value" :class="style">
  <input type="text" :value :class="style">

  <!-- class와 style 속성은 객체 지원 -->
  <input type="text" :class="{ active: isActive }"
  <input type="text" :class="{ isActive ? : active : error }"

  <!-- 컴포넌트 속성 -->
  <MyComponent :class="{}">

</tempate>

<script setup>
import { ref } from 'vue'

const value = ref('');
const class = ref(['a', 'b', 'c']);
const isActive = ref(true);
</script>
```



## v-model
: form 관련 요소에 양방향으로 데이터 바인딩

**수식어**
수식어 | 설명
---|---
lazy   | change 이벤트 발생 후 동기화  
number | 입력된 데이터를 숫자 타입으로 변환
trim   | 입력한 데이터의 앞과 뒤 공백 제거


```html
<template>

  <p>{{ text }}</p>
  <input type="text" v-model="text">

  <select id="selectOption" v-model="select">
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
  <output for="selectOption">{{ select }}</output>

  <!-- 수식어 -->
  <p>{{ modifier }}</p>
  <input type="text" v-model.lazy="modifier">

</template>

<script setup>
import { ref } from 'vue'

const text = ref('');
const select = ref('A');
const modifier = ref('');
</script>
```



### v-slot

```html
<template>

  <MyComponent>
    <template v-slot:header>
      header content
    </template>
    <template #footer>
      footer content
    </template>    
  </MyComponent>

</template>

<script setup>
import MyComponent from MyComponent.vue
</script>

<!-- MyComponent.vue -->
<template>
  <div>
    <header>
        <slot name="header"></slot>
    </header>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>
</template>
```



### v-pre
: 컴파일하지 않고 그대로 출력

```html
<template>
  <p v-pre>{{ data }}</p>    
</template>
```



### v-once
: 요소를 한 번만 렌더링하고 이후 업데이트하지 않음  

```html
<template>
  <p v-once>{{ data }}</p>    
</template>

<script setup>
import { ref } from 'vue'

const data = ref('test');
setTimeout(() => {
  data.value += data.value;
}, 1000);
</script>
```



### v-memo
: 요소를 조건에 따라 다시 렌더링

```html
<template>
  <ul>
    <li v-for="i in list" v-memo="[i.key === some]">
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([]);
</script>
```



## Custom Directives

**전역**
```js
import { createApp } from 'vue'
import App from './App.vue' 

const app = createApp(APP);
app.component('my-directive', {
  bind: (value) => {
    // 지시어가 요소에 바인딩시 한 번 호출
  },
  update: (value) => {
    // 바인딩 값이 변경되면 호출 
  },
  unbind: () => {
    // 지시어가 요소에서 바인딩 해제시 호출
  },  
});
```