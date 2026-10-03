const btnMenu = document.getElementById('btn-menu');
const menuPrincipal = document.getElementById('menu-principal');

btnMenu.addEventListener('click', () => {
    menuPrincipal.classList.toggle('aberto');
    const icone = btnMenu.querySelector('i');
    if (menuPrincipal.classList.contains('aberto')) {
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-xmark');
    } else {
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});

menuPrincipal.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuPrincipal.classList.remove('aberto');
            const icone = btnMenu.querySelector('i');
            icone.classList.remove('fa-xmark');
            icone.classList.add('fa-bars');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuPrincipal.classList.remove('aberto');
        const icone = btnMenu.querySelector('i');
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});