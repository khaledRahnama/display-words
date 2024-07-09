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

// Adjust the left positions relative to the text container
const containerRect = textContainer.getBoundingClientRect();
wordPositions.forEach(pos => {
    pos.left -= containerRect.left;
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
        wordElement.style.left = wordData.left + 'px';
        wordElement.style.top = '-100px';  // Start above the container
        textContainer.appendChild(wordElement);
        
        // Trigger reflow to restart animation
        wordElement.offsetWidth;
        
        wordElement.style.transition = 'transform 1s, opacity 1s';
        wordElement.style.transform = `translateY(${wordData.top - containerRect.top}px)`;
        wordElement.style.opacity = 1;
        
        currentIndex++;
        setTimeout(displayNextWord, 1000); // Adjust the delay to control the speed of text display
    }
}

displayNextWord();