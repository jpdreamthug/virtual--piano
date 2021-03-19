// mouse click
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
pianoKeys.forEach(pianoKey => {
    pianoKey.addEventListener('click',  (event) => playAudio(event))
});
function playAudio(event){
    const audio = new Audio();
    audio.src = `assets/audio/${event.target.dataset.note}.mp3`;
    audio.currentTime = 0;
    audio.play();
}

piano.addEventListener('mousedown', (event) => {
    if(pianoKeys.classList.contains('piano-keys')){
        pianoKeys.classList.add('piano-key-active', 'piano-key-active-pseudo');
    }
})
piano.addEventListener('mouseup', )

const buttonLetters = document.querySelector('.btn-letters');
const buttonNotes = document.querySelector('.btn-notes');
buttonLetters.addEventListener('click', (event) => {
    if (!buttonLetters.classList.contains('btn-active')) {
        buttonLetters.classList.add('btn-active');
        piano.classList.add('active-letters');
        buttonNotes.classList.remove('btn-active');
    }
});
buttonNotes.addEventListener('click', (event) => {
    if (!buttonNotes.classList.contains('btn-active')) {
        buttonNotes.classList.add('btn-active');
        piano.classList.remove('active-letters');
        buttonLetters.classList.remove('btn-active');
    }
});

// keyboard

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.piano-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// fullscreen

const elem = document.documentElement;
const fullScreen = document.querySelector('.fullscreen');
fullScreen.addEventListener('click', (e) => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
)
const closeFullScreen = document.querySelector('.openfullscreen');
closeFullScreen.addEventListener('click', (e) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
})

// mousedown - mouseover - mouseup
