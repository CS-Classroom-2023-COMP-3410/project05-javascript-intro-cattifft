const arrayContainer = document.getElementById('array-container');
const commentary = document.getElementById('commentary');
const algorithmSelect = document.getElementById('algorithm-select');
const speedInput = document.getElementById('speed');
const generateArrayButton = document.getElementById('generate-array');
const startSortingButton = document.getElementById('start-sorting');

let array = [];
let speed = 200;

function generateArray(size = 20) {
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    renderArray();
}

function renderArray() {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('array-bar');
        bar.style.height = `${value * 3}px`;
        bar.style.width = `${Math.floor(600 / array.length) - 2}px`;
        arrayContainer.appendChild(bar);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    commentary.textContent = "Performing Bubble Sort...";
    const bars = document.querySelectorAll('.array-bar');

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                renderArray();

                await sleep(speed);
            }

            bars[j].style.backgroundColor = '#007bff';
            bars[j + 1].style.backgroundColor = '#007bff';
        }
    }

    commentary.textContent = "Bubble Sort Completed!";
}

async function insertionSort() {
    commentary.textContent = "Performing Insertion Sort...";
    const bars = document.querySelectorAll('.array-bar');

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        bars[i].style.backgroundColor = 'red';

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            renderArray();
            await sleep(speed);
        }

        array[j + 1] = key;

        bars[i].style.backgroundColor = '#007bff';
    }

    commentary.textContent = "Insertion Sort Completed!";
}

async function startSorting() {
    const algorithm = algorithmSelect.value;
    startSortingButton.disabled = true;
    generateArrayButton.disabled = true;

    switch (algorithm) {
        case 'bubbleSort':
            await bubbleSort();
            break;
        case 'insertionSort':
            await insertionSort();
            break;
        default:
            commentary.textContent = "Algorithm not implemented yet!";
    }

    startSortingButton.disabled = false;
    generateArrayButton.disabled = false;
}

// Event Listeners
generateArrayButton.addEventListener('click', () => generateArray());
startSortingButton.addEventListener('click', startSorting);
speedInput.addEventListener('input', (e) => speed = 1000 - e.target.value);

// Initialize
generateArray();
