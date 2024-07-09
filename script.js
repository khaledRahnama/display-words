document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.animated-text');
    texts.forEach(text => {
        const animationType = text.getAttribute('data-animation');
        text.classList.add(animationType); // Apply the animation class
        text.style.opacity = 1; // Ensure text is visible after animation
    });
});