function playSound(e) {
  const keyCode = e.keyCode;
  const [key, audio] = document.querySelectorAll(`*[data-key="${keyCode}"]`);
  if(!audio) return;
  key.parentElement.classList.add('active');
  audio.currentTime = 0;
  audio.play();
}

function removeClass(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(k => k.addEventListener('transitionend', removeClass));

window.addEventListener('keydown', playSound);
