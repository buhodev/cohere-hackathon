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
