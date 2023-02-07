import cohere from 'cohere-ai';
import { PRIVATE_COHERE_API_KEY } from '$env/static/private';

export async function getResponse(message: string) {
	cohere.init(PRIVATE_COHERE_API_KEY);

	const output = await cohere.generate({
		prompt: `Write a message in a frienly tone answering this text: "${message}"`,
		model: 'command-xlarge-20221108',
		max_tokens: 50,
		temperature: 0.9,
		k: 0,
		p: 0.75,
		frequency_penalty: 0,
		return_likelihoods: 'NONE'
	});

	return output.body.generations[0].text;
}

export async function getPlaygroundResponse(
	prompt: string,
	model: 'medium' | 'xlarge' | 'command-xlarge-nightly',
	max_tokens = 50,
	num_generations: 1 | 2 | 3 | 4 | 5 = 1,
	temperature = 0.75,
	k = 0,
	p = 0.75,
	frequency_penalty = 0,
	presence_penalty = 0,
	stop_sequences: string[] | [] = [],
	return_likelihoods: 'GENERATION' | 'ALL' | 'NONE' = 'NONE'
) {
	cohere.init(PRIVATE_COHERE_API_KEY);

	const output = await cohere.generate({
		prompt,
		model,
		max_tokens,
		num_generations,
		temperature,
		k,
		p,
		frequency_penalty,
		presence_penalty,
		stop_sequences,
		return_likelihoods
	});

	return output.body.generations[0].text.trim();
}
