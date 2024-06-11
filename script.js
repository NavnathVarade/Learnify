let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Function to initialize Swiper with common settings
function initializeSwiper(selector) {
    new Swiper(selector, {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// Initialize Swipers
initializeSwiper(".course-slider");
initializeSwiper(".instructors-slider");
initializeSwiper(".reviews-slider");
