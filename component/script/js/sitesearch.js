/* main.js — loads behaviors for navbar (collapse), search, breadcrumbs */

// Wait to run until DOM components are loaded
document.addEventListener('DOMContentLoaded', () => {

  // NAV MOBILE TOGGLE
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });
  }

  // SUBMENU buttons (for ARIA and mobile)
  document.querySelectorAll('.sub-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      const sub = btn.nextElementSibling;
      if (!sub) return;
      const visible = sub.style.display === 'block';
      sub.style.display = visible ? 'none' : 'block';
    });
  });

  // THEME TOGGLE BUTTON hookup (works with theme-toggle.js)
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isPressed = themeBtn.getAttribute('aria-pressed') === 'true';
      themeBtn.setAttribute('aria-pressed', String(!isPressed));
      // theme-toggle.js manages the actual theme; just call toggle
      if (window.MGUToggleTheme) window.MGUToggleTheme();
    });
  }

  // BREADCRUMBS: prefer explicit data attribute, fallback to URL
  function renderBreadcrumbs() {
    const crumbsEl = document.getElementById('breadcrumbs');
    if (!crumbsEl) return;
    // try page-provided breadcrumbs: data-breadcrumbs="Home|Department|Course"
    const bcData = document.body.getAttribute('data-breadcrumbs');
    if (bcData) {
      const items = bcData.split('|').map(s => s.trim());
      crumbsEl.innerHTML = items.map((label, i) => {
        const url = i === 0 ? '/' : '#';
        return i < items.length - 1 ? `<a href="${url}">${label}</a> › ` : `<span>${label}</span>`;
      }).join('');
      return;
    }
    // fallback: build from path segments
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length === 0) {
      crumbsEl.innerHTML = '<a href="/">Home</a>';
      return;
    }
    let path = '';
    crumbsEl.innerHTML = '<a href="/">Home</a> › ' + parts.map((p, idx) => {
      path += '/' + p;
      return (idx < parts.length - 1) ? `<a href="${path}/">${decodeURIComponent(p)}</a>` : `<span>${decodeURIComponent(p)}</span>`;
    }).join(' › ');
  }
  renderBreadcrumbs();

  // SITE SEARCH: fetch registry and filter
  const searchInput = document.getElementById('siteSearch');
  const searchResults = document.getElementById('searchResults');

  async function loadRegistry(){
    try{
      const res = await fetch('/component/registry/pages.json', {cache:'no-store'});
      if (!res.ok) return [];
      return await res.json();
    }catch(e){console.warn('registry load failed', e); return [];}
  }

  let registry = [];
  loadRegistry().then(r => registry = r);

  function highlight(text, q){
    if(!q) return text;
    const re = new RegExp(`(${escapeRegExp(q)})`, 'ig');
    return text.replace(re, '<strong>$1</strong>');
  }
  function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timer);
      const q = e.target.value.trim();
      timer = setTimeout(() => doSearch(q), 200);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        doSearch(q, true);
      }
    });
  }

  function doSearch(query, openAll) {
    if (!query) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }
    const q = query.toLowerCase();
    const out = registry.filter(p => {
      return (p.title && p.title.toLowerCase().includes(q)) ||
             (p.description && p.description.toLowerCase().includes(q)) ||
             (p.tags && p.tags.join(' ').toLowerCase().includes(q));
    }).slice(0,20);
    if (out.length === 0) {
      searchResults.innerHTML = `<div class="search-empty">No results</div>`;
      searchResults.style.display = 'block';
      return;
    }
    searchResults.innerHTML = out.map(item => {
      return `<a class="search-item" href="${item.url}" role="option">
        <div class="search-item-title">${highlight(item.title||item.url, query)}</div>
        <div class="search-item-desc">${highlight((item.description||''), query)}</div>
      </a>`;
    }).join('');
    searchResults.style.display = 'block';
    if (openAll) {
      // if user pressed Enter, go to best match
      window.location.href = out[0].url;
    }
  }

});
