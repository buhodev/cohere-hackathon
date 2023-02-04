import { describe, it, expect } from 'vitest';
import { getCommand } from '$lib/utils';

describe('get command', () => {
	it('returns "fix" when string contains /fix at the beginning', () => {
		expect(getCommand('/fix')).toBe('fix');
	});
	it('returns correct command when string contains spaces at the beginning', () => {
		expect(getCommand('   /translate')).toBe('translate');
	});
	it('returns only the command at the beginning', () => {
		expect(getCommand('/generate /say')).toBe('generate');
	});
	it('returns "undetermined" when command is not recognized', () => {
		expect(getCommand('/unrecognized-command')).toBe('undetermined');
	});
	it('returns "none" when string does not contain any command', () => {
		expect(getCommand('this string does not have any command')).toBe('none');
	});
});
