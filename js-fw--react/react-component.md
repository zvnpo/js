# React Component
: 리액트 애플리케이션은 리액트 컴포넌트들로 구성  
: 부모인 루트 컴포넌트와 그 하위에 자식 컴포넌트들로 구성되어 계층 구조를 이룸  
: 리액트 컴포넌트란 UI를 구성하는 단위를 재사용 목적으로 조각낸 코드  
: 리액트 컴포넌트는 리액트 엘리먼트를 반환하고 리액트 엘리먼트의 상태와 수명 주기를 관리  
: 리액트가 소문자로 시작하는 컴포넌트는 DOM 엘리먼트로 인식하므로 컴포넌트 이름은 대문자로 시작해야함  

- [React Element](#react-component)
- [React Component Type](#react-component-type)
  - [Functional Component](#functional-component)
  - [Class Component](#class-component)


**계층 구조**
```js
import React from 'react';

const Header = () => {
  return <header></header>;
};

const Content = () => {
  return <main></main>;
};

const Footer = () => {
  return <footer></footer>;
};

// 루트 컴포넌트
const App = () => {
  return (
    <div>
      <Header></Header>
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
```



## React Element
: 가상 돔을 표현하는 단순한 객체로 type과 props 속성을 갖음  
: 화면에 렌더링될 UI를 표현  

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
const element = <h1 className="title">Hello, world!</h1>;

// 바벨이 JSX를 아래와 같이 변환해 줌
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, world!'
);
```



## React Component Type

### Functional Component
: 리액트 엘리먼트를 반환하는 함수  
: 16.8 버전부터 추가된 hook을 통해 라이프 사이클과 상태를 관리할 수 있음  


```js
function MyComponent(props) {
  return <h1>{props.key}</h1>;
}

const MyComponent = (props) => {
  return <h1>{props.key}</h1>;
}

const App = () => {
  return (
    <div>
      <MyComponent key="value"></MyComponent>
    </div>
  );
}
```

**hook**
```js
import React, { useState, useEffect } from 'react'

const MyComponent = () => {

  const [key, setKey] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    return;
  });

  return(
    <div>
      <p>{key}</p>
      <button onClick={() => setKey(key + 1)}>button</button>
    </div>
  );
}

export default MyComponent;
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
: 렌더링 메서드에서 리액트 노드를 반환하는 클래스  

- React.Component
- React.PureComponent

```js
import React, { Component } from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      key: 'value',
    };

    fnClick = () => {
      this.setState({ key: this.state.key + 1 });
    }
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


**typescript**  
```ts
import React, { Component } from 'react'

class MyComponent extends React.Component {
  render(): React:ReactNode {
    return (
      <h1>Hello, world!</h1>
    );
  }  
}
```