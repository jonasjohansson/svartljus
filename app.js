const slideshow = document.querySelector('#slideshow');
const slides = document.querySelectorAll('#slideshow > *');
const numSlides = slides.length;
var slideIndex = 0;

console.log('Slideshow initiated');
console.log(`Number of slides: ${numSlides}`);
console.log(`Current slide index: ${slideIndex}`);

const next = () => {
	if (slideIndex < numSlides - 1) slideIndex++;
	else slideIndex = 0;
	slideshow.style.transform = `translate3d(${slideIndex * -100}%,0,0)`;
};

slideshow.addEventListener('click', () => {
	next();
	console.log(`Current slide index: ${slideIndex}`);
});
