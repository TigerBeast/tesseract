let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides[currentSlideIndex].classList.remove('fade-in');
  currentSlideIndex = (index + slides.length) % slides.length;
  slides[currentSlideIndex].classList.add('fade-in');
}

function changeSlide(n) {
  showSlide(currentSlideIndex + n);
}

showSlide(currentSlideIndex);