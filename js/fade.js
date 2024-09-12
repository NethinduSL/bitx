// Function to check if the element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the fade-in-active class when element comes into view
function checkScroll() {
  const elements = document.querySelectorAll('.fade-in-element');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('fade-in-active');
    }
  });
}

// Listen to scroll event
window.addEventListener('scroll', checkScroll);

// Run on page load to catch any already visible elements
window.addEventListener('load', checkScroll);
