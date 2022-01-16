const outlineTap = document.getElementById('outline-tap');
const techSpecTap = document.getElementById('tech-spec-tap'); 
const outline = document.getElementsByClassName('outline');
const techSpec = document.getElementsByClassName('tech-spec'); 
const screenWidth = window.innerWidth;
  

// 메인 메뉴 외 부분 선택시 메인 메뉴 숨김
function mainMenuOnOff() {
    const mainMenu = document.querySelector('#main-menu > nav');
    const mainMenuOptionList = document.querySelectorAll('#main-menu > nav > ul > li > ul');

    mainMenu.style.display = 'none'; 

    if(screenWidth <= 859) {
        for(let i = 0; i < mainMenuOptionList.length-1; i++) { 
            mainMenuOptionList[i + 1].style.display = 'none';
        } 
    } 
}

// 서브 메뉴 외 부분 선택시 메인 메뉴 숨김
function subMenuOnOff() {
    const subMenu = document.querySelector('#sub-menu');
    const subMenuOptionList = document.querySelectorAll('#sub-menu li > div > div');
    const sub2OptionList = document.querySelectorAll(`#sub-menu2 > div > ul > li > ul`);
    const sub3OptionList = document.querySelectorAll(`#sub-menu3 > div > ul > li > ul`); 
    
    if(screenWidth <= 859) {
        subMenu.style.display = 'none'; 

        for(let i = 0; i < sub2OptionList.length; i++) { 
            sub2OptionList[i].style.display = 'none';
        }
        for(let i = 0; i < sub3OptionList.length; i++) { 
            sub3OptionList[i].style.display = 'none';
        }
    } 

    for(let i = 0; i < subMenuOptionList.length; i++) { 
        subMenuOptionList[i].style.display = 'none';
    } 
    
}

// 서브 메뉴 큰 카테고리 컨트롤
function subMenuChangeController(subMenu, notSub1, notSub2) { 
    notSub1.style.display = 'none';
    notSub2.style.display = 'none'; 
    subMenu.style.display = 'block';  
}

// 서브 메뉴 안의 세부 메뉴 버튼 컨트롤
function subMenuDetailChangeController(subMenuOption, subOptionOrder) { 
    if(subMenuOption !== 'sub2' && subMenuOption !== 'sub3') {
        throw new Error("subMenuOption not exiteds");
    }

    if(subMenuOption === 'sub2') {
        const sub2OptionList = document.querySelector(`#sub-menu2 > div > ul > li:nth-child(${subOptionOrder + 1}) > ul`);   
        sub2OptionList.style.display = ((sub2OptionList.style.display !== 'none') ? 'none' : 'block');  
    } else if(subMenuOption === 'sub3') {
        const sub3OptionList = document.querySelector(`#sub-menu3 > div > ul > li:nth-child(${subOptionOrder + 1}) > ul`);  
        sub3OptionList.style.display = ((sub3OptionList.style.display !== 'none') ? 'none' : 'block'); 
    } 
}
 
// 메인 메뉴 세부 옵션 컨트롤
function mainMenuController(mainMenuOptionOrder) { 
    const mainMenuOptionList = document.querySelector(`#main-menu > nav > ul > li:nth-child(${mainMenuOptionOrder + 2}) > ul`);
    mainMenuOptionList.style.display = 'block';
}

/**
 * 
 * @param {String} displayStatus 
 * 비디오 영역 내용 선택시 나오는 함수
 */
 function videoMenuChangeController(displayStatus, order) {
    const videoListPtag = document.querySelectorAll('#video-info-content ul li p');
    const videoListOrder = document.querySelector(`#video-info-content ul li:nth-child(${order+1}) p`);
   
    for(let i = 0; i < videoListPtag.length; i++) {
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
  
    for(let i = 0; i < programList.length-1; i++) { 
        programList[i].style.display = 'none'; 
    }

    for(let i = 0; i < logoList.length; i++) { 
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
    
    surfaceButton.addEventListener('click', () => subMenu.style.display = 'block');
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
    const subMenu2Button = document.querySelectorAll('#sub-menu2 > div > ul > li > button');
    const subMenu3Button = document.querySelectorAll('#sub-menu3 > div > ul > li > button');
    
    for(let i = 0; i < subMenu2Button.length; i++) {
        subMenu2Button[i].addEventListener('click', ()=> subMenuDetailChangeController('sub2', i)); 
    }   
    for(let i = 0; i < subMenu3Button.length; i++) {
        subMenu3Button[i].addEventListener('click', ()=> subMenuDetailChangeController('sub3', i)); 
    }  
})();

// 메인 메뉴
(function mainMenuDisplay() {
    const mainMenu = document.querySelector('#main-menu > nav');
    const mainMenuButton = document.querySelector('#main-menu');
    mainMenuButton.addEventListener('click', ()=> mainMenu.style.display = 'block');
    
})();
 
// 메인 메뉴의 세부 메뉴
(function mainMenuSubMenu() {   
    const mainMenuButton = document.querySelectorAll('#main-menu > nav > ul > li > button');
    for(let i = 0; i < mainMenuButton.length; i++) {
        mainMenuButton[i].addEventListener('click', ()=> mainMenuController(i)); 
    } 
})();

// 비디오 메뉴
(function videoMenu() {
    const videoList = document.querySelectorAll('#video-info-content ul li button')
  
    for(let i = 0; i < videoList.length; i++) {
        videoList[i].addEventListener('click', function(){ 
            videoMenuChangeController('block', i);
        });
    }
})();
   
// 개요, 기술 사양 활성화 구역 클래스 추가
(function startScreenStyle() { 
    for(let i = 0; i < outline.length; i++) {
        outline[i].classList.add('active');
    } 
    for(let i = 0; i < techSpec.length; i++) {
        techSpec[i].classList.add('inactive');
    } 
})();
 

// 개요, 기술 사양 탭 전환 버튼 클릭 부분
outlineTap.addEventListener('click', function() {
    for(let i = 0; i < outline.length; i++) { 
        outline[i].classList.replace('inactive', 'active');
    } 
    for(let j = 0; j < techSpec.length; j++) { 
        techSpec[j].classList.replace('active', 'inactive');
    }
});

techSpecTap.addEventListener('click', function() {
    for(let i = 0; i < techSpec.length; i++) { 
        techSpec[i].classList.replace('inactive', 'active');
    }  
    for(let j = 0; j < outline.length; j++) { 
        outline[j].classList.replace('active', 'inactive');
    }
});
 
// 프로그램 로고 클릭 시 프로그램 이미지 변경
(function logoClickController() {
    const logoList = document.querySelectorAll('#logo-wrap > div');
    for(let i = 0; i < logoList.length; i++) {  
        logoList[i].addEventListener('click', function() { 
            programChangeController(i);
        });
    }
})();

// logoClickController();

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
 
// 메인/서브 메뉴 외 엘리먼트 선택시 메뉴 숨기는 함수
window.addEventListener('click', (e)=> {  
    if(!e.target.closest('#main-menu')) { 
        mainMenuOnOff();
    }  
    if(!e.target.closest('#sub-menu') && !e.target.closest('#surface > button')) { 
        subMenuOnOff();
    } 
});

// 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type: 'loop' 
});

splide.mount();  