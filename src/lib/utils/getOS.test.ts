import { describe, it, expect } from 'vitest';
import { getOS } from '$lib/utils';

describe('get os', () => {
	it('returns "undetermined" when it does not recognize the os', () => {
		expect(getOS()).toBe('undetermined');
	});
});
