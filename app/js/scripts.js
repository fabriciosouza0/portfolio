const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spacebetween: 20,
    lazy: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spacebetween: 0
        },

        576: {
            slidesPerView: 2,
            spacebetween: 0
        },

        768: {
            slidesPerView: 3,
            spacebetween: 0
        }
    }
});

const menu = document.getElementById('menu');
const nav = document.getElementById('menu_opts');

function toggleMenu() {
    nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
    menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active');
}

menu.addEventListener('click', toggleMenu);