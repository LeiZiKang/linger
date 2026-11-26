'use strict';
(function () {
  var lang = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  try {
    var params = new URLSearchParams(window.location.search);
    var p = params.get('lang');
    var saved = localStorage.getItem('linger-language');
    if (p === 'en' || p === 'zh') lang = p;
    else if (saved === 'en' || saved === 'zh') lang = saved;
  } catch (_) {}

  var btn = document.getElementById('language');
  function applyLang() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (btn) btn.setAttribute('aria-checked', String(lang === 'zh'));
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });
  }

  if (btn) {
    btn.addEventListener('click', function () {
      lang = lang === 'zh' ? 'en' : 'zh';
      try { localStorage.setItem('linger-language', lang); } catch (_) {}
      applyLang();
    });
  }

  applyLang();

  var dlUrl = document.body && document.body.getAttribute('data-auto-download');
  if (dlUrl) {
    var skip = false;
    try {
      skip = new URLSearchParams(window.location.search).get('nodownload') === '1';
    } catch (_) {}
    if (!skip && !window.matchMedia('(max-width: 860px)').matches) {
      window.setTimeout(function () {
        window.location.assign(dlUrl);
      }, 450);
    }
  }
})();
