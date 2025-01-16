function blowCandle(candle) {
  const flame = candle.querySelector('.flame');
  if (flame) {
    flame.style.display = 'none'; // Hide the flame
    candle.style.backgroundColor = '#d3d3d3'; // Change candle color to "extinguished"
  }
}

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
