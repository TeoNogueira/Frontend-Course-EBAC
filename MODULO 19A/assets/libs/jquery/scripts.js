
// instancia jQuery e evita conflitos;

$(document).ready(function($){

    $('.owl-carousel').owlCarousel() ;

    let titulos = $('h4') // selecionar tag
    let itens = $('.featured-item') // '' '' class
    let destaques = $('#featured') // '' '' id
    // console.log(titulos.first())

//  let line = $('.line-dec')
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    $('.section-heading h1').addClass('active-h1');
       $('.featured-item a').click(function(){

        $(this).css({

            'color': '#ff0',
            // 'background': '#ff0',
            'font-weight': '100',
        })

       }) 






// const duracao = 2000


// // ANIMAÇÕES

// $('.featured-item:nth(1)')
// .hide(duracao)
// .show(duracao)
// .fadeOut(duracao)
// .fadeIn(duracao)
// .toggle(duracao)
// .toggle(duracao)


});


$('#form-submit').on('click', function(evt) {


    evt.preventDefault();

    if($('#email').val() != '')
    {
        evt.preventDefault();
        $('#email').animate({
            transition: '0.5s',
            opacity: '0.5',
         
            // opacity: 'toggle'           
          

        })

    }


})