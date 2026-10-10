/* Language pill renderer: turns numbered Pinyin into tone-marked, tone-coloured text
   and wires up the show/hide controls. No dependencies. */
(function () {
  'use strict';

  /* ---------- Pinyin: numbers to marks ---------- */

  const MARKED = {
    a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', 'ü': 'ǖǘǚǜ',
    A: 'ĀÁǍÀ', E: 'ĒÉĚÈ', I: 'ĪÍǏÌ', O: 'ŌÓǑÒ', U: 'ŪÚǓÙ', 'Ü': 'ǕǗǙǛ'
  };

  /* Crimson Pro 1.003 has no ready-made glyphs for these letters. Some browsers
     rebuild them from the font's own accents, others swap in a different font.
     Writing them as base letter + combining accent makes every browser use
     Crimson Pro. If you change to a font that has these glyphs, empty the string. */
  const BUILD_FROM_PARTS = 'ǎǐǒǔǖǘǚǜǍǏǑǓǕǗǙǛ';

  const ORDINAL = { 1: '1st', 2: '2nd', 3: '3rd', 4: '4th', 5: 'neutral' };

  function markSyllable(letters, tone) {
    letters = letters.replace(/u:|v/g, 'ü').replace(/U:|V/g, 'Ü');
    if (tone < 1 || tone > 4) return letters;
    const low = letters.toLowerCase();
    let at = low.indexOf('a');
    if (at < 0) at = low.indexOf('e');
    if (at < 0 && low.includes('ou')) at = low.indexOf('o');
    if (at < 0) {
      for (let k = low.length - 1; k >= 0; k--) {
        if ('iouü'.includes(low[k])) { at = k; break; }
      }
    }
    if (at < 0) return letters;
    let ch = MARKED[letters[at]][tone - 1];
    if (BUILD_FROM_PARTS.includes(ch)) ch = ch.normalize('NFD');
    return letters.slice(0, at) + ch + letters.slice(at + 1);
  }

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function slot() {
    const s = el('span', 'slot', '___');
    s.setAttribute('aria-label', 'blank');
    return s;
  }

  function syllable(letters, tone, spoken, inWord) {
    const lead = inWord && /^[aeoAEO]/.test(letters) ? '’' : '';
    const t = tone === 0 ? 5 : tone;
    const written = lead + markSyllable(letters, t);
    if (!spoken || spoken === t) return el('span', 's t' + t, written);

    const said = lead + markSyllable(letters, spoken);
    const wrap = el('span', 's');
    const wr = el('span', `wr sandhi t${t} u${spoken}`, written);
    wr.title = `Said as ${said} (${ORDINAL[spoken]} tone)`;
    const sp = el('span', `sp sandhi t${spoken} u${t}`, said);
    sp.title = `Written ${written} (${ORDINAL[t]} tone)`;
    wrap.append(wr, sp);
    return wrap;
  }

  const TOKEN = /([A-Za-zÜü:]+)([0-5])(?:>([1-5]))?|(_{2,})|([\s\S])/g;

  function renderPinyin(source) {
    const frag = document.createDocumentFragment();
    let word = null;
    let last = null;
    let m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(source))) {
      if (m[1]) {
        if (!word) { word = el('span', 'w'); frag.appendChild(word); last = word; }
        word.appendChild(syllable(m[1], +m[2], m[3] ? +m[3] : null, word.childNodes.length > 0));
      } else if (m[4]) {
        word = null; last = null;
        frag.appendChild(slot());
      } else if (last && /[,.?!;:…]/.test(m[5])) {
        last.appendChild(document.createTextNode(m[5]));
        word = null;
      } else {
        word = null; last = null;
        frag.appendChild(document.createTextNode(m[5]));
      }
    }
    return frag;
  }

  /* Plain text with ___ slots, and {numbered pinyin} rendered in colour. */
  function renderMixed(source) {
    const frag = document.createDocumentFragment();
    source.split(/\{([^}]+)\}/).forEach((part, i) => {
      if (i % 2) {
        const span = el('span', 'pyi');
        span.lang = 'zh-Latn-pinyin';
        span.appendChild(renderPinyin(part));
        frag.appendChild(span);
      } else {
        part.split(/(_{2,})/).forEach((bit, j) => {
          if (j % 2) frag.appendChild(slot());
          else if (bit) frag.appendChild(document.createTextNode(bit));
        });
      }
    });
    return frag;
  }

  /* ---------- Page ---------- */

  const data = window.PILL;
  const body = document.body;

  function buildKey() {
    document.querySelectorAll('[data-field]').forEach(node => {
      if (data[node.dataset.field]) node.textContent = data[node.dataset.field];
    });
    document.querySelectorAll('[data-py]').forEach(node => {
      node.appendChild(renderPinyin(node.dataset.py));
    });
    document.querySelectorAll('[data-mixed]').forEach(node => {
      node.appendChild(renderMixed(node.dataset.mixed));
    });
  }

  function buildSections() {
    const nav = document.getElementById('section-nav');
    const host = document.getElementById('sections');
    data.sections.forEach(sec => {
      const first = sec.phrases[0].n;
      const lastN = sec.phrases[sec.phrases.length - 1].n;

      const link = el('a', null, sec.title);
      link.href = '#' + sec.id;
      const li = el('li');
      li.appendChild(link);
      nav.appendChild(li);

      const section = el('section', 'sec');
      section.id = sec.id;
      section.setAttribute('aria-labelledby', sec.id + '-h');

      const head = el('header', 'sec-head');
      const h2 = el('h2', null, sec.title);
      h2.id = sec.id + '-h';
      const range = el('span', 'range', `${first}–${lastN}`);
      head.append(h2, range);
      section.appendChild(head);

      if (sec.grammar) {
        const g = el('p', 'grammar');
        g.appendChild(renderMixed(sec.grammar));
        section.appendChild(g);
      }

      const list = el('ol', 'rows');
      list.start = first;
      sec.phrases.forEach(p => {
        const row = el('li', 'row');
        row.id = 'p' + p.n;
        row.appendChild(el('span', 'num', String(p.n)));
        const main = el('div', 'main');

        if (p.hanzi) {
          const hz = el('p', 'hz', p.hanzi);
          hz.lang = 'zh';
          main.appendChild(hz);
        }

        const py = el('p', 'py');
        py.lang = 'zh-Latn-pinyin';
        const pyc = el('span', 'c');
        pyc.appendChild(renderPinyin(p.py));
        py.appendChild(pyc);
        main.appendChild(py);

        const en = el('p', 'en');
        const enc = el('span', 'c');
        enc.appendChild(renderMixed(p.en));
        en.appendChild(enc);
        main.appendChild(en);

        if (p.note) {
          const note = el('p', 'note');
          note.appendChild(renderMixed(p.note));
          main.appendChild(note);
        }

        row.appendChild(main);
        list.appendChild(row);
      });
      section.appendChild(list);
      host.appendChild(section);
    });
  }

  /* ---------- Controls ---------- */

  const STORE = 'language-pill:mandarin:v1';
  const DEFAULTS = { py: true, en: true, notes: true, colour: true, spoken: false };
  let state = Object.assign({}, DEFAULTS);
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || 'null');
    if (saved) state = Object.assign(state, saved);
  } catch (e) { /* storage unavailable: use defaults */ }

  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function masking() { return !state.py || !state.en; }

  function apply() {
    body.classList.toggle('hide-py', !state.py);
    body.classList.toggle('hide-en', !state.en);
    body.classList.toggle('hide-notes', !state.notes);
    body.classList.toggle('colour', state.colour);
    body.classList.toggle('spoken', state.spoken);
    body.classList.toggle('masking', masking());

    document.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(!!state[btn.dataset.toggle]));
    });
    document.querySelectorAll('[data-mode]').forEach(btn => {
      btn.setAttribute('aria-pressed', String((btn.dataset.mode === 'spoken') === state.spoken));
    });
    document.querySelectorAll('.row').forEach(row => {
      row.classList.remove('open');
      if (masking()) {
        row.tabIndex = 0;
        row.setAttribute('aria-expanded', 'false');
      } else {
        row.removeAttribute('tabindex');
        row.removeAttribute('aria-expanded');
      }
    });
  }

  function wireControls() {
    document.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.toggle;
        state[key] = !state[key];
        if (!state.py && !state.en) state[key === 'py' ? 'en' : 'py'] = true; // keep one visible
        save(); apply();
      });
    });
    document.querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.spoken = btn.dataset.mode === 'spoken';
        save(); apply();
      });
    });

    const host = document.getElementById('sections');
    function reveal(row) {
      if (!row || !masking()) return;
      const open = row.classList.toggle('open');
      row.setAttribute('aria-expanded', String(open));
    }
    host.addEventListener('click', e => reveal(e.target.closest('.row')));
    host.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('row')) {
        e.preventDefault();
        reveal(e.target);
      }
    });
  }

  buildKey();
  buildSections();
  wireControls();
  apply();
})();
