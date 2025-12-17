document.querySelectorAll('.restos .resto').forEach(resto => {
  resto.addEventListener('click', () => {
    resto.classList.toggle('abierto');
  });
});
