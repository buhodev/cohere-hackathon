import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import {
	getCompletion,
	getFix,
	getGeneration,
	getLanguage,
	getResponse,
	getSummary,
	getTranslation
} from '$lib/server/getCohereResponse';
import { getCommand } from '$lib/utils';

let messages = [
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID(),
		type: 'none'
	}
];

export const load = (async ({ url }) => {
	const example = url.searchParams.get('example') ?? '';
	if (messages.at(-1)?.me) {
		const reply = {
			message: {
				body: '',
				sentAt: new Date()
			},
			me: false,
			id: crypto.randomUUID()
		};

		const type = messages.at(-1)?.type;
		const message = messages.at(-1).message.body.replace(/\/\w+/, '');

		if (type === 'say') {
			reply.message.body = messages.at(-1)?.message.body.replace('/say ', '');
		} else if (type === 'generate') {
			reply.message.body = await getGeneration(message);
		} else if (type === 'fix') {
			reply.message.body = await getFix(message);
		} else if (type === 'complete') {
			reply.message.body = await getCompletion(message);
		} else if (type === 'summarize') {
			reply.message.body = await getSummary(message);
		} else if (type === 'translate') {
			reply.message.body = await getTranslation(message);
		} else if (type === 'detect') {
			reply.message.body = await getLanguage(message);
		} else {
			reply.message.body = await getResponse(message);
		}
		messages = messages.concat(reply);
	}

	return { messages, example };
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message');
		const commands = /\/\w+/;

		if (!message) {
			return fail(400, {
				error: true,
				status: "You can't send and empty message.",
				message
			});
		}

		const command = getCommand(message?.toString());

		if (command == 'undetermined') {
			return fail(400, {
				error: true,
				status: 'Command was not recognized.',
				message
			});
		}

		messages = messages.concat({
			message: {
				body: message.toString().replace(commands, ''),
				sentAt: new Date()
			},
			me: true,
			id: crypto.randomUUID(),
			type: command
		});

		return {
			success: true
		};
	}
};
