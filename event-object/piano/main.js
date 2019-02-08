'use strict';

let currentMode = 'middle';
const modesDictionary = {
    'Shift'   : 'lower',
    'Alt'     : 'higher',
    'default' : 'middle',
};
const modes = ['lower', 'higher', 'middle'];

const piano = document.querySelector(`.set`);
const keys = piano.querySelectorAll(`li`);
const song = new Audio();

document.addEventListener('keydown', event => updateCurrentMode(event));
document.addEventListener('keyup', () => (currentMode = 'middle', updateClass()));
keys.forEach(k => k.addEventListener('click', event => handleClick(event)));

function handleClick(event) {
    song.src = `sounds/${currentMode}/${event.target.dataset.song}.mp3`;
    song.load();
    song.play();
}

function updateCurrentMode(event) {
    const mode = modesDictionary[event.key];
    if (mode) {
        currentMode = mode;
    }
    updateClass();
}

function updateClass() {
    const notCurrentModes = modes.filter(m => m !== currentMode);
    notCurrentModes.forEach(m => piano.classList.remove(m));
    piano.classList.add(currentMode);
}