let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
function moveSlide(step){
currentIndex += step;
if (currentIndex < 0) {
currentIndex=totalItems-1;
}
if (currentIndex >= totalItems) {
currentIndex=0;
}
const offset=-currentIndex * 100;
document.querySelector('.carousel').style.transform =
`translateX(${offset}%)`;
}
setInterval(() => {
moveSlide(1); 
}, 5000);
