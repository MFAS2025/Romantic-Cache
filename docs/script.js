// Floating heart animation using image
function createHeart() {
  const heart = document.createElement('img');
  heart.src = 'heart.png'; // Add heart.png to your docs folder
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  document.getElementById('floatingHearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
