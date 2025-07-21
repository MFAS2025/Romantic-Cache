// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.getElementById('floatingHearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

// You can add more features like dark mode or localStorage if needed
