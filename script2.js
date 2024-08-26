document.addEventListener('DOMContentLoaded', () => {

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('animated');
            }
        });
    };

 
    window.addEventListener('scroll', animateOnScroll);


    animateOnScroll();


    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.nav-menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const calculoLinks = document.querySelectorAll('.calculo-link');
    calculoLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#FFC107';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '#FFCC00';
        });
    });
});
