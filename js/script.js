// бургер
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

// функция smooth scroll
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

// переход в раздел функционал
var a_functional = document.querySelector('#a_functional');
var functional = document.querySelector('.functional');
a_functional.addEventListener('click', () => {
    scrollTo(functional);
    const Body = document.querySelector('.body');
    const menuBody = document.querySelector('.menu_body');
    Body.classList.remove('_lock');
    menuBody.classList.remove('_active');
})

// переход в раздел скриншоты
var a_screenshots = document.querySelector('#a_screenshots');
var screenshots = document.querySelector('.screenshots');
a_screenshots.addEventListener('click', () => {
    scrollTo(screenshots);
    const Body = document.querySelector('.body');
    const menuBody = document.querySelector('.menu_body');
    Body.classList.remove('_lock');
    menuBody.classList.remove('_active');
})


// анимация счетчика статистики

// для первой статистики

var number = document.querySelector('.num_stat_text'),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
            number.innerHTML = ++start;
            if (start == end) {
                clearInterval(interval);
            }
        }, 5);
    }
});

// для второй статистики

var number2 = document.querySelector('.num_stat_text2'),
    numberTop2 = number2.getBoundingClientRect().top,
    start2 = +number2.innerHTML,
    end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop2 - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
            number2.innerHTML = ++start2;
            if (start2 == end2) {
                clearInterval(interval);
            }
        }, 5);
    }
});

// для третьей статистики

var number3 = document.querySelector('.num_stat_text3'),
    numberTop3 = number3.getBoundingClientRect().top,
    start3 = +number3.innerHTML,
    end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop3 - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
            number3.innerHTML = ++start3;
            if (start3 == end3) {
                clearInterval(interval);
            }
        }, 5);
    }
});



// --------
new Gallery(document.getElementById("gallery"), { margin: 10 });