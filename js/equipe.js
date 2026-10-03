
/* ===== MENU HAMBÚRGUER ===== */
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

/* ===== CARROSSEL ===== */
const slides = document.querySelectorAll('#carrocel .slide');
const indicadores = document.querySelectorAll('#carrocel .indicadores span');
const btnAnterior = document.querySelector('#carrocel .seta.esquerda');
const btnProximo  = document.querySelector('#carrocel .seta.direita');
let slideAtual = 0;
let autoplay;

function mostrarSlide(indice) {
    // Remove ativo de todos
    slides.forEach(s => s.classList.remove('ativo'));
    indicadores.forEach(i => i.classList.remove('ativo'));

    // Garante índice válido
    slideAtual = (indice + slides.length) % slides.length;

    slides[slideAtual].classList.add('ativo');
    indicadores[slideAtual].classList.add('ativo');
}

function proximoSlide() { mostrarSlide(slideAtual + 1); }
function slideAnterior() { mostrarSlide(slideAtual - 1); }

btnProximo.addEventListener('click', () => {
    proximoSlide();
    reiniciarAutoplay();
});
btnAnterior.addEventListener('click', () => {
    slideAnterior();
    reiniciarAutoplay();
});

indicadores.forEach(bolinha => {
    bolinha.addEventListener('click', () => {
        mostrarSlide(parseInt(bolinha.dataset.slide));
        reiniciarAutoplay();
    });
});

function iniciarAutoplay() {
    autoplay = setInterval(proximoSlide, 5000);
}
function reiniciarAutoplay() {
    clearInterval(autoplay);
    iniciarAutoplay();
}

iniciarAutoplay();