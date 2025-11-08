  <script>
    (function() {
      const input = document.getElementById('file-search');
      const fileList = document.getElementById('file-list');
      const tags = document.querySelectorAll('.tag');
      function applyFilter(q) {
        const items = fileList.querySelectorAll('li[data-fname]');
        items.forEach(li => {
          const name = li.getAttribute('data-fname').toLowerCase();
          const ftype = li.getAttribute('data-ftype').toLowerCase();
          const show = !q || name.includes(q) || ftype.includes(q);
          li.style.display = show ? '' : 'none';
        });
      }
      if(input) {
        input.addEventListener('input', function() {
          applyFilter(this.value.toLowerCase().trim());
        });
      }
      tags.forEach(tag => {
        tag.addEventListener('click', () => {
          const active = tag.classList.contains('active');
          tags.forEach(t => t.classList.remove('active'));
          if (!active) {
            tag.classList.add('active');
            const q = tag.textContent.toLowerCase().trim();
            applyFilter(q);
            if(input) input.value = q;
          } else {
            applyFilter('');
            if(input) input.value = '';
          }
        });
      });
    })();
  </script>