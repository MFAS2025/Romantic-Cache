// Floating heart animation
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️'; // You can randomize with 💖, 💘, 💗 if you want
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  document.getElementById('floatingHearts').appendChild(heart);

  setTimeout(() => heart.remove(), 6000); // Match animation duration
}, 500);
