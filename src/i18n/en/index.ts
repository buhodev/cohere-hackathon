import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	log: `This log was called from '{fileName:string}'`,
	SIDEBAR: {
		SKIP_NAVIGATION: 'skip navigation',
		HOME: 'Home',
		CHAT: 'Chat',
		PLAYGROUND: 'Playground',
		OPEN_SIDEBAR: 'Open sidebar',
		CLOSE_SIDEBAR: 'Close sidebar',
		LOCALES: {
			DESCRIPTION: 'Change language',
			en: 'English',
			es: 'Español'
		}
	},
	COMMAND_PALETTE: {
		INPUT_PLACEHOLDER: 'Search...',
		RECENT_SEARCHES: {},
		QUICK_ACTIONS: {
			TOGGLE_DARK_MODE: 'Toggle dark mode',
			CHANGE_LANGUAGE: 'Change language to Spanish',
			CONFETTI: 'Confetti',
			GO_HOME: 'Go home',
			GO_TO_CHAT: 'Go to chat',
			GO_TO_PLAYGROUND: 'Go to playground'
		},
		EMPTY_STATE: "We couldn't find any element with that term. Please try again.",
		JUMP_TO: 'Jump to...'
	},
	HOME: {
		HI: 'Welcome to SvelteKit',
		DESCRIPTION: 'Visit <>kit.svelte.dev<> to read the documentation'
	},
	CHAT: {
		EMPTY_STATE: 'Empty State',
		INPUT_LABEL: 'Quick message',
		SEND_BUTTON: 'Send message',
		ERROR_MESSAGES: {
			EMPTY_MESSAGE: "You can't send an empty message."
		}
	},
	PLAYGROUND: {
		SETTINGS: {
			PARAMETERS: 'Parameters',
			MODEL: 'Model',
			NUMBER_OF_WORDS: 'Number of words',
			RANDOMNESS: {
				LABEL: 'Randomness',
				SUBTITLE: 'Temperature'
			},
			STOP_SEQUENCE: {
				LABEL: 'Stop sequence',
				SUBTITLE: 'Type and press tab or enter'
			},
			ADVANCED_PARAMETERS: 'Advanced Parameters',
			TOP_K: 'Top-K',
			TOP_P: 'Top-P',
			FREQUENCY_PENALTY: 'Frequency penalty',
			PRESENCE_PENALTY: 'Presence penalty',
			SHOW_LIKELIHOOD: 'Show likelihood',
			BUTTON: {
				IDLE: 'Run',
				LOADING: 'Loading'
			}
		}
	}
};

export default en;
