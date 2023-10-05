let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.querySelectorAll('.dot');
const auto = true;
const intervalTime = 2000;
let slideInterval;

const nextSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    const activeDot = document.querySelector('.dot.active');
    activeDot.classList.remove('active');
    
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
        const nextDot = activeDot.nextElementSibling;
        if (nextDot) {
            nextDot.classList.add('active');
        } else {
            dots[0].classList.add('active');
        }
    } else {
        slides[0].classList.add('active');
        dots[0].classList.add('active');
    }
}

const prevSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    const activeDot = document.querySelector('.dot.active');
    activeDot.classList.remove('active');

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active');
        const prevDot = activeDot.previousElementSibling;
        if (prevDot) {
            prevDot.classList.add('active');
        } else {
            dots[dots.length - 1].classList.add('active');
        }
    } else {
        slides[slides.length - 1].classList.add('active');
        dots[dots.length - 1].classList.add('active');
    }
}

next.addEventListener('click', () => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});

prev.addEventListener('click', () => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});
if(auto){
    slideInterval = setInterval(nextSlide,intervalTime);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

function goToSlide(val) {
    slides.forEach((item, index) => {
        if (index == val) {
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        } else {
            slides[index].classList.remove('active');
            dots[index].classList.remove('active');
        }
    });
}

goToSlide(currentIndex);
