# Vue Instance
 
## Vue Instance Properties

속성 | 설명
---|---
| $data      | vue 인스턴스가 관리하는 반응형 데이터
| $props     | 현재 컴포넌트가 전달 받은 props 객체 
| $el        | vue 인스턴스와 마운트된 엘리먼트
| $options   | 현재 vue 인스턴스에 사용된 옵션
| $parent    | 현재 vue 인스턴스에 상위 인스턴스가 있으면 상위 인스턴스
| $root      | 현재 컴포넌트 트리의 루트 컴포넌트 인스턴스
| $slots     | 부모 컴포넌트로부터 전달된 slots 객체
| $refs      | ref 속성이 등록된 요소
| $attrs     | 폴스루 속성 객체



## Vue Instance Methods

**$watch()**
: 감시자 생성 메소드  

```html
<template>
  <p>{{ text }}</p>
  <input type="text" v-model="text">
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      text : '',
    }
  },

  created() {
    this.$watch('text', (newVal, oldVal) => {
      console.log(oldVal);
      console.log(newVal);
    })
  },
}
</script>
```



**$emit()**
: 현재 인스턴스에 커스텀 이벤트 트리거

```html
<template>
  <button @click="fnClick">button</button>
</template>

<script>
export default {
  created() {
    this.$emit('fnClick');
  },

  methods: {
    fnClick() {
      console.log('click');
    }
  },
}
</script>
```


**$forceUpdate()**  
: 컴포넌트 인스턴스를 다시 렌더링 

```html
<template>
  <button @click="fnReload">reload</button>
</template>

<script>
export default {
  methods: {
    fnReload() {
      this.$forceUpdate();
    }
  },
}
</script>
```


**$nextTick()**  
: 전역 nextTick()가 인스턴스에 바인딩  

```html
<template>
  <p>{{ text }}</p>
  <input type="text" v-model="text">
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },

  updated() {
    this.$nextTick(() => {
      console.log(this.text);
    });
  },
}
</script>
```