import { describe, it, expect } from 'vitest';
import { replaceLocaleInUrl } from '$lib/utils';

const url: URL = new URL('https://mywebsite.com/en/blog/article-1');

describe('replaces the locale slug in a URL', () => {
	it('returns the full URL as a string if the "full" argument is set to true', () => {
		expect(replaceLocaleInUrl(url, 'de', true)).toBe('https://mywebsite.com/de/blog/article-1');
	});
	it('returns the URL relative to the base if the "full" parameter is not passed', () => {
		expect(replaceLocaleInUrl(url, 'de')).toBe('/de/blog/article-1');
	});
});
