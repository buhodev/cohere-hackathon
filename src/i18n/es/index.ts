import type { Translation } from '../i18n-types';

const es: Translation = {
	log: `Este log fue llamado desde '{fileName:string}'`,
	SIDEBAR: {
		SKIP_NAVIGATION: 'saltar navegación',
		HOME: 'Inicio',
		CHAT: 'Chat',
		PLAYGROUND: 'Área de pruebas',
		OPEN_SIDEBAR: 'Abrir panel lateral',
		CLOSE_SIDEBAR: 'Cerrar panel lateral',
		LOCALES: {
			DESCRIPTION: 'Cambiar idioma',
			en: 'English',
			es: 'Español'
		}
	},
	COMMAND_PALETTE: {
		INPUT_PLACEHOLDER: 'Buscar...',
		RECENT_SEARCHES: {},
		QUICK_ACTIONS: {
			TOGGLE_DARK_MODE: 'Alternar modo oscuro',
			CHANGE_LANGUAGE: 'Cambiar idioma a inglés',
			CONFETTI: 'Confeti',
			GO_HOME: 'Ir a inicio',
			GO_TO_CHAT: 'Ir al chat',
			GO_TO_PLAYGROUND: 'Ir al área de pruebas'
		},
		EMPTY_STATE:
			'No pudimos encontrar ningún elemento con ese término. Por favor intenta de nuevo.',
		JUMP_TO: 'Navegar...'
	},
	HOME: {
		HI: 'Bienvenido a SvelteKit',
		DESCRIPTION: 'Visita <>kit.svelte.dev<> para leer la documentación'
	},
	CHAT: {
		EMPTY_STATE: 'Estado vacío',
		INPUT_LABEL: 'Mensaje rápido',
		SEND_BUTTON: 'Enviar mensaje',
		ERROR_MESSAGES: {
			EMPTY_MESSAGE: 'No puedes enviar un mensaje vacío.'
		}
	},
	PLAYGROUND: {
		SETTINGS: {
			PARAMETERS: 'Parámetros',
			MODEL: 'Modelo',
			NUMBER_OF_WORDS: 'Número de palabras',
			RANDOMNESS: {
				LABEL: 'Aleatoriedad',
				SUBTITLE: 'Temperatura'
			},
			STOP_SEQUENCE: {
				LABEL: 'Secuencia de detención',
				SUBTITLE: 'Escribe y presiona tab o enter'
			},
			ADVANCED_PARAMETERS: 'Parámetros Avanzados',
			TOP_K: 'Top-K',
			TOP_P: 'Top-P',
			FREQUENCY_PENALTY: 'Penalización por frecuencia',
			PRESENCE_PENALTY: 'Penalización por sequencia',
			SHOW_LIKELIHOOD: 'Mostrar probabilidad',
			BUTTON: {
				IDLE: 'Ejecutar',
				LOADING: 'Cargando'
			}
		}
	}
};

export default es;
