# Flux 
: 애플리케이션의 데이터를 흐름을 단방향으로 관리하는 아키텍처 패턴  
: 데이터를 쉽게 파악하고 효율적으로 관리하는 목적으로 설계  

**hisotry**  
https://www.infoq.com/news/2014/05/facebook-mvc-flux/


**구현**  
- Redux
- MobX
- Reflux



## Flux 구성

```
(View) Action => Dispatcher => Store => View
```


### Action
: 애플리케이션에서 발생하는 이벤트  
: Action이 메시지를 생성해 Dispatcher에게 전달  


### Dispatcher
: 애플리케이션의 모든 데이터 흐름을 관리하는 중앙 허브로 하나만 존재  
: Action에서 전달 받은 메시지를 Store에 전달  

**API**
```js
declare module 'flux' {
  declare class Dispatcher<TPayload> {
    register(callback: (payload: TPayload) => void): DispatchToken;
    unregister(id: DispatchToken): void;
    waitFor(ids: Array<DispatchToken>): void;
    dispatch(payload: TPayload): void;
    isDispatching(): boolean;
  }
}

register : 디스패처에 콜백 함수 등록 
unregister : 디스패처에 콜백 함수 등록 취소
waitFor : 스토어가 다른 스토어의 작업이 완료될 때까지 기다림
dispatch : 디스패처에 메시지 전달  
isDispatching : 디스패터가 현재 작업하는지 여부 반환 
```


### Store
: 애플리케이션의 상태를 보관하고 관리  
: Dispatcher에게 전달 받은 메시지에 따라 상태를 변경하고 이를 View에 알림  


### View  
: 애플리케이션의 UI를 렌더링을 위한 컴포넌트들  
: Store를 통해 애플리케이션의 상태를 읽고 필요한 경우 Action을 발생  
