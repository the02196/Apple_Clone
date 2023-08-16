const header = document.querySelector("header");
const subMenuItems = document.querySelectorAll(".show-box");
const subMenuContents = document.querySelectorAll(".show-box__inner-wrapper");
const navButtons = document.querySelectorAll(".nav-btn");
const blurBox = document.querySelector(".blur-box-out");
const searchWrap = document.querySelector(".search-magnifier");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".show-box__mobile");
const mobileLogos = document.querySelectorAll(".mobile-logo");
const shopping = document.querySelector(".shopping-logo");
const mobileNavButtons = document.querySelectorAll(".mobile-nav-btn");
const mobileFooterMenuTitles = document.querySelectorAll(
  ".gf-directory-column-section-title"
);
const mobileFooterMenu = document.querySelectorAll(
  ".footer-directory-column-section-products"
);
const openMobileFooterMenu = (number) => {
  mobileFooterMenuTitles[number].classList.add("rotateX");
  setTimeout(() => {
    mobileFooterMenu[number].style.top = "0px";
  }, 1);
  mobileFooterMenu[number].style.display = "block";
  mobileFooterMenuTitles[number].style.borderBottom = "none";
  mobileFooterMenuTitles[number + 1].style.borderTop =
    "1px solid rgba(0, 0, 0, 0.2)";
};

let $width = window.innerWidth;

let footerStyle = "1px solid rgba(0, 0, 0, 0.2)";
let menuDisplay = "none";

// 윈도우 태블릿 사이즈 이상으로 리사이즈 됐을 때, 푸터 메뉴 값 초기화 시켜주는 함수
// 윈도우 태블릿 사이즈 이하로 내려갔을 때, 삼항 연산자를 통해 특정 값이 부여되게 하는 함수

if($width < 833){
  navButtons[10].style.display = "none"   
  navButtons[11].style.display = "none"
  mobileNavButtons[0].classList.remove("remove")  
  mobileNavButtons[1].classList.remove("remove")
}



mobileNavButtons[0].addEventListener("click", () => hamburgerTransformToX(10));
mobileNavButtons[1].addEventListener("click", () => hamburgerTransformToX(11));


navButtons[10].addEventListener("click", () => clickEventNavButtons(10));
navButtons[11].addEventListener("click", () => clickEventNavButtons(11));




const closeMobileFooterMenu = (number) => {
  mobileFooterMenuTitles[number].classList.remove("rotateX");
  setTimeout(() => {
    mobileFooterMenu[number].style.top = "-55px";
  }, 1);
  mobileFooterMenu[number].style.display = menuDisplay;
  mobileFooterMenuTitles[number].style.borderBottom = footerStyle;
  mobileFooterMenuTitles[number + 1].style.borderTop = "none";
};

const closeMobileFooterMenuAll = () => {
  mobileFooterMenu.forEach((e) => {
    e.style.display = menuDisplay;
    setTimeout(() => {
      e.style.top = "-55px";
    }, 10);
  })
  mobileFooterMenuTitles.forEach((ele) => {
  ele.style.borderBottom = footerStyle
  ele.classList.remove("rotateX");
})}

let clickCount = [];
const pushZero = () => {
    for(i = 0; i < mobileFooterMenuTitles.length; i++){
      clickCount.push("0");
    }
}
pushZero()

mobileFooterMenuTitles.forEach((title, number) => {
  title.addEventListener("click", () => {
    clickCount[number]++
    if (clickCount[number] % 2 === 0) {
      closeMobileFooterMenu(number);
    } else {
      openMobileFooterMenu(number);
    }
  });
});

// 헤더의 세로 길이, 색깔과 투명도를 기존 값으로 되돌리고
// 서브메뉴와 화면 블러 효과를 '숨기는' 함수

const hideAllSubMenus = () => {
  clickCountA = 0;
  clickCountB = 0;
  subMenuItems.forEach((item) => {
    item.style.display = "none";
  });
  subMenuContents.forEach((content) => {
    content.style.opacity = 0;
    content.style.visibility = "hidden";
  });
  blurBox.classList.remove("blur-box-open");
  header.style.height = "46px";
  header.style.backgroundColor = "rgba(22, 22, 23, .8)";
  header.style.boxShadow = "none";
};

// 헤더의 길이를 서브메뉴의 콘텐츠 길이만큼 늘리고,
// 헤더의 색깔과 투명도를 변경하고,
// 서브메뉴와 화변 블러 효과를 '나타나게' 하는 함수

const showSubMenu = (number) => {
  subMenuItems.forEach((item) => {
    item.style.display = "none";
  });
  subMenuItems[number].style.display = "flex";
  header.style.height = `${subMenuContents[number].clientHeight}px`;

  setTimeout(() => {
    subMenuContents.forEach((content) => {
      content.style.opacity = 0;
      content.style.visibility = "hidden";
    });
    subMenuContents[number].style.opacity = 1;
    subMenuContents[number].style.visibility = "visible";
  });

  header.style.backgroundColor = "rgba(22, 22, 23, 1)";
  header.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 19px 38px";
  blurBox.classList.add("blur-box-open");
};

const showMobileMenu = (number) => {
  subMenuItems.forEach((item) => {
    item.style.display = "none";
  });
  subMenuItems[number].style.display = "flex";
  header.style.height = "100vh";

  setTimeout(() => {
    subMenuContents.forEach((content) => {
      content.style.opacity = 0;
      content.style.visibility = "hidden";
    });
    subMenuContents[number].style.opacity = 1;
    subMenuContents[number].style.visibility = "visible";
  }, 50);

  header.style.backgroundColor = "rgba(22, 22, 23, 1)";
};

// 서브 메뉴의 세로 길이를 서브 메뉴 내부의 콘텐츠 길이만큼 늘리는 함수

subMenuItems.forEach((item, i) => {
  item.style.height = `${subMenuContents[i].scrollHeight + 80}px`;
});

const autoFocus = () => {
  setTimeout(() => {
    document.querySelector("#search").focus();
  }, 100);
};

// 클릭 카운트를 이용하여, 홀수이면 showSubMenu()가, 짝수이면 hideAllSubMenus 함수가 실행되게 하는 함수. (cilck toggle 기능)

let clickCountA = 0;
let clickCountB = 0;
let clickCountC = 0;

const clickEventNavButtons = (number) => {
  if (number === 10) {
    clickCountA++;
    console.log(clickCountA);
    if (clickCountA % 2 === 0) {
      hideAllSubMenus();
    } else {
      autoFocus();
      showSubMenu(number);
    }
  } else if (number === 11) {
    clickCountB++;
    console.log(clickCountB);
    if (clickCountB % 2 === 0) {
      hideAllSubMenus();
    } else {
      showSubMenu(number);
    }
  }
};

// 햄버거 메뉴 X 모양으로 바뀌면 애플 로고, 돋보기, 장바구니 사라지는 함수

const hideAndShowAllLogo_WithoutHamburger = () => {
  if (clickCountC % 2 === 0) {
    mobileLogos.forEach((e) => {
      e.classList.remove("hide-logo");
    });
  } else {
    mobileLogos.forEach((e) => {
      e.classList.add("hide-logo");
    });
  }
};

const X_ReturnToHamburger = () => {
    hamburger.classList.remove("change-to-X");
}

const showLogosWithOutHamburger = () => {
  hideAllSubMenus()
  mobileLogos.forEach((e) => {
    e.classList.remove("hide-logo");
  });
}

// 햄버거 메뉴 클릭하면 X 모양으로 바뀌고,
// 메뉴 밑으로 내려오는 함수

const hamburgerTransformToX = (indexNumber) => {
  clickCountC++;
  console.log(clickCountC);
  if (clickCountC % 2 === 0) {
    hamburger.classList.remove("change-to-X");
    hideAndShowAllLogo_WithoutHamburger();
    hideAllSubMenus();
  } else {
    autoFocus();
    hamburger.classList.add("change-to-X");
    hideAndShowAllLogo_WithoutHamburger();
    showMobileMenu(indexNumber);
  }
};

hamburger.addEventListener("click", () => hamburgerTransformToX(12));


// showSubMenu에 navButtons의 인덱스 값을 매개변수로 받아 인수로 넘겨주는 함수

const onNavBtnMouseOver = (number) => {
  showSubMenu(number);
};

// header에서 벗어났을 때, hideAllSubMenus() 함수를 실행하는 함수와 mouseleave 이벤트

const onNavBtnMouseOut = (e) => {
  if (!header.contains(e.relatedTarget)) {
    hideAllSubMenus();
  }
};



if($width > 833) {
  header.addEventListener("mouseleave", onNavBtnMouseOut);
  header.addEventListener("mouseenter", onNavBtnMouseOut);
}else {
  hideAllSubMenus()
}


// 네비게이션 메뉴 버튼 위에 마우스를 올리면 서브메뉴가 나오게 하고, 이탈하면 서브메뉴가 감춰지게 하는 함수

navButtons.forEach((btn, number) => {
  if (number > 9) {
    return;
  }
  btn.addEventListener("mouseenter", () => onNavBtnMouseOver(number));
});



navButtons.forEach((btn) => {
    btn.addEventListener("mouseleave", onNavBtnMouseOut);
});


let testCount = 0;
window.addEventListener("resize", function () {
  $width = window.innerWidth;
  footerStyle = $width > 833 ? "none" : "1px solid rgba(0, 0, 0, 0.2)";
  menuDisplay = $width > 833 ? "block" : "none";
  
  if($width < 833){
    testCount++
    if(testCount <= 1){
      mobileFooterMenu.forEach((e)=>{
        closeMobileFooterMenuAll()
      })
    }
    mobileFooterMenuTitles.forEach((e) => {
      e.style.borderTop = "none";
    });
    navButtons[10].style.display = "none"   
    navButtons[11].style.display = "none"
    mobileNavButtons[0].classList.remove("remove")  
    mobileNavButtons[1].classList.remove("remove")
    header.removeEventListener("mouseenter", onNavBtnMouseOut);
    header.removeEventListener("mouseleave", onNavBtnMouseOut);
  }
  else {
    testCount = 0;
    X_ReturnToHamburger()
    showLogosWithOutHamburger()
    closeMobileFooterMenuAll()
    mobileFooterMenuTitles.forEach((e) => {
      e.style.borderTop = "none";
      e.style.borderBottom = "none";
    });
    header.addEventListener("mouseenter", onNavBtnMouseOut);
    header.addEventListener("mouseleave", onNavBtnMouseOut);
    navButtons.forEach((btn) => {
      btn.addEventListener("mouseleave", onNavBtnMouseOut);
    });
    mobileNavButtons[0].classList.add("remove") 
    mobileNavButtons[1].classList.add("remove")
    navButtons[10].style.display = "block"
    navButtons[11].style.display = "block"
  }
});

