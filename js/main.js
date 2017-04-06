function playKeySound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop

  audio.play().then(() => {
    console.log("Yay! Audio is playing!");
    audio.currentTime = 0;
    key.classList.add('piano__key--pressed');
  }).catch((error) => {
    console.log("Error: " + error);
  });

}

function removeTransition(e) {
  // console.log(e.propertyName);
  if (e.propertyName !== 'box-shadow') return; // stop
  this.classList.remove('piano__key--pressed');
}

const piano = document.querySelectorAll('.piano__key');
piano.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playKeySound);
