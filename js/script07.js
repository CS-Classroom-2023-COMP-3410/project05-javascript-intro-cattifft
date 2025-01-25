const displayResult = document.getElementById('result');
const memoryDisplay = document.getElementById('memory');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let memory = 0;
let operator = null;
let previousInput = null;

function updateDisplay() {
    displayResult.textContent = currentInput || '0';
}

function handleClear() {
    currentInput = '';
    previousInput = null;
    operator = null;
    memoryDisplay.textContent = '';
    updateDisplay();
}

function handleNumber(number) {
    currentInput += number;
    updateDisplay();
}

function handleOperator(op) {
    if (currentInput === '' && operator) return;
    if (previousInput !== null && currentInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function handleEquals() {
    if (previousInput !== null && operator) {
        calculate();
        operator = null;
        previousInput = null;
    }
}

function handleDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function handlePercent() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function handleSqrt() {
    if (currentInput !== '') {
        const result = Math.sqrt(parseFloat(currentInput));
        currentInput = result.toString();
        updateDisplay();
    }
}

function handleMemoryRecall() {
    currentInput = memory.toString();
    updateDisplay();
}

function calculate() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (isNaN(num1) || isNaN(num2)) return;

    let result = 0;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
    }

    currentInput = result.toString();
    updateDisplay();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const number = button.dataset.number;

        if (number !== undefined) {
            handleNumber(number);
        } else if (action) {
            switch (action) {
                case 'clear':
                    handleClear();
                    break;
                case 'add':
                case 'subtract':
                case 'multiply':
                case 'divide':
                    handleOperator(action);
                    break;
                case 'equals':
                    handleEquals();
                    break;
                case 'decimal':
                    handleDecimal();
                    break;
                case 'percent':
                    handlePercent();
                    break;
                case 'sqrt':
                    handleSqrt();
                    break;
                case 'memory-recall':
                    handleMemoryRecall();
                    break;
            }
        }
    });
});
