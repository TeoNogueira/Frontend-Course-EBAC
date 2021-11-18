

function calcMedia( notas) {


    var soma = 0

    for( c = 0; c < notas.length; c++) {


        soma += notas[c];

    }

    media = soma / notas.length;


    return media
}

//  aprovação ou reprovação

function aprovacao(media) {

let condicao = media >= 7 ? 'Aprovado' : 'Reprovado'

return condicao

}



const aprovadoOuReprovado = aprovacao(5)

const resultado = `${aprovadoOuReprovado} ${calcMedia([5, 5])}`

console.log(resultado)


