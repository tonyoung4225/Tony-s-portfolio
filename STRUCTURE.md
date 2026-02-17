# 프로젝트 구조

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃 (네비, 푸터)
│   └── page.tsx            # 메인 페이지
│
├── components/             # 재사용 컴포넌트
│   ├── index.ts            # export 모음
│   └── Section.tsx
│
├── public/                 # 정적 파일 (URL 경로 그대로 제공)
│   ├── images/             # 이미지 (예: 프로젝트 썸네일)
│   └── fonts/              # self-hosted 폰트 (선택)
│
├── package.json
├── tsconfig.json
└── next.config.*
```

- **public**: `public/photo.png` → 사이트에서 `/photo.png`로 접근
- **fonts**: 현재는 `next/font`(Google 폰트) 사용. 직접 폰트 파일 쓰려면 `public/fonts/`에 넣고 CSS에서 `url('/fonts/파일명.woff2')` 로 연결
- **components**: 공통 UI는 여기에 두고 `import { Section } from '@/components'` 처럼 사용
