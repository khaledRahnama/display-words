const text = "This is the text that will be displayed word by word.";
const textContainer = document.getElementById('text-container');
const backgroundMusic = document.getElementById('background-music');
const words = text.split(' ');
let currentIndex = 0;

backgroundMusic.play();

function displayNextWord() {
    if (currentIndex < words.length) {
        const wordElement = document.createElement('span');
        wordElement.innerHTML = words[currentIndex] + '&nbsp;';
        wordElement.className = 'word';
        textContainer.appendChild(wordElement);
        
        // Trigger reflow to restart animation
        wordElement.offsetWidth;
        
        currentIndex++;
        setTimeout(displayNextWord, 500); // Adjust the delay to control the speed of text display
    }
}

displayNextWord();