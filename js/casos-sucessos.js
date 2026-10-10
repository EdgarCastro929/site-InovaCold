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

/* ===== CARROSSEL GENÉRICO (funciona em todos os .galeria) ===== */
function iniciarCarrossel(container) {
    const slides      = container.querySelectorAll('.slide');
    const indicadores = container.querySelectorAll('.indicadores span');
    const btnAnterior = container.querySelector('.seta.esquerda');
    const btnProximo  = container.querySelector('.seta.direita');

    if (!slides.length || !btnAnterior || !btnProximo) return;

    let atual = 0;
    let autoplay;

    function mostrar(indice) {
        slides.forEach(s => s.classList.remove('ativo'));
        indicadores.forEach(i => i.classList.remove('ativo'));
        atual = (indice + slides.length) % slides.length;
        slides[atual].classList.add('ativo');
        if (indicadores[atual]) indicadores[atual].classList.add('ativo');
    }

    btnProximo.addEventListener('click', () => { mostrar(atual + 1); reiniciar(); });
    btnAnterior.addEventListener('click', () => { mostrar(atual - 1); reiniciar(); });

    indicadores.forEach(b => b.addEventListener('click', () => {
        mostrar(parseInt(b.dataset.slide));
        reiniciar();
    }));

    function iniciar() { autoplay = setInterval(() => mostrar(atual + 1), 5000); }
    function reiniciar() { clearInterval(autoplay); iniciar(); }

    iniciar();
}

/* Inicia TODOS os carrosséis da página */
document.querySelectorAll('.galeria').forEach(iniciarCarrossel);