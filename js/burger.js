let burger = document.querySelector('.burger');
let burgerWraper = document.querySelector('.burger_menu_wraper');
let menu = document.querySelector('.burger_menu');
let socialMenu = document.querySelector('.burger_social');

burger.addEventListener('click', function () {
    burgerWraper.classList.toggle('burger_position');
    menu.classList.toggle('burger_menu_display');
    menu.classList.toggle('burger_close');
    socialMenu.classList.toggle('burger_menu_display');
    socialMenu.classList.toggle('burger_close');
});