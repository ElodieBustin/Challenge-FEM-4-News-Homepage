const btnHamburger = document.querySelector('#btnHamburger');
const menuElements = document.querySelector('#menuElements');

btnHamburger.addEventListener('click', ()=>{
  if(btnHamburger.classList.contains('open')){
    btnHamburger.classList.remove('open');
    menuElements.classList.remove('fade-in');
    menuElements.classList.add('fade-out');

  } else {
    btnHamburger.classList.add('open');
    menuElements.classList.remove('fade-out');
    menuElements.classList.add('fade-in');
  }

});