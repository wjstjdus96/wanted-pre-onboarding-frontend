# 나의 TODO

- 할 일 정리를 할 수 있는 투두리스트입니다.

### created by

전서연

---

## 실행방법

```
$ npm install
$ npm run start
```

## 로컬 서버 구동법

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 아래의 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다

```
$ git clone https://github.com/walking-sunset/selection-task.git
$ npm install
$ npm starts
```

## 프로젝트 링크

[나의 TODO 바로가기](https://main--strong-truffle-6c72f8.netlify.app/)

## 개발환경

- 언어 : javascript
- 라이브러리 및 프레임워크: axios, styled-components, react-router-dom, react-icons
- 배포 : github-pages

## 폴더구조

```
/src/apis => api 요청 처리함수를 모아둔 폴더
/src/components => 페이지에 사용되는 컴포넌트를 모아둔 폴더
/src/constants => 상수를 모아둔 폴더
/src/hooks => 커스텀 훅을 모아둔 폴더
/src/pages => 각 route에 해당하는 페이지를 모아둔 폴더
/src/utils => validation과 토큰 확인을 위한 함수를 모아둔 폴더
```

## 기능 설명

- 회원가입
- 로그인 / 로그아웃
  - 이메일, 비밀번호 유효성 검사
- 투두리스트
  - 투두 리스트 작성
  - 투두 리스트 수정
  - 투두 리스트 삭제
