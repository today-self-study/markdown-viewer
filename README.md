# Markdown Viewer

**심플하고 세련된 UI의 실시간 Markdown 미리보기 웹앱**  
Angular + Tailwind CSS 기반, GitHub Pages로 배포되는 SPA

---

## ✨ 주요 특징

- **실시간 미리보기**: 입력과 동시에 Markdown이 렌더링되어 바로 확인 가능
- **Happy Utils 스타일**: 카드형 메인, 연한 배경, 라운드/그림자 등 세련된 Tailwind UI
- **반응형 레이아웃**: PC/모바일 모두 쾌적하게 사용 가능
- **외부 스크롤 없음**: 입력/미리보기 영역만 내부 스크롤
- **경량/빠른 로딩**: 불필요한 의존성 없이 빠른 SPA
- **GitHub Pages 배포 최적화**: `/docs` 산출물, 자동 postbuild 스크립트 적용

---

## 🚀 데모

- **[실시간 데모 바로가기](https://today-self-study.github.io/markdown-viewer/)**

---

## 🛠️ 기술 스택

- [Angular](https://angular.io/) (Standalone, v17+)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [marked](https://github.com/markedjs/marked) (Markdown 파서)
- [TypeScript](https://www.typescriptlang.org/)
- GitHub Actions/gh-pages (배포 자동화)

---

## 🏗️ 빌드 및 배포

```bash
# 1. 빌드 (산출물: /docs)
npm run build

# 2. GitHub Pages 배포
gh-pages -d docs
```

- 빌드 후 `/docs`에 SPA 산출물이 생성됩니다.
- postbuild 스크립트로 `/docs/browser` → `/docs` 자동 복사/정리됨.

---

## 📁 폴더 구조

```
markdown-viewer/
  ├─ src/
  │   ├─ app/
  │   └─ ...
  ├─ docs/           # 빌드 산출물 (index.html 등)
  ├─ package.json
  └─ angular.json
```

---

## 📝 라이선스

- MIT License

---

**문의/기여/스타 언제든 환영합니다!**
