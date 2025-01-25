const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const berriesCollectedDisplay = document.getElementById('berries-collected');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');

let gameState = {
    currentStep: 'start',
    berries: 0,
};

const story = {
    start: {
        text: "You find yourself in a mystical forest. You hear whispers of magic berries nearby. Which direction will you go?",
        choices: [
            { text: "Head North", next: "north" },
            { text: "Head South", next: "south" },
        ],
    },
    north: {
        text: "You venture north and discover a shimmering bush with glowing berries. Do you pick them?",
        choices: [
            { text: "Pick the berries", next: "pick_berries" },
            { text: "Leave the bush alone", next: "leave_bush" },
        ],
    },
    south: {
        text: "You wander south and stumble upon a serene pond. You see a reflection of berries in the water. Do you dive in?",
        choices: [
            { text: "Dive into the pond", next: "dive_pond" },
            { text: "Stay by the shore", next: "stay_shore" },
        ],
    },
    pick_berries: {
        text: "You pick the berries and feel a surge of magical energy. The forest whispers its approval.",
        collect: 1,
        choices: [
            { text: "Return to the starting point", next: "start" },
        ],
    },
    leave_bush: {
        text: "You leave the bush alone. The whispers of the forest fade away.",
        choices: [
            { text: "Return to the starting point", next: "start" },
        ],
    },
    dive_pond: {
        text: "You dive into the pond and emerge with a handful of glowing berries. You feel invigorated.",
        collect: 1,
        choices: [
            { text: "Return to the starting point", next: "start" },
        ],
    },
    stay_shore: {
        text: "You stay by the shore, listening to the gentle sounds of the forest. Nothing else happens.",
        choices: [
            { text: "Return to the starting point", next: "start" },
        ],
    },
};

function updateStory(step) {
    const currentStep = story[step];
    gameState.currentStep = step;
    storyText.textContent = currentStep.text;

    // Update berries
    if (currentStep.collect) {
        gameState.berries += currentStep.collect;
    }
    berriesCollectedDisplay.textContent = gameState.berries;

    // Update choices
    choicesContainer.innerHTML = '';
    currentStep.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => updateStory(choice.next));
        choicesContainer.appendChild(button);
    });
}

function saveProgress() {
    localStorage.setItem('gameState', JSON.stringify(gameState));
    alert('Progress saved!');
}

function resetGame() {
    gameState = {
        currentStep: 'start',
        berries: 0,
    };
    updateStory(gameState.currentStep);
    localStorage.removeItem('gameState');
}

function loadProgress() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        gameState = JSON.parse(savedState);
    }
    updateStory(gameState.currentStep);
}

// Event Listeners
saveBtn.addEventListener('click', saveProgress);
resetBtn.addEventListener('click', resetGame);

// Initialize game
loadProgress();
