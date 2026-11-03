'use strict';
(() => {
  const q = s => document.querySelector(s), audio = q('#audio');
  let url, lines = [], cursor = 0, history = [];
  const status = message => { q('#status').textContent = message; };
  const snapshot = () => { history.push(JSON.stringify({ lines, cursor })); q('#result').value = ''; };
  // Keep whitespace in tokens so joining words reproduces the exact source line.
  function tokenize(text) { return text.match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]\s*|[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\s]+\s*/gu) || []; }
  function render() {
    q('#line-count').textContent = `${Math.min(cursor + 1, lines.length)} / ${lines.length}`;
    const line = lines[cursor];
    q('#tokens').replaceChildren(); q('#tap-translation').textContent = line?.translation || '';
    if (!line) { q('#tokens').textContent = lines.length ? '打点完成，可导出 / Finished. Ready to export.' : '先载入歌词 / Load lyrics first'; return; }
    q('#tokens').append(...line.tokens.map((word, i) => {
      const span = document.createElement('span'); span.textContent = word;
      span.className = i < line.marks.length ? 'marked' : i === line.marks.length ? 'next' : ''; return span;
    }));
  }
  q('#file').addEventListener('change', () => {
    audio.pause(); if (url) URL.revokeObjectURL(url);
    const file = q('#file').files[0]; if (!file) return;
    url = URL.createObjectURL(file); audio.src = url;
    lines.forEach(line => { line.marks = []; delete line.end; }); cursor = 0; history = []; q('#result').value = ''; render();
    status('音频已在本地载入，时间轴已重置。 / Loaded locally. Timing reset.');
  });
  q('#load').addEventListener('click', () => {
    lines = q('#lyrics').value.split(/\r?\n/).map(value => value.trim()).filter(Boolean).map(value => {
      const separator = value.indexOf('|');
      const text = (separator < 0 ? value : value.slice(0, separator)).trim();
      return { text, translation: separator < 0 ? '' : value.slice(separator + 1).trim(), tokens: tokenize(text), marks: [] };
    }).filter(line => line.tokens.length);
    audio.pause(); audio.currentTime = 0; cursor = 0; history = []; q('#result').value = ''; render(); q('#tap-area').focus();
    status('播放后，在打轴区按空格。 / Play, then press Space in the timing area.');
  });
  function mark() {
    const line = lines[cursor]; if (!line) return;
    if (audio.paused || !url) { status('请先播放音频。 / Play the audio first.'); return; }
    if (line.marks.length >= line.tokens.length) { status('按 Enter 记录句尾。 / Press Enter to mark the line end.'); return; }
    const previous = line.marks.at(-1) ?? lines[cursor - 1]?.end ?? -1;
    if (audio.currentTime <= previous) { status('打点必须在上一个时间点之后。 / Marks must move forward in time.'); return; }
    snapshot(); line.marks.push(audio.currentTime); render();
  }
  function nextLine() {
    const line = lines[cursor]; if (!line) return;
    if (line.marks.length !== line.tokens.length || audio.currentTime <= line.marks.at(-1)) {
      status('先给每个字打点，再在句尾按 Enter。 / Mark every word, then press Enter at the end.'); return;
    }
    snapshot(); line.end = audio.currentTime; cursor++; render();
  }
  q('#tap').addEventListener('click', mark); q('#next-line').addEventListener('click', nextLine);
  q('#tap-area').addEventListener('keydown', event => {
    if (event.repeat || event.target.closest('button')) return;
    if (event.code === 'Space' || event.key === 'Enter') { event.preventDefault(); if (event.key === 'Enter') nextLine(); else mark(); }
  });
  q('#undo').addEventListener('click', () => {
    if (!history.length) return;
    const prior = JSON.parse(history.pop()); lines = prior.lines; cursor = prior.cursor; q('#result').value = ''; render();
    status('已回退。可拖动音频进度再打点。 / Undone. Seek the audio and mark again.');
  });
  q('#reset').addEventListener('click', () => {
    snapshot(); lines.forEach(line => { line.marks = []; delete line.end; }); cursor = 0; audio.pause(); audio.currentTime = 0; render();
  });
  q('#slow').addEventListener('change', event => { audio.playbackRate = event.target.checked ? .5 : 1; });
  const format = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  function progress() {
    q('#progress').value = audio.duration ? audio.currentTime / audio.duration : 0;
    q('#position').textContent = `${format(audio.currentTime)} / ${format(Number.isFinite(audio.duration) ? audio.duration : 0)}`;
  }
  ['timeupdate','loadedmetadata','seeked'].forEach(type => audio.addEventListener(type, progress));
  audio.addEventListener('error', () => status('浏览器无法读取这份音频，请换一种格式。 / This audio format could not be read.'));
  q('#export').addEventListener('click', () => {
    const bpm = Number(q('#bpm').value);
    if (!lines.length || lines.some(line => line.marks.length !== line.tokens.length || !line.end) || bpm < 30 || bpm > 240 || !q('#title').value.trim()) {
      status('请完成所有句子的打点，并填写曲名与有效 BPM。 / Finish all line timings and enter a title and valid BPM.'); return;
    }
    const filename = q('#file').files[0]?.name;
    const track = { id: `demo-${Date.now()}`, title: q('#title').value.trim(), artist: q('#artist').value.trim(), palette: ['#3b2a94','#c4307c','#ec6a5e'], audio: filename ? `audio/${filename}` : null, bpm,
      lines: lines.map(line => ({ start: line.marks[0], end: line.end, text: line.text, translation: line.translation,
        words: line.tokens.map((text, i) => ({ start: line.marks[i], end: line.marks[i + 1] ?? line.end, text })) })) };
    q('#result').value = JSON.stringify(track, null, 2);
    status('已导出一个曲目对象。请放入 tracks.json 数组，并核对音频路径。 / Exported one track object. Add it to the tracks.json array and check its audio path.');
  });
  q('#copy').addEventListener('click', async () => {
    if (!q('#result').value) return;
    try { await navigator.clipboard.writeText(q('#result').value); status('已复制 / Copied'); }
    catch (_) { q('#result').focus(); q('#result').select(); status('请按 Command+C 或 Ctrl+C 复制。 / Press Command+C or Ctrl+C to copy.'); }
  });
  window.addEventListener('pagehide', () => { audio.pause(); if (url) URL.revokeObjectURL(url); });
  render();
})();
