

//Exercicio


// 10 + 15 = 25
// "10" + 2 = 102 
// "10" * 2 = 20 
// "10" / 3 = 3.3333333333333335
// "10" % 3 = 1
//  10 + true = 11
//  10 == "10" = true
// 10 === "10" = false

// 10 < 11 = true
// 10 > 12 = false
//  10 <= 10.1 = true

// 10 > 9.99 = true
// 10 !="dez" = true

// 10 + true = 11
// 10 + false = 10
//  10 * false = 0
// 10 + true = 11
// "dez" + true = deztrue

// true + true = 2
// 10++ = "erro" porém um incremento e tipo number

// 10-- = "erro" porém um decremento e tipo number

// 1 & 1 = 1
// 1 & 0 = 0

// 0 & 0 = 0
// 1 & 0 = 0

// 0 / 1 = 0
//5 + 5 == 10 = true

// "5" + "5" == 10 = false
// "5" * 2 > 9 = true
// (10 + 10) * 2 = 40

// 10 + 10 * 2 = 30



// a) branco == “branco” true
// b) branco == cinza false
// c) carro === branco true
// d) var cavalo = carro == “preto” ? “cinza” : “marron”; << resposta = "cinza"
// e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada 
// de 3.000? Demonstre a operação. << resolver
// f) Somando as variáveis de cores é formada uma string de quantos caracteres? RESPOSTA: 15 CARACTERES.



var branco = "preto"; 
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

var cavalo  = carro == "preto" ? "cinza" : "marron";


// console.log(cavalo)

// console.log(10 + 10 * 2)


let totalDepoisDaEntradaDeDezPorcento = 27000

let parcelaValor = 750

let total = totalDepoisDaEntradaDeDezPorcento / parcelaValor

// RESULTADO: 36 PARCELAS DE 750


function mostrarTotal() {


return  document.getElementById("parcelas").innerHTML = `Resultado: Você irá pagar o valor de ${total} parcelas de R$ 750,00 sem juros`

}


mostrarTotal()