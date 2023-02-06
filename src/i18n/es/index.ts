import type { Translation } from '../i18n-types';

const es: Translation = {
	log: `Este log fue llamado desde '{fileName:string}'`,
	SIDEBAR: {
		SKIP_NAVIGATION: 'saltar navegación',
		SAVED_CHATS: {
			NEW_CHAT_BUTTON: 'Nuevo chat',
			NEW_CHAT_NAME: 'Nuevo chat',
			EMPTY_STATE: 'No se pudo cargar el historial'
		},
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
	TOASTS: {
		CHAT_ALREADY_SAVED: 'Chat ya guardado.',
		CHAT_CREATED: 'Chat creado',
		CHAT_DELETED: 'Chat borrado',
		CHAT_RENAMED: 'Chat renombrado',
		CHAT_NOT_RENAMED: 'No se renombró el chat'
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
		TITLE: 'MagicPen',
		EXAMPLES: {
			TITLE: 'Ejemplos',
			ITEMS: [
				'"/di My favorite programming language is CSS"',
				'"/corrige You is very intelligent"',
				'"/traduce Artificial intelligence will dominate the world"'
			]
		},
		CAPABILITIES: {
			TITLE: 'Capacidades',
			ITEMS: [
				'Funciona cuando JavaScript está deshabilitado.',
				'Escriba / en el chat para abrir los comandos especiales.',
				'Presione ⌘K para abrir la paleta de comandos y explorar las opciones.'
			]
		},
		LIMITATIONS: {
			TITLE: 'Limitaciones',
			ITEMS: [
				'Ocasionalmente puede generar información incorrecta.',
				'Ocasionalmente puede no funcionar. Actualice la página.',
				'Ocasionalmente puede faltar alguna funcionalidad.'
			]
		}
	},
	CHAT: {
		EMPTY_STATE: 'Estado vacío',
		INPUT_LABEL: 'Mensaje rápido',
		SEND_BUTTON: 'Enviar mensaje',
		ERROR_MESSAGES: {
			EMPTY_MESSAGE: 'No puedes enviar un mensaje vacío.'
		},
		COMMANDS: {
			SAY: { description: 'Generar audio mediante mensaje', command: '/di' },
			GENERATE: { description: 'Generar mensaje mediante sugerencia', command: '/genera' },
			COMPLETE: { description: 'Completar mensaje con contenido faltante', command: '/completa' },
			SUMMARIZE: { description: 'Resumir mensaje', command: '/resume' },
			FIX: { description: 'Corregir errores del mensaje', command: '/corrige' },
			TRANSLATE: { description: 'Traducir mensaje a inglés/español', command: '/traduce' },
			DETECT: { description: 'Detectar el idioma del mensaje', command: '/detecta' }
		}
	},
	PLAYGROUND: {
		INPUT: {
			LABEL: 'Entrada',
			PLACEHOLDER:
				'Escriba un texto como "Dame una idea para un nuevo reality show" y haz clic en Ejecutar. También puede elegir uno de nuestros ejemplos para comenzar.'
		},
		OUTPUT: {
			LABEL: 'Salida',
			PLACEHOLDER:
				'El texto generado tendrá unas 300 palabras por defecto. Para controlar la longitud, cámbiela en Parámetros.'
		},
		SETTINGS: {
			PARAMETERS: 'Parámetros',
			MODEL: {
				LABEL: 'Modelo',
				DESCRIPTION:
					'Elija el modelo que desea utilizar para la generación. Los modelos de referencia se ordenan de los modelos más pequeños a los más grandes. Los modelos pequeños son más rápidos, mientras que los modelos grandes tienen una mejor comprensión del lenguaje y son más capaces de capturar y replicar los patrones en el input prompt.'
			},
			NUMBER_OF_WORDS: {
				LABEL: 'Número de palabras',
				DESCRIPTION:
					'Determina cuánto texto generar. 3 tokens es aproximadamente 1 palabra. Los tokens suelen ser partes de palabras, pero también pueden ser una palabra completa o puntuación.'
			},
			RANDOMNESS: {
				LABEL: 'Aleatoriedad',
				DESCRIPTION:
					'Controle el aspecto de aleatoriedad de los tokens que el modelo elige para la salida. El valor de 1 es un buen punto de partida para experimentarZ. Los valores más bajos se utilizan en tareas con una respuesta "correcta" (por ejemplo, respuesta a preguntas o resumen). Los valores más altos permiten que el modelo genere resultados más "creativos".',
				SUBTITLE: 'Temperatura'
			},
			STOP_SEQUENCE: {
				LABEL: 'Secuencia de detención',
				DESCRIPTION:
					"Una secuencia de dentención interrumpirá su generación al final de la secuencia. Para saltos de línea use '\\n'",
				SUBTITLE: 'Escribe y presiona tab o enter'
			},
			ADVANCED_PARAMETERS: 'Parámetros Avanzados',
			TOP_K: {
				LABEL: 'Top-K',
				DESCRIPTION:
					'Al elegir tokens de salida, considere solo este número de tokens que tienen los puntajes de probabilidad de salida más altos. 0 significa que top-k no se usa para seleccionar tokens de salida.'
			},
			TOP_P: {
				LABEL: 'Top-P',
				DESCRIPTION:
					'Seleccione dinámicamente la cantidad de tokens a considerar. Esos son los tokens cuyas probabilidades se suman al valor top-p. Si tanto top-k como top-p están habilitados, top-p actúa después de top-k.'
			},
			FREQUENCY_PENALTY: {
				LABEL: 'Penalización por frecuencia',
				DESCRIPTION:
					'El valor predeterminado de 0, valor máximo de 1,0. Se puede utilizar para reducir la repetitividad de los tokens generados. Cuanto mayor sea el valor, más fuerte se aplica una penalización a los tokens previamente presentes, proporcional a la cantidad de veces que ya han aparecido en el mensaje o en la generación anterior.'
			},
			PRESENCE_PENALTY: {
				LABEL: 'Penalización por sequencia',
				DESCRIPTION:
					'Valor predeterminado de 0, valor máximo de 1,0. Se puede utilizar para reducir la repetitividad de los tokens generados. Similar a penalización_por_frecuencia, excepto que esta penalización se aplica por igual a todos los tokens que ya han aparecido, independientemente de sus frecuencias exactas.'
			},
			SHOW_LIKELIHOOD: {
				LABEL: 'Mostrar probabilidad',
				DESCRIPTION: 'Muestra la probabilidad de cada token en el texto generado.'
			},
			BUTTON: {
				IDLE: 'Ejecutar',
				LOADING: 'Cargando'
			}
		}
	}
};

export default es;
