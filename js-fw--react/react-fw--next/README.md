# Next
: 리액트 기반 풀스택 프레임워크  
: 리액프 기반 앱은 클라이언트에서 동작하여 SEO에 취약한데 이런 단점을 보완하기 위해 만들어짐  
: 서버 측 렌더링(SSR), 정적 사이트(SSG), 증분 정적 재생성(ISR) 등을 구현하기 위한 기능 지원  



## Next Install

**자동 생성**
```bash 
# 생성
npx create-next-app@latest next-example
cd next-example

## 옵션 
npx create-next-app@latest next-example --use-npm
npx create-next-app@latest next-example --example with-docker


# 실행
npm run dev
http://localhost:3000/

# 포트 변경
npm run dev -- -p 9000
```


**수동 생성**
```bash
# 1. 필수 패키지 설치 
npm init -y 
npm install next@latest react@latest react-dom@latest

# 2. 스크립트 추가 (package.json)
"dev": "next dev",
"build": "next build",
"start": "next start",

# 3. 디렉토리 및 페이지 생성
- app
  - layout.js
  - page.js 
- public 

# 4. 실행
npm run dev
```