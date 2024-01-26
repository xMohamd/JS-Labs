/**
 * Executes the provided function when the DOMContentLoaded event is fired after the HTML document has been completely parsed,
 * and all deferred scripts have downloaded and executed
 * Initializes the image slider functionality.
 */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide"); // Select all slide elements
  // Select the previous and next buttons
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0; // Initialize currentIndex to keep track of the current slide index

  let autoSlideInterval; // Variable to hold the interval ID for auto sliding

  /**
   * Displays the slide at the specified index by adding the 'active' class to it.
   * Hides other slides by removing the 'active' class from them.
   * @param {number} index - The index of the slide to be displayed.
   */
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  /**
   * Advances to the next slide and displays it.
   */
  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  /**
   * Moves to the previous slide and displays it.
   */
  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  /**
   * Starts auto sliding by setting an interval to switch to the next slide every 5 seconds.
   * Also displays the initial slide.
   */
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(showNextSlide, 5000);
    showSlide(currentIndex); // Display the initial slide
  };

  /**
   * Stops the auto sliding by clearing the interval.
   */
  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  // Event listeners for navigating to the previous and next slides
  prevButton.addEventListener("click", () => {
    showPrevSlide();
    stopAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    showNextSlide();
    stopAutoSlide();
  });

  // Event listeners to pause auto sliding when hovering over the navigation buttons
  prevButton.addEventListener("mouseenter", stopAutoSlide);
  prevButton.addEventListener("mouseleave", startAutoSlide);
  nextButton.addEventListener("mouseenter", stopAutoSlide);
  nextButton.addEventListener("mouseleave", startAutoSlide);

  // Start auto sliding initially
  startAutoSlide();
});
