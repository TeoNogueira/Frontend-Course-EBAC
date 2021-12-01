
function calcMedia( notas) {
  
    let soma = 0

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

function recursiva(numero) {

    console.log(numero)
    
  let proximoNumero = numero -1

  if(proximoNumero > 0) 
  
  recursiva(proximoNumero)

    }
    
    
//     contagemRegressiva(10)


// EVENTOS:

// GERAR CALCULO DA MEDIA COM NOME

const formulario = document.getElementById('formulario')

if(formulario)

 formulario.addEventListener('submit', function(event) {

event.preventDefault()

event.stopPropagation()

if(this.getAttribute('class').match(/erro/)) {

    return false
}


let dados = new FormData(this)

let notas = [];

for(let key of dados.keys()) {

    let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número;

    if(!isNaN(numero)) {

        notas.push(numero);
      
    }

}


console.log(notas)

texto = aprovacao(notas)

document.getElementById('resultado').innerHTML = texto;



})


 function validaCampo(elemento) {

elemento.addEventListener('focusout', function(event) {

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

};

});

};

 function validaCampoNumerico(elemento) {

    elemento.addEventListener('focusout', function(event) {

event.preventDefault()


    let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

    if(numero != "" && numero.match(/[0-9]*/)  && numero >= 0 && numero <= 10) {


        document.querySelector('.mensagem').innerHTML = "";

        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');



    } else {

        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";

        this.classList.add('erro');

        this.parentNode.classList.add('erro');

        return false;

    }
});

}


function validaEmail(elemento) {


elemento.addEventListener('focusout', function(evento) {

evento.preventDefault()

const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;


if(this.value.match(emailValido)) {

    document.querySelector('.mensagem').innerHTML = "";
this.classList.remove('erro');
this.parentNode.classList.remove('erro');

} else {
    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
    this.classList.add('erro');
    this.parentNode.classList.add('erro')

    return false
}; 

});

};




 function validaUf(elemento) {


    elemento.addEventListener('focusout', function(evento) {
    
    evento.preventDefault()
    
    const ufValido = /^[a-z]{2}?$/i;
    
    
    if(this.value.match(ufValido)) {
    
        document.querySelector('.mensagem').innerHTML = "";
    this.classList.remove('erro');
    this.parentNode.classList.remove('erro');
    
    } else {
        document.querySelector('.mensagem').innerHTML = "ponha apenas dois caracteres de a-z para o seu ESTADO";
        this.classList.add('erro');
        this.parentNode.classList.add('erro')
    
        return false
    }; 
    
    });
    
    };


// queriesInput

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');

let camposNumericos = document.querySelectorAll('input.numerico');

let camposEmail = document.querySelectorAll('input.email')

let camposUf = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios) {

validaCampo(emFoco);

}

for(let emFoco of camposNumericos) {

    validaCampoNumerico(emFoco);
    
    }


    for(let emFoco of camposEmail) {

        validaEmail(emFoco);
        
        }

        
    for(let emFoco of camposUf) {

        validaUf(emFoco);
        
        }


        // 
        // verificar se o nome está vazio


        
       function validar() {

  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");
  let cep = document.getElementById("cep");
  let cidade = document.getElementById("cidade");
  let uf = document.getElementById("uf");



 if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }

  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }


  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
  }

  if (cep.value == "") {
    alert("CEP não informado");
    cep.focus();
    return;
  }
 

  if (cidade.value == "") {
    alert("Senha não informada");
    cidade.focus();
    return;
  }


  if (uf.value == "") {
    alert("Sobrenome não informado");
    uf.focus();
    return;
  }
 
  
 
 
  alert("Formulário enviado!");

} 

  

