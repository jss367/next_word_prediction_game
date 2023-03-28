const exampleSentences = [
    "The quick brown fox jumps over the",
    "She sells seashells by the",
    "An apple a day keeps the",
    "To be or not to",
    "A picture is worth a"
];

const correctNextWords = [
    "lazy",
    "seashore",
    "doctor",
    "be",
    "thousand"
];

function getRandomSentence() {
    return exampleSentences[Math.floor(Math.random() * exampleSentences.length)];
}

function startGame() {
    const currentSentence = getRandomSentence();
    document.getElementById('current-sentence').textContent = currentSentence;
}

async function submitGuess() {
    const userGuess = document.getElementById('user-input').value;
    const currentSentence = document.getElementById('current-sentence').textContent;
    const sentenceIndex = exampleSentences.indexOf(currentSentence);

    // Retrieve the LLM's prediction (assuming you have a getNextWordFromLLM function)
    const llmPrediction = await getNextWordFromLLM(currentSentence);

    // Update the LLM's prediction and the correct answer on the page
    document.getElementById('llm-prediction').querySelector('span').textContent = llmPrediction;
    document.getElementById('correct-answer').querySelector('span').textContent = correctNextWords[sentenceIndex];

    // Check if the user's guess is correct
    if (userGuess === correctNextWords[sentenceIndex]) {
        // Handle correct guess
        console.log('Correct!');
    } else {
        // Handle incorrect guess
        console.log('Incorrect. Try again!');
    }

    // Clear the user's input for the next round
    document.getElementById('user-input').value = '';
}

document.getElementById('submit-guess').addEventListener('click', submitGuess);

// Start the game when the page is loaded
startGame();
