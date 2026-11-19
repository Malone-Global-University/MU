/* MGU Lesson Dashboard — prototype content controller.
   Shell: index.html | Style: dashboard.css | Directory: catalog.json
   Content: lessons/*.md. No lesson content is hard-coded into this script.
   Supported extensions: :::answer, :::quiz, :::terms and [[term-id|label]]. */
(() => {
  'use strict';
  const nav = document.getElementById('lesson-nav');
  const view = document.getElementById('lesson-view');
  const escapeHtml = text => String(text).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const safeHref = url => /^(https?:\/\/|\/(?!\/)|\.\.?\/|#)/i.test(url);
  const glossary = new Map();
  const quizzes = new Map();
  let quizSequence = 0;

  function extractTerms(markdown) {
    glossary.clear();
    return markdown.replace(/^:::terms\s*\n([\s\S]*?)^:::\s*$/gm, (_, body) => {
      for (const line of body.split(/\r?\n/)) {
        if (!line.trim() || line.trim().startsWith('#')) continue;
        const [id, label, definition, ...rest] = line.split('|').map(x => x.trim());
        const href = rest.join('|').trim();
        if (!/^[a-z0-9-]+$/.test(id || '') || !label || !definition) {
          throw new Error('Invalid term definition in :::terms. Expected: id | label | definition | optional-link');
        }
        if (href && !safeHref(href)) throw new Error(`Unsafe vocabulary link for term ${id}.`);
        glossary.set(id, { label, definition, href });
      }
      return '';
    });
  }

  function inlineMarkdown(text) {
    const tokens = [];
    const protect = markup => {
      const token = `\u0001${tokens.length}\u0002`;
      tokens.push(markup);
      return token;
    };
    let content = escapeHtml(text);
    content = content.replace(/`([^`]+)`/g, (_, code) => protect(`<code>${code}</code>`));
    content = content.replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, (_, termId, label) => {
      if (!glossary.has(termId)) return label;
      return protect(`<button type="button" class="term-trigger" data-term="${escapeHtml(termId)}" aria-haspopup="dialog" aria-expanded="false">${label}</button>`);
    });
    content = content.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_, label, url) => {
      if (!safeHref(url)) return label;
      return protect(`<a href="${escapeHtml(url)}">${label}</a>`);
    });
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    return content.replace(/\u0001(\d+)\u0002/g, (_, index) => tokens[Number(index)]);
  }

  function parseQuiz(body) {
    const questions = [];
    let current = null;
    for (const untrimmed of body) {
      const line = untrimmed.trim();
      if (!line) continue;
      if (line.startsWith('? ')) {
        current = { title: line.slice(2).trim(), options: [], explanation: '' };
        questions.push(current);
      } else if (/^- \[[ xX]\] /.test(line)) {
        if (!current) throw new Error('Quiz choice appears before its question.');
        current.options.push({ text: line.slice(6), correct: /^- \[[xX]\]/.test(line) });
      } else if (line.startsWith('! ')) {
        if (!current) throw new Error('Quiz explanation appears before its question.');
        current.explanation = line.slice(2);
      } else throw new Error(`Unsupported quiz directive line: ${line.slice(0, 80)}`);
    }
    if (!questions.length || questions.some(q => q.options.length < 2 || q.options.filter(o => o.correct).length !== 1)) {
      throw new Error('Each quiz requires at least one question with two or more options and exactly one [x] correct answer.');
    }
    return questions;
  }

  function quizMarkup(body) {
    const questions = parseQuiz(body);
    const id = `lesson-quiz-${++quizSequence}`;
    quizzes.set(id, questions);
    const fields = questions.map((q, index) => {
      const options = q.options.map((opt, number) =>
        `<label><input type="radio" name="${id}-q${index}" value="${number}"> ${inlineMarkdown(opt.text)}</label>`
      ).join('');
      return `<fieldset class="quiz-fieldset"><legend>${index + 1}. ${inlineMarkdown(q.title)}</legend>${options}</fieldset>`;
    }).join('');
    return `<form class="interactive-quiz" id="${id}" novalidate>${fields}`+
      `<div class="quiz-actions"><button class="quiz-primary" type="submit">Check answers</button>`+
      `<button class="quiz-secondary" type="reset">Clear responses</button></div>`+
      `<div class="quiz-result" role="status" aria-live="polite" hidden></div></form>`;
  }

  function tableCells(line) {
    return line.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, '|'));
  }

  function renderMarkdown(markdown) {
    const lines = String(markdown).replace(/\r\n?/g, '\n').split('\n');
    const html = [];
    const usedIds = new Set();
    const isBlock = line => /^(#{1,4}\s+|\s*[-*]\s+|\s*\d+\.\s+|```|:::(?:answer|quiz|terms)(?:\s|$)|>\s+|---+\s*$|\|)/.test(line);
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }

      const answer = line.match(/^:::answer(?:\s+(.*))?\s*$/);
      if (answer) {
        const body = []; i++;
        while (i < lines.length && lines[i].trim() !== ':::') body.push(lines[i++]);
        if (i === lines.length) throw new Error('Unclosed :::answer directive.');
        i++;
        const label = answer[1]?.trim() || 'Show answer';
        html.push(`<details class="answer-disclosure"><summary>${inlineMarkdown(label)}</summary>`+
          `<div class="answer-content">${renderMarkdown(body.join('\n'))}</div></details>`);
        continue;
      }

      if (/^:::quiz\s*$/.test(line)) {
        const body = []; i++;
        while (i < lines.length && lines[i].trim() !== ':::') body.push(lines[i++]);
        if (i === lines.length) throw new Error('Unclosed :::quiz directive.');
        i++;
        html.push(quizMarkup(body));
        continue;
      }

      const heading = line.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        const level = Math.max(2, Math.min(heading[1].length, 4));
        const content = heading[2].trim();
        const slug = content.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 70) || 'section';
        let id = slug, suffix = 2;
        while (usedIds.has(id)) id = `${slug}-${suffix++}`;
        usedIds.add(id);
        html.push(`<h${level} id="${escapeHtml(id)}">${inlineMarkdown(content)}</h${level}>`);
        i++; continue;
      }
      if (/^```/.test(line)) {
        const body = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) body.push(lines[i++]);
        if (i < lines.length) i++;
        html.push(`<pre><code>${escapeHtml(body.join('\n'))}</code></pre>`);
        continue;
      }
      if (/^---+\s*$/.test(line)) { html.push('<hr>'); i++; continue; }

      if (/^\|/.test(line)) {
        const rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) rows.push(tableCells(lines[i++]));
        if (rows.length < 2 || !rows[1].every(cell => /^:?-{3,}:?$/.test(cell))) {
          throw new Error('Markdown table needs a header and a | --- | separator.');
        }
        const width = rows[0].length;
        if (rows.some(row => row.length !== width)) throw new Error('A Markdown table has mismatched column counts.');
        const head = '<thead><tr>'+rows[0].map(cell => `<th scope="col">${inlineMarkdown(cell)}</th>`).join('')+'</tr></thead>';
        const data = '<tbody>'+rows.slice(2).map(row => '<tr>'+row.map((cell,index) =>
          index===0 ? `<th scope="row">${inlineMarkdown(cell)}</th>` : `<td>${inlineMarkdown(cell)}</td>`
        ).join('')+'</tr>').join('')+'</tbody>';
        html.push(`<div class="table-scroll"><table>${head}${data}</table></div>`);
        continue;
      }

      const unordered = line.match(/^\s*[-*]\s+(.+)$/);
      const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
      if (unordered || ordered) {
        const tag = unordered ? 'ul' : 'ol';
        const regex = unordered ? /^\s*[-*]\s+(.+)$/ : /^\s*\d+\.\s+(.+)$/;
        const items = [];
        while (i < lines.length) {
          const match = lines[i].match(regex);
          if (!match) break;
          items.push(`<li>${inlineMarkdown(match[1])}</li>`);
          i++;
        }
        html.push(`<${tag}>${items.join('')}</${tag}>`);
        continue;
      }
      if (/^>\s+/.test(line)) {
        const quote = [];
        while (i < lines.length && /^>\s+/.test(lines[i])) quote.push(lines[i++].replace(/^>\s+/, ''));
        html.push(`<blockquote><p>${inlineMarkdown(quote.join(' '))}</p></blockquote>`);
        continue;
      }
      const paragraph = [line.trim()]; i++;
      while (i < lines.length && lines[i].trim() && !isBlock(lines[i])) paragraph.push(lines[i++].trim());
      html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    }
    return html.join('\n');
  }

  const el = (tag, className, label) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (label !== undefined) node.textContent = label;
    return node;
  };

  async function getText(path) {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Could not load ${path} (HTTP ${response.status}).`);
    return response.text();
  }

  function flatten(catalog) {
    if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.departments)) {
      throw new Error('catalog.json does not use the expected schemaVersion 1 format.');
    }
    const all = [];
    const departmentIds = new Set();
    for (const department of catalog.departments) {
      if (!/^[a-z0-9_-]+$/.test(department.id) || departmentIds.has(department.id) || !Array.isArray(department.courses)) {
        throw new Error('A catalog department has an invalid ID, duplicated ID, or missing courses list.');
      }
      departmentIds.add(department.id);
      const courseIds = new Set();
      for (const course of department.courses || []) {
        if (!/^[a-z0-9_-]+$/.test(course.id) || courseIds.has(course.id) || !Array.isArray(course.lessons)) {
          throw new Error('A catalog course has an invalid ID, duplicated ID, or missing lessons list.');
        }
        courseIds.add(course.id);
        for (const lesson of course.lessons || []) {
          if (!/^[a-z0-9_-]+$/.test(lesson.id) || !/^lessons\/[a-z0-9_/-]+\.md$/.test(lesson.file) || lesson.file.includes('..')) {
            throw new Error('A catalog lesson has an invalid ID or Markdown path.');
          }
          if (all.some(entry => entry.lesson.id === lesson.id)) throw new Error(`Duplicate lesson ID: ${lesson.id}`);
          all.push({ department, course, lesson });
        }
      }
    }
    return all;
  }

  // Four-level, catalog-driven routing. Only an explicit ?lesson=... loads Markdown.
  const homeUrl = './';
  const departmentUrl = department => `?department=${encodeURIComponent(department.id)}`;
  const courseUrl = (department, course) =>
    `${departmentUrl(department)}&course=${encodeURIComponent(course.id)}`;
  const lessonUrl = lesson => `?lesson=${encodeURIComponent(lesson.id)}`;

  function link(href, className, text) {
    const anchor = el('a', className, text);
    anchor.href = href;
    return anchor;
  }

  function buildBreadcrumbs(parts) {
    const crumbs = el('nav', 'breadcrumbs');
    crumbs.setAttribute('aria-label', 'Breadcrumb');
    crumbs.appendChild(link(homeUrl, '', 'Lesson dashboard'));
    for (const part of parts) {
      crumbs.appendChild(el('span', 'separator', '/'));
      if (part.href) crumbs.appendChild(link(part.href, '', part.text));
      else crumbs.appendChild(el('span', '', part.text));
    }
    return crumbs;
  }

  function addBreadcrumbs(parts) { view.appendChild(buildBreadcrumbs(parts)); }

  function showDirectory(catalog, route) {
    nav.replaceChildren();
    const home = link(homeUrl, 'sidebar-home-link', 'Dashboard home');
    if (route.type === 'home') {
      home.classList.add('active');
      home.setAttribute('aria-current', 'page');
    }
    nav.appendChild(home);

    for (const department of catalog.departments) {
      const group = el('section', 'department-group');
      const depLink = link(departmentUrl(department), 'department-title department-nav-link', department.name);
      if (route.type === 'department' && route.department?.id === department.id) {
        depLink.classList.add('active');
        depLink.setAttribute('aria-current', 'page');
      }
      group.appendChild(depLink);
      for (const course of department.courses || []) {
        const panel = el('details', 'sidebar-course');
        // The selected course is expanded; the remaining courses stay compact at scale.
        panel.open = route.department?.id === department.id &&
          (route.course?.id === course.id || route.type === 'department');
        panel.appendChild(el('summary', 'course-title', course.name));
        const links = el('div', 'lesson-links');
        const courseLink = link(courseUrl(department, course), 'lesson-link course-overview-link', 'View course');
        if (route.type === 'course' && route.course?.id === course.id && route.department?.id === department.id) {
          courseLink.classList.add('active');
          courseLink.setAttribute('aria-current', 'page');
        }
        links.appendChild(courseLink);
        for (const lesson of course.lessons || []) {
          const a = link(lessonUrl(lesson), 'lesson-link', lesson.title);
          if (route.type === 'lesson' && route.lesson?.id === lesson.id) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
          }
          links.appendChild(a);
        }
        panel.appendChild(links);
        group.appendChild(panel);
      }
      nav.appendChild(group);
    }
  }

  function startDirectoryPage(kicker, title, description) {
    glossary.clear(); quizzes.clear(); quizSequence = 0;
    closeTerm(false);
    view.replaceChildren();
    const head = el('header', 'directory-page-header');
    head.appendChild(el('p', 'lesson-kicker', kicker));
    head.appendChild(el('h1', '', title));
    head.appendChild(el('p', 'directory-intro', description));
    view.appendChild(head);
    view.setAttribute('aria-busy', 'false');
  }

  function makeDirectoryCard(href, kicker, title, description, footer) {
    const a = link(href, 'directory-card');
    a.appendChild(el('span', 'directory-card-eyebrow', kicker));
    a.appendChild(el('strong', 'directory-card-title', title));
    a.appendChild(el('span', 'directory-card-description', description));
    a.appendChild(el('span', 'directory-card-foot', footer));
    return a;
  }

  function countLessons(department) {
    return (department.courses || []).reduce((count, course) => count + (course.lessons || []).length, 0);
  }
  const quantity = (count, singular, plural = `${singular}s`) => `${count} ${count === 1 ? singular : plural}`;

  function showHome(catalog) {
    startDirectoryPage('MGU learning directory', 'Explore departmental lessons',
      'Select a department, choose a course, and open a lesson. Each lesson is maintained separately from this dashboard.');
    const departments = catalog.departments;
    const courses = departments.reduce((sum, department) => sum + (department.courses || []).length, 0);
    const lessons = departments.reduce((sum, department) => sum + countLessons(department), 0);
    const counts = el('div', 'directory-counts');
    counts.appendChild(el('span', '', quantity(departments.length, 'department')));
    counts.appendChild(el('span', '', quantity(courses, 'course')));
    counts.appendChild(el('span', '', quantity(lessons, 'lesson')));
    view.appendChild(counts);
    view.appendChild(el('h2', 'directory-section-title', 'Departments'));
    const grid = el('div', 'directory-grid');
    for (const department of departments) {
      const courseCount = (department.courses || []).length;
      grid.appendChild(makeDirectoryCard(
        departmentUrl(department), 'Department', department.name,
        department.description || 'Browse courses and lessons in this department.',
        `${quantity(courseCount, 'course')} · ${quantity(countLessons(department), 'lesson')}  →`
      ));
    }
    view.appendChild(grid);
    document.title = 'Departmental Lessons | Malone Global University';
  }

  function showDepartment(department) {
    startDirectoryPage('Department', department.name,
      department.description || 'Select a course to see its available lessons.');
    view.prepend(buildBreadcrumbs([{text: department.name}]));
    view.appendChild(el('h2', 'directory-section-title', 'Courses'));
    const grid = el('div', 'directory-grid');
    for (const course of department.courses || []) {
      grid.appendChild(makeDirectoryCard(
        courseUrl(department, course), 'Course', course.name,
        course.description || 'Open the course directory to browse its lessons.',
        `${quantity((course.lessons || []).length, 'lesson')}  →`
      ));
    }
    if (!grid.childElementCount) view.appendChild(el('p', 'directory-empty', 'No courses are published in this department yet.'));
    else view.appendChild(grid);
    document.title = `${department.name} | MGU Lessons`;
  }

  function showCourse(department, course) {
    startDirectoryPage('Course directory', course.name,
      course.description || `Browse the lessons in ${course.name}.`);
    view.prepend(buildBreadcrumbs([
      {text: department.name, href: departmentUrl(department)},
      {text: course.name}
    ]));
    view.appendChild(el('h2', 'directory-section-title', 'Lessons'));
    const list = el('div', 'directory-lesson-list');
    for (const [i, lesson] of (course.lessons || []).entries()) {
      const a = link(lessonUrl(lesson), 'directory-lesson-row');
      a.appendChild(el('span', 'directory-lesson-number', String(i + 1).padStart(2, '0')));
      const content = el('span', 'directory-lesson-info');
      content.appendChild(el('strong', '', lesson.title));
      const descriptors = [lesson.level, lesson.minutes && `${lesson.minutes} min study`].filter(Boolean);
      content.appendChild(el('span', '', descriptors.join(' · ') || 'Markdown lesson'));
      a.appendChild(content);
      a.appendChild(el('span', 'directory-lesson-arrow', '→'));
      list.appendChild(a);
    }
    if (!list.childElementCount) view.appendChild(el('p', 'directory-empty', 'No lessons are published in this course yet.'));
    else view.appendChild(list);
    document.title = `${course.name} | MGU Lessons`;
  }

  function setupInteractions(body) {
    for (const form of body.querySelectorAll('.interactive-quiz')) {
      const questions = quizzes.get(form.id);
      const result = form.querySelector('.quiz-result');
      form.addEventListener('submit', event => {
        event.preventDefault();
        let correct = 0, answered = 0;
        const comments = el('ol', 'quiz-feedback');
        questions.forEach((q, index) => {
          const selected = form.querySelector(`input[name="${form.id}-q${index}"]:checked`);
          const right = q.options.findIndex(option => option.correct);
          if (selected) answered++;
          if (selected && Number(selected.value) === right) correct++;
          const line = el('li', '', selected ? (Number(selected.value)===right ? 'Correct. ' : 'Review. ') : 'Unanswered. ');
          line.append(`${q.explanation} Correct answer: ${q.options[right].text}`);
          comments.appendChild(line);
        });
        result.replaceChildren();
        result.appendChild(el('strong', '', `Score: ${correct}/${questions.length} · Questions answered: ${answered}/${questions.length}`));
        result.appendChild(el('p', '', correct===questions.length ?
          'Excellent. You identified the core concepts.' :
          'Review the explanations below, change your answers, and try again.'));
        result.appendChild(comments);
        result.hidden = false;
        result.scrollIntoView({ behavior: 'auto', block: 'nearest' });
      });
      form.addEventListener('reset', () => { result.hidden = true; result.replaceChildren(); });
    }
  }

  function showLesson(entry, markdown) {
    const { department, course, lesson } = entry;
    glossary.clear(); quizzes.clear(); quizSequence = 0;
    const content = extractTerms(markdown);
    view.replaceChildren();
    addBreadcrumbs([
      {text: department.name, href: departmentUrl(department)},
      {text: course.name, href: courseUrl(department, course)},
      {text: lesson.title}
    ]);
    const heading = el('header', 'lesson-header');
    heading.appendChild(el('p', 'lesson-kicker', 'Lesson workspace'));
    heading.appendChild(el('h1', '', lesson.title));
    const meta = el('div', 'lesson-meta');
    if (lesson.level) meta.appendChild(el('span', '', lesson.level));
    if (lesson.minutes) meta.appendChild(el('span', '', `${lesson.minutes} min study`));
    meta.appendChild(el('span', '', 'Markdown lesson'));
    heading.appendChild(meta);
    view.appendChild(heading);
    const body = el('article', 'markdown-body');
    body.setAttribute('aria-label', 'Lesson content');
    // Raw HTML authored in Markdown is escaped. Only recognized, validated elements are generated.
    body.innerHTML = renderMarkdown(content);
    view.appendChild(body);
    setupInteractions(body);
    const source = el('div', 'lesson-source');
    source.append('Lesson source: ');
    source.appendChild(el('code', '', lesson.file));
    view.appendChild(source);
    view.setAttribute('aria-busy', 'false');
    document.title = `${lesson.title} | MGU Lessons`;
  }

  function showError(error) {
    view.replaceChildren();
    const card = el('div', 'error-card');
    card.appendChild(el('h1', '', 'This page could not be loaded'));
    card.appendChild(el('p', '', error.message || String(error)));
    card.appendChild(el('p', '', 'Check catalog.json and the requested department, course, or lesson ID. When testing locally, use a web server (PowerShell: py -m http.server 8000).'));
    view.appendChild(card);
    view.setAttribute('aria-busy', 'false');
  }

  const termPopup = el('div', 'term-popover');
  termPopup.hidden = true;
  termPopup.tabIndex = -1;
  termPopup.setAttribute('role', 'dialog');
  termPopup.setAttribute('aria-label', 'Vocabulary definition');
  document.body.appendChild(termPopup);
  let activeTrigger = null;
  function closeTerm(restoreFocus = false) {
    if (termPopup.hidden) return;
    termPopup.hidden = true;
    if (activeTrigger) {
      activeTrigger.setAttribute('aria-expanded', 'false');
      if (restoreFocus) activeTrigger.focus();
    }
    activeTrigger = null;
  }
  function positionTerm(trigger) {
    const r = trigger.getBoundingClientRect();
    const width = termPopup.offsetWidth;
    const height = termPopup.offsetHeight;
    const left = Math.min(Math.max(12, r.left), Math.max(12, innerWidth-width-12));
    let top = r.bottom + 8;
    if (top+height>innerHeight-12 && r.top>height+15) top = r.top-height-8;
    top = Math.max(12, Math.min(top, Math.max(12, innerHeight-height-12)));
    termPopup.style.left = `${left}px`;
    termPopup.style.top = `${top}px`;
  }
  view.addEventListener('click', event => {
    const trigger = event.target.closest('.term-trigger');
    if (!trigger || !view.contains(trigger)) return;
    if (activeTrigger === trigger && !termPopup.hidden) { closeTerm(true); return; }
    closeTerm(false);
    const item = glossary.get(trigger.dataset.term);
    if (!item) return;
    activeTrigger = trigger;
    trigger.setAttribute('aria-expanded','true');
    termPopup.replaceChildren();
    termPopup.appendChild(el('h3', '', item.label));
    termPopup.appendChild(el('p', '', item.definition));
    if (item.href) {
      const a = el('a', '', 'Read encyclopedia article');
      a.href = item.href;
      termPopup.appendChild(a);
    }
    const close = el('button', 'term-close', 'Close');
    close.type = 'button';
    close.addEventListener('click', () => closeTerm(true));
    termPopup.appendChild(close);
    termPopup.hidden = false;
    positionTerm(trigger);
    termPopup.focus({preventScroll:true});
  });
  document.addEventListener('pointerdown', event => {
    if (!termPopup.hidden && !termPopup.contains(event.target) && !(activeTrigger && activeTrigger.contains(event.target))) closeTerm(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key==='Escape' && !termPopup.hidden) { event.preventDefault(); closeTerm(true); }
  });
  window.addEventListener('scroll', () => closeTerm(false), {passive:true});
  window.addEventListener('resize', () => { if (!termPopup.hidden && activeTrigger) positionTerm(activeTrigger); });

  async function init() {
    try {
      const catalog = JSON.parse(await getText('catalog.json'));
      const all = flatten(catalog);
      const params = new URLSearchParams(location.search);
      const lessonId = params.get('lesson');
      const departmentId = params.get('department');
      const courseId = params.get('course');
      let route;
      if (lessonId) {
        const entry = all.find(item => item.lesson.id === lessonId);
        if (!entry) throw new Error(`Lesson ID "${lessonId}" was not found in catalog.json.`);
        route = {type: 'lesson', ...entry};
        showDirectory(catalog, route);
        showLesson(entry, await getText(entry.lesson.file));
      } else if (departmentId) {
        const department = catalog.departments.find(item => item.id === departmentId);
        if (!department) throw new Error(`Department ID "${departmentId}" was not found in catalog.json.`);
        if (courseId) {
          const course = (department.courses || []).find(item => item.id === courseId);
          if (!course) throw new Error(`Course ID "${courseId}" was not found in department "${departmentId}".`);
          route = {type: 'course', department, course};
          showDirectory(catalog, route);
          showCourse(department, course);
        } else {
          route = {type: 'department', department};
          showDirectory(catalog, route);
          showDepartment(department);
        }
      } else if (courseId) {
        throw new Error('A course URL must also specify its department.');
      } else {
        route = {type: 'home'};
        showDirectory(catalog, route);
        showHome(catalog);
      }
    } catch (error) { showError(error); }
  }
  init();
})();
