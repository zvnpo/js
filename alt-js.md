# AltJS
Alternative to JS   
: JS 단점을 보완하거나 해결한 도구나 언어     


**altjs list**  
http://smurfpandey.github.io/altjs/

 
**JS로 컴파일 되는 언어**
- [TypeScript](./ts/)
- [PureScript](#purescript)
- [Dart](#dart)
- [Nim](#nim)
- ... 



## PureScript
: ML, Haskell에 영향받은 함수형 언어  

```bash
# 컴파일러와 빌드 툴 설치   
npm install -g purescript pulp

# bower 레지스트리 사용  
npm install -g bower

# 프로젝트 생성
pulp init
```



## Dart   
: dart2js 컴파일러를 통해 dart 코드를 JS 코드로 컴파일해 브라우저에서 동작    



## Nim       
: nim 컴파일러를 통해 C, C++, JS로 컴파일   

```bash
nim js -o:example.js example.nim
```



[top](#)