// State
let questions = [];
let filtered = [];
let idx = 0;
let answered = {};
let stats = { correct: 0, wrong: 0 };

const $ = id => document.getElementById(id);

function init() {
  questions = QUESTIONS.slice();
  populateLessons();
  applyFilters();
  bindEvents();
  render();
}

function populateLessons() {
  const sel = $('lessonFilter');
  const lessons = [...new Set(questions.map(q => q.lesson))].sort();
  lessons.forEach(l => {
    const o = document.createElement('option');
    o.value = l; o.textContent = 'Lezione ' + l;
    sel.appendChild(o);
  });
}

function applyFilters() {
  const lesson = $('lessonFilter').value;
  const mode = $('modeFilter').value;
  filtered = questions.filter(q => {
    if (lesson !== 'all' && q.lesson !== lesson) return false;
    if (mode === 'chiuse' && q.type !== 'chiusa') return false;
    if (mode === 'aperte' && q.type !== 'aperta') return false;
    return true;
  });
  idx = 0;
  answered = {};
  stats = { correct: 0, wrong: 0 };
  render();
}

function bindEvents() {
  $('lessonFilter').onchange = applyFilters;
  $('modeFilter').onchange = applyFilters;
  $('shuffleBtn').onclick = () => {
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    idx = 0; answered = {}; render();
  };
  $('resetBtn').onclick = () => {
    if (confirm('Resettare tutte le risposte?')) {
      answered = {}; stats = { correct: 0, wrong: 0 }; idx = 0; render();
    }
  };
  $('prevBtn').onclick = () => { if (idx > 0) { idx--; render(); } };
  $('nextBtn').onclick = () => { if (idx < filtered.length - 1) { idx++; render(); } };
  $('showBtn').onclick = () => {
    const box = document.querySelector('.answer-box');
    if (box) box.classList.toggle('show');
    document.querySelectorAll('.option').forEach(o => {
      if (o.dataset.correct === 'true') o.classList.add('correct');
    });
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { if (idx < filtered.length - 1) { idx++; render(); } }
    if (e.key === 'ArrowLeft') { if (idx > 0) { idx--; render(); } }
    if (e.key === ' ') { e.preventDefault(); $('showBtn').click(); }
  });
}

function render() {
  $('sCurrent').textContent = filtered.length ? (idx + 1) : 0;
  $('sTotal').textContent = filtered.length;
  $('sCorrect').textContent = stats.correct;
  $('sWrong').textContent = stats.wrong;
  $('counter').textContent = `${filtered.length ? idx + 1 : 0} / ${filtered.length}`;
  $('progress').style.width = filtered.length ? ((idx + 1) / filtered.length * 100) + '%' : '0%';

  if (!filtered.length) {
    $('cardContent').innerHTML = '<p style="text-align:center;color:#666;padding:40px">Nessuna domanda disponibile</p>';
    return;
  }

  const q = filtered[idx];
  $('badge').textContent = `Lezione ${q.lesson}`;

  let html = `<div class="question">${escape(q.question)}</div>`;

  if (q.type === 'chiusa') {
    html += '<div class="options">';
    q.options.forEach((opt, i) => {
      const isCorrect = i === q.correct;
      const wasAnswered = answered[q.id] !== undefined;
      let cls = 'option';
      if (wasAnswered) {
        cls += ' disabled';
        if (i === q.correct) cls += ' correct';
        else if (i === answered[q.id]) cls += ' wrong';
      }
      html += `<div class="${cls}" data-i="${i}" data-correct="${isCorrect}">${escape(opt)}</div>`;
    });
    html += '</div>';
  } else {
    html += `<div class="open-question"><div class="label">📝 Domanda aperta</div><div>Domanda di tipo aperto - clicca "Risposta" per vedere la spiegazione.</div></div>`;
  }

  if (q.answer) {
    html += `<div class="answer-box ${answered[q.id] !== undefined ? 'show' : ''}"><div class="label">✓ Risposta</div>${escape(q.answer)}</div>`;
  }

  $('cardContent').innerHTML = html;

  document.querySelectorAll('.option').forEach(el => {
    el.onclick = () => {
      const q = filtered[idx];
      if (answered[q.id] !== undefined) return;
      const i = parseInt(el.dataset.i);
      answered[q.id] = i;
      if (i === q.correct) stats.correct++;
      else stats.wrong++;
      render();
    };
  });
}

function escape(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/\n/g, '<br>');
}

window.onload = init;
