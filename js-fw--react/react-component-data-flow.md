# React Component Data Flow
: 리액트는 컴포넌트 간 데이터를 전달할 때 단방향 데이터 흐름을 지향  
: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해 props 속성을 사용  
: 하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달할 경우 콜백 함수를 통해 전달  
: 컴포넌트 간 데이터 전달이 필요한 경우 상위 컴포넌트의 상태를 사용  

- Parent to Child
- Child to Parent 
- State Lifting
- EventBus



## Parent to Child
: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해 props 속성을 사용  
: 전달받은 데이터는 불변으로 하위 컴포넌트에서 수정 불가  

```js
function ChildrenComponent(props) {
  return(
    <div>
      <h1>children component</h1>
      <p>{ props.string }</p>
      <p>{ props.object.key }</p>
      <button type="button" onClick={props.onClick}>button</button>
    </div>
  );    
}

function ParentComponent() {
  const fnClick = ()=> {
    console.log('parent component');
  }

  return(
    <div>
      <h1>parent component</h1>
      <ChildrenComponent string="message" object={{ key: 'value'}} onClick={fnClick} />
    </div>
  );
}
```


**event**  
: props 속성을 통해 이벤트 핸들러에 함수를 전달할 수 있음  

```js
function ChildrenComponent(props) {
  return(
    <button type="button" onClick={props.onEvent}>button</button>
  );
}

function ParentComponent() {
  return(
    <div>
      <ChildrenComponent onEvent={() => console.log('event')} />
    </div>
  );
}
```


**props.children**
```js
function ChildrenComponent(props) {
  return(
    <div>
      <h1>children component</h1>
      <p>{ props.data }</p>
      <>
        { props.children }
      </>
    </div>
  );    
}

function ParentComponent() {
  return(
    <div>
      <h1>parent component</h1>
      <ChildrenComponent data="message">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </ChildrenComponent>
    </div>
  );
}
```



## Child to Parent
: 하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달할 경우 콜백 함수를 통해 전달  

```js
function ChildrenComponent(props) {
  return(
    <button type="button" onClick={() => props.onEvent('message')}>button</button>
  );
}

function ParentComponent() {
  const [data, setData] = useState('');
  return(
    <div>
      <p>{data}</p>
      <ChildrenComponent onEvent={(param) => setData(param)} />
    </div>
  );
}
```



## State Lifting
: 컴포넌트 간 데이터 전달이 필요한 경우 상위 컴포넌트의 상태를 사용  

```js
function ChildrenA(props) {
  return(
    <button type="button" onClick={() => props.onEvent('message')}>button</button>
  );
}

function ChildrenB(props) {
  return(
    <p>{props.data}</p>
  );
}

function ParentComponent() {
  const [sharedData, setSharedData] = useState('');
  return(
    <div>
      <ChildrenA onEvent={(param) => setSharedData(param)} />
      <ChildrenB data={sharedData} />
    </div>
  );
}
```



## Event Bus
: 컴포넌트 간 pub/sub 방식의 통신을 위한 디자인 패턴  

- 게시자(pub) : 이벤트를 내보내는 발신자
- 구독자(sub) : 이벤트를 수신하는 수신자 