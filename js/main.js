const burger = document.querySelector('.nav-burger')
const menu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
 menu.classList.toggle('active')
})

window.addEventListener('scroll', () => {

 nav.classList.toggle('active', window.scrollY > 0)

 if(window.pageYOffset > 300) {
  toTop.classList.add('active')
 } else {
  toTop.classList.remove('active')
 }

})


let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
 let currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
  nav.classList.remove('hide') 
 } else {
  nav.classList.add('hide')
 }
 prevScrollpos = currentScrollPos;
})