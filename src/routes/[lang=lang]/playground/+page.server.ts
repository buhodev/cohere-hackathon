import { getPlaygroundResponse } from '$lib/server/getCohereResponse';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const {
			input,
			// output,
			model,
			number_of_words,
			temperature,
			stop_sequence,
			k,
			p,
			frequency_penalty,
			presence_penalty,
			show_likelihood
		} = Object.fromEntries(data);

		const return_likelihoods = show_likelihood ? 'GENERATION' : 'NONE';
		const stop_sequences = stop_sequence.length ? [String(stop_sequence)] : [];
		console.log(stop_sequences);

		const response = await getPlaygroundResponse(
			input.toString(),
			model.toString(),
			Number(number_of_words),
			1,
			Number(temperature),
			Number(k),
			Number(p),
			Number(frequency_penalty),
			Number(presence_penalty),
			stop_sequences,
			return_likelihoods
		);

		return {
			success: true,
			input,
			output: response
		};
	}
};
