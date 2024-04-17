# corepack
https://github.com/nodejs/corepack

: node 16 버전부터 포함된 내장 도구  
: 패키지 매니저 버전 관리를 단순화하기 위해 사용  
: 패키지 매니저를 전역으로 설치하지 않고 corepack을 통해 사용  
 (패키지 매니저 도구마다 설정 파일이 다르고 각 도구의 버전마다 종속성을 해결하는 방법이 다름)  


```bash 
# node 16 이전 버전은 설치 필요
npm install -g corepack


# 활성화 
corepack enable 
corepack enable npm 

## package.json
"packageManager": "npm@10.5.0",


# 비활성화 
corepack disable 


# 패키지 매니저 설치
corepack pnpm install

# 패키지 매니저 준비  
corepack prepare  


# package.json에 추가
corepack use npm@10.5.0

## package.json
"packageManager": "npm@10.5.0+sha256.해시",


# 특정 버전 사용  
corepack prepare npm@10.5.0 --activate 
corepack npm -v
corepack npm install 패키지


# 패키지 관리자를 프로젝트에 보관
corepack prepare npm@10.5.0 --activate -o

# 보관 취소
corepack hydrate --activate corepack.tgz
```


**.bashrc**
```
alias npm="corepack npm"
alias npx="corepack npx"
alias yarn="corepack yarn"
alias yarnpkg="corepack yarnpkg"
alias pnpm="corepack pnpm"
alias pnpx="corepack pnpx"
```