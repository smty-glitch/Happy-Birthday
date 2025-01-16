// Toggle Music
let musicPlaying = true;
const music = document.getElementById('birthday-music');
music.play();

function toggleMusic() {
  if (musicPlaying) {
    music.pause();
  } else {
    music.play();
  }
  musicPlaying = !musicPlaying;
}

// Blow Candle
function blowCandle(candle) {
  const flame = candle.querySelector('.flame');
  if (flame) {
    flame.style.display = 'none'; // Hide the flame
    candle.style.backgroundColor = '#d3d3d3'; // Change candle color to "extinguished"
    showFireworks();
  }
}

// Fireworks
function showFireworks() {
  const fireworks = document.getElementById('fireworks');
  fireworks.classList.remove('hidden');
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.backgroundColor = getRandomColor();
    fireworks.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
  }
  setTimeout(() => fireworks.classList.add('hidden'), 2000);
}

function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Cut Cake
function cutCake() {
  const cakeBody = document.querySelector('.cake-body');
  const message = document.querySelector('.message');
  if (cakeBody && message) {
    cakeBody.style.height = '50px'; // "Cut" the cake visually
    setTimeout(() => {
      message.classList.remove('hidden'); // Show the message after cutting
    }, 500);
  }
}

