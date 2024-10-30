const track = document.querySelector('.carousel-track')
const images = document.querySelectorAll('.carousel-track img')
let index = 0

function moveCarousel (){
    index = (index + 1) % images.length
    track.style.transform = `translate(${-index  * 600}px)`
}

setInterval(moveCarousel, 6000)