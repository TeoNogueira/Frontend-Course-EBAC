

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

document.addEventListener('submit', (event) => {

event.preventDefault()

event.stopPropagation()

let formulario = document.getElementById('formulario');


let dados = new FormData(formulario)


let objetos = {};

let notas = [];

for(let key of dados.keys()) {

    objetos[key] = dados.get(key)

    notas.push(parseInt(dados.get(key)));

}


console.log(notas)

console.log(objetos)

document.getElementById('resultado').innerHTML = aprovacao(notas)

console.log(aprovacao(notas))

})








// console.log(aprovacao([5, 8, 7]))


// console.log(aprovacao([5, 8, 7, 8]))



// console.log("Média " + calcMedia([8, 8]))

// console.log(aprovacao(calcMedia([8, 8])))

// console.log("Média " + calcMedia([5, 7]))

// console.log(aprovacao(calcMedia([7, 7])))


// const aprovadoOuReprovado = aprovacao(5)

// const resultado = `${aprovadoOuReprovado} ${calcMedia([5, 5])}`

// console.log(resultado)