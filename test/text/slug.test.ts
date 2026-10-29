import assert from 'node:assert/strict';
import test from 'node:test';
import { slugify } from '../../src/text/slug.ts';

test('slugify lowercases and joins words with single hyphens', () => {
  assert.equal(slugify('  Hello,  World!  '), 'hello-world');
});

test('slugify strips diacritics', () => {
  assert.equal(slugify('Crème Brûlée'), 'creme-brulee');
});

test('slugify returns an empty string when nothing is alphanumeric', () => {
  assert.equal(slugify('***'), '');
});
