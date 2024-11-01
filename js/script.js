// ============================= typing animation
let typed = new Typed(".typing", {
  strings: [
    "개발 공부 중인 학생입니다.",
    "2024년도에 공부를 시작하였습니다.",
    "현재는 백엔드 자바 기초를 공부 중입니다.",
    "다정하고 헌신적인 어머니와 같이 거주 중입니다.",
    "My Last Projects : ",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  startDelay: 1000, // 시작 전 1초 대기
  smartBackspace: true, // 중복되는 문자는 지우지 않음
  shuffle: false, // 무작위 순서로 표시하지 않음
  cursorChar: "|", // 커서 모양 설정
  fadeOut: true, // 페이드아웃 효과
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500, // 페이드아웃 지연 시간
});

let typePortfolio = new Typed(".typingPortfolio", {
  strings: [
    "제가 구성한 프로젝트입니다. : ",
    "프로젝트들 중에는 클론코딩한 프로젝트도 있습니다.",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true, //한번만 실행
  startDelay: 1000, // 시작 전 1초 대기
  smartBackspace: true, // 중복되는 문자는 지우지 않음
  shuffle: false, // 무작위 순서로 표시하지 않음
  cursorChar: "|", // 커서 모양 설정
  fadeOut: true, // 페이드아웃 효과
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500, // 페이드아웃 지연 시간
});

// 네비게이션 버튼 클릭시 동작 및 스크롤 하단
const navBtn = document.querySelectorAll(".nav li a");

navBtn.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 동작 막기

    // 클릭한 링크의 href 값에서 # 제거하여 id 얻기
    const targetId = link.getAttribute("href").substring(1);

    // id로 해당 섹션 찾기
    const targetSection = document.getElementById(targetId);

    // 부드러운 스크롤 옵션 설정
    const scrollOptions = {
      behavior: "smooth", // 부드러운 스크롤
      block: "start", // 섹션의 시작 부분으로 스크롤
    };

    // 해당 섹션으로 스크롤
    targetSection.scrollIntoView(scrollOptions);

    // active 클래스 관리
    navBtn.forEach((navLink) => {
      navLink.classList.remove("active"); // 모든 링크에서 active 제거
    });
    link.classList.add("active"); // 클릭한 링크에만 active 추가
  });
});
// 네비게이션 버튼 클릭시 동작 및 스크롤 하단

// 부드러운 이동
// 다만 내가 이해하기엔 다소 어려움[24.11.01]
// const navBtn = document.querySelectorAll(".nav li a");

// function smoothScroll(target, duration) {
//   const targetPosition =
//     target.getBoundingClientRect().top + window.pageYOffset;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   // 이징 함수 - easeInOutQuad
//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// navBtn.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const targetId = link.getAttribute("href").substring(1);
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//       // 1000ms(1초) 동안 스크롤 애니메이션 실행
//       smoothScroll(targetSection, 1000);
//     }

//     navBtn.forEach((links) => {
//       links.classList.remove("active");
//     });
//     link.classList.add("active");
//   });
// });
