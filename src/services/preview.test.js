import test from 'node:test';
import assert from 'node:assert/strict';
import { previewRequest } from './preview.js';
test('preview searches fictional titles and returns empty results for misses', () => {
  assert.equal(previewRequest('/search?query=ORBIT').results[0].id, 1002);
  assert.deepEqual(previewRequest('/search?query=missing').results, []);
});
test('preview details, trailer absence, sorting and invalid IDs are explicit', () => {
  assert.equal(previewRequest('/1001').title, 'Moonlight Harbor');
  assert.deepEqual(previewRequest('/1001/videos'), { results: [] });
  assert.equal(previewRequest('?sort=oldest').results[0].id, 1003);
  assert.equal(previewRequest('?sort=relevant').results[0].id, 1002);
  assert.deepEqual(previewRequest('?page=2').results, []);
  assert.throws(() => previewRequest('/9999'), /sample catalog/);
});
