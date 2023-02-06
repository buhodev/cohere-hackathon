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
		TITLE: 'MagicPen',
		EXAMPLES: {
			TITLE: 'Examples',
			ITEMS: [
				'"/say My favorite programming language is CSS"',
				'"/fix You is very intelligent"',
				'"/translate Artificial intelligence will dominate the world"'
			]
		},
		CAPABILITIES: {
			TITLE: 'Capabilities',
			ITEMS: [
				'Works when JavaScript is disabled.',
				'Type / in the chat input to open the special commands.',
				'Press ⌘K to open the command palette and explore all the options.'
			]
		},
		LIMITATIONS: {
			TITLE: 'Limitations',
			ITEMS: [
				'May ocassionally generate incorrect information.',
				'May ocassionally not work. Refresh the page.',
				'May ocassionally be missing some feature.'
			]
		}
	},
	CHAT: {
		EMPTY_STATE: 'Empty State',
		INPUT_LABEL: 'Quick message',
		SEND_BUTTON: 'Send message',
		ERROR_MESSAGES: {
			EMPTY_MESSAGE: "You can't send an empty message."
		},
		COMMANDS: {
			SAY: { description: 'Generate audio from message', command: '/say' },
			GENERATE: { description: 'Generate message from prompt', command: '/generate' },
			COMPLETE: { description: 'Complete message with missing content', command: '/complete' },
			SUMMARIZE: { description: 'Summarize the message', command: '/summarize' },
			FIX: { description: 'Correct errors in the message', command: '/fix' },
			TRANSLATE: { description: 'Translate message to Spanish/English', command: '/translate' },
			DETECT: { description: "Detect message's language", command: '/detect' }
		}
	},
	PLAYGROUND: {
		INPUT: {
			LABEL: 'Input',
			PLACEHOLDER:
				'Write text such as "Give me an idea for a new reality TV show" and click Run. You can also choose one of our Examples to start.'
		},
		OUTPUT: {
			LABEL: 'Output',
			PLACEHOLDER:
				'The generated text will be around 300 words by default. To control the length, change it in Parameters.'
		},
		SETTINGS: {
			PARAMETERS: 'Parameters',
			MODEL: {
				LABEL: 'Model',
				DESCRIPTION:
					'Pick the model you want to use for generation. Baseline models are ordered from smaller models to larger ones. Small models are faster, while large models have a better grasp of language and are more able to capture and replicate the patterns in the input prompt.'
			},
			NUMBER_OF_WORDS: {
				LABEL: 'Number of words',
				DESCRIPTION:
					'Determines how much text to generate. 3 tokens is about 1 word. Tokens are often parts of words, but can also be an entire word or punctuation.'
			},
			RANDOMNESS: {
				LABEL: 'Randomness',
				DESCRIPTION:
					'Control the randomness aspect of which tokens the model picks for output. Value of 1 is a good starting point for experimentation. Lower values are used in tasks with a “correct” answer (e.g. question answering or summarization). Higher values enable the model to generate more “creative” outputs.',
				SUBTITLE: 'Temperature'
			},
			STOP_SEQUENCE: {
				LABEL: 'Stop sequence',
				DESCRIPTION:
					"A stop sequence will cut off your generation at the end of the sequence. For line breaks use '\\n'",
				SUBTITLE: 'Type and press tab or enter'
			},
			ADVANCED_PARAMETERS: 'Advanced Parameters',
			TOP_K: {
				LABEL: 'Top-K',
				DESCRIPTION:
					'When picking output tokens, consider only this number of tokens which have the highest output probability scores. 0 means top-k is not used for picking output tokens.'
			},
			TOP_P: {
				LABEL: 'Top-P',
				DESCRIPTION:
					'Dynamically select the number of tokens to consider. Those are the tokens whose probabilities add up to the top-p value. If both top-k and top-p are enabled, top-p acts after top-k.'
			},
			FREQUENCY_PENALTY: {
				LABEL: 'Frequency penalty',
				DESCRIPTION:
					'Defaults to 0.0, max value of 1.0. Can be used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.'
			},
			PRESENCE_PENALTY: {
				LABEL: 'Presence penalty',
				DESCRIPTION:
					'Defaults to 0.0, max value of 1.0. Can be used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.'
			},
			SHOW_LIKELIHOOD: {
				LABEL: 'Show likelihood',
				DESCRIPTION: 'Show the likelihood of each token in the generated text.'
			},
			BUTTON: {
				IDLE: 'Run',
				LOADING: 'Loading'
			}
		}
	}
};

export default en;
