'use strict';
const $ = (selector) => document.querySelector(selector);
const escapeHTML = (text) => String(text).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const shuffle = (items) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
let session = [], answers = new Map(), index = 0, resultVisible = false;
function startSession(pool = QUESTIONS) {
  const oldOrder = session.map(q => q.id).join(',');
  session = shuffle(pool).map(q => ({...q, options: shuffle(q.options)}));
  if (session.length > 1 && session.map(q => q.id).join(',') === oldOrder) [session[0],session[1]] = [session[1],session[0]];
  answers = new Map(); index = 0; resultVisible = false;
  render();
}
function counts() {
  const correct = [...answers].filter(([id, answer]) => session.find(q => q.id === id).answer === answer).length;
  return {correct, wrong: answers.size - correct, unanswered: session.length - answers.size};
}
function renderPanel() {
  const {correct, wrong} = counts();
  $('#session-total').textContent = `${session.length} preguntas`;
  $('#answered-count').textContent = `${answers.size} / ${session.length}`;
  $('#progress').max = session.length; $('#progress').value = answers.size;
  $('#correct-count').textContent = correct; $('#wrong-count').textContent = wrong;
  $('#question-map').innerHTML = session.map((q, i) => {
    const answered = answers.has(q.id), correct = answers.get(q.id) === q.answer;
    const status = answered ? (correct ? 'correct' : 'wrong') : '';
    return `<button class="map-node ${status} ${i === index && !resultVisible ? 'current' : ''}" data-index="${i}" ${i === index && !resultVisible ? 'aria-current="step"' : ''} aria-label="Pregunta ${i+1}, original ${q.id}: ${answered ? (correct ? 'acertada' : 'fallada') : 'sin responder'}">${i+1}</button>`;
  }).join('');
  $('#question-map').querySelectorAll('button').forEach(button => button.addEventListener('click', () => goTo(Number(button.dataset.index))));
}
function renderQuestion() {
  const q = session[index], answered = answers.has(q.id), choice = answers.get(q.id), correct = choice === q.answer;
  $('#study').innerHTML = `
    <div class="question-top"><span class="question-position">Pregunta ${index+1} <span style="font-weight:400;color:var(--ink-muted)">de ${session.length}</span></span><span class="question-reference">PDF · ${String(q.id).padStart(2,'0')}</span></div>
    <h2 id="question-title" class="question-title" tabindex="-1">${escapeHTML(q.text)}</h2>
    <form id="answer-form">
      <fieldset class="options" aria-labelledby="question-title"><legend class="sr-only">Elige una respuesta</legend>${q.options.map((option, i) => `
        <label class="option ${answered ? 'locked' : ''} ${answered && option.id === q.answer ? 'correct-answer' : ''} ${answered && option.id === choice && !correct ? 'wrong-answer' : ''}">
          <input type="radio" name="answer" value="${option.id}" ${option.id === choice ? 'checked' : ''} ${answered ? 'disabled' : ''} required>
          <span class="option-letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span class="option-text">${escapeHTML(option.text)}</span>
          ${answered && option.id === q.answer ? '<span class="option-status">Solución PDF</span>' : answered && option.id === choice && !correct ? '<span class="option-status">Tu respuesta</span>' : ''}
        </label>`).join('')}
      </fieldset>
      ${answered ? `<div class="feedback ${correct ? '' : 'wrong'}" role="status"><strong>${correct ? '¡Coincide con la solución del PDF!' : 'Esta vez no coincide con el PDF.'}</strong>${correct ? '<p>Una más en tu recorrido.</p>' : `<p>Solución indicada: ${escapeHTML(q.options.find(o => o.id === q.answer).text)}</p>`}</div>` : ''}
      ${q.note ? `<div class="source-warning"><strong>Atención · solución contradictoria en el PDF</strong><p>${escapeHTML(q.note)}</p></div>` : ''}
      <div class="question-actions"><button type="button" id="previous" class="button text-button" ${index === 0 ? 'disabled' : ''}>← Anterior</button><div class="question-actions-right">${!answered ? '<button type="button" id="skip" class="button text-button">Saltar</button><button type="submit" id="check" class="button primary" disabled>Comprobar</button>' : `<button type="button" id="next" class="button primary">${index === session.length-1 ? 'Ver resultado' : 'Siguiente →'}</button>`}</div></div>
    </form><p class="keyboard-note">Selecciona una opción con Tab y las flechas. Pulsa Enter para comprobar.</p>`;
  $('#previous').addEventListener('click', () => goTo(index - 1));
  if (!answered) {
    $('#answer-form').addEventListener('change', () => { $('#check').disabled = false; });
    $('#answer-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const selected = $('#answer-form input:checked');
      if (!selected || answers.has(q.id)) return;
      answers.set(q.id, selected.value); render(); $('#next').focus();
    });
    $('#skip').addEventListener('click', next);
  } else $('#next').addEventListener('click', next);
}
function next() { if (index === session.length-1) showResults(); else goTo(index+1); }
function goTo(i) {
  if (i < 0 || i >= session.length) return;
  index = i; resultVisible = false; render();
  $('#question-title').focus({preventScroll:true});
  if (window.matchMedia('(max-width:680px)').matches) $('#study').scrollIntoView({behavior:'instant',block:'start'});
}
function renderResults() {
  const {correct, wrong, unanswered} = counts();
  const review = session.filter(q => answers.get(q.id) !== q.answer);
  const complete = unanswered === 0;
  $('#study').innerHTML = `<p class="eyebrow">${complete ? 'SESIÓN COMPLETADA' : 'RESULTADO DE TU SESIÓN'}</p><h2 class="result-title" tabindex="-1" id="result-title">${complete ? 'Cada pregunta cuenta.' : 'Así vas hasta ahora.'}</h2><p class="intro">${complete ? 'Tu repaso, pregunta a pregunta.' : 'Puedes seguir practicando donde lo dejaste.'}</p>
    <div class="score">${correct}<span> / ${session.length}</span></div><p class="result-caption">aciertos según la clave del PDF · ${Math.round(correct/session.length*100)} % del total</p>
    <div class="result-summary"><span><strong>${correct}</strong> aciertos</span><span><strong>${wrong}</strong> errores</span><span><strong>${unanswered}</strong> sin responder</span></div>
    <p class="result-notice">Las soluciones contradictorias del documento se conservan y se señalan en cada pregunta.</p>
    <div class="result-actions"><button id="continue" class="button primary">${complete ? 'Volver al test' : 'Seguir practicando →'}</button>${review.length ? `<button id="retry" class="button secondary">Repasar ${review.length} pendientes</button>` : ''}<button id="new-session" class="button secondary">Nuevo test aleatorio</button></div>
    <h3 class="review-heading">${review.length ? 'Para tu próximo repaso' : '¡Todas respondidas según la clave!'}</h3>
    <div class="review-list">${review.length ? review.map(q => `<button class="review-item" data-index="${session.indexOf(q)}"><span>${String(session.indexOf(q)+1).padStart(2,'0')}</span><span>${escapeHTML(q.text)}<small>${answers.has(q.id) ? 'Respuesta fallada' : 'Sin responder'} · Original PDF ${q.id}</small></span></button>`).join('') : '<p class="empty-review">Has completado todo el recorrido. Puedes volver a mezclar para practicar otra vez.</p>'}</div>`;
  $('#continue').addEventListener('click', () => {const pending = session.findIndex(q => !answers.has(q.id));goTo(pending >= 0 ? pending : index);});
  if ($('#retry')) $('#retry').addEventListener('click', () => { startSession(review); $('#question-title').focus({preventScroll:true}); });
  $('#new-session').addEventListener('click', requestRestart);
  $('#study').querySelectorAll('.review-item').forEach(button => button.addEventListener('click', () => goTo(Number(button.dataset.index))));
}
function showResults() {resultVisible = true; render(); $('#result-title').focus({preventScroll:true});}
function render() {renderPanel(); if (resultVisible) renderResults(); else renderQuestion();}
function requestRestart() {if (answers.size) $('#restart-dialog').showModal(); else startSession();}
$('#restart').addEventListener('click', requestRestart);
$('#results').addEventListener('click', showResults);
$('#cancel-restart').addEventListener('click', () => $('#restart-dialog').close());
$('#confirm-restart').addEventListener('click', () => {$('#restart-dialog').close();startSession();$('#question-title').focus({preventScroll:true});});
startSession();
