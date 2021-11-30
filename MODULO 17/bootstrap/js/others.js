
const scriptChangeClass = () => {

    function changeClass(element, old, nova) {
    
       element.classList.remove(old);
       element.classList.add(nova) 
    }
    
    setTimeout(function() {
    
    let buttonhome = document.getElementById('buttonhome');
    
    changeClass(buttonhome, 'btn-secondary', 'btn-dark');
    
    
    }, 7000);
    
    }
    
    scriptChangeClass()




    
const myCarousel = document.querySelector('#carouselExampleIndicators') //initial id carousel
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 7200,
  wrap: true // true para voltar ao inicio e executar novamente
})