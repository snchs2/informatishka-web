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