import { describe, it, expect } from 'vitest';
import { getMessagePosition } from '$lib/utils';

const messages1 = [
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID()
	}
];

const messages2 = [
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: true,
		id: crypto.randomUUID()
	}
];

const messages3 = [
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: true,
		id: crypto.randomUUID()
	},
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: true,
		id: crypto.randomUUID()
	},
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: true,
		id: crypto.randomUUID()
	},
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID()
	}
];

const messages4 = [
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID()
	},
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID()
	},
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID()
	},
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: true,
		id: crypto.randomUUID()
	}
];

describe('get message position', () => {
	it('returns "undefined" when there is only one message not sent by current user', () => {
		expect(getMessagePosition(messages1, 0)).toBe(undefined);
	});
	it('returns "undefined" when there is only one message sent by current user', () => {
		expect(getMessagePosition(messages2, 0)).toBe(undefined);
	});
	it('returns "top" for the first one when there are more than one message sent by current user', () => {
		expect(getMessagePosition(messages3, 0)).toBe('top');
	});
	it('returns "top" for the first one when there are more than one message not sent by current user', () => {
		expect(getMessagePosition(messages4, 0)).toBe('top');
	});
	it('returns "middle" for the second one when there are more than two message sent by current user', () => {
		expect(getMessagePosition(messages3, 1)).toBe('middle');
	});
	it('returns "middle" for the second one when there are more than two message not sent by current user', () => {
		expect(getMessagePosition(messages4, 1)).toBe('middle');
	});
	it('returns "bottom" for the last one when there are more than two message sent by current user', () => {
		expect(getMessagePosition(messages3, 2)).toBe('bottom');
	});
	it('returns "bottom" for the last one when there are more than two message not sent by current user', () => {
		expect(getMessagePosition(messages4, 2)).toBe('bottom');
	});
	it('returns "undefined" for the last one when there are more than two message sent by current user', () => {
		expect(getMessagePosition(messages3, 3)).toBe(undefined);
	});
	it('returns "undefined" for the last one when there are more than two message not sent by current user', () => {
		expect(getMessagePosition(messages4, 3)).toBe(undefined);
	});
});
