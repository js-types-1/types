import test from 'node:test';
import assert from 'node:assert/strict';
import { string } from '../lib/index.js';

test('string returns true for strings', () => {
  assert.strictEqual(string('hello'), true);
  assert.strictEqual(string(''), true);
});

test('string returns false for non-strings', () => {
  assert.strictEqual(string(42), false);
  assert.strictEqual(string(null), false);
  assert.strictEqual(string(undefined), false);
  assert.strictEqual(string([]), false);
  assert.strictEqual(string({}), false);
  assert.strictEqual(string(true), false);
});
