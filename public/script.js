var campoNome = document.getElementById("nome_campo").values;
var campoEmail = document.getElementById("nome_email").values;
var campoSugest = document.getElementById("sugestao_campo").values;

if(campoNome == "" || campoNome == " ") {
    console.log("Validação feita");
}

window.addEventListener('DOMContentLoaded', function () {
    const navPesquisaBotao = document.querySelector('.nav__botao')

    const nav = document.querySelector('.nav')

    window.addEventListener('scroll', function () {
        if (!window.scrollY) {
            nav.classList.remove('nav--scrolled')
        } else {
            nav.classList.add('nav--scrolled')
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