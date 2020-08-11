let slide = document.querySelector('.intro_button_scroll');
let height = document.documentElement.clientHeight

slide.addEventListener('click', function () {
    window.scrollTo(0, height);
});