const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('change', () => {
  if (toggleBtn.checked) {
    document.body.style.backgroundColor = 'black';
  } else {
    document.body.style.backgroundColor = '#f0f0f0';
  }
});
