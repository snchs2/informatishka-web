const iconMenu = document.querySelector('.header_burger');
if (iconMenu) {
    const menuBody = document.querySelector('.menu_body');
    const Body = document.querySelector('.body');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        Body.classList.toggle('_lock');
    });
}


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    });
}
// переход в раздел о проекте
var a_about_project = document.querySelector('#a_about_project');
var about_project = document.querySelector('.about_project');
a_about_project.addEventListener('click', () => {
    scrollTo(about_project);
    const Body = document.querySelector('.body');
    const menuBody = document.querySelector('.menu_body');
    Body.classList.remove('_lock');
    menuBody.classList.remove('_active');
})

// переход в раздел главная
var a_main = document.querySelector('#a_main');
var main = document.querySelector('.main');
a_main.addEventListener('click', () => {
    scrollTo(main);
    const Body = document.querySelector('.body');
    const menuBody = document.querySelector('.menu_body');
    Body.classList.remove('_lock');
    menuBody.classList.remove('_active');
})