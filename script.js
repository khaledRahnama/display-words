document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.animated-text');
    texts.forEach(text => {
        const delay = text.getAttribute('data-delay');
        text.style.animationDelay = delay;
    });
});