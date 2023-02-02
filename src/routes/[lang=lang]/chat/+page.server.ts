import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import getCohereResponse from './getCohereResponse';

let messages = [
	{
		message: {
			body: 'Hi, how can I help you?',
			sentAt: new Date()
		},
		me: false,
		id: crypto.randomUUID()
	}
];

export const load = (async () => {
	if (messages.at(-1)?.me) {
		const text = await getCohereResponse(messages.at(-1).message.body);

		const reply = {
			message: {
				body: text,
				sentAt: new Date()
			},
			me: false,
			id: crypto.randomUUID()
		};

		messages = messages.concat(reply);
	}

	return { messages };
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message');

		if (!message) {
			return fail(400, {
				error: true,
				status: "You can't send and empty message.",
				message
			});
		}

		messages = messages.concat({
			message: {
				body: message.toString(),
				sentAt: new Date()
			},
			me: true,
			id: crypto.randomUUID()
		});

		return {
			success: true
		};
	}
};
