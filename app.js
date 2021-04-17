const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navTipke = document.querySelector('.navtipke');
const navTipke2 = document.querySelector('.navtipke2');
const navTipke3 = document.querySelector('.navtipke3');
const navTipke4 = document.querySelector('.navtipke4');
const navTipke5 = document.querySelector('.navtipke5');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navTipke.addEventListener('click', function () {
    var node = this;
    setTimeout(function() {
        mainMenu.style.top = '-200%';
    }, 600)
});
navTipke2.addEventListener('click', function () {
    var node = this;
    setTimeout(function() {
        mainMenu.style.top = '-200%';
    }, 600)
});
navTipke3.addEventListener('click', function () {
    var node = this;
    setTimeout(function() {
        mainMenu.style.top = '-200%';
    }, 600)
});
navTipke4.addEventListener('click', function () {
    var node = this;
    setTimeout(function() {
        mainMenu.style.top = '-200%';
    }, 600)
});
navTipke5.addEventListener('click', function () {
    var node = this;
    setTimeout(function() {
        mainMenu.style.top = '-200%';
    }, 600)
});


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}


function close(){
    mainMenu.style.top = '-200%';
}
