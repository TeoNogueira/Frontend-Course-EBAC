

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


console.log(aprovacao([5, 8, 7]))


console.log(aprovacao([5, 8, 7, 8]))



// console.log("Média " + calcMedia([8, 8]))

// console.log(aprovacao(calcMedia([8, 8])))

// console.log("Média " + calcMedia([5, 7]))

// console.log(aprovacao(calcMedia([7, 7])))


// const aprovadoOuReprovado = aprovacao(5)

// const resultado = `${aprovadoOuReprovado} ${calcMedia([5, 5])}`

// console.log(resultado)


