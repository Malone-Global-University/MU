document.getElementById('searchBox').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('main ul li a').forEach(link => {
    link.parentElement.style.display =
      link.textContent.toLowerCase().includes(query) ? '' : 'none';
  });
});
