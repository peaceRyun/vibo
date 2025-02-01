import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 :root {
    /* Primary Colors */
    --primary-base: #07FFE6;
    --primary-100: #D9FCFA;
    --primary-200: #B3FAF5;
    --primary-300: #8EF7F0;
    --primary-400: #68F5EB;
    --primary-600: #06DBBF;
    --primary-700: #04998A;
    --primary-800: #02665C;
    --primary-900: #01322D;
    
    /* Secondary Colors */
    --secondary-base: #009C8C;
    --secondary-100: #E6F5F4;
    --secondary-200: #CCEBE8;
    --secondary-300: #B2E1DC;
    --secondary-400: #66C4BA;
    --secondary-600: #007D70;
    --secondary-700: #005E54;
    --secondary-800: #003E38;
    --secondary-900: #001F1C;

    /* Grayscale */
    --gray-100: #E6E7E9;
    --gray-200: #D1D2D4;
    --gray-300: #BCBDC0;
    --gray-400: #A8A9AD;
    --gray-500: #939598;
    --gray-600: #6C6D70;
    --gray-700: #57585A;
    --gray-800: #3E3E3F;
    --gray-900: #191919;

    /* 색깔 극단값 */
    --white: #ffffff;
    --black: #000000;

    /* Color contrast ratios */
    --contrast-normal: 3.1;     /* 3:1 with white */
    --contrast-high: 4.5;       /* 4.5:1 with white */
   /* Spacing System */
    --spacing-0: 0px;
    --spacing-1: 2px;
    --spacing-2: 4px;
    --spacing-3: 8px;
    --spacing-4: 12px;
    --spacing-5: 16px;
    --spacing-6: 20px;
    --spacing-7: 24px;
    --spacing-8: 32px;
    --spacing-9: 40px;
    --spacing-10: 48px;

  /* Layout Spacing System */
    --layout-gnb-body: clamp(64px, 3.33vw, 50px);        /* 390px일 때 64px, 1920px일 때 50px */
    --layout-titleCont-title: clamp(0px, 2.08vw, 40px);      /* 390px일 때 0px, 1920px일 때 40px */
    --layout-titleCont-contents: clamp(64px, 3.33vw, 64px);  /* 390px일 때 64px, 1920px일 때 64px */
    --layout-contents-contents: clamp(40px, 3.65vw, 70px); /* 390px일 때 40px, 1920px일 때 70px */
    --layout-body-footer: clamp(64px, 4.17vw, 80px);     /* 390px일 때 64px, 1920px일 때 80px */

    /* breakpoint */
    --breakpoint-mobileUp: 360px;  /* min-width: 최소 모바일 화면 */
    --breakpoint-mobile: 390px; /* 모바일: 360px~600px 대표: 390px*/
    --breakpoint-mobileDown: 600px;  /* max-width: 최대 모바일 화면 */

    --breakpoint-tabletUp: 601px;  /* min-width: 최소 태블릿 화면 */
    --breakpoint-tablet: 768px; /* 태블릿: 601px~1024px 대표: 768px*/
    --breakpoint-tabletDown: 1024px; /* max-width: 최대 태블릿 화면 */

    --breakpoint-desktopUp: 1025px; /* min-width: 최소 데스크탑 화면 */
    --breakpoint-desktop: 1920px; /* 데스크탑: 1025px~1920px 대표&최대 화면: 1920px*/
   /* Display */
   /* 한 눈에 가장 큰 텍스트 */
    --display-large-size: 120px;
    --display-large-mobile: 65px;
    --display-large-weight: 700;
    
    --display-medium-size: 80px;
    --display-medium-mobile: 35px;
    --display-medium-weight: 800;
    
    --display-small-size: 40px;
    --display-small-mobile: 25px;
    --display-small-weight: 700;

    /* Heading */
    /* 페이지 섹션 타이틀에 사용 */
    --heading-large-size: 48px;
    --heading-large-mobile: 48px;
    --heading-large-weight: 800;
    
    --heading-medium-size: 40px;
    --heading-medium-mobile: 32px;
    --heading-medium-weight: 700;
    
    --heading-small-size: 32px;
    --heading-small-mobile: 25px;
    --heading-small-weight: 700;

    /* Title */
    /* 텍스트 단위, 모듈 단위의 작은 제목 사용 */
    --title-xxlarge-size: 60px;
    --title-xxlarge-mobile: 48px;
    --title-xxlarge-weight: 700;
    
    --title-xlarge-size: 32px;
    --title-xlarge-mobile: 32px;
    --title-xlarge-weight: 800;
    
    --title-large-size: 28px;
    --title-large-mobile: 24px;
    --title-large-weight: 700;
    
    --title-medium-size: 20px;
    --title-medium-mobile: 20px;
    --title-medium-weight: 700;
    
    --title-small-size: 17px;
    --title-small-mobile: 17px;
    --title-small-weight: 800;
    
    --title-xsmall-size: 15px;
    --title-xsmall-mobile: 15px;
    --title-xsmall-weight: 700;

    /* Body */
    /* 본문 텍스트로 사용 */
    --body-large-size: 28px;
    --body-large-mobile: 19px;
    --body-large-weight: 400;
    
    --body-medium-size: 17px;
    --body-medium-mobile: 17px;
    --body-medium-weight: 400;
    
    --body-small-size: 15px;
    --body-small-mobile: 15px;
    --body-small-weight: 400;

    /* Detail */
    /* 추가 보충 또는 작은 알림 텍스트 사용 */
    --detail-large-size: 17px;
    --detail-large-mobile: 17px;
    --detail-large-weight: 400;
    
    --detail-medium-size: 15px;
    --detail-medium-mobile: 15px;
    --detail-medium-weight: 400;
    
    --detail-small-size: 13px;
    --detail-small-mobile: 13px;
    --detail-small-weight: 400;

    /* Label */
    /* 구성 요소 내부에서 텍스트로 사용 */
    --label-large-size: 19px;
    --label-large-mobile: 19px;
    --label-large-weight: 400;
    
    --label-medium-size: 17px;
    --label-medium-mobile: 17px;
    --label-medium-weight: 400;
    
    --label-small-size: 15px;
    --label-small-mobile: 15px;
    --label-small-weight: 400;
    
    --label-xsmall-size: 13px;
    --label-xsmall-mobile: 13px;
    --label-xsmall-weight: 400;

    /* Links */
    /* 링크나 컴포넌트 영역의 텍스트로 사용 */
    --links-large-size: 19px;
    --links-large-mobile: 19px;
    --links-large-weight: 400;
    
    --links-medium-size: 17px;
    --links-medium-mobile: 17px;
    --links-medium-weight: 400;
    
    --links-small-size: 15px;
    --links-small-mobile: 15px;
    --links-small-weight: 400;

    /* text common */
    /* 행간, 자간 */
    --m-line-height: 150%; /* Mobile (13~14px 대표 기준) Line Height */
    --pc-l-line-height: 130%; /* PC Large(40px 이상일때) Line Height */
    --pc-n-line-height: 160%; /* PC Normal(15~16px 기준) Line Height */
    --letter-spacing-default: 1px;
    --letter-spacing-none: 0;
 }
  ${reset}
  /* reset */
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  button,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeoVariable', Pretendard, sans-serif;
  }

  fieldset,
  img {
    border: 0 none;
  }

  img,
  video {
    max-width: 100%;
  }

  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after {
    content: '';
    content: none;
  }

  q:before,
  q:after {
    content: '';
    content: none;
  }

  input,
  select,
  textarea {
    font-size: 100%;
    vertical-align: middle;
  }

  button {
    font-size: 100%;
    vertical-align: middle;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all ease 100ms;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    color: var(--white);
    background-color: var(--gray-900);
    -webkit-text-size-adjust: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
  }

  input[type='text'],
  input[type='password'],
  input[type='submit'],
  input[type='search'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  input:checked[type='checkbox'] {
    background-color: #e4e4e4;
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
  }

  button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border-radius: 0;
    border: none;
    cursor: pointer;
  }

  input[type='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='file'] {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border-radius: 0;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  hr {
    display: none;
  }

  input[type='password'] {
    font-family: 'Malgun Gothic';
  }

  /* 중요한 이미지 대체텍스트로 이미지off시에도 대체 텍스트를 보여주고자 할때 */
  .blind,
  caption,
  legend {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  /* 공통 클래스 */
  .inner {
    width: 1400px;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    padding: 120px 0;
  }

  .main {
    width: 100%;
  }

  .hide {
    overflow: hidden;
    text-indent: -9999px;
    width: 0;
    height: 0;
    line-height: 0;
  }

  /* Swiper 스타일 */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default GlobalStyle;
