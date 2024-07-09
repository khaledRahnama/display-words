const text = "This is the text that will be displayed word by word.";
const textContainer = document.getElementById('text-container');
const backgroundMusic = document.getElementById('background-music');
const words = text.split(' ');
let currentIndex = 0;

backgroundMusic.play();

// Pre-calculate positions
function calculateWordPositions() {
    textContainer.style.visibility = 'hidden';
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = '-9999px';
    document.body.appendChild(tempContainer);

    words.forEach((word, index) => {
        const wordElement = document.createElement('span');
        wordElement.innerHTML = word + '&nbsp;';
        tempContainer.appendChild(wordElement);
        const rect = wordElement.getBoundingClientRect();
        words[index] = {
            text: word,
            left: rect.left,
            top: rect.top
        };
    });

    document.body.removeChild(tempContainer);
    textContainer.style.visibility = 'visible';
}

function displayNextWord() {
    if (currentIndex < words.length) {
        const wordData = words[currentIndex];
        const wordElement = document.createElement('span');
        wordElement.innerHTML = wordData.text + '&nbsp;';
        wordElement.className = 'word';
        wordElement.style.left = wordData.left + 'px';
        wordElement.style.top = wordData.top + 'px';
        textContainer.appendChild(wordElement);
        currentIndex++;
        setTimeout(displayNextWord, 500); // Adjust the delay to control the speed of text display
    }
}

calculateWordPositions();
displayNextWord();