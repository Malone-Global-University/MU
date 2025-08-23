/* main.js — navbar, submenus, breadcrumbs, search, theme toggle */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     MOBILE NAV TOGGLE
  ===================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    const toggleNav = () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    };
    navToggle.addEventListener('click', toggleNav);
    navToggle.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') toggleNav();
    });
  }

  /* =====================
     SUBMENU TOGGLE
  ===================== */
  document.querySelectorAll('.sub-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      if (!sub) return;
      sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });
  });

  /* =====================
     THEME TOGGLE BUTTON
     (uses theme-toggle.js)
  ===================== */
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn && window.MGUToggleTheme) {
    themeBtn.addEventListener('click', () => window.MGUToggleTheme());
  }

  /* =====================
     BREADCRUMBS
  ===================== */
  const renderBreadcrumbs = () => {
    const crumbsEl = document.getElementById('breadcrumbs');
    if (!crumbsEl) return;

    const bcData = document.body.getAttribute('data-breadcrumbs');
    if (bcData) {
      const items = bcData.split('|').map(s => s.trim());
      crumbsEl.innerHTML = items.map((label, i) => {
        const url = i === 0 ? '/' : '#';
        return i < items.length - 1
          ? `<a href="${url}" tabindex="0">${label}</a> › `
          : `<span>${label}</span>`;
      }).join('');
      return;
    }

    const parts = window.location.pathname.split('/').filter(Boolean);
    if (!parts.length) {
      crumbsEl.innerHTML = '<a href="/" tabindex="0">Home</a>';
      return;
    }

    let path = '';
    crumbsEl.innerHTML = '<a href="/" tabindex="0">Home</a> › ' +
      parts.map((p, idx) => {
        path += '/' + p;
        return idx < parts.length - 1
          ? `<a href="${path}/" tabindex="0">${decodeURIComponent(p)}</a>`
          : `<span>${decodeURIComponent(p)}</span>`;
      }).join(' › ');
  };
  renderBreadcrumbs();

  /* =====================
     SITE SEARCH
  ===================== */
  const searchInput   = document.getElementById('siteSearch');
  const searchResults = document.getElementById('searchResults');
  let registry = [];

  const loadRegistry = async () => {
    try {
      const res = await fetch('/component/registry/pages.json', {cache:'no-store'});
      return res.ok ? await res.json() : [];
    } catch(e) {
      console.warn('Registry load failed', e);
      return [];
    }
  };
  loadRegistry().then(r => registry = r);

  const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const highlight = (text, q) => {
    if (!q) return text;
    const re = new RegExp(`(${escapeRegExp(q)})`, 'ig');
    return text.replace(re, '<strong>$1</strong>');
  };

  const doSearch = (query, openAll) => {
    if (!query) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }

    const q = query.toLowerCase();
    const out = registry.filter(p =>
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.tags && p.tags.join(' ').toLowerCase().includes(q))
    ).slice(0,20);

    if (!out.length) {
      searchResults.innerHTML = '<div class="search-empty">No results</div>';
      searchResults.style.display = 'block';
      return;
    }

    searchResults.innerHTML = out.map((item, idx) =>
      `<a class="search-item" href="${item.url}" role="option" tabindex="${idx+1}">
        <div class="search-item-title">${highlight(item.title||item.url, query)}</div>
        <div class="search-item-desc">${highlight(item.description||'', query)}</div>
      </a>`
    ).join('');
    searchResults.style.display = 'block';

    if (openAll) window.location.href = out[0].url;
  };

  if (searchInput) {
    let timer, focusedIndex = -1;

    const updateFocus = items => {
      items.forEach((item, i) => item.classList.toggle('focused', i === focusedIndex));
    };

    searchInput.addEventListener('input', e => {
      clearTimeout(timer);
      focusedIndex = -1;
      timer = setTimeout(() => doSearch(e.target.value.trim()), 200);
    });

    searchInput.addEventListener('keydown', e => {
      const items = Array.from(searchResults.querySelectorAll('.search-item'));
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusedIndex = (focusedIndex + 1) % items.length;
        items[focusedIndex].focus();
        updateFocus(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusedIndex = (focusedIndex - 1 + items.length) % items.length;
        items[focusedIndex].focus();
        updateFocus(items);
      } else if (e.key === 'Enter') {
        if (focusedIndex >= 0) {
          window.location.href = items[focusedIndex].href;
        } else {
          doSearch(searchInput.value.trim(), true);
        }
      }
    });
  }

});
