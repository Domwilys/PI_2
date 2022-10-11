window.addEventListener('DOMContentLoaded', function () {
    const navPesquisaBotao = document.querySelector('.nav__botao')

    const nav = document.querySelector('.nav')
    const logo = document.getElementById("logo_site");

    window.addEventListener('scroll', function () {
        if (!window.scrollY) {
            nav.classList.remove('nav--scrolled')
            logo.src = "logo_nav_branco.png"
            logo.style.marginTop = "-25px"
        } else {
            nav.classList.add('nav--scrolled')
            logo.src = "logo_preto.png"
            logo.style.marginTop = "25px"
        }
    })

    navPesquisaBotao.addEventListener('click', function () {
        const navPesquisaBotaoSpan = document.querySelector('.nav__botao span')
        const navPesquisa = document.querySelector('.nav__pesquisa')
        if (navPesquisa.style.display == 'flex') {
            navPesquisaBotaoSpan.innerText = 'search'
            navPesquisa.style.display = 'none'
        } else {
            navPesquisaBotaoSpan.innerText = 'close'
            navPesquisa.style.display = 'flex'
        }
    })
})