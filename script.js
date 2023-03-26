
// 로그인 박스에 대해서 기능 추가
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// 
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// 상단 로그인 버튼 클릭시 로그인창 팝업 기능
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});


// 로그인창 X아이콘 클릭시 팝업창 사라짐
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
