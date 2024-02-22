document.addEventListener("DOMContentLoaded", function() {
    // Get the element to be faded in
    let fadeInElement = document.querySelector('.header-car-img');

    // Set a timeout to delay the fade-in effect
    setTimeout(function() {
        // Add a class to the element to trigger the fade-in effect
        fadeInElement.classList.add('fade-in');
    }, 100); // You can adjust the delay time as needed
});
