document.addEventListener('DOMContentLoaded', function () {
  var mainElement = document.querySelector('main');

  // Function to apply the transition and hide content
  function applyTransition() {
    mainElement.classList.add('hidden');
  }

  // Function to remove the transition and show content
  function removeTransition() {
    mainElement.classList.remove('hidden');
  }

  // Add a transitionend event listener to remove the class after the transition ends
  mainElement.addEventListener('transitionend', removeTransition);

  // Add your navigation logic here (e.g., when a link is clicked)
  // Apply the transition before navigating to the new page
  var links = document.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      applyTransition(); // Apply the transition effect
      setTimeout(function () {
        window.location.href = link.href; // Navigate to the new page after a delay
      }, 300); // Adjust the delay time to match your transition duration
    });
  });
});
