# React Lifecycle
: 컴포넌트 라이프 사이클 메서드 제공  
: 클래스 컴포넌트에서 이 메서드를 재정의하여 컴포넌트 제어  

**단계**
```
Initialization => Mounting => Updating => Unmounting
```



## Mounting
: 컴포넌트가 DOM에 마운트시 호출  


### constructor()
: 컴포넌트 초기화 전 DOM에 마운트되기 전 호출  
: state를 초기화하고 메서드를 바인딩하기 위해 사용  

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      key: 'value'
    }
    this.fnClick = this.fnClick.bind(this);
  }

  fnClick() {}
}
```


### getDerivedStateFromProps()
: 컴포넌트 초기화 후 DOM에 마운트되기 전 호출  
: state를 갱신하기 위해 사용   

```js
class MyComponent extends React.Component {
  static getDerivedStateFromProps(props, state){
    if(props.key != state.key) {
      return {
        key: props.key
      };
    }
    return null;
  }
}
```


### render()
: 리액트 노드를 반환하는 메서드로 필수로 구현   
: 숫자와 문자를 반환시 DOM에 텍스트 노드로 렌더링되고 boolean이나 null 반환시 DOM에 아무것도 렌더링되지 않음  

```js
class MyComponent extends React.Component {
  render(){
    return null;
  }
}
```


### componentDidMount()
: 컴포넌트가 DOM에 마운트된 직후 호출   
: DOM 조작, 외부 라이브러리, 네트워크 등에 사용  

```
getDerivedStateFromProps() => shouldComponentUpdate() => render() => getSnapshotBeforeUpdate() => componentDidUpdate()
```


## Updating
: 컴포넌트의 상태가 변경되거나 상위 컴포넌트가 다시 렌더링되는 경우 호출


### getDerivedStateFromProps()
: 컴포넌트 초기화 후 DOM에 마운트되기 전 호출되고 업데이트 직후에도 호출  
: props이 변경되면 state를 갱신하기 위해 사용  


### shouldComponentUpdate()
: 컴포넌트가 다시 렌더링되기 직전에 호출  
: 기본으로 true를 반환하며 fasle를 반환하면 업데이트가 종료됨  
: 컴포넌트를 업데이트하는지 여부를 결정하기 위해 사용 (컴포넌트의 성능 최적화)  


### getSnapshotBeforeUpdate()
: render() 호출 후 DOM을 업데이트하기 직전 호출  
: 반환 값을 componentDidUpdate() 메서드 세번째 매개 변수로 전달  


### componentDidUpdate()
: 컴포넌트 업데이트되어 다시 렌더링된 직후 호출    
: getSnapshotBeforeUpdate() 반환 값을 세번째 인자로 받음   
: 업데이트 이후 DOM을 조작하거나 이전 props과 비교하기 위해 사용

```js
class CustomComponent extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(snapshot !== null) {}
  }
}
```



## Unmounting  
: DOM에서 컴포넌트가 제거될 때 호출


### componentWillUnmount()
: 컴포넌트가 DOM에서 제거되기 직전에 호출  
: props와 state 같은 리소스를 정리하기 위해 사용  



## Error
: 오류가 발생할 경우 호출

- getDerivedStateFromError
- componentDidCatch

```js
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(info.componentStack);
    
    this.setState({
      error: error
    });
  }
}
```