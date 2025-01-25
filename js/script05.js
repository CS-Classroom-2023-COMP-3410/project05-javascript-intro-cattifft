const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const brushColorInput = document.getElementById('brush-color');
const brushSizeInput = document.getElementById('brush-size');
const backgroundColorInput = document.getElementById('background-color');
const undoBtn = document.getElementById('undo-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

let drawing = false;
let brushColor = brushColorInput.value;
let brushSize = brushSizeInput.value;
let backgroundColor = backgroundColorInput.value;
let strokes = [];
let currentStroke = [];

// Initialize canvas background color
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Event Listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

brushColorInput.addEventListener('input', (e) => brushColor = e.target.value);
brushSizeInput.addEventListener('input', (e) => brushSize = e.target.value);
backgroundColorInput.addEventListener('input', (e) => {
    backgroundColor = e.target.value;
    redrawCanvas();
});
undoBtn.addEventListener('click', undoLastStroke);
clearBtn.addEventListener('click', clearCanvas);
saveBtn.addEventListener('click', saveCanvas);

function startDrawing(e) {
    drawing = true;
    currentStroke = [];
    draw(e);
}

function draw(e) {
    if (!drawing) return;
    const x = e.offsetX;
    const y = e.offsetY;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    if (currentStroke.length > 0) {
        const lastPoint = currentStroke[currentStroke.length - 1];
        ctx.moveTo(lastPoint.x, lastPoint.y);
    } else {
        ctx.moveTo(x, y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();

    currentStroke.push({ x, y, color: brushColor, size: brushSize });
}

function stopDrawing() {
    if (!drawing) return;
    drawing = false;
    strokes.push(currentStroke);
}

function undoLastStroke() {
    if (strokes.length === 0) return;
    strokes.pop();
    redrawCanvas();
}

function clearCanvas() {
    strokes = [];
    redrawCanvas();
}

function redrawCanvas() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    strokes.forEach(stroke => {
        ctx.strokeStyle = stroke[0].color;
        ctx.lineWidth = stroke[0].size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(stroke[0].x, stroke[0].y);

        for (let i = 1; i < stroke.length; i++) {
            ctx.lineTo(stroke[i].x, stroke[i].y);
        }
        ctx.stroke();
    });
}

function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
