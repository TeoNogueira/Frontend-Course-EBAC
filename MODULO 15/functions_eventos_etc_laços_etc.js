

function calcMedia( notas) {


    var soma = 0

    for( c = 0; c < notas.length; c++) {


        soma += notas[c];

    }

    media = soma / notas.length;


    return media
}


let media

//  aprovação ou reprovação

function aprovacao(notas) {


let media =  calcMedia(notas);

let condicao = media >= 8 ? 'Aprovado' : 'Reprovado'

return 'Média: ' + media + ' - Resultado: ' + condicao;

}

// function recursiva(numero) {

//     console.log(numero)
    
//   let proximoNumero = -1

//   if(proximoNumero > 0) 
  
//   contagemRegressiva(proximoNumero)

//     }
    
    
//     contagemRegressiva(10)


// EVENTOS:

// GERAR CALCULO DA MEDIA COM NOME

const formulario = document.getElementById('formulario')

if(formulario)

 formulario.document.getElementById('formulario').addEventListener('submit', function(event) {

event.preventDefault()

event.stopPropagation()

if(this.getAttribute('class').match(/erro/)) {

    return false
}


let dados = new FormData(this)

let notas = [];

for(let key of dados.keys()) {

    let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número;

    if(typeof numero == 'number ') {

        notas.push(numero);
        // notas.push(parseInt(dados.get(key)));
    }

 

}


console.log(notas)

console.log()

let text = aprovacao(notas)

document.getElementById('resultado').innerHTML = texto;

// console.log(objetos)

// document.getElementById('resultado').innerHTML = aprovacao(notas)

})


function validaCampo(elemento) {

elemento.addEventListener('focusout', function(event){


event.preventDefault();

if(this.value == "") {

document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho"

this.classList.add('erro');
this.parentNode.classList.add('erro');

return false;

} else {
    document.querySelector('.mensagem').innerHTML = "";
    this.classList.remove('erro');
    this.parentNode.classList.remove('erro');


}




})



}





// console.log(aprovacao([5, 8, 7]))


// console.log(aprovacao([5, 8, 7, 8]))



// console.log("Média " + calcMedia([8, 8]))

// console.log(aprovacao(calcMedia([8, 8])))

// console.log("Média " + calcMedia([5, 7]))

// console.log(aprovacao(calcMedia([7, 7])))


// const aprovadoOuReprovado = aprovacao(5)

// const resultado = `${aprovadoOuReprovado} ${calcMedia([5, 5])}`

// console.log(resultado)