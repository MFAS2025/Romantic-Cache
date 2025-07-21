// Floating heart animation
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  document.getElementById('floatingHearts').appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
