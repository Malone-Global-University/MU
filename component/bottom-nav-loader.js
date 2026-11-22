(() => {
  const placeholder = document.getElementById(
    'bottom-nav-placeholder'
  );

  if (!placeholder) return;

  const variant = placeholder.dataset.navVariant || 'parent-only';

  const componentPath =
    variant === 'parent-and-sibling'
      ? '/component/bottom-nav-sibling.html'
      : '/component/bottom-nav.html';

  fetch(componentPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Navigation load failed: ${response.status}`
        );
      }
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => {
      console.error('Bottom navigation:', error);
    });
})();