
const scriptChangeClass = () => {

function changeClass(element, old, nova) {

   element.classList.remove(old);
   element.classList.add(nova) 

}



setTimeout(function() {

let header = document.querySelector('header');
let footer = document.querySelector('footer');
changeClass(header, 'azul', 'roxo');
changeClass(footer, 'azul', 'roxo');

}, 2000);

}

scriptChangeClass()