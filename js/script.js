// ============================= typing animation
let typed = new Typed(".typing", {
  strings: [
    "개발 공부 중인 학생입니다.",
    "2024년도에 공부를 시작하였습니다.",
    "현재는 백엔드 자바 기초를 공부 중입니다.",
    "다정하고 헌신적인 어머니와 같이 거주 중입니다.",
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

// ============================= nav animation
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalSection; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  navMenuBtn = navTogglerBtn.querySelector("span i"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  if (navTogglerBtn.classList.contains("open")) {
    navMenuBtn.classList.remove("fa-burger");
    navMenuBtn.classList.add("fa-circle-xmark");
  } else {
    navMenuBtn.classList.remove("fa-circle-xmark");
    navMenuBtn.classList.add("fa-burger");
  }
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
