let ubicacionInicial = window.pageYOffset;
window.onscroll = function () {
    let desplazamiento = window.pageYOffset;
    if (ubicacionInicial >= desplazamiento) {
        this.document.querySelector('header').style.top = '0px';
    } else {
        this.document.querySelector('header').style.top = '-100px';
    }
    ubicacionInicial = desplazamiento;
}