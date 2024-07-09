const text = "This is the text that will be displayed word by word.";
const textContainer = document.getElementById('text-container');
const hiddenContainer = document.createElement('div');
hiddenContainer.className = 'hidden-container';
document.body.appendChild(hiddenContainer);

const backgroundMusic = document.getElementById('background-music');
const words = text.split(' ');
let currentIndex = 0;
const wordPositions = [];

// Pre-render the whole sentence to calculate word positions
hiddenContainer.innerHTML = words.map(word => `<span class="hidden-word">${word}&nbsp;</span>`).join('');
const hiddenWords = hiddenContainer.querySelectorAll('.hidden-word');

hiddenWords.forEach((word, index) => {
    const rect = word.getBoundingClientRect();
    wordPositions.push({
        word: words[index],
        left: rect.left,
        top: rect.top
    });
});

// Clean up the hidden container
document.body.removeChild(hiddenContainer);

backgroundMusic.play();

function displayNextWord() {
    if (currentIndex < wordPositions.length) {
        const wordData = wordPositions[currentIndex];
        const wordElement = document.createElement('span');
        wordElement.innerHTML = wordData.word + '&nbsp;';
        wordElement.className = 'word';
        wordElement.style.position = 'absolute';
        wordElement.style.left = wordData.left + 'px';
        wordElement.style.top = wordData.top + 'px';
        textContainer.appendChild(wordElement);
        
        // Trigger reflow to restart animation
        wordElement.offsetWidth;
        
        currentIndex++;
        setTimeout(displayNextWord, 500); // Adjust the delay to control the speed of text display
    }
}

displayNextWord();