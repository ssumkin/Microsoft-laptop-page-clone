const outlineTap = document.getElementById('outline-tap');
const techSpecTap = document.getElementById('tech-spec-tap'); 
const outline = document.getElementsByClassName('outline');
const techSpec = document.getElementsByClassName('tech-spec');
const subMenu2 = document.querySelector('#sub-menu2 > div');
const subMenu3 = document.querySelector('#sub-menu3 > div');
const subMenu4 = document.querySelector('#sub-menu4 > div');
const subMenuButton2 = document.querySelector('#sub-menu2 > button');
const subMenuButton3 = document.querySelector('#sub-menu3 > button');
const subMenuButton4 = document.querySelector('#sub-menu4 > button');
const mLogo = document.getElementById('m-logo');
const fLogo = document.getElementById('f-logo');
const nLogo = document.getElementById('n-logo');
const aLogo = document.getElementById('a-logo');


/**
 * 메뉴 창 활성화 부분
 * @param {String} subMenu
 */
function subMenuChangeController(subMenu, notSub1, notSub2) { 
    notSub1.style.display = 'none';
    notSub2.style.display = 'none'; 
    subMenu.style.display = 'inline-block';  
}

/**
 * 프로그램 로고 선택 시 이미지 변경 되는 부분
 * @param {String} subMenu
 */
 function programChangeController(logoStatus) {
    if (logoStatus !== mLogo && logoStatus !== fLogo && logoStatus !== nLogo && logoStatus !== aLogo) {
        throw new Error('logo type not exiteds');
    }
 
    const minecraft = document.getElementById('minecraft');
    const flipgrid = document.getElementById('flipgrid');
    const netflix = document.getElementById('netflix');         
    const adobeSpark = document.getElementById('adobe-spark');      
     
    if (logoStatus !== mLogo) {
        mLogo.style.backgroundPosition = '50% 0%';
        minecraft.style.display = 'none';
    }
    if (logoStatus !== fLogo) {
        fLogo.style.backgroundPosition = '50% 0%';
        flipgrid.style.display = 'none';
    }
    if (logoStatus !== nLogo) {
        nLogo.style.backgroundPosition = '50% 0%';
        netflix.style.display = 'none';
    }
    if (logoStatus !== aLogo) {
        aLogo.style.backgroundPosition = '50% 0%';
        adobeSpark.style.display = 'none';
    }

    if(logoStatus === mLogo) minecraft.style.display = 'block';
    if(logoStatus === fLogo) flipgrid.style.display = 'block';
    if(logoStatus === nLogo) netflix.style.display = 'block';
    if(logoStatus === aLogo) adobeSpark.style.display = 'block';
    logoStatus.style.backgroundPosition = '50% 100%';
}

// 개요, 기술 사양 활성화 구역 클래스 추가
function startScreenStyle() { 
    for(let i=0; i<outline.length; i++) {
        outline[i].classList.add('active');
    } 
    for(let i=0; i<techSpec.length; i++) {
        techSpec[i].classList.add('inactive');
    } 
}

startScreenStyle();

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

// subMenu 선택 시 메뉴 창 나오도록
subMenuButton2.addEventListener('click', () => subMenuChangeController(subMenu2, subMenu3, subMenu4)); 
subMenuButton3.addEventListener('click', () => subMenuChangeController(subMenu3, subMenu2, subMenu4)); 
subMenuButton4.addEventListener('click', () => subMenuChangeController(subMenu4, subMenu2, subMenu3)); 

// 프로그램 변경 클릭
mLogo.addEventListener('click', function() { 
    programChangeController(mLogo);
});
fLogo.addEventListener('click', function() {
    programChangeController(fLogo);
});
nLogo.addEventListener('click', function() {
    programChangeController(nLogo);
});
aLogo.addEventListener('click', function() {
    programChangeController(aLogo);
});
 
// 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type    : 'loop' 
});
splide.mount(); 