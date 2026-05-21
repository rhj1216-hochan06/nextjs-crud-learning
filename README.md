# nextjs-crud-learning

Next.js App Router 기반으로 CRUD 흐름을 학습하기 위해 만든 프로젝트입니다.

## 주요 학습 내용

- `src/app` 기반 파일 라우팅
- `layout.js`, `page.js`, 동적 라우트 `[id]` 구조
- 서버 컴포넌트와 `"use client"` 클라이언트 컴포넌트 구분
- `next/link`, `next/navigation`을 이용한 페이지 이동
- `json-server`를 이용한 학습용 REST API 구성
- 환경변수를 이용한 API URL 관리
- ESLint, Prettier 기반 코드 품질 관리

## 실행 방법

프론트엔드 개발 서버를 실행합니다.

```bash
npm run dev
```

학습용 백엔드 API 서버를 실행합니다.

```bash
npx json-server --port 9999 --watch db.json
```

## API 서버

이 프로젝트는 `db.json`을 데이터 파일로 사용하는 `json-server`를 백엔드처럼
사용합니다.

| 기능         | Method | Endpoint      |
| ------------ | ------ | ------------- |
| 글 목록 조회 | GET    | `/topics`     |
| 글 상세 조회 | GET    | `/topics/:id` |
| 글 생성      | POST   | `/topics`     |
| 글 수정      | PATCH  | `/topics/:id` |
| 글 삭제      | DELETE | `/topics/:id` |
