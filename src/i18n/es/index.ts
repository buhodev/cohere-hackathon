import type { Translation } from '../i18n-types';

const es: Translation = {
	HI: 'Bienvenido a SvelteKit',
	DESCRIPTION: 'Visita <>kit.svelte.dev<> para leer la documentación',
	LOCALES: {
		description: 'Cambiar idioma',
		en: 'English',
		es: 'Español'
	},
	log: `Este log fue llamado desde '{fileName:string}'`
};

export default es;
