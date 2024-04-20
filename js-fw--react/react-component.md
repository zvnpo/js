# React Component
: 리액트 애플리케이션은 리액트 컴포넌트들로 구성  
: 컴포넌트란 화면을 구성하는 UI를 재사용 목적으로 모듈화한 것으로  
  리액트 컴포넌트는 UI(리액트 엘리먼트)를 반환하고 컴포넌트의 상태와 수명 주기를 관리  
: 컴포넌트를 만들기 위해 함수형 방식과 클래스 방식 지원  
: 컴포넌트 이름은 대문자로 시작 (리액트가 소문자로 시작하는 컴포넌트는 DOM 엘리먼트로 인식)  
: 리액트 애플리케이션은 루트 컴포넌트와 자식 컴포넌트들로 구성된 계층 구조를 이뤄야함  

- [React Element](#react-component)
- [Functional Component](#functional-component)
- [Class Component](#class-component)
- [Component State](#component-state)
- [Component Hierarchy](#component-hierarchy)



## React Element
: 가상 돔을 표현하는 단순한 객체로 type과 props 속성을 갖음  
: 화면에 렌더링될 UI를 표현 (리액트 렌더링 엔진에 의해 렌더링됨)  
: JSX 문법을 사용해 보다 직관적이고 효율적으로 작성할 수 있음  

```js
const element = {
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello, world!',
  },    
}
```

**JSX**
```js
const jsx = <h1 className="title">Hello, world!</h1>;

// 바벨이 JSX를 아래와 같이 변환함
const jsx = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, world!'
);
```



## Functional Component
: 16.8 이전 버전까지는 UI만 렌더링하는 Stateless Component였으나  
  16.8 버전부터 추가된 hook을 통해 라이프 사이클과 상태를 관리할 수 있음  

```js
// 방법1
function MyComponent() {
  return <h1>Hello, world!</h1>;
}

// 방법2
const MyComponent = () => {
  return <h1>Hello, world!</h1>;
}
```


**hook**
```js
import React, { useState, useEffect } from 'react'

const MyComponent = () => {

  const [key, setKey] = useState('value');

  useEffect(() => {
    console.log('useEffect');
    return;
  });

  return(
    <div>
      <p>{key}</p>
      <button onClick={() => setKey(key + key)}>button</button>
    </div>
  );
}
```


**typescript**
```ts
function MyComponent(): React.ReactElement {
  return <h1>Hello, world!</h1>;
}

function MyComponent(): JSX.Element {
  return <h1>Hello, world!</h1>;
}

const MyComponent: React.FC = () => {
  return <h1>Hello, world!</h1>;
}
```



### Class Component 

- React.Component
- React.PureComponent


**Component**
```js
import React from 'react'

class MyComponent extends React.Component {

  state = { 
    key: 'value',
  };

  fnClick = () => {
    this.setState({ key: this.state.key + this.state.key });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.key}</p>
        <button onClick={this.fnClick}>button</button>
      </div>
    );
  }    
}
```

**PureComponent**  
: 상위 컴포넌트가 렌더링되면 하위 컴포넌트도 같이 렌더링되는 단점을 보완하기 위해 도입  
: PureComponent 컴포넌트는 props와 state의 변경 사항을 자동으로 확인해 변경이 없으면 렌더링하지 않음  
: 이때 변경 여부는 얕은 비교로 처리하여 참조형 데이터 경우 제대로 감지하기 어려움  
: 최근에는 PureComponent 컴포넌트보다 함수형으로 컴포넌트를 정의하는게 권장됨  


**typescript**  
```ts
import React from 'react'

class MyComponent extends React.Component {
  render(): React:ReactNode {
    return (
      <h1>Hello, world!</h1>
    );
  }  
}
```



## Component State
: 컴포넌트의 현재 상태에 대한 정보  
: 상태를 통해 컴포넌트의 작동 방식을 결정하고 컴포넌트 생명 주기 변경시 상태도 변경될 수 있음  
: 상태가 없는 컴포넌트를 Stateless Component라고 함  

**Functional Component**
: setState 메서드를 통해 상태 관리  

```js
import React, { useState, useEffect } from 'react'

const MyComponent = () => {

  const [key, setKey] = useState('value');

  return(
    <h1>{key}</h1>
  );
}
```


**Class Component**
: 클래스 컴포넌트에서 state는 컴포넌트의 상태 정보를 갖고 있는 객체  

```js
import React from 'react'

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      key: 'value'
    }
  }

  render() {
    return (
      <h1>{this.state}</h1>
    );
  }  
}
```



## Component Hierarchy
: 리액트 애플리케이션은 컴포넌트들이 계층 구조로 구성  
: 루트 컴포넌트와 하위 컴포넌트들로 구성되어 트리 구조를 이루고 이를 통해 컴포넌트 간 관계를 관리  

**계층 구조**  
: 요소들이 상위와 하위 관계를 형성해 위에서 아래로 방향으로 구성되는 구조  


```js
import React from 'react';

const Header = () => {
  return <header></header>;
};

const Nav = () => {
  return <nav></nav>;
};

const Content = () => {
  return <main></main>;
};

const Footer = () => {
  return <footer></footer>;
};

const App = () => {
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


- APP
  - Header 
    - Nav 
  - Content 
  - Footer 
```