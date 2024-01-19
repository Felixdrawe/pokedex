// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('./img/animation.json')
        .then(response => response.json())
        .then(animationData => {
            lottie.loadAnimation({
                container: document.getElementById('pokemon-animation'), // the DOM element
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData // the animation data
            });
        })
        .catch(error => console.error('Error loading Lottie animation:', error));
});
