const restos = document.querySelectorAll('.resto');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

restos.forEach(resto => {
  resto.addEventListener('click', () => {
    const src = resto.dataset.src;
    overlayImg.src = src;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImg.src = '';
});
