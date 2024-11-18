
  let currentIndex = 0;

  function moveSlide(direction) {
      const slides = document.querySelectorAll('.slider img');
      const totalSlides = slides.length;
      currentIndex += direction;
  
      if (currentIndex < 0) {
          currentIndex = totalSlides - 1; 
      } else if (currentIndex >= totalSlides) {
          currentIndex = 0; 
      }
  
      updateSliderPosition();
  }
  
  function updateSliderPosition() {
      const slider = document.querySelector('.slider');
      const slides = document.querySelectorAll('.slider img');
      const slideWidth = slides[0].clientWidth; 
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  
  export function initSlider(sliderSelector) {
      const slider = document.querySelector(`#${sliderSelector}`);
      const prevButton = slider.querySelector('.prev');
      const nextButton = slider.querySelector('.next');
  
      prevButton.addEventListener('click', () => moveSlide(-1));
      nextButton.addEventListener('click', () => moveSlide(1));
  
      window.addEventListener('resize', updateSliderPosition);
  }

