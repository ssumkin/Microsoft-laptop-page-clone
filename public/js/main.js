const outlineTap = document.getElementById('outline-tap');
const techSpecTap = document.getElementById('tech-spec-tap'); 
const outline = document.getElementsByClassName('outline');
const techSpec = document.getElementsByClassName('tech-spec'); 
 

// 헤더의 surface 메뉴 컨트롤
function surfaceMenuController(surface) {
    surface.style.display = 'block';
}


// 서브 메뉴 큰 카테고리 컨트롤
function subMenuChangeController(subMenu, notSub1, notSub2) { 
    notSub1.style.display = 'none';
    notSub2.style.display = 'none'; 
    subMenu.style.display = 'block';  
}

// 서브 메뉴 안의 세부 메뉴 버튼 컨트롤
function subMenuDetailChangeController(subDetailMenu) { 
    subDetailMenu.style.display = 'block';
}

// 메인 메뉴(마소 관련) 메뉴 컨트롤 
function mainMenuOnOff(mainMenu) {
    console.log(mainMenu)
    mainMenu.style.display = 'block';
}

// 메인 메뉴 세부 옵션 컨트롤
function mainMenuController(mainMenuOption) {
    console.log(mainMenuOption)
    mainMenuOption.style.display = 'block';
}

/**
 * 
 * @param {String} displayStatus 
 * 비디오 영역 내용 선택시 나오는 함수
 */
 function videoMenuChangeController(displayStatus, order) {
    const videoListPtag = document.querySelectorAll('#video-info-content ul li p');
    const videoListOrder = document.querySelector(`#video-info-content ul li:nth-child(${order+1}) p`);
   
    for(let i=0; i<videoListPtag.length; i++) {
        videoListPtag[i].style.display = 'none';
    }
    videoListOrder.style.display = displayStatus;
}

 // 프로그램 로고 클릭 시 이미지 전환
 function programChangeController(order) {
    const programList = document.querySelectorAll('#program-info > div > div');
    const logoList = document.querySelectorAll('#logo-wrap > div');
    const program = document.querySelector(`#program-info > div > div:nth-child(${order+1})`);
    const logo = document.querySelector(`#logo-wrap > div:nth-child(${order+1})`);
  
    for(let i=0; i<programList.length-1; i++) { 
        programList[i].style.display = 'none'; 
    }

    for(let i=0; i<logoList.length; i++) { 
        logoList[i].style.backgroundPosition = '50% 0%'; 
        logoList[i].style.display = 'block';
    }

    program.style.display = 'block';  
    logo.style.backgroundPosition = '50% 100%';
} 

// 헤더 surface 메뉴  
(function surfaceMenu(){
    const subMenu = document.querySelector('#sub-menu');
    const surfaceButton = document.querySelector('#surface > button');
    
    surfaceButton.addEventListener('click', () => surfaceMenuController(subMenu));
})();
  
// 서브 메뉴
(function subMenuChange() {
    const subMenu2 = document.querySelector('#sub-menu2 > div');
    const subMenu3 = document.querySelector('#sub-menu3 > div');
    const subMenu4 = document.querySelector('#sub-menu4 > div');

    const subMenuButton2 = document.querySelector('#sub-menu2 > button');
    const subMenuButton3 = document.querySelector('#sub-menu3 > button');
    const subMenuButton4 = document.querySelector('#sub-menu4 > button');

    subMenuButton2.addEventListener('click', () => subMenuChangeController(subMenu2, subMenu3, subMenu4)); 
    subMenuButton3.addEventListener('click', () => subMenuChangeController(subMenu3, subMenu2, subMenu4)); 
    subMenuButton4.addEventListener('click', () => subMenuChangeController(subMenu4, subMenu2, subMenu3)); 
})(); 

// 서브 메뉴의 세부 메뉴
(function subDetailSubMenuChange() {
    const sub2Twoinwon = document.querySelector('#sub-menu2 > div > ul > li:nth-child(1) > ul');
    const sub2Laptop = document.querySelector('#sub-menu2 > div > ul > li:nth-child(2) > ul');
    const sub3TwoinwonTable = document.querySelector('#sub-menu3 > div > ul > li:nth-child(1) > ul');
    const sub3Laptop = document.querySelector('#sub-menu3 > div > ul > li:nth-child(2) > ul');
    const sub3BigScreen = document.querySelector('#sub-menu3 > div > ul > li:nth-child(3) > ul');
    const sub3Support = document.querySelector('#sub-menu3 > div > ul > li:nth-child(4) > ul');

    const sub2TwoinwonButton = document.querySelector('#sub-menu2 > div > ul > li:nth-child(1) > button');
    const sub2LaptopButton = document.querySelector('#sub-menu2 > div > ul > li:nth-child(2) > button');
    const sub3TwoinwonTableButton = document.querySelector('#sub-menu3 > div > ul > li:nth-child(1) > button');
    const sub3LaptopButton = document.querySelector('#sub-menu3 > div > ul > li:nth-child(2) > button');
    const sub3BigScreenButton = document.querySelector('#sub-menu3 > div > ul > li:nth-child(3) > button');
    const sub3SupportButton = document.querySelector('#sub-menu3 > div > ul > li:nth-child(4) > button');
    
    sub2TwoinwonButton.addEventListener('click', ()=> subMenuDetailChangeController(sub2Twoinwon));
    sub2LaptopButton.addEventListener('click', ()=> subMenuDetailChangeController(sub2Laptop));
    sub3TwoinwonTableButton.addEventListener('click', ()=> subMenuDetailChangeController(sub3TwoinwonTable));
    sub3LaptopButton.addEventListener('click', ()=> subMenuDetailChangeController(sub3Laptop));
    sub3BigScreenButton.addEventListener('click', ()=> subMenuDetailChangeController(sub3BigScreen));
    sub3SupportButton.addEventListener('click', ()=> subMenuDetailChangeController(sub3Support));
})();

// 메인 메뉴
(function mainMenuDisplay() {
    const mainMenu = document.querySelector('#main-menu > nav');
    const mainMenuButton = document.querySelector('#main-menu');

    mainMenuButton.addEventListener('click', ()=> mainMenuOnOff(mainMenu));
    
})();
 
// 메인 메뉴의 세부 메뉴
(function mainMenuSubMenu() { 
    const mainMenuSoftware = document.querySelector('#main-menu > nav > ul > li:nth-child(2) > ul');
    const mainMenuPandD = document.querySelector('#main-menu > nav > ul > li:nth-child(3) > ul');
    const mainMenuEnter = document.querySelector('#main-menu > nav > ul > li:nth-child(4) > ul');
    const mainMenuBusiness = document.querySelector('#main-menu > nav > ul > li:nth-child(5) > ul');
    const mainMenuDevelop = document.querySelector('#main-menu > nav > ul > li:nth-child(6) > ul');
    const mainMenuEtc = document.querySelector('#main-menu > nav > ul > li:nth-child(7) > ul');

    const mainMenuSoftwareButton = document.querySelector('#main-menu > nav > ul > li:nth-child(2) > button');
    const mainMenuPandDButton = document.querySelector('#main-menu > nav > ul > li:nth-child(3) > button');
    const mainMenuEnterButton = document.querySelector('#main-menu > nav > ul > li:nth-child(4) > button');
    const mainMenuBusinessButton = document.querySelector('#main-menu > nav > ul > li:nth-child(5) > button');
    const mainMenuDevelopButton = document.querySelector('#main-menu > nav > ul > li:nth-child(6) > button');
    const mainMenuEtcButton = document.querySelector('#main-menu > nav > ul > li:nth-child(7) > button');

    mainMenuSoftwareButton.addEventListener('click', ()=> mainMenuController(mainMenuSoftware));
    mainMenuPandDButton.addEventListener('click', ()=> mainMenuController(mainMenuPandD));
    mainMenuEnterButton.addEventListener('click', ()=> mainMenuController(mainMenuEnter));
    mainMenuBusinessButton.addEventListener('click', ()=> mainMenuController(mainMenuBusiness));
    mainMenuDevelopButton.addEventListener('click', ()=> mainMenuController(mainMenuDevelop));
    mainMenuEtcButton.addEventListener('click', ()=> mainMenuController(mainMenuEtc)); 
})();

// 비디오 메뉴
(function videoMenu() {
    const videoList = document.querySelectorAll('#video-info-content ul li button')
  
    for(let i=0; i<videoList.length; i++) {
        videoList[i].addEventListener('click', function(){ 
            videoMenuChangeController('block', i);
        });
    }
})();
   
// 개요, 기술 사양 활성화 구역 클래스 추가
(function startScreenStyle() { 
    for(let i=0; i<outline.length; i++) {
        outline[i].classList.add('active');
    } 
    for(let i=0; i<techSpec.length; i++) {
        techSpec[i].classList.add('inactive');
    } 
})();
 

// 개요, 기술 사양 탭 전환 버튼 클릭 부분
outlineTap.addEventListener('click', function() {
    for(let i=0; i<outline.length; i++) { 
        outline[i].classList.replace('inactive', 'active');
    } 
    for(let j=0; j<techSpec.length; j++) { 
        techSpec[j].classList.replace('active', 'inactive');
    }
})

techSpecTap.addEventListener('click', function() {
    for(let i=0; i<techSpec.length; i++) { 
        techSpec[i].classList.replace('inactive', 'active');
    }  
    for(let j=0; j<outline.length; j++) { 
        outline[j].classList.replace('active', 'inactive');
    }
})
 
// 프로그램 로고 클릭 시 프로그램 이미지 변경
(function logoClickController() {
    const logoList = document.querySelectorAll('#logo-wrap > div');

    for(let i=0; i<logoList.length; i++) { 
        logoList[i].addEventListener('click', function() {  
            programChangeController(i);
        });
    }
})();

// 화면 스크롤 할 경우 개요/기술 사양 메뉴 부분 디자인 바꿔주는 역할
document.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('html').scrollTop;
    const contentWrap = document.getElementById('content-wrap');
 
    if(scrollTop >= 1040) { 
        contentWrap.className = 'content-design'
    } else {
        contentWrap.classList.remove('content-design');
    }
});

// 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type    : 'loop' 
});

splide.mount();  