const text = "This is the text that will be displayed word by word.";
const textContainer = document.getElementById('text-container');
const backgroundMusic = document.getElementById('background-music');
const words = text.split(' ');
let currentIndex = 0;
let currentText = '';

backgroundMusic.play();

function displayNextWord() {
    if (currentIndex < words.length) {
        currentText += words[currentIndex] + ' ';
        textContainer.style.width = `${textContainer.clientWidth + words[currentIndex].length * 10}px`;
        textContainer.textContent = currentText;
        currentIndex++;
        setTimeout(displayNextWord, 500); // Adjust the delay to control the speed of text display
    }
}

displayNextWord();