
// instancia jQuery e evita conflitos;

$(document).ready(function($){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // selecionar tag
    let itens = $('.featured-item') // '' '' class
    let destaques = $('#featured') // '' '' id
    console.log(titulos.first())

//  let line = $('.line-dec')
//     $('.featured-item a').addClass('btn btn-dark stretch-link');
//     $('.section-heading h1').addClass('active-h1');
       $('.featured-item:first a').click(function(){

        $(this).css({

            'color': '#ff0',
            // 'background': '#ff0',
            'font-weight': '100',
        })

       }) 

})


$('h4').text('Bem-vindo a loja')

// hide
// show()
//fadeIn(2000) transiçao/entrada
//fadeOut()     ''/saida

// $('.featured-item a').css('color', '#fafafa')
/* $('.featured-item a').css({
'color': '#fff',
'background': '#bbbbaa',
instancia por objeto
})*/