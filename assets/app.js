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

const root = document.documentElement;
 
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});

for (let a of document.querySelectorAll("a")) a.target = "_blank";
