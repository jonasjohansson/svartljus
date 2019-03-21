/* slideshow */

// const slideshow = document.querySelector('#slideshow');
// const slides = document.querySelectorAll('#slideshow > *');
// const numSlides = slides.length;
// var slideIndex = 0;

// console.log('Slideshow initiated');
// console.log(`Number of slides: ${numSlides}`);
// console.log(`Current slide index: ${slideIndex}`);

// const nextSlide = () => {
//     if (slideIndex < numSlides - 1) slideIndex++;
//     else slideIndex = 0;
//     slideshow.style.transform = `translate3d(${slideIndex * -100}%,0,0)`;
// };

// slideshow.addEventListener('click', () => {
//     nextSlide();
//     console.log(`Current slide index: ${slideIndex}`);
// });

/* names */

const nameEl = document.querySelector('#name');

const names = [
    'svartljus.svg',
    'rose.svg',
    'markus.svg',
    'olle.svg',
    'possan.svg',
    'leslie.svg',
    'mariana.svg',
    'jakob.svg',
    'jonas.svg',
    'katrin.svg',
    'david.svg',
    'jacob.svg',
    'jaime.svg',
    'danni.svg',
    'andres.svg',
    'arvid.svg'
];

const namesLength = names.length;

window.addEventListener('mousemove', function() {
    nextName();
});

setName('svartljus');

function nextName() {
    setName(names[Math.floor(Math.random() * names.length)]);
}

function setName(name) {
    nameEl.src = `slide/${name}`;
}

// const root = document.documentElement;

// document.addEventListener('mousemove', evt => {
//     let x = evt.clientX / innerWidth;
//     let y = evt.clientY / innerHeight;

//     root.style.setProperty('--mouse-x', x);
//     root.style.setProperty('--mouse-y', y);
// });

for (let a of document.querySelectorAll('a')) a.target = '_blank';
