# bun 
https://bun.sh/

: JavaScriptCore 엔진을 기반으로 구축된 js 런타임 + 툴킷   
: 번들러, 트랜스파일러, 태스크 러너, 패키지 매니저 등 도구 내장   
: css-in-js, 탬플릿 빌더, 환경 변수 로더 등 포함  
: node 모듈(약 90% 정도)을 지원해 node와 호환 가능  

 
```
# linux
curl https://bun.sh/install | bash


# npm
npm install -g bun
```


**빌드 스크립트**
```js
await Bun.build({
    entrypoints: ['./index.ts'],
    outdir: './out',
})
```
