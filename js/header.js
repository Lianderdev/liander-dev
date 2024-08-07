// Menu
const buttonMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('header .container nav ul');
const buttonEnviarMensagem = document.querySelector('.enviar-mensagem');
const body = document.querySelector('body');
const main = document.querySelector('body');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-active');
    main.classList.add('overlay-geral')

    const lines = document.querySelectorAll('header .container .button-menu-mobile .line');
    lines.forEach(line => {
        line.classList.toggle('menu-active')
    });

    if (menu.classList.contains('menu-mobile-active')) {
        body.style.overflow = 'hidden';
        main.style.diplay = 'block'
    } else {
        body.style.overflowY = 'auto';
        body.classList.add('overlay-geral')
    }

    const links = document.querySelector('.links');
    links.addEventListener('click', () => {
        menu.classList.remove('menu-mobile-active');
        body.style.overflow = 'auto';
        lines.forEach(line => line.classList.remove('menu-active'));
    });
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        navLinks.forEach(nav => nav.classList.remove("active"));

        event.currentTarget.classList.add("active");
    });
});

