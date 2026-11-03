'use strict';
const COPY = {
  zh: {
    demoLabel:"可操作的余音演示，空格播放或暂停",playerLabel:"演示播放器，方向键移动",originalDemo:"演示曲目",previous:"上一首",next:"下一首",seek:"播放进度",resize:"缩放歌词卡片，方向键调整",startDemo:"▶ 播放，感受一下 / Play to feel it",demoLoading:"正在准备一点微光…",demoReady:"原创合成配乐 · 点击后开启声音",demoError:"暂时无法播放，请再试一次。",simulationNote:"这是网页演示，App 里的效果更细腻。 / A web demo. Finer in the app.",
    pageTitle:'余音 Linger · 让歌词，在桌面上多停留一会儿。', description:'免费的 macOS 桌面歌词工具。封面流光、逐字跟唱，让歌词在桌面上多停留一会儿。支持 macOS 14 及以上。',
    brand:'Linger', skip:'跳到功能介绍', language:'English', languageLabel:'Switch to English', nav:'语言选择', features:'功能介绍', name:'余音', tagline:'让歌词，在桌面上多停留一会儿。', eyebrow:'为桌面留一束光 · macOS', download:'免费下载 · macOS 14+', mobile:'请在 Mac 上下载', requirements:'需要 macOS 14 或更高版本，Apple 芯片和 Intel 均可', discover:'往下，慢慢听',
    demoTrack:'A Little Light · Linger', line0:'The evening settles on the street', line1:'We carry a little light', line2:'And let it lead us home', translation0:'夜色落在窗边', translation1:'我们携着一点微光', translation2:'让它带我们回家',
    colorLabel:'颜色', colorTitle:'封面决定颜色。', colorBody:'让封面的色彩缓缓流动。每一首歌，都有自己的光。', paletteLabel:'选择演示封面色板', amber:'暮色品红', blue:'深海青蓝', rose:'余烬橙金', paletteHint:'点一张色板，换一种心情',
    wordLabel:'节奏', wordTitle:'逐字跟唱。', wordBody:'有逐字时间轴的歌词，跟着声音一字字亮起。翻译也在，一起读懂。', replay:'↻ 再听一遍',
    pauseLabel:'留白', pauseTitle:'暂停时，悄悄散去。', pauseBody:'音乐停下，歌词从边缘轻轻消散。再按播放，微光重新凝聚。', pause:'Ⅱ 暂停', play:'▷ 播放', playing:'正在播放 · 试试暂停', paused:'已暂停 · 留一点安静', dissolveLabel:'暂停时从边缘向中心溶解的歌词卡片',
    placeLabel:'位置', placeTitle:'放在哪，都行。', placeBody:'拖动、缩放，浮在最前或留在桌面层。锁定穿透，让歌词安静陪伴。', moveLabel:'演示歌词卡片，方向键移动，Shift 加方向键缩放', desktop:'桌面层', top:'浮在最前', unlocked:'未锁定', locked:'已锁定穿透', size:'大小', dragHint:'拖动卡片 · 拖右下角缩放 · 也支持方向键',
    detailsLabel:'还有一些，刚刚好的细节', detailsTitle:'小小的余音，细细地打磨。', details:['XDR 屏幕上的 HDR 高亮','每首歌单独记住时间偏移','不对就手动换歌词，同时搜索 LRCLIB 和网易云','歌词本地缓存，断网也能看听过的歌','开机启动','自动更新'],
    playersLabel:'你的播放器，你的习惯', playersTitle:'音乐照常，歌词在旁。', players:['网易云音乐','Spotify','Apple Music'], playersBody:'网易云音乐不需要额外权限；Spotify 和 Apple Music 可以选择授权以获得更精准的进度。',
    faqLabel:'关于余音', faqTitle:'你可能想知道。', questions:['免费吗？','歌词从哪来？','隐私？','为什么不在 Mac App Store？','怎么卸载？'], answers:['目前完全免费。','来自第三方歌词源 LRCLIB 和网易云音乐，余音本身不提供歌词内容，也可能有找不到或不准的情况。','不需要账号，没有统计分析；查询歌词时，会把当前歌曲的歌名、歌手、专辑和时长发给歌词源。','因为读取网易云音乐的播放状态需要的能力，App Store 不允许。','退出后把 App 拖进废纸篓。'],
    closing:'让下一首歌，有个落脚的地方。', copyright:'© 2026 Linger', releases:'版本发布', feedback:'问题反馈', legal:'Linger 是独立开发的工具，与 Apple、Spotify、网易云音乐没有关联，相关商标归各自所有者所有。'
  },
  en: {
    demoLabel:"Interactive Linger demo. Space to play or pause.",playerLabel:"Demo player. Arrow keys to move.",originalDemo:"Demo track",previous:"Previous track",next:"Next track",seek:"Playback position",resize:"Resize lyrics card with arrow keys",startDemo:"▶ 播放，感受一下 / Play to feel it",demoLoading:"Gathering a little light…",demoReady:"Original synthesized music · click to turn on sound",demoError:"Unable to play just now. Please try again.",simulationNote:"A web demo. Finer in the app. / 这是网页演示，App 里的效果更细腻。",
    pageTitle:'Linger — Let the lyrics stay a little longer.', description:'A free desktop lyrics companion for macOS. Album-inspired color and word-by-word lyrics. Let the lyrics stay a little longer. Requires macOS 14+.',
    brand:'Linger', skip:'Skip to features', language:'中文', languageLabel:'切换到中文', nav:'Language selection', features:'Features', name:'Linger', tagline:'Let the lyrics stay a little longer.', eyebrow:'A little light for your desktop · macOS', download:'Free download · macOS 14+', mobile:'Please download on a Mac', requirements:'Requires macOS 14 or later. For Apple silicon and Intel.', discover:'Stay a moment. Scroll a little.',
    demoTrack:'A Little Light · Linger', line0:'The evening settles on the street', line1:'We carry a little light', line2:'And let it lead us home', translation0:'夜色落在窗边', translation1:'我们携着一点微光', translation2:'让它带我们回家',
    colorLabel:'Color', colorTitle:'Every cover casts a light.', colorBody:'Colors from the artwork flow gently behind the words. A different glow for every song.', paletteLabel:'Choose a demo artwork palette', amber:'Dusk magenta', blue:'Deep sea blue', rose:'Ember gold', paletteHint:'Pick a palette. Change the mood.',
    wordLabel:'Rhythm', wordTitle:'Follow every word.', wordBody:'Lyrics with word-level timing light up in step with the voice. With translations, meaning follows along.', replay:'↻ Play it again',
    pauseLabel:'Stillness', pauseTitle:'Pause. Let it drift away.', pauseBody:'When the music stops, the lyrics dissolve gently from the edges. Press play, and the light gathers again.', pause:'Ⅱ Pause', play:'▷ Play', playing:'Playing · try pausing', paused:'Paused · a moment of quiet', dissolveLabel:'A lyrics card that dissolves from its edges toward the center when paused',
    placeLabel:'Space', placeTitle:'Make a little room.', placeBody:'Drag it, resize it, keep it on top or at desktop level. Lock it for click-through, and let the lyrics keep you company.', moveLabel:'Demo lyrics card. Arrow keys move; Shift and arrow keys resize.', desktop:'Desktop level', top:'Always on top', unlocked:'Unlocked', locked:'Click-through locked', size:'Size', dragHint:'Drag to move · resize from the corner · arrow keys work too',
    detailsLabel:'The little things, considered', detailsTitle:'Small companion. Thoughtful details.', details:['HDR highlights on XDR displays','A separate timing offset remembered for every song','Manually replace lyrics, searching both LRCLIB and NetEase','Locally cached lyrics for songs you have heard, even offline','Launch at login','Automatic updates'],
    playersLabel:'Your players. Your routine.', playersTitle:'Your music, with words beside it.', players:['NetEase Cloud Music','Spotify','Apple Music'], playersBody:'NetEase Cloud Music needs no additional permissions. You can optionally authorize Spotify and Apple Music for more precise playback progress.',
    faqLabel:'About Linger', faqTitle:'A few things to know.', questions:['Is it free?','Where do the lyrics come from?','What about privacy?','Why not the Mac App Store?','How do I uninstall it?'], answers:['Completely free for now.','Lyrics come from third-party sources, LRCLIB and NetEase Cloud Music. Linger does not provide lyrics itself. Some lyrics may be missing or inaccurate.','No account, no analytics. When looking up lyrics, the current song title, artist, album, and duration are sent to the lyrics sources.','Reading NetEase Cloud Music’s playback state requires capabilities that the App Store does not allow.','Quit Linger, then drag the app to the Trash.'],
    closing:'A place for your next song to stay.', copyright:'© 2026 Linger', releases:'Releases', feedback:'Report an issue', legal:'Linger is an independently developed tool and is not affiliated with Apple, Spotify, or NetEase Cloud Music. All trademarks belong to their respective owners.'
  }
};
let language = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
try { const saved = localStorage.getItem('linger-language'); if (saved === 'en' || saved === 'zh') language = saved; } catch (_) { /* Storage is optional. */ }
const $ = (s) => document.querySelector(s);
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = motion.matches;
let paused = false, heroClock = 0, wordClock = 0;
const t = (key) => COPY[language][key];
function list(selector, values) { const el = $(selector); el.replaceChildren(...values.map(value => { const li = document.createElement('li'); li.textContent = value; return li; })); }
function setLanguage() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('description');
  document.querySelector('meta[property="og:title"]').content = t('pageTitle');
  document.querySelector('meta[property="og:description"]').content = t('description');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  $('#language').textContent = t('language'); $('#language').setAttribute('aria-label', t('languageLabel'));
  $('nav').setAttribute('aria-label', t('nav')); $('#features').setAttribute('aria-label', t('features'));
  list('#detail-list', t('details')); list('#player-list', t('players'));
  $('#faq-list').replaceChildren(...t('questions').map((question, i) => { const details = document.createElement('details'); const summary = document.createElement('summary'); summary.textContent = question; const p = document.createElement('p'); p.textContent = t('answers')[i]; details.append(summary, p); return details; }));
  $('#word-line').replaceChildren(...t('line1').split(' ').map(word => { const span = document.createElement('span'); span.textContent = word; return span; }));
  $('#card-size').setAttribute('aria-label', t('size'));
  $('#layer-toggle').textContent = t(onTop ? 'top' : 'desktop'); $('#lock-toggle').textContent = t(locked ? 'locked' : 'unlocked');
  updatePause(); drawDissolve(); renderWords(); document.dispatchEvent(new Event("linger-language"));
}
$('#language').addEventListener('click', () => { language = language === 'zh' ? 'en' : 'zh'; try { localStorage.setItem('linger-language', language); } catch (_) { /* No persistent storage needed. */ } setLanguage(); });
function renderWords() {
  const progress = (wordClock % 6) / 5;
  $('#word-line').querySelectorAll('span').forEach((span, i, all) => span.classList.toggle('active', reduced || progress >= i / all.length));
  document.querySelectorAll('.timeline i').forEach((el, i, all) => el.style.setProperty('--fill', `${Math.max(0, Math.min(1, progress * all.length - i)) * 100}%`));
}
$('#replay').addEventListener('click', () => { wordClock = 0; renderWords(); });
const palettes = [['#3b2a94','#c4307c','#ec6a5e'],['#123f8f','#0e8f9c','#6a5be0'],['#a83a22','#e39a2d','#7c2a66']];
let palette = 0, paletteCurrent = palettes[0].map(rgb), paletteTarget = palettes[0].map(rgb);
function rgb(hex) { return [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255); }
document.querySelectorAll('[data-palette]').forEach(button => button.addEventListener('click', () => {
  palette = Number(button.dataset.palette); paletteTarget = palettes[palette].map(rgb);
  document.querySelectorAll('[data-palette]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  if (reduced) paletteCurrent = paletteTarget.map(c => [...c]);
  paintPalette(0.08); drawAurora(heroClock);
}));
function paintPalette(blend) {
  paletteCurrent.forEach((c,i) => c.forEach((v,j) => { c[j] += (paletteTarget[i][j]-v)*blend; }));
  paletteCurrent.forEach((c,i) => { document.documentElement.style.setProperty(`--palette-${'abc'[i]}`, `rgb(${c.map(v=>Math.round(v*255)).join(',')})`); });
}
// Port of Aurora.metal: smoothed value noise, three octaves and a slow orbital warp.
const aurora = $('#aurora'); let gl, program, uniforms;
function initGL() {
  try {
    gl = aurora.getContext('webgl', { alpha:false, antialias:false, powerPreference:'low-power' }); if (!gl) return;
    const vertex = 'attribute vec2 a; varying vec2 uv; void main(){uv=(a+1.0)*.5;gl_Position=vec4(a,0.,1.);}';
    const fragment = `precision mediump float; varying vec2 uv; uniform float time; uniform vec2 size; uniform vec3 a,b,c;
    float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+1.),f.x),f.y);}
    float field(vec2 p){return noise(p)*.64+noise(p*1.83+4.7)*.26+noise(p*3.1)*.1;}
    void main(){vec2 p=vec2(uv.x,1.-uv.y);p.x=(p.x-.5)*min(size.x/size.y,1.8)+.5;float phase=time*.19;vec2 orbit=vec2(sin(phase),cos(phase))*.55;vec2 warp=vec2(field(p*1.65+orbit),field(p*1.65+8.3-orbit))-.5;vec2 q=p+warp*.32;float n=field(q*1.7+orbit*.5);vec3 color=mix(mix(a,b,smoothstep(.1,.7,q.x)),mix(c,b*.55,smoothstep(.2,.9,q.y)),n);color=mix(color,c,smoothstep(.5,.9,n)*.3);float vignette=1.-smoothstep(.1,.9,length(uv-.5));gl_FragColor=vec4(color*(.3+vignette*.42),1.);}`;
    const compile = (type,source) => { const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error('Shader compilation failed');return shader; };
    program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error('Shader link failed');gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);const attr=gl.getAttribLocation(program,'a');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
    uniforms=Object.fromEntries(['time','size','a','b','c'].map(key=>[key,gl.getUniformLocation(program,key)]));
  } catch (_) { gl=null; aurora.style.display='none'; }
}
function drawAurora(time) {
  if (!gl || gl.isContextLost()) return;
  const rect=aurora.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,1.25);
  if (!rect.width || !rect.height) return;
  const w=Math.max(1,Math.round(rect.width*dpr)),h=Math.max(1,Math.round(rect.height*dpr));
  if(aurora.width!==w||aurora.height!==h){aurora.width=w;aurora.height=h;gl.viewport(0,0,w,h);}
  gl.uniform1f(uniforms.time,reduced?0:time*.4);gl.uniform2f(uniforms.size,w,h);
  ['a','b','c'].forEach((key,i)=>gl.uniform3fv(uniforms[key],paletteCurrent[i]));gl.drawArrays(gl.TRIANGLES,0,3);
}
aurora.addEventListener('webglcontextlost', event=>{event.preventDefault();aurora.style.display='none';});
aurora.addEventListener('webglcontextrestored',()=>{initGL();aurora.style.display='';drawAurora(heroClock);});
const dissolve=$('#dissolve'), ctx=dissolve.getContext('2d');
const plate=document.createElement('canvas'), plateCtx=plate.getContext('2d');
const mask=document.createElement('canvas'), maskCtx=mask.getContext('2d');
let dissolveAmount=0, noiseData, maskImage;
function hash(x,y){const n=Math.sin(x*127.1+y*311.7)*43758.5453;return n-Math.floor(n);}
function noise(x,y){const ix=Math.floor(x),iy=Math.floor(y);let fx=x-ix,fy=y-iy;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);return (hash(ix,iy)*(1-fx)+hash(ix+1,iy)*fx)*(1-fy)+(hash(ix,iy+1)*(1-fx)+hash(ix+1,iy+1)*fx)*fy;}
function field(x,y){return noise(x,y)*.64+noise(x*1.83+4.7,y*1.83+4.7)*.26+noise(x*3.1,y*3.1)*.1;}
function drawDissolve() {
  if(!ctx||!plateCtx||!maskCtx)return;
  const width=400,height=180;
  if(dissolve.width!==width){[dissolve,plate,mask].forEach(c=>{c.width=width;c.height=height;});noiseData=new Float32Array(width*height);maskImage=maskCtx.createImageData(width,height);for(let y=0;y<height;y++)for(let x=0;x<width;x++){const edge=1-Math.max(Math.abs((x-200)/180),Math.abs((y-90)/64));noiseData[y*width+x]=Math.max(0,Math.min(1,edge*.78+field(x/28,y/28)*.22));}}
  plateCtx.clearRect(0,0,width,height);const gradient=plateCtx.createLinearGradient(35,20,365,160);gradient.addColorStop(0,'rgba(255,255,255,.2)');gradient.addColorStop(1,'rgba(255,255,255,.06)');plateCtx.fillStyle=gradient;plateCtx.beginPath();plateCtx.roundRect(24,22,352,132,16);plateCtx.fill();plateCtx.strokeStyle='rgba(255,255,255,.22)';plateCtx.stroke();plateCtx.fillStyle='#ece9f4';plateCtx.font='10px -apple-system, sans-serif';plateCtx.fillText(t('demoTrack'),47,50);plateCtx.fillStyle='#f1f6e8';plateCtx.font='21px -apple-system, sans-serif';plateCtx.fillText(t('line1'),47,89);plateCtx.fillStyle='#bbc8bc';plateCtx.font='12px -apple-system, sans-serif';plateCtx.fillText(t('translation1'),47,116);
  ctx.clearRect(0,0,width,height);
  if(reduced){ctx.globalAlpha=1-dissolveAmount;ctx.drawImage(plate,0,0);ctx.globalAlpha=1;return;}
  ctx.drawImage(plate,0,0);
  if(dissolveAmount>0){const data=maskImage.data;for(let i=0;i<noiseData.length;i++){const alpha=dissolveAmount>=.999?0:Math.max(0,Math.min(1,(noiseData[i]-dissolveAmount)/.025+.5));data[i*4]=255;data[i*4+1]=255;data[i*4+2]=255;data[i*4+3]=Math.round(alpha*255);}maskCtx.putImageData(maskImage,0,0);ctx.globalCompositeOperation='destination-in';ctx.drawImage(mask,0,0);ctx.globalCompositeOperation='source-over';}
}
function updatePause(){ $('#play-toggle').textContent=t(paused?'play':'pause');$('#play-toggle').setAttribute('aria-pressed',String(paused));$('#pause-status').textContent=t(paused?'paused':'playing'); }
$('#play-toggle').addEventListener('click',()=>{paused=!paused;updatePause();});
let locked=false,onTop=false,cardX=0,cardY=0,cardScale=1;
const movable=$('#movable-card'), placement=$('#placement-demo');
function placeCard(){const w=placement.clientWidth,h=210;const cw=movable.offsetWidth*cardScale,ch=movable.offsetHeight*cardScale;const originX=w*.15+(movable.offsetWidth-cw)/2,originY=43+(movable.offsetHeight-ch)/2;cardX=Math.max(8-originX,Math.min(w-8-cw-originX,cardX));cardY=Math.max(8-originY,Math.min(h-ch-originY,cardY));movable.style.transform=`translate(${cardX}px,${cardY}px) scale(${cardScale})`;$('#card-size').value=String(Math.round(cardScale*100));}
$('#layer-toggle').addEventListener('click',event=>{onTop=!onTop;placement.classList.toggle('on-top',onTop);event.currentTarget.textContent=t(onTop?'top':'desktop');event.currentTarget.setAttribute('aria-pressed',String(onTop));});
$('#lock-toggle').addEventListener('click',event=>{locked=!locked;placement.classList.toggle('locked',locked);event.currentTarget.textContent=t(locked?'locked':'unlocked');event.currentTarget.setAttribute('aria-pressed',String(locked));movable.tabIndex=locked?-1:0;$('#card-size').disabled=locked;});
$('#card-size').addEventListener('input',event=>{cardScale=Number(event.target.value)/100;placeCard();});
let drag=null;
movable.addEventListener('pointerdown',event=>{if(locked||event.button!==0)return;drag={x:event.clientX,y:event.clientY,startX:cardX,startY:cardY,scale:cardScale,resize:event.target.classList.contains('resize-grip')};movable.setPointerCapture(event.pointerId);});
movable.addEventListener('pointermove',event=>{if(!drag)return;if(drag.resize){cardScale=Math.max(.75,Math.min(1.15,drag.scale+(event.clientX-drag.x)/300));}else{cardX=drag.startX+event.clientX-drag.x;cardY=drag.startY+event.clientY-drag.y;}placeCard();});
['pointerup','pointercancel','lostpointercapture'].forEach(type=>movable.addEventListener(type,()=>{drag=null;}));
movable.addEventListener('keydown',event=>{if(locked||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();if(event.shiftKey){cardScale=Math.max(.75,Math.min(1.15,cardScale+(['ArrowUp','ArrowRight'].includes(event.key)?.025:-.025)));}else{cardX+=(event.key==='ArrowLeft'?-8:event.key==='ArrowRight'?8:0);cardY+=(event.key==='ArrowUp'?-8:event.key==='ArrowDown'?8:0);}placeCard();});
const visible=new Set();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)visible.add(entry.target.id);else visible.delete(entry.target.id);});schedule();},{threshold:0});
['interactive-demo','color-demo','word-demo','dissolve-demo'].forEach(id=>observer.observe(document.getElementById(id)));
let frame=0,last=0,activeTime=0;
function schedule(){if(!document.hidden&&visible.size&&!frame)frame=requestAnimationFrame(tick);}
function tick(now){frame=0;if(document.hidden||!visible.size){last=0;return;}if(now-last<1000/30){schedule();return;}const dt=last?Math.min((now-last)/1000,.1):0;last=now;activeTime+=dt;
  const changing=paletteCurrent.some((c,i)=>c.some((v,j)=>Math.abs(v-paletteTarget[i][j])>.001));
  if(changing&&(visible.has('color-demo')||visible.has('interactive-demo')))paintPalette(reduced?1:.07);
  if(visible.has('interactive-demo')&&(!reduced||changing))drawAurora(activeTime);
  if(visible.has('word-demo')&&!reduced){wordClock+=dt;renderWords();}
  if(visible.has('dissolve-demo')){const target=paused?1:0;const difference=target-dissolveAmount;if(Math.abs(difference)>.001){dissolveAmount+=Math.sign(difference)*Math.min(Math.abs(difference),dt/(reduced?.45:1.3));drawDissolve();}}
  // Reduced-motion pages only need frames while a user-triggered fade is in progress.
  if(!reduced||changing||Math.abs((paused?1:0)-dissolveAmount)>.001)schedule();
}
$('#play-toggle').addEventListener('click',schedule);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;last=0;}else schedule();});
motion.addEventListener('change',event=>{reduced=event.matches;drawAurora(activeTime);renderWords();drawDissolve();schedule();});
const mobileLayout=matchMedia('(max-width: 700px)');
function updateDownloads(){document.querySelectorAll('a.download,.closing a').forEach(link=>{if(!link.dataset.downloadUrl)link.dataset.downloadUrl=link.getAttribute('href');if(mobileLayout.matches){link.removeAttribute('href');link.removeAttribute('tabindex');}else link.setAttribute('href',link.dataset.downloadUrl);});}
mobileLayout.addEventListener('change',updateDownloads);
window.addEventListener('resize',()=>{placeCard();drawAurora(activeTime);});
updateDownloads();
setLanguage();initGL();drawAurora(0);placeCard();schedule();
