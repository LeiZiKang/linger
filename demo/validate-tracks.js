'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const tracks = JSON.parse(fs.readFileSync(path.join(__dirname, 'tracks.json'), 'utf8'));
assert(Array.isArray(tracks) && tracks.length > 0);
const ids = new Set();
for (const track of tracks) {
  assert(track.id && !ids.has(track.id), 'Unique id required'); ids.add(track.id);
  assert(track.title && track.artist && track.bpm > 0);
  assert(track.palette.length === 3 && track.palette.every(c => /^#[0-9a-f]{6}$/i.test(c)));
  assert(track.audio === null || typeof track.audio === 'string');
  assert(track.lines.length > 0);
  let lastLine = 0;
  for (const [i, line] of track.lines.entries()) {
    const label = `${track.id} line ${i + 1}`;
    assert(Number.isFinite(line.start) && Number.isFinite(line.end) && line.start >= lastLine && line.end > line.start, label);
    assert(typeof line.translation === 'string' && line.words.length, label);
    assert.equal(line.words.map(w => w.text).join(''), line.text, `${label}: text mismatch`);
    let last = line.start;
    for (const word of line.words) {
      assert(Number.isFinite(word.start) && Number.isFinite(word.end), label);
      assert(word.start >= last && word.end > word.start && word.end <= line.end && word.start >= line.start, `${label}: nonmonotonic or out of bounds`);
      last = word.end;
    }
    lastLine = line.end;
  }
  console.log(`${track.id}: ${track.lines.length} lines, ${lastLine.toFixed(2)}s — OK`);
}
