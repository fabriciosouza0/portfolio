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

        992: {
            slidesPerView: 3,
            spacebetween: 0
        }
    }
});

const go = (elem) => {
    window.scroll({
        top: document.querySelector(elem).offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

const menu = document.getElementById('menu');
const nav = document.getElementById('menu_opts');

const toggleMenu = () => {
    nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
    menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active');
}

const targets = document.querySelectorAll('.lazy');

const lazy = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('pop-in');

                observer.disconnect();
            }
        });
    });

    io.observe(target);
}

targets.forEach(lazy);

menu.addEventListener('click', toggleMenu);