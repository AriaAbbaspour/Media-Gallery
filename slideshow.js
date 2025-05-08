function initializeSlideshow() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval = 5000;
  
    function showSlide(index) {
      slides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
      currentSlide = index;
    }
  
    function nextSlide() {
      let newIndex = currentSlide + 1;
      if (newIndex >= slides.length) newIndex = 0;
      showSlide(newIndex);
    }
  
    function prevSlide() {
      let newIndex = currentSlide - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      showSlide(newIndex);
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        showSlide(index);
      });
    });
  
    let autoSlide = setInterval(nextSlide, slideInterval);
  
    let slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('mouseenter', function() {
      clearInterval(autoSlide);
    });
    slideshow.addEventListener('mouseleave', function() {
      autoSlide = setInterval(nextSlide, slideInterval);
    });
  
    showSlide(currentSlide);
  }
  
  function initializeNavToggle() {
    let trigram = document.querySelector('.trigram');
    let nav = document.querySelector('.topnav');
  
    trigram.addEventListener('click', function() {
      nav.classList.toggle('responsive');
    });
  }
  
  initializeSlideshow();
  initializeNavToggle();