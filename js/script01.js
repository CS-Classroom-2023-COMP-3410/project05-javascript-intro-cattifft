const clockElement = document.getElementById('clock');
const timeFormatSelect = document.getElementById('time-format');
const fontSizeInput = document.getElementById('font-size');
const colorSchemeInput = document.getElementById('color-scheme');
const setAlarmButton = document.getElementById('set-alarm');
const alarmContainer = document.getElementById('alarm-container');

let alarms = JSON.parse(localStorage.getItem('alarms')) || [];
let timeFormat = localStorage.getItem('timeFormat') || '24';
let fontSize = localStorage.getItem('fontSize') || '32';
let colorScheme = localStorage.getItem('colorScheme') || '#000000';

timeFormatSelect.value = timeFormat;
fontSizeInput.value = fontSize;
colorSchemeInput.value = colorScheme;

// Apply user preferences
clockElement.style.fontSize = `${fontSize}px`;
clockElement.style.color = colorScheme;

// Update clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    if (timeFormat === '12') {
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        clockElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    }

    checkAlarms(now);
}

// Check alarms
function checkAlarms(now) {
    const currentTime = now.toTimeString().split(' ')[0];
    alarms.forEach((alarm, index) => {
        if (alarm.time === currentTime) {
            alert(`Alarm! ${alarm.label}`);
            alarms.splice(index, 1); // Remove triggered alarm
            saveAlarms();
            renderAlarms();
        }
    });
}

// Save alarms to localStorage
function saveAlarms() {
    localStorage.setItem('alarms', JSON.stringify(alarms));
}

// Render alarms
function renderAlarms() {
    alarmContainer.innerHTML = alarms
        .map(alarm => `<div>${alarm.time} - ${alarm.label}</div>`)
        .join('');
}

// Set alarm
setAlarmButton.addEventListener('click', () => {
    const alarmTime = prompt('Enter alarm time (HH:MM:SS):');
    const alarmLabel = prompt('Enter alarm label:');
    if (alarmTime && alarmLabel) {
        alarms.push({ time: alarmTime, label: alarmLabel });
        saveAlarms();
        renderAlarms();
    }
});

// Update preferences
timeFormatSelect.addEventListener('change', (e) => {
    timeFormat = e.target.value;
    localStorage.setItem('timeFormat', timeFormat);
    updateClock();
});

fontSizeInput.addEventListener('input', (e) => {
    fontSize = e.target.value;
    clockElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('fontSize', fontSize);
});

colorSchemeInput.addEventListener('input', (e) => {
    colorScheme = e.target.value;
    clockElement.style.color = colorScheme;
    localStorage.setItem('colorScheme', colorScheme);
});

// Initial render
renderAlarms();
setInterval(updateClock, 1000);
updateClock();
