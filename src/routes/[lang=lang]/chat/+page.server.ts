import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import getCohereResponse from './getCohereResponse';
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

		if (messages.at(-1)?.type === 'say') {
			reply.message.body = messages.at(-1)?.message.body.replace('/say ', '');
		} else {
			reply.message.body = await getCohereResponse(messages.at(-1).message.body);
		}
		messages = messages.concat(reply);
	}

	return { messages, example };
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message');
		const commands =
			/^(\/say)|^(\/di)^(\/generate)|^(\/genera)^(\/complete)|^(\/completa)^(\/summarize)|^(\/resume)^(\/fix)|^(\/corrige)^(\/translate)|^(\/traduce)^(\/detect)|^(\/detecta)/;

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
