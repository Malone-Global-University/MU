document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const runBtn = document.getElementById('runBtn');

  function updatePreview() {
    preview.srcdoc = editor.value;
  }

  // Live update on typing
  editor.addEventListener('input', updatePreview);

  // Run button for manual execution
  if (runBtn) {
    runBtn.addEventListener('click', updatePreview);
  }

  // Load first time
  updatePreview();
});
