'use strict';
(() => {
  const root = document.querySelector('#interactive-demo');
  const q = s => root.querySelector(s);
  const card = q('#demo-card'), player = q('#demo-player'), progress = q('#demo-progress');
  const narrow = matchMedia('(max-width: 819px)');
  let tracks = [], index = 0, started = false, locked = false, top = true, inView = false;
  let lastFrame = 0;
  let raf = 0, row = null, pausedAt = performance.now(), dissolve = 0, busy = false;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const format = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  // Both backends expose the same transport clock. The renderer never reads a second clock.
  class Transport {
    constructor() { this.offset = 0; this.playing = false; this.session = 0; }
    load(track) {
      this.pause(); this.resumingSeek = false; this.track = track; this.offset = 0;
      if (this.media) { this.media.removeAttribute('src'); this.media.load(); this.media = null; }
      if (track.audio) {
        this.media = new Audio(new URL(track.audio, new URL('./demo/tracks.json', document.baseURI)));
        this.media.preload = 'metadata';
        this.media.addEventListener('ended', () => next(1));
        this.media.addEventListener('loadedmetadata', () => { progress.max = this.duration; render(); });
        this.media.addEventListener('error', () => { this.pause(); showError(); });
      }
    }
    get duration() { return this.media && Number.isFinite(this.media.duration) ? this.media.duration : this.track.lines.at(-1).end; }
    get currentTime() { return this.media ? this.media.currentTime : Math.min(this.duration, this.offset + (this.playing ? this.ctx.currentTime - this.origin : 0)); }
    async play() {
      if (this.playing) return;
      const token = ++this.session;
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      await this.ctx.resume();
      if (token !== this.session || document.hidden) return;
      const ctx = this.ctx;
      this.bus = ctx.createGain(); this.bus.gain.setValueAtTime(0, ctx.currentTime);
      this.bus.gain.linearRampToValueAtTime(.55, ctx.currentTime + .8); this.bus.connect(ctx.destination);
      if (this.media) {
        if (!this.mediaNode || this.mediaElement !== this.media) {
          this.mediaNode = ctx.createMediaElementSource(this.media); this.mediaElement = this.media;
        }
        this.mediaNode.disconnect(); this.mediaNode.connect(this.bus);
        await this.media.play();
        if (token !== this.session) { this.media.pause(); return; }
      }
      this.origin = ctx.currentTime; this.playing = true;
      if (!this.media) {
        this.beat = Math.ceil(this.offset / (60 / this.track.bpm));
        this.schedule(); this.timer = setInterval(() => this.schedule(), 50);
      }
      this.endTimer = setInterval(() => {
        if (!this.playing) return;
        this.fadeEnd();
        if (this.currentTime >= this.duration - .005) next(1);
      }, 50);
    }
    pause(preserveSeek = false) {
      if (!preserveSeek) this.resumingSeek = false;
      ++this.session;
      if (!this.playing) return;
      this.offset = this.currentTime; this.playing = false;
      clearInterval(this.timer); clearInterval(this.endTimer);
      // Freeze the transport now; already scheduled voices have a gentle 0.8s release.
      const ctx = this.ctx, bus = this.bus;
      bus.gain.cancelScheduledValues(ctx.currentTime);
      bus.gain.setValueAtTime(bus.gain.value, ctx.currentTime);
      bus.gain.linearRampToValueAtTime(0, ctx.currentTime + .8);
      setTimeout(() => bus.disconnect(), 850);
      if (this.media) {
        const media = this.media, token = this.session;
        setTimeout(() => { if (this.session === token) media.pause(); }, 800);
      }
    }
    async seek(value) {
      const resume = this.playing || this.resumingSeek;
      this.pause(true); this.resumingSeek = resume;
      const seekToken = this.session;
      this.offset = clamp(value, 0, this.duration);
      if (this.media) { this.media.pause(); this.media.currentTime = this.offset; }
      if (resume) await this.play();
      if (this.session === seekToken + (resume ? 1 : 0)) this.resumingSeek = false;
    }
    tone(freq, when, length, volume, kind = 'sine') {
      const ctx = this.ctx, voice = ctx.createOscillator(), amp = ctx.createGain();
      voice.type = kind; voice.frequency.setValueAtTime(freq, when);
      amp.gain.setValueAtTime(0, when); amp.gain.linearRampToValueAtTime(volume, when + .025);
      amp.gain.exponentialRampToValueAtTime(.0001, when + length);
      voice.connect(amp); amp.connect(this.bus); voice.start(when); voice.stop(when + length + .02);
      voice.onended = () => { voice.disconnect(); amp.disconnect(); };
    }
    schedule() {
      const beatLength = 60 / this.track.bpm;
      while (this.beat * beatLength < Math.min(this.duration, this.currentTime + .18)) {
        const b = this.beat++, time = b * beatLength;
        const when = Math.max(this.ctx.currentTime + .005, this.origin + time - this.offset);
        const chords = index === 0 ? [[48,52,55,59],[45,48,52,55],[53,57,60,64],[43,47,50,57]] : [[45,48,52,55],[53,57,60,64],[48,52,55,59],[43,47,50,53]];
        const chord = chords[Math.floor(b / 4) % 4], hz = n => 440 * 2 ** ((n - 69) / 12);
        if (b % 4 === 0) chord.forEach((note, n) => {
          this.tone(hz(note + 12), when + n * .018, beatLength * 3.6, .035);
          this.tone(hz(note + 24), when + n * .018, beatLength * 1.5, .008);
        });
        if (b % 2 === 0) this.tone(hz(chord[0] - 12), when, beatLength * 1.5, .065);
        // A soft pitch envelope makes an original kick; filtered noise supplies the brush.
        if (b % 2 === 0) {
          const kick = this.ctx.createOscillator(), gain = this.ctx.createGain();
          kick.frequency.setValueAtTime(90, when); kick.frequency.exponentialRampToValueAtTime(38, when + .14);
          gain.gain.setValueAtTime(.065, when); gain.gain.exponentialRampToValueAtTime(.0001, when + .22);
          kick.connect(gain); gain.connect(this.bus); kick.start(when); kick.stop(when + .24);
          kick.onended = () => { kick.disconnect(); gain.disconnect(); };
        }
        if (!this.noise) {
          this.noise = this.ctx.createBuffer(1, this.ctx.sampleRate * .08, this.ctx.sampleRate);
          const data = this.noise.getChannelData(0); for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        }
        const brush = this.ctx.createBufferSource(), filter = this.ctx.createBiquadFilter(), gain = this.ctx.createGain();
        brush.buffer = this.noise; filter.type = 'highpass'; filter.frequency.value = 4800;
        gain.gain.setValueAtTime(b % 2 ? .014 : .006, when); gain.gain.exponentialRampToValueAtTime(.0001, when + .075);
        brush.connect(filter); filter.connect(gain); gain.connect(this.bus); brush.start(when);
        brush.onended = () => { brush.disconnect(); filter.disconnect(); gain.disconnect(); };
      }
    }
    fadeEnd() {
      // Both media files and synthesized tracks have the same end envelope.
      const remaining = this.duration - this.currentTime;
      if (remaining < .85 && !this.fading) {
        this.fading = true; const now = this.ctx.currentTime;
        this.bus.gain.cancelScheduledValues(now); this.bus.gain.setValueAtTime(this.bus.gain.value, now);
        this.bus.gain.linearRampToValueAtTime(0, now + Math.max(0, Math.min(.8, remaining)));
      }
    }
  }
  const clock = new Transport();
  function showError() {
    q('#demo-message').dataset.i18n = 'demoError'; q('#demo-message').textContent = t('demoError'); root.classList.remove('has-started'); busy = false;
    updateControls(); wake();
  }
  function updateControls() {
    q('#demo-play').textContent = clock.playing ? 'Ⅱ' : '▶';
    q('#demo-play').setAttribute('aria-label', t(clock.playing ? 'pause' : 'play'));
    q('#demo-lock').textContent = t(locked ? 'locked' : 'unlocked');
    q('#demo-layer').textContent = t(top ? 'top' : 'desktop');
    q('#demo-lock').setAttribute('aria-pressed', String(locked));
    q('#demo-layer').setAttribute('aria-pressed', String(top));
  }
  async function toggle() {
    if (!tracks.length || busy) return;
    busy = true;
    try {
      if (clock.playing) { clock.pause(); pausedAt = performance.now(); }
      else {
        if (clock.currentTime >= clock.duration) await clock.seek(0);
        clock.fading = false; await clock.play();
        if (clock.playing) { started = true; root.classList.add('has-started'); }
      }
    } catch (_) { clock.pause(); showError(); }
    finally { busy = false; updateControls(); wake(); }
  }
  function select(n) {
    index = (n + tracks.length) % tracks.length; clock.load(tracks[index]); clock.fading = false; row = null;
    q('#demo-title').textContent = tracks[index].title;
    q('.demo-card-title').textContent = `${tracks[index].title} · Linger`;
    paletteTarget = tracks[index].palette.map(rgb); paintPalette(reduced ? 1 : .1); schedule();
    tracks[index].palette.forEach((color, i) => root.style.setProperty(`--track-${'abc'[i]}`, color));
    progress.max = clock.duration; updateControls(); render(); wake();
  }
  async function next(delta) {
    if (!tracks.length || busy) return;
    const resume = clock.playing; busy = true;
    try { select(index + delta); if (resume) await clock.play(); else pausedAt = performance.now(); }
    catch (_) { showError(); }
    finally { busy = false; updateControls(); wake(); }
  }
  function render(dt = 1 / 60) {
    if (!tracks.length) return;
    q('#mac-time').textContent = new Date().toLocaleTimeString(language === 'zh' ? 'zh-CN' : 'en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    const time = clock.currentTime, lines = tracks[index].lines;
    const current = lines.findLast(line => time >= line.start) || lines[0];
    if (row !== current) {
      row = current; const i = lines.indexOf(row);
      q('.demo-previous').textContent = lines[i - 1]?.text || '\u00a0';
      q('.demo-following').textContent = lines[i + 1]?.text || '\u00a0';
      q('.demo-translation').textContent = row.translation;
      q('.demo-current').replaceChildren(...row.words.map(word => {
        const span = document.createElement('span'); span.textContent = word.text; return span;
      }));
    }
    [...q('.demo-current').children].forEach((span, i) => {
      const word = row.words[i], p = clamp((time - word.start) / (word.end - word.start), 0, 1);
      span.style.setProperty('--word', `${p * 100}%`);
      span.style.setProperty('--word-lift', reduced ? '0px' : `${-Math.sin(p * Math.PI) * 1.5}px`);
    });
    progress.value = time; q('#demo-time').textContent = `${format(time)} / ${format(clock.duration)}`;
    progress.setAttribute('aria-valuetext', `${format(time)} / ${format(clock.duration)}`);
    const target = clock.playing || !started || performance.now() - pausedAt < 1200 ? 0 : 1;
    dissolve += clamp(target - dissolve, -dt / .8, dt / .8);
    card.style.opacity = String(1 - dissolve);
    if (!reduced && dissolve > .001 && dissolve < .999) {
      // Reuse the feature demo's edge/noise field as a DOM mask, retaining selectable text.
      const cells = [];
      for (let y = 0; y < 16; y++) for (let x = 0; x < 40; x++) {
        const edge = 1 - Math.max(Math.abs((x - 19.5) / 20), Math.abs((y - 7.5) / 8));
        const alpha = clamp((edge * .78 + field(x / 3, y / 3) * .22 - dissolve) / .12, 0, 1);
        cells.push(`<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="white" opacity="${alpha.toFixed(2)}"/>`);
      }
      card.style.maskImage = `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" preserveAspectRatio="none">' + cells.join('') + '</svg>')}")`;
    } else card.style.maskImage = '';
    card.classList.toggle('dissolved', dissolve > .98);
  }
  function loop(now) {
    raf = 0; if (document.hidden || !inView) { lastFrame = 0; return; }
    render(lastFrame ? Math.min((now - lastFrame) / 1000, .1) : 1 / 60); lastFrame = now;
    if (clock.playing || (started && (performance.now() - pausedAt < 1200 || dissolve < 1))) raf = requestAnimationFrame(loop);
    else lastFrame = 0;
  }
  function wake() { if (!raf && !document.hidden && inView) raf = requestAnimationFrame(loop); }
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    if (inView) { if (tracks.length) { paletteTarget = tracks[index].palette.map(rgb); schedule(); } wake(); } else { cancelAnimationFrame(raf); raf = 0; }
  }).observe(root);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { clock.pause(); pausedAt = performance.now(); updateControls(); cancelAnimationFrame(raf); raf = 0; }
    else wake();
  });
  document.addEventListener('linger-language', updateControls);
  q('#demo-start').addEventListener('click', toggle); q('#demo-play').addEventListener('click', toggle);
  q('#demo-prev').addEventListener('click', () => next(-1)); q('#demo-next').addEventListener('click', () => next(1));
  progress.addEventListener('input', async () => {
    try { clock.fading = false; await clock.seek(Number(progress.value)); render(); wake(); }
    catch (_) { clock.pause(); showError(); }
  });
  root.addEventListener('keydown', event => {
    if (event.code !== 'Space' || event.target.closest('button,input,textarea,select')) return;
    event.preventDefault(); toggle();
  });
  q('#demo-lock').addEventListener('click', () => {
    locked = !locked; root.classList.toggle('card-locked', locked); card.tabIndex = locked ? -1 : 0;
    q('#demo-resize').disabled = locked; updateControls();
  });
  q('#demo-layer').addEventListener('click', () => { top = !top; root.classList.toggle('card-desktop', !top); updateControls(); });

  function constrain(el) {
    if (narrow.matches) return;
    el.style.width = `${Math.min(el.offsetWidth, root.clientWidth - 16)}px`;
    el.style.height = `${Math.min(el.offsetHeight, root.clientHeight - 48)}px`;
    el.style.left = `${clamp(el.offsetLeft, 8, root.clientWidth - el.offsetWidth - 8)}px`;
    el.style.top = `${clamp(el.offsetTop, 36, root.clientHeight - el.offsetHeight - 8)}px`;
    if (el === card) {
      card.classList.toggle('compact', card.offsetHeight < 185);
      card.style.setProperty('--lyric-size', `${clamp(card.offsetWidth / 18, 15, 32)}px`);
    }
  }
  [player, card].forEach(el => {
    let drag;
    el.addEventListener('pointerdown', event => {
      const resize = event.target.closest('#demo-resize');
      if (narrow.matches || (el === card && locked) || event.button !== 0 || (!resize && event.target.closest('button,input'))) return;
      drag = { x: event.clientX, y: event.clientY, left: el.offsetLeft, top: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight, resize };
      el.setPointerCapture(event.pointerId); event.preventDefault(); el.focus();
    });
    el.addEventListener('pointermove', event => {
      if (!drag) return;
      const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
      if (drag.resize) { el.style.width = `${clamp(drag.w + dx, 260, root.clientWidth - drag.left - 8)}px`; el.style.height = `${clamp(drag.h + dy, 108, root.clientHeight - drag.top - 8)}px`; }
      else { el.style.left = `${drag.left + dx}px`; el.style.top = `${drag.top + dy}px`; }
      constrain(el);
    });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => el.addEventListener(type, () => { drag = null; }));
    el.addEventListener('keydown', event => {
      if (narrow.matches || (el === card && locked) || !event.key.startsWith('Arrow') || (event.target !== el && event.target.id !== 'demo-resize')) return;
      event.preventDefault();
      const dx = event.key === 'ArrowRight' ? 8 : event.key === 'ArrowLeft' ? -8 : 0;
      const dy = event.key === 'ArrowDown' ? 8 : event.key === 'ArrowUp' ? -8 : 0;
      if (el === card && (event.shiftKey || event.target.id === 'demo-resize')) { el.style.width = `${Math.max(260, el.offsetWidth + dx)}px`; el.style.height = `${Math.max(108, el.offsetHeight + dy)}px`; }
      else { el.style.left = `${el.offsetLeft + dx}px`; el.style.top = `${el.offsetTop + dy}px`; }
      constrain(el);
    });
  });
  const resize = new ResizeObserver(() => { constrain(player); constrain(card); }); resize.observe(root);
  narrow.addEventListener('change', () => { constrain(player); constrain(card); });
  fetch('./demo/tracks.json').then(response => { if (!response.ok) throw new Error('Track data'); return response.json(); }).then(data => {
    tracks = data; select(0); q('#demo-start').disabled = false; q('#demo-message').dataset.i18n = 'demoReady'; q('#demo-message').textContent = t('demoReady');
  }).catch(showError);
})();

// Hover fade only after the pointer genuinely moves onto the card and rests there, so the
// click on "Play" (which lands on the card) never greets people with half-visible lyrics.
(() => {
  const card = document.getElementById('demo-card');
  if (!card) return;
  let timer = 0, pressed = false;
  const clear = () => { clearTimeout(timer); timer = 0; card.classList.remove('is-faded'); };
  card.addEventListener('pointermove', (event) => {
    if (pressed || event.buttons || timer || card.classList.contains('is-faded')) return;
    timer = setTimeout(() => { timer = 0; if (!pressed) card.classList.add('is-faded'); }, 450);
  });
  card.addEventListener('pointerdown', () => { pressed = true; clear(); });
  window.addEventListener('pointerup', () => { pressed = false; });
  card.addEventListener('pointerleave', clear);
  card.addEventListener('focusin', clear);
})();
