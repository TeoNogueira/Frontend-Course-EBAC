
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
            // transition: '0.5s',
            opacity: '0.5',
         
            // opacity: 'toggle'                    

        })

    }


    /*
    * Ouvinte de eventos .nav
     */

    $('.nav-modal-open').on('click', function(e) {

        e.preventDefault();

        let elem = $(this).attr('rel'); 
        // $('.modal-body').html($('#'+elem).html()) 
        $('.modal-body').html($('#'+elem).html())

        $('.modal-header h5.modal-title ').html($(this).text)

        let myModal = new bootstrap.Modal($('#modelId'))

            myModal.show()       
    });

    
    // about

  

})




$('body').on('submit', '.modal-body .form', function(e) {

    e.preventDefault();


    const inputName = $('#nome')
    const inputEmail = $('#email')


    //name
    if(inputName.val() == '') {

        console.log('O campo Nome é obrigatório!');


        inputName.addClass('invalid')

        return false
    }

    // email

    if( inputEmail.val() == '') {

        console.log('O campo Email é obrigatório!');


        inputEmail.addClass('invalid')

        return false
    }


//BLUR SECTION

    $('body').on('blur', '#nome', function() {

        //name
    if($(this).val() == '') {

        console.log('O campo Nome é obrigatório!');


        $(this).addClass('invalid')

        return false
    }

    })

    // blur email

    $('body').on('blur', '#nome', function() {

        //name
    if($(this).val() == '') {

        console.log('O campo Email é obrigatório!');


        $(this).addClass('invalid')

        return false
    }

    })

})