# Deno  
: v8(엔진), rust(언어), Tokio(런타임) 기반으로 개발된 js, ts, WebAssembly 런타임   
: v8이 ts를 지원하지 않아 TSC, SWC 컴파일러를 사용해 ts를 js로 변환  
: 권한 옵션을 설정하지 않으면 기본적으로 파일, 네트워크, 환경에 접근 불가 (샌드박싱)  
: 단일 실행 파일 제공 (개발 도구 및 유틸리티 포함 ex. 린트, 번들러, 테스트 등)  
: 단일 스레드지만 추가로 응용 프로그램 스레드 생성 가능  
: 웹워커는 독립적으로 실행되며 메시지를 통해 메인 스레드와 통신  


**Tokio**   
: rust로 만들어진 런타임 

**SWC**   
: rust로 만들어진 컴파일러  

**TSC**  
: js로 만들어진 컴파일러 



**install**
```bash
# linux
curl -fsSL https://deno.land/x/install/install.sh | sh


# windows
choco install deno
scoop install deno


# rust install 
cargo install deno 


# 설치 정보 
deno info
```


표준 모듈  
https://deno.land/std


외부 모듈  
https://deno.land/x 
