// Hero-carousel
const track = document.querySelector('.carousel-track')
const images = document.querySelectorAll('.carousel-track img')
let index = 0

function moveCarousel (){
    index = (index + 1) % images.length
    track.style.transform = `translate(${-index  * 600}px)`
}

setInterval(moveCarousel, 6000)

//shop carousel
const trackShop = document.querySelector(".track-offer");
const productShop = document.querySelectorAll(".product");
let indexShop = 0;

function moveCarouselShop() {
    indexShop = (indexShop + 1) % productShop.length;
    trackShop.style.transform = `translateX(-${indexShop * 100}%)`;
}

setInterval(moveCarouselShop, 6000);
