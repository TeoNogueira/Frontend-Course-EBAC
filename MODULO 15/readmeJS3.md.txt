# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML 
- Interface de programa��o
- N�O � uma linguagem de programa��o
- � essencial para o JS entender o modelo de p�ginas web

## Para que serve?
- Alterar a estrutura 
- Alterar o estilo
- Alterar o conte�do

## Como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padr�es estabelecidos
- M�todos (fun��es)
- �rvore de elementos
- Seletores
- Objetos (n�s / nodes)

## Exemplo HTML
```
<html>
    <head></head>
    <body></body>
</html>
```

## Exemplo Obj
```
objeto = {
    html : {
        head : {},
        body : {
            h1 : {
            }
        }
    }
}
```

## DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS n�o teria no��o da p�gina

### Vantagens de usar JavaScript 
- C�digo � executado por navegadores
- Tornar as p�ginas din�micas
- Evitar Requisi��es desnecess�rias (performance)
- SPA (Single Page Applications)
- Reagir rapidamente a a��es dos usu�rios

### Desevantagens de usar o JavaScript
- C�digo � executado por navegadores
- O conte�do N�O fica vis�vel para indexadores de busca
- Altera��es em tempo de execu��o n�o ficam salvas no documento 


### Exemplos
Seleciona o objeto e diposinibiliza (m�todos / fun��e).callback

- document.getElementById(id) 
- document.getElementsByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML 
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addEventListener()
- window.location
- window.onload 
- console.log()
- window.scrollTo(x, y)

## Seletores
- Tipos de seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById()
- getElementsByTagName()
- getElementsByName()
- getElementsByClassName()
- querySelectorAll() // #id | .class

## Formul�rios
- Precisamos evitar que o usu�rio passe dados incorretos
- Ou seja, para direcionar melhor o uso do nosso sistema
- Proteger a inje��o de c�digo malicioso
- Evitar erros de processamento
- Formatar dados para facilitar o processamento 
- Filtro para o back-end
- Regex (express�es regulares) 


## Refer�ncias
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execu��o: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o
- Express�es Regulares: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions