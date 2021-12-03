
// instacia jQuery e evita conflitos;

$(document).ready(function($){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // selecionar tag
    let itens = $('.featured-item') // '' '' class
    let destaques = $('#featured') // '' '' id

    console.log(titulos.first())
})


$('h4').text('Bem-vindo a loja')