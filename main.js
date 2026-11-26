'use strict';
const COPY = {
  en: {
    pageTitle: 'Linger — Let the lyrics stay a little longer.',
    description: 'A native macOS desktop lyrics companion with album-inspired aurora, word-by-word sync, and XDR HDR glow. 14-day free trial, then $4.99 one-time purchase.',
    skip: 'Skip to features',
    brand: 'Linger',
    menuBarBrand: '● \u00a0 Linger',
    navFeatures: 'Features',
    navPlayground: 'Playground',
    navPricing: 'Pricing',
    navFaq: 'FAQ',
    navDownload: 'Download',
    eyebrow: 'Linger 1.0 · Native for macOS 14+',
    headline: 'Let the lyrics stay a little longer.',
    subheadline: 'A featherlight macOS desktop lyrics companion with album-inspired aurora, word-by-word sync, and XDR HDR glow.',
    download: 'Download 14-Day Free Trial',
    mobile: 'Download on Mac',
    heroBuy: 'Buy Pro — $4.99',
    requirements: 'macOS 14 or later · Apple silicon & Intel · One-time purchase, no subscription',
    sceneWarm: 'Album Aurora',
    sceneCool: 'Deep Sea Mood',
    sceneMenubar: 'Menu Bar Panel',
    sceneSettings: '1.0 Settings',
    sceneCaptions: {
      warm: 'Colors extracted from the current album cover flow gently behind crisp, word-by-word lyrics.',
      cool: 'Adapts naturally to Chinese, Japanese, and English tracks with clean typography and subtle depth.',
      menubar: 'One-click heart to favorite the current track, search alternate lyrics, or fine-tune per-song timing offset.',
      settings: 'Redesigned 1.0 Settings with a frosted macOS sidebar, live dark preview stage, and adaptive light or dark mode.'
    },
    featuresLabel: 'Crafted for macOS',
    featuresTitle: 'Every detail tuned to stay out of your way.',
    featuresSub: 'Built natively in Swift and Metal so lyrics feel like part of macOS itself.',
    bento: [
      { icon: 'aurora', title: 'Album-Inspired Aurora', body: 'A custom Metal shader extracts a smooth, living color palette from every track’s cover art.' },
      { icon: 'sparkle', title: 'Word-by-Word & XDR HDR', body: 'Syllable-level lyrics illuminate in step with the voice, with true HDR brilliance on XDR Mac displays.' },
      { icon: 'dissolve', title: 'Dissolves on Pause', body: 'When music pauses, the lyrics card melts gently away from the edges—and gathers back when you hit play.' },
      { icon: 'layers', title: 'Desktop or Always on Top', body: 'Drag anywhere, resize freely, pin to your desktop layer, lock for click-through, and fade cleanly on hover.' },
      { icon: 'heart', title: 'Like, Search & Timing Offset', body: 'Favorite songs from the menu bar (synced to Apple Music), switch lyrics sources, and save per-song offsets.' },
      { icon: 'bolt', title: 'Native & Featherlight', body: 'Under 3% CPU while playing and 0% when idle. Offline local cache remembers lyrics for songs you have played.' }
    ],
    playgroundLabel: 'Interactive Playground',
    playgroundTitle: 'Try the physics right in your browser.',
    playgroundSub: 'Play an original synthesized track, drag the lyrics card, lock click-through, or pause to watch it dissolve.',
    demoLabel: 'Interactive Linger playground. Press Space to play or pause.',
    playerLabel: 'Demo music player',
    originalDemo: 'Original synthesized preview',
    previous: 'Previous track',
    next: 'Next track',
    seek: 'Playback progress',
    resize: 'Resize lyrics card',
    startDemo: '▶ Play interactive preview',
    demoLoading: 'Preparing audio preview…',
    demoReady: 'Original synthesized preview · Click to play with sound',
    demoError: 'Audio preview unavailable right now. Please try again.',
    simulationNote: 'WebGL preview rendered in your browser. The native macOS app adds Metal shaders and XDR HDR highlights.',
    pause: 'Pause',
    play: 'Play',
    desktop: 'Desktop level',
    top: 'Always on top',
    unlocked: 'Unlocked',
    locked: 'Locked',
    playersLabel: 'Your Players',
    playersTitle: 'Plays along with your music.',
    players: ['Apple Music', 'Spotify', 'NetEase Cloud Music'],
    playersBody: 'NetEase Cloud Music works right away with no extra permissions. Optionally grant Automation access for Spotify and Apple Music for tighter playback sync.',
    pricingLabel: 'Pricing',
    pricingTitle: 'Pay once. Keep it forever.',
    pricingSub: 'Start with a full-featured 14-day free trial. No credit card required to download.',
    pricingBadge: 'Lifetime License',
    pricingName: 'Linger Pro',
    pricingPrice: '$4.99',
    pricingOnce: 'USD · one-time',
    pricingItems: [
      'Full-featured 14-day free trial',
      'One-time payment — no subscription',
      'Activate on up to 3 Macs',
      'Free updates included',
      'One-click activation after checkout',
      '14-day instant self-service refund'
    ],
    buyPro: 'Buy Linger Pro — $4.99',
    tryFree: 'Download 14-Day Trial',
    pricingNote: 'Secure checkout powered by Stripe (Card & Apple Pay). Instant license key delivery.',
    faqLabel: 'FAQ',
    faqTitle: 'Questions, answered.',
    questions: [
      'How does the free trial and license work?',
      'How do refunds work?',
      'Where do the lyrics come from?',
      'What about privacy?',
      'Why isn’t Linger on the Mac App Store?',
      'How do I move my license to a new Mac?'
    ],
    answers: [
      'Download Linger and use every feature free for 14 days. Afterward, a one-time $4.99 USD license unlocks Linger permanently on up to 3 Macs with free updates and no recurring fees.',
      'Within 14 days of purchase, open our Self-Service Refund page (linked in the footer and inside Settings › About), enter your license key and purchase email, and Stripe issues an automatic full refund immediately.',
      'Lyrics are fetched directly by your Mac from third-party sources (LRCLIB and NetEase Cloud Music) and cached locally. Linger does not host or sell lyrics itself.',
      'No account is required. “Share anonymous usage stats” is on by default—update checks send a random install ID plus app and macOS version with no IP stored, and you can disable it anytime in Settings › General.',
      'Reading playback state from players like NetEase Cloud Music requires macOS capabilities that Mac App Store sandboxing does not permit. Linger is notarized directly by Apple.',
      'Open Linger › Settings › License on your old Mac and click “Deactivate This Mac” to free up that activation slot, then enter your license key on your new Mac.'
    ],
    closing: 'Give your next song a place to linger.',
    closingSub: 'Try every feature free for 14 days on macOS 14 or later.',
    copyright: '© 2026 Linger',
    refundLink: 'Self-Service Refund',
    releases: 'Releases',
    feedback: 'Support & Issues',
    legal: 'Linger is an independently developed macOS app and is not affiliated with Apple, Spotify, or NetEase Cloud Music. All trademarks belong to their respective owners.'
  },
  zh: {
    pageTitle: '余音 Linger — 让歌词，在桌面上多停留一会儿。',
    description: '原生 macOS 桌面歌词伴侣。随封面流淌的极光背景、逐字高亮与 XDR HDR 辉光。14 天全功能免费试用，一次性买断 $4.99。',
    skip: '跳到功能介绍',
    brand: '余音',
    menuBarBrand: '● \u00a0 余音',
    navFeatures: '特性',
    navPlayground: '在线体验',
    navPricing: '定价',
    navFaq: '常见问题',
    navDownload: '免费试用',
    eyebrow: '余音 1.0 · 原生支持 macOS 14+',
    headline: '让歌词，在桌面上多停留一会儿。',
    subheadline: '为 macOS 精雕细琢的桌面歌词伴侣。随专辑封面流淌的极光背景、逐字跟唱与 XDR HDR 辉光，安静陪伴每一首歌。',
    download: '免费试用 14 天',
    mobile: '请在 Mac 上下载',
    heroBuy: '一次性买断 — $4.99',
    requirements: '需要 macOS 14 或更高版本 · 支持 Apple 芯片与 Intel · 一次买断，无订阅',
    sceneWarm: '封面流光',
    sceneCool: '深海微光',
    sceneMenubar: '菜单栏面板',
    sceneSettings: '1.0 全新设置',
    sceneCaptions: {
      warm: '实时提取正在播放歌曲的专辑封面色板，让极光在细腻的逐字歌词背后缓缓流动。',
      cool: '自然适配中英日文歌词与双语翻译，清晰的字体层次与柔和景深，久看不累。',
      menubar: '在菜单栏一键红心喜欢当前歌曲、手动搜索替换歌词，或为每首歌单独保存时间偏移。',
      settings: '1.0 全新重设计的左侧毛玻璃设置窗口，内置暗色桌面预览舞台，完整适配浅色与深色模式。'
    },
    featuresLabel: '原生体验',
    featuresTitle: '每一处细节，都恰到好处。',
    featuresSub: '基于 Swift 与 Metal 原生打造，轻盈、克制，像 macOS 自带的一样自然。',
    bento: [
      { icon: 'aurora', title: '封面决定流光', body: '自定义 Metal 着色器实时提取每张专辑封面的主色调，让每首歌在桌面上拥有独一无二的光晕。' },
      { icon: 'sparkle', title: '逐字跟唱与 XDR HDR', body: '支持逐字时间轴歌词随歌声逐字点亮，并在支持 XDR 的 Mac 屏幕上呈现柔和的 HDR 辉光。' },
      { icon: 'dissolve', title: '暂停时悄悄散去', body: '音乐停下，歌词卡片从边缘缓缓溶解消散；重新按下播放，微光再次凝聚。' },
      { icon: 'layers', title: '置顶或留在桌面层', body: '自由拖动与缩放，支持留在桌面层或浮在最前，开启锁定后鼠标点击完全穿透，悬停自动淡出。' },
      { icon: 'heart', title: '一键喜欢与单曲偏移', body: '菜单栏一键喜欢当前歌曲（Apple Music 同步标为喜爱），支持手动换歌词与每首歌独立时间偏移。' },
      { icon: 'bolt', title: '极致轻盈与离线缓存', body: '播放时 CPU 占用低于 3%，静置时接近 0%。听过的歌词自动本地缓存，断网也能正常显示。' }
    ],
    playgroundLabel: '在线试听体验',
    playgroundTitle: '在浏览器里先感受一下。',
    playgroundSub: '播放内置原创合成配乐，试试拖动歌词卡片、锁定穿透或点击暂停看边缘溶解。',
    demoLabel: '可交互的余音在线体验，按空格播放或暂停',
    playerLabel: '演示播放器',
    originalDemo: '原创合成配乐试听',
    previous: '上一首',
    next: '下一首',
    seek: '播放进度',
    resize: '缩放歌词卡片',
    startDemo: '▶ 点击播放，感受一下',
    demoLoading: '正在准备音频试听…',
    demoReady: '原创合成配乐 · 点击后开启声音',
    demoError: '暂时无法播放音频试听，请稍后重试。',
    simulationNote: '此处为网页版 WebGL 模拟效果；原生 macOS 客户端支持更细腻的 Metal 流光与 XDR HDR 高亮。',
    pause: '暂停',
    play: '播放',
    desktop: '桌面层',
    top: '浮在最前',
    unlocked: '未锁定',
    locked: '已锁定',
    playersLabel: '兼容播放器',
    playersTitle: '音乐照常，歌词在旁。',
    players: ['Apple Music', 'Spotify', '网易云音乐'],
    playersBody: '网易云音乐开箱即用，无需额外权限；Spotify 与 Apple Music 可按需开启自动化授权，获得更精准的播放进度同步。',
    pricingLabel: '简单定价',
    pricingTitle: '一次买断，没有订阅。',
    pricingSub: '先完整免费试用 14 天，下载无需绑定银行卡。',
    pricingBadge: '终身许可',
    pricingName: 'Linger Pro',
    pricingPrice: '$4.99',
    pricingOnce: '美元 · 一次性买断',
    pricingItems: [
      '14 天全功能免费试用',
      '一次性付费，永久使用，无需订阅',
      '最多可在 3 台 Mac 上激活',
      '包含后续版本免费更新',
      '付款后一键唤起 App 自动激活',
      '14 天全自动自助退款保障'
    ],
    buyPro: '购买 Linger Pro — $4.99',
    tryFree: '下载 14 天免费试用',
    pricingNote: '由 Stripe 安全收款（支持银行卡与 Apple Pay）。付款后立即获得激活码。',
    faqLabel: '常见问题',
    faqTitle: '你可能想知道。',
    questions: [
      '免费试用和买断许可怎么运作？',
      '如何申请退款？',
      '歌词来自哪里？',
      '隐私如何保障？',
      '为什么不上架 Mac App Store？',
      '换了新 Mac 怎么迁移激活码？'
    ],
    answers: [
      '下载安装即可免费体验全部功能 14 天。试用结束后，一次性支付 $4.99 美元即可获得永久许可，最多同时激活 3 台 Mac，无任何订阅续费。',
      '购买后 14 天内，随时打开页脚或 App「设置 › 关于」里的自助退款页面，输入激活码和购买邮箱，系统会通过 Stripe 自动全额原路退款并停用激活码。',
      '歌词由你的 Mac 直接向第三方歌词源（LRCLIB 与网易云音乐）查询并缓存在本地。余音本身不托管也不售卖歌词内容。',
      '无需注册账号。“共享匿名使用统计”默认开启，仅在检查更新时附带随机安装 ID 及 App/系统版本号（不保存 IP），可在「设置 › 通用」中随时关闭。',
      '读取网易云音乐等播放器的播放状态需要 Mac App Store 沙盒机制不允许的系统能力。余音已通过 Apple 官方开发者签名与公证，可放心安装。',
      '在旧 Mac 上打开「设置 › 许可」点击“在此 Mac 上停用”释放名额，即可在新 Mac 上重新输入激活码使用。'
    ],
    closing: '让下一首歌，有个落脚的地方。',
    closingSub: '支持 macOS 14 及以上，立即开启 14 天全功能免费试用。',
    copyright: '© 2026 余音 Linger',
    refundLink: '自助退款',
    releases: '历史版本',
    feedback: '支持与反馈',
    legal: '余音 Linger 是独立开发的 macOS 软件，与 Apple、Spotify、网易云音乐无任何关联，相关商标归各自所有者所有。'
  }
};

const ICONS = {
  aurora: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3Z"/></svg>',
  dissolve: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/></svg>',
  layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
};

const SCENES = {
  warm: { en: './assets/showcase/hero-warm-en.jpg', zh: './assets/showcase/hero-warm-zh.jpg', glowA: '#c4307c', glowB: '#e87938' },
  cool: { en: './assets/showcase/hero-cool.jpg', zh: './assets/showcase/hero-cool.jpg', glowA: '#1078b5', glowB: '#384cc8' },
  menubar: { en: './assets/showcase/menubar-en.jpg', zh: './assets/showcase/menubar-zh.jpg', glowA: '#5c42c4', glowB: '#c4307c' },
  settings: { en: './assets/showcase/settings-en.jpg', zh: './assets/showcase/settings-zh.jpg', glowA: '#9a3c88', glowB: '#3358bf' }
};

let language = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
try {
  const param = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('linger-language');
  if (param === 'en' || param === 'zh') language = param;
  else if (saved === 'en' || saved === 'zh') language = saved;
} catch (_) {}

let currentScene = 'warm';
const $ = (s) => document.querySelector(s);
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = motion.matches;
const t = (key) => COPY[language][key];

function list(selector, values) {
  const el = $(selector);
  if (!el) return;
  el.replaceChildren(...values.map(value => {
    const li = document.createElement('li');
    li.textContent = value;
    return li;
  }));
}

function renderBento() {
  const grid = $('#bento-grid');
  if (!grid) return;
  grid.replaceChildren(...t('bento').map(item => {
    const card = document.createElement('article');
    card.className = 'bento-card';
    const icon = document.createElement('div');
    icon.className = 'bento-icon';
    icon.innerHTML = ICONS[item.icon] || '';
    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    const p = document.createElement('p');
    p.textContent = item.body;
    card.append(icon, h3, p);
    return card;
  }));
}

function updateShowcase() {
  const scene = SCENES[currentScene] || SCENES.warm;
  const img = $('#showcase-img');
  if (img) {
    const nextSrc = scene[language] || scene.en;
    if (img.getAttribute('src') !== nextSrc) img.setAttribute('src', nextSrc);
    img.alt = t('sceneCaptions')[currentScene] || '';
  }
  const cap = $('#showcase-caption');
  if (cap) cap.textContent = t('sceneCaptions')[currentScene] || '';
  document.documentElement.style.setProperty('--glow-a', scene.glowA);
  document.documentElement.style.setProperty('--glow-b', scene.glowB);
  document.querySelectorAll('.showcase-tab').forEach(btn => {
    const active = btn.dataset.scene === currentScene;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });
}

function setLanguage() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('description');
  document.querySelector('meta[property="og:title"]').content = t('pageTitle');
  document.querySelector('meta[property="og:description"]').content = t('description');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = t(el.dataset.i18nAria);
    if (typeof val === 'string') el.setAttribute('aria-label', val);
  });
  $('#language').setAttribute('aria-checked', String(language === 'zh'));
  renderBento();
  list('#player-list', t('players'));
  list('#pricing-list', t('pricingItems'));
  $('#faq-list').replaceChildren(...t('questions').map((question, i) => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = question;
    const p = document.createElement('p');
    p.textContent = t('answers')[i];
    details.append(summary, p);
    return details;
  }));
  updateShowcase();
  document.dispatchEvent(new Event('linger-language'));
}

$('#language').addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('linger-language', language); } catch (_) {}
  setLanguage();
});

document.querySelectorAll('.showcase-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    currentScene = btn.dataset.scene;
    updateShowcase();
  });
});

// Helpers shared with site/demo/demo.js for the optional interactive WebGL playground
const palettes = [['#3b2a94', '#c4307c', '#ec6a5e'], ['#123f8f', '#0e8f9c', '#6a5be0'], ['#a83a22', '#e39a2d', '#7c2a66']];
function rgb(hex) { return [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255); }
let paletteCurrent = palettes[0].map(rgb), paletteTarget = palettes[0].map(rgb);
function paintPalette(blend) {
  paletteCurrent.forEach((c, i) => c.forEach((v, j) => { c[j] += (paletteTarget[i][j] - v) * blend; }));
  paletteCurrent.forEach((c, i) => { document.documentElement.style.setProperty(`--palette-${'abc'[i]}`, `rgb(${c.map(v => Math.round(v * 255)).join(',')})`); });
}
function hash(x, y) { const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return n - Math.floor(n); }
function noise(x, y) { const ix = Math.floor(x), iy = Math.floor(y); let fx = x - ix, fy = y - iy; fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy); return (hash(ix, iy) * (1 - fx) + hash(ix + 1, iy) * fx) * (1 - fy) + (hash(ix, iy + 1) * (1 - fx) + hash(ix + 1, iy + 1) * fx) * fy; }
function field(x, y) { return noise(x, y) * .64 + noise(x * 1.83 + 4.7, y * 1.83 + 4.7) * .26 + noise(x * 3.1, y * 3.1) * .1; }

const aurora = $('#aurora');
let gl, program, uniforms, demoVisible = false, frame = 0, last = 0, activeTime = 0;
function initGL() {
  if (!aurora) return;
  try {
    gl = aurora.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;
    const vertex = 'attribute vec2 a; varying vec2 uv; void main(){uv=(a+1.0)*.5;gl_Position=vec4(a,0.,1.);}';
    const fragment = `precision mediump float; varying vec2 uv; uniform float time; uniform vec2 size; uniform vec3 a,b,c;
    float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+1.),f.x),f.y);}
    float field(vec2 p){return noise(p)*.64+noise(p*1.83+4.7)*.26+noise(p*3.1)*.1;}
    void main(){vec2 p=vec2(uv.x,1.-uv.y);p.x=(p.x-.5)*min(size.x/size.y,1.8)+.5;float phase=time*.19;vec2 orbit=vec2(sin(phase),cos(phase))*.55;vec2 warp=vec2(field(p*1.65+orbit),field(p*1.65+8.3-orbit))-.5;vec2 q=p+warp*.32;float n=field(q*1.7+orbit*.5);vec3 color=mix(mix(a,b,smoothstep(.1,.7,q.x)),mix(c,b*.55,smoothstep(.2,.9,q.y)),n);color=mix(color,c,smoothstep(.5,.9,n)*.3);float vignette=1.-smoothstep(.1,.9,length(uv-.5));gl_FragColor=vec4(color*(.3+vignette*.42),1.);}`;
    const compile = (type, source) => { const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader); if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Shader compile failed'); return shader; };
    program = gl.createProgram(); gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex)); gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment)); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Shader link failed');
    gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const attr = gl.getAttribLocation(program, 'a'); gl.enableVertexAttribArray(attr); gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
    uniforms = Object.fromEntries(['time', 'size', 'a', 'b', 'c'].map(key => [key, gl.getUniformLocation(program, key)]));
  } catch (_) { gl = null; aurora.style.display = 'none'; }
}
function drawAurora(time) {
  if (!gl || gl.isContextLost()) return;
  const rect = aurora.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.25);
  if (!rect.width || !rect.height) return;
  const w = Math.max(1, Math.round(rect.width * dpr)), h = Math.max(1, Math.round(rect.height * dpr));
  if (aurora.width !== w || aurora.height !== h) { aurora.width = w; aurora.height = h; gl.viewport(0, 0, w, h); }
  gl.uniform1f(uniforms.time, reduced ? 0 : time * .4); gl.uniform2f(uniforms.size, w, h);
  ['a', 'b', 'c'].forEach((key, i) => gl.uniform3fv(uniforms[key], paletteCurrent[i])); gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function schedule() { if (!document.hidden && demoVisible && !frame) frame = requestAnimationFrame(tick); }
function tick(now) {
  frame = 0; if (document.hidden || !demoVisible) { last = 0; return; }
  if (now - last < 1000 / 30) { schedule(); return; }
  const dt = last ? Math.min((now - last) / 1000, .1) : 0; last = now; activeTime += dt;
  const changing = paletteCurrent.some((c, i) => c.some((v, j) => Math.abs(v - paletteTarget[i][j]) > .001));
  if (changing) paintPalette(reduced ? 1 : .07);
  if (!reduced || changing) drawAurora(activeTime);
  if (!reduced || changing) schedule();
}
if ($('#interactive-demo')) {
  new IntersectionObserver(entries => { demoVisible = entries[0].isIntersecting; schedule(); }, { threshold: 0 }).observe($('#interactive-demo'));
}
document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; last = 0; } else schedule(); });
motion.addEventListener('change', event => { reduced = event.matches; drawAurora(activeTime); schedule(); });

const mobileLayout = matchMedia('(max-width: 860px)');
function updateDownloads() {
  document.querySelectorAll('a.download').forEach(link => {
    if (!link.dataset.downloadUrl) link.dataset.downloadUrl = link.getAttribute('href');
    if (mobileLayout.matches) link.removeAttribute('href');
    else link.setAttribute('href', link.dataset.downloadUrl);
  });
}
mobileLayout.addEventListener('change', updateDownloads);
window.addEventListener('resize', () => drawAurora(activeTime));
updateDownloads();
setLanguage();
initGL();
drawAurora(0);
schedule();
