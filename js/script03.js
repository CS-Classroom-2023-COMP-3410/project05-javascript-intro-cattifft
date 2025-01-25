const gameGrid = document.getElementById('game-grid');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const restartBtn = document.getElementById('restart-btn');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let time = 0;
let timerInterval;

// Icons for cards
const icons = ['🍎', '🍌', '🍇', '🍓', '🍍', '🥝', '🍒', '🍑'];

// Initialize the game
function initGame() {
    // Reset variables
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    time = 0;

    // Reset UI
    movesDisplay.textContent = moves;
    timeDisplay.textContent = '0:00';
    gameGrid.innerHTML = '';

    // Create and shuffle cards
    const cardIcons = [...icons, ...icons];
    cardIcons.sort(() => Math.random() - 0.5);

    // Create card elements
    cardIcons.forEach((icon, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = icon;
        card.dataset.index = index;
        card.addEventListener('click', handleCardClick);
        gameGrid.appendChild(card);
        cards.push(card);
    });

    // Start timer
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Handle card click
function handleCardClick(e) {
    const card = e.currentTarget;

    // Ignore clicks on matched or already flipped cards
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    // Flip the card
    card.classList.add('flipped');
    card.textContent = card.dataset.icon;
    flippedCards.push(card);

    // Check for match
    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;

        const [card1, card2] = flippedCards;

        if (card1.dataset.icon === card2.dataset.icon) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;

            if (matchedPairs === icons.length) {
                clearInterval(timerInterval);
                alert(`You completed the game in ${moves} moves and ${timeDisplay.textContent}!`);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
            }, 1000);
        }

        flippedCards = [];
    }
}

// Restart the game
restartBtn.addEventListener('click', initGame);

// Start the game on page load
initGame();
