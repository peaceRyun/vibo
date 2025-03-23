# 📋 OTT 홈페이지 VIBO

![프로젝트 로고나 대표 이미지](https://github.com/peaceRyun/vibostatic/blob/main/public/profileIconV.png?raw=true)
![프로젝트 로고나 대표 이미지](https://github.com/peaceRyun/vibostatic/blob/main/public/profileIconI.png?raw=true)
![프로젝트 로고나 대표 이미지](https://github.com/peaceRyun/vibostatic/blob/main/public/profileIconB.png?raw=true)
![프로젝트 로고나 대표 이미지](https://github.com/peaceRyun/vibostatic/blob/main/public/profileIcon0.png?raw=true)

## 📝 프로젝트 소개

본 프로젝트는 세계적인 럭셔리 주얼리 브랜드 반클리프 아펠의 웹사이트를 리뉴얼하는 것을 목표로 합니다.
다양한 동적 요소와 세련된 디자인을 도입하여 제품의 아름다움을 극대화하고 사용자 경험을 향상하는 것을 목표로 합니다.

## ✨ 주요 기능

**🗂 상태 관리 및 사용자 관리**

Redux Toolkit을 활용한 상태관리: 효율적인 상태 관리 시스템으로 애플리케이션 데이터 흐름을 중앙화하여 관리합니다.

로컬스토리지를 활용한 사용자 관리: 로컬스토리지 기반의 로그인, 회원가입, 마이페이지 기능을 통해 사용자 경험을 향상시킵니다.

**🎨 UI/UX 및 애니메이션**

인터렉티브(GSAP): GSAP 라이브러리를 활용한 부드럽고 역동적인 인터페이스 애니메이션으로 사용자 상호작용을 향상시킵니다.

**🛍 콘텐츠 탐색 및 리뷰 기능**

고급 필터 & 검색 기능: 컬렉션, 인기순 정렬 등 다양한 필터링된 스와이퍼 제공

위시리스트 & 시청내역 & 리뷰내역 연동: 찜한 제품을 쉽게 관리하고 시청내역과 리뷰내역을 마이페이지에서 한눈에 편리하게 보기 제공

**🔗 소셜 & 개인화 요소**

소셜 로그인 지원: Kakao 로그인 기능 제공

## 🛠️ 기술 스택

### 디자인

![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### 프론트엔드

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

### 배포

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### 협업 도구

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Confluence](https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white)

## 🚀 설치 및 실행 방법

```bash
# 저장소 클론
git clone https://github.com/username/repository.git

# 디렉토리 이동
cd repository

# 의존성 설치
npm install
yarn install

# 개발 서버 실행
npm run dev
yarn dev

# 프로덕션 빌드
npm run build
yarn build

# 프로덕션 서버 실행
npm run start
yarn dev
```

## 🔧 환경 설정

```
# .env 파일
VITE_TMDB_API_KEY=your_api_key
```

## 📊 프로젝트 구조

```
├── public
├── src
│   ├── assets
│   ├── common
│   │   ├── footer
│   │   ├── header
│   │   ├── Layout.jsx
│   │   └── style.js
│   ├── components
│   │   ├── about
│   │   ├── contents
│   │   ├── home
│   │   └── member
│   ├── hooks
│   │   └── useGsap.js
│   ├── pages
│   │   ├── about
│   │   ├── contents
│   │   ├── home
│   │   ├── member
│   │   ├── test
│   │   └── vibo
│   ├── store
│   │   ├── modules
│   │   │   └── index.js
│   │   └── styled
│   │       └── GlobalStyle.js
│   └── ui
│       ├── button
│       ├── card
│       ├── like
│       ├── lordicon
│       ├── tab
│       ├── toggle
│       └── utils
│           ├── paginationUtil.js
│           └── routeUtil.js
├── App.css
├── App.jsx
├── App.t.jsx
├── index.css
├── main.jsx
├── .gitignore
├── .gitmessage.txt
├── .eslintrc.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```

## 👨‍💻 팀원 소개

| 이름   | 역할                               | GitHub                                     | 이메일                           |
| ------ | ---------------------------------- | ------------------------------------------ | -------------------------------- |
| 권윤구 | 총괄/상세페이지/프로필아이콘페이지  | [GitHub](https://github.com/peaceRyun)        | dbsrn1110@gmail.com        |
| 정혜지 | 메인페이지/마이페이지/구매페이지    | [GitHub](https://github.com/jineeds)     |      |
| 최현지 | 랜딩페이지/GSAP                    | [GitHub](https://github.com/Born-here) |  |
| 이강산 | 마이페이지/로그인/회원가입          | [GitHub](https://github.com/2mightyMt)      |       |

## 🛬 개발 일정

-   **기획** : 2025.01.01 - 2025.01.17
-   **와이어 프레임** : 2025.01.20 - 2025.01.24
-   **디자인** : 2025.01.27 - 2025.01.31
-   **개발** : 2025.02.03 - 2025.02.18

## 📈 프로젝트 진행 상황

-   [x] 요구사항 분석
-   [x] 디자인 및 UI/UX 설계
-   [x] API 구조 파악
-   [x] 프론트엔드 개발
-   [x] 배포

## 📞 연락처

프로젝트에 관한 문의나 제안이 있으시면 [이메일](mailto:dbsrn@gmail.com)로 연락주세요.

---

⭐ 이 프로젝트가 마음에 드셨다면 GitHub Star를 눌러주세요! ⭐
