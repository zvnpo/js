# AltJS
Alternative to JavaScript  
: 자바스크립트 단점을 보완하거나 해결한 도구나 언어

**altjs list**  
http://smurfpandey.github.io/altjs/

 
**Compile to JS**
- [TypeScript](./ts/)
- [PureScript](#purescript)
- [Dart](#dart)
- [Nim](#nim)
- ...



## PureScript
: ML, Haskell에 영향받은 함수형 언어로 자바스크립트로 컴파일됨  
: purescript라는 컴파일러와 pulp라는 자체 빌드 도구와 bower 레지스트리를 사용  
: 최근에는 spago라는 빌드 도구 사용  

```bash
npm i -g purescript pulp bower
npm i -g spago@next 

pulp init

pulp server
http://localhost:1337
```



## Dart   
: dart2js 라는 컴파일러를 통해 dart를 자바스크립트로 컴파일해 브라우저에서 동작  
: dart는 강한 타입, null safety 같은 자바스크립트에 없는 기능 지원   

```dart
import 'dart:js' as js;

void main() {
  print("dart!");
  example();
}

void example() {
  int value = 0;
  js.context['key'] = value;
}
```



## Nim       
: nim 컴파일러를 통해 C, C++, JS로 컴파일   


```nim
import std/jsconsole
import std/jsffi

proc fn() =
  console.log("nim")

fn()
```

```bash
# 파일 변환
nim js -o:example.js example.nim

# 런타임 환경이 있는 경우 바로 실행
nim js -r example.nim
```