// let nav = document.querySelector('nav');
// let lastscrolldown = 0

// window.addEventListener('scroll',() => {

//     let distancescroll = window.pageYoffset || document.documentElement.scrolltop;
//     console.log(distancesrolled);


//     if(distancesrcolled > lastscrollValue){
//         console.log("going down!")
//         nav.style.opacity= 0;
//     }
//     else{
//         console.log("going up!")
//         nav.style.opacity= 1;
//     }
//     lastscrollValue = distancesrcolled;


// });



const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

// Clone slides and append to the slider track
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
});

const sliderTrack2 = document.querySelector('.slider-track2');
const slides2 = document.querySelectorAll('.slide2');

// Clone slides and append to the slider track
slides2.forEach(slide2 => {
    const clone = slide2.cloneNode(true);
    sliderTrack2.appendChild(clone);
});




// const page1 = document.getElementById('page1');

//         // Add event listeners for mouse enter and leave
//         page1.addEventListener('mouseenter', () => {
//             page1.classList.add('hover'); // Add hover class on mouse enter
//         });

//         page1.addEventListener('mouseleave', () => {
//             page1.classList.remove('hover'); // Remove hover class on mouse leave
//         });