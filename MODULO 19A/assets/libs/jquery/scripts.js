
// instancia jQuery e evita conflitos;

$(document).ready(function($){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // selecionar tag
    let itens = $('.featured-item') // '' '' class
    let destaques = $('#featured') // '' '' id
    // console.log(titulos.first())

//  let line = $('.line-dec')
    $('.featured-item a').addClass('btn btn-dark stretch-link');
//     $('.section-heading h1').addClass('active-h1');
       $('.featured-item a').click(function(){

        $(this).css({

            'color': '#ff0',
            // 'background': '#ff0',
            'font-weight': '100',
        })

       }) 




// $('h4').text('Bem-vindo a loja')


//manipulação de evento


// $('.featured-item: ').on('click', function(event) {

//     event.preventDefault();

//     alert('Produto esgotado');
// });




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



// CALLBACKS:
/*
Entendendo ações que começam ao termino de outro
*/

// $('.featured-item:nth(0)').hide(2000, function() {

// //callback

// console.log($(this).find('h4').text() + ' esgotado') 
// })
// .show(2000, function() {

//     console.log($(this).find('h4').text() + ' Em estoque!') 

// })



const duracao = 2000


// ANIMAÇÕES

$('.featured-item:nth(1)')
.hide(duracao)
.show(duracao)
.fadeOut(duracao)
.fadeIn(duracao)
// .toggle(duracao)
// .toggle(duracao)




$('#form-submit').on('click', function(evt) {


    evt.preventDefault();

    if($('#email').val() != '')
    {

        $('#email').animate({
            transition: '0.5s',
            opacity: '0',
         
            // opacity: 'toggle',
            
          

        })

    }


})


});