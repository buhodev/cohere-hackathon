import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	HI: 'Welcome to SvelteKit',
	DESCRIPTION: 'Visit <>kit.svelte.dev<> to read the documentation',
	LOCALES: {
		description: 'Change language',
		en: 'English',
		es: 'Español'
	},
	log: `This log was called from '{fileName:string}'`
};

export default en;
