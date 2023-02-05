// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * T​h​i​s​ ​l​o​g​ ​w​a​s​ ​c​a​l​l​e​d​ ​f​r​o​m​ ​'​{​f​i​l​e​N​a​m​e​}​'
	 * @param {string} fileName
	 */
	log: RequiredParams<'fileName'>
	SIDEBAR: {
		/**
		 * s​k​i​p​ ​n​a​v​i​g​a​t​i​o​n
		 */
		SKIP_NAVIGATION: string
		/**
		 * H​o​m​e
		 */
		HOME: string
		/**
		 * C​h​a​t
		 */
		CHAT: string
		/**
		 * P​l​a​y​g​r​o​u​n​d
		 */
		PLAYGROUND: string
		/**
		 * O​p​e​n​ ​s​i​d​e​b​a​r
		 */
		OPEN_SIDEBAR: string
		/**
		 * C​l​o​s​e​ ​s​i​d​e​b​a​r
		 */
		CLOSE_SIDEBAR: string
		LOCALES: {
			/**
			 * C​h​a​n​g​e​ ​l​a​n​g​u​a​g​e
			 */
			DESCRIPTION: string
			/**
			 * E​n​g​l​i​s​h
			 */
			en: string
			/**
			 * E​s​p​a​ñ​o​l
			 */
			es: string
		}
	}
	COMMAND_PALETTE: {
		/**
		 * S​e​a​r​c​h​.​.​.
		 */
		INPUT_PLACEHOLDER: string
		RECENT_SEARCHES: {
		}
		QUICK_ACTIONS: {
			/**
			 * T​o​g​g​l​e​ ​d​a​r​k​ ​m​o​d​e
			 */
			TOGGLE_DARK_MODE: string
			/**
			 * C​h​a​n​g​e​ ​l​a​n​g​u​a​g​e​ ​t​o​ ​S​p​a​n​i​s​h
			 */
			CHANGE_LANGUAGE: string
			/**
			 * C​o​n​f​e​t​t​i
			 */
			CONFETTI: string
			/**
			 * G​o​ ​h​o​m​e
			 */
			GO_HOME: string
			/**
			 * G​o​ ​t​o​ ​c​h​a​t
			 */
			GO_TO_CHAT: string
			/**
			 * G​o​ ​t​o​ ​p​l​a​y​g​r​o​u​n​d
			 */
			GO_TO_PLAYGROUND: string
		}
		/**
		 * W​e​ ​c​o​u​l​d​n​'​t​ ​f​i​n​d​ ​a​n​y​ ​e​l​e​m​e​n​t​ ​w​i​t​h​ ​t​h​a​t​ ​t​e​r​m​.​ ​P​l​e​a​s​e​ ​t​r​y​ ​a​g​a​i​n​.
		 */
		EMPTY_STATE: string
		/**
		 * J​u​m​p​ ​t​o​.​.​.
		 */
		JUMP_TO: string
	}
	HOME: {
		/**
		 * W​e​l​c​o​m​e​ ​t​o​ ​S​v​e​l​t​e​K​i​t
		 */
		HI: string
		/**
		 * V​i​s​i​t​ ​<​>​k​i​t​.​s​v​e​l​t​e​.​d​e​v​<​>​ ​t​o​ ​r​e​a​d​ ​t​h​e​ ​d​o​c​u​m​e​n​t​a​t​i​o​n
		 */
		DESCRIPTION: string
	}
	CHAT: {
		/**
		 * E​m​p​t​y​ ​S​t​a​t​e
		 */
		EMPTY_STATE: string
		/**
		 * Q​u​i​c​k​ ​m​e​s​s​a​g​e
		 */
		INPUT_LABEL: string
		/**
		 * S​e​n​d​ ​m​e​s​s​a​g​e
		 */
		SEND_BUTTON: string
		ERROR_MESSAGES: {
			/**
			 * Y​o​u​ ​c​a​n​'​t​ ​s​e​n​d​ ​a​n​ ​e​m​p​t​y​ ​m​e​s​s​a​g​e​.
			 */
			EMPTY_MESSAGE: string
		}
	}
	PLAYGROUND: {
		SETTINGS: {
			/**
			 * P​a​r​a​m​e​t​e​r​s
			 */
			PARAMETERS: string
			MODEL: {
				/**
				 * M​o​d​e​l
				 */
				LABEL: string
				/**
				 * P​i​c​k​ ​t​h​e​ ​m​o​d​e​l​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​u​s​e​ ​f​o​r​ ​g​e​n​e​r​a​t​i​o​n​.​ ​B​a​s​e​l​i​n​e​ ​m​o​d​e​l​s​ ​a​r​e​ ​o​r​d​e​r​e​d​ ​f​r​o​m​ ​s​m​a​l​l​e​r​ ​m​o​d​e​l​s​ ​t​o​ ​l​a​r​g​e​r​ ​o​n​e​s​.​ ​S​m​a​l​l​ ​m​o​d​e​l​s​ ​a​r​e​ ​f​a​s​t​e​r​,​ ​w​h​i​l​e​ ​l​a​r​g​e​ ​m​o​d​e​l​s​ ​h​a​v​e​ ​a​ ​b​e​t​t​e​r​ ​g​r​a​s​p​ ​o​f​ ​l​a​n​g​u​a​g​e​ ​a​n​d​ ​a​r​e​ ​m​o​r​e​ ​a​b​l​e​ ​t​o​ ​c​a​p​t​u​r​e​ ​a​n​d​ ​r​e​p​l​i​c​a​t​e​ ​t​h​e​ ​p​a​t​t​e​r​n​s​ ​i​n​ ​t​h​e​ ​i​n​p​u​t​ ​p​r​o​m​p​t​.
				 */
				DESCRIPTION: string
			}
			NUMBER_OF_WORDS: {
				/**
				 * N​u​m​b​e​r​ ​o​f​ ​w​o​r​d​s
				 */
				LABEL: string
				/**
				 * D​e​t​e​r​m​i​n​e​s​ ​h​o​w​ ​m​u​c​h​ ​t​e​x​t​ ​t​o​ ​g​e​n​e​r​a​t​e​.​ ​3​ ​t​o​k​e​n​s​ ​i​s​ ​a​b​o​u​t​ ​1​ ​w​o​r​d​.​ ​T​o​k​e​n​s​ ​a​r​e​ ​o​f​t​e​n​ ​p​a​r​t​s​ ​o​f​ ​w​o​r​d​s​,​ ​b​u​t​ ​c​a​n​ ​a​l​s​o​ ​b​e​ ​a​n​ ​e​n​t​i​r​e​ ​w​o​r​d​ ​o​r​ ​p​u​n​c​t​u​a​t​i​o​n​.
				 */
				DESCRIPTION: string
			}
			RANDOMNESS: {
				/**
				 * R​a​n​d​o​m​n​e​s​s
				 */
				LABEL: string
				/**
				 * C​o​n​t​r​o​l​ ​t​h​e​ ​r​a​n​d​o​m​n​e​s​s​ ​a​s​p​e​c​t​ ​o​f​ ​w​h​i​c​h​ ​t​o​k​e​n​s​ ​t​h​e​ ​m​o​d​e​l​ ​p​i​c​k​s​ ​f​o​r​ ​o​u​t​p​u​t​.​ ​V​a​l​u​e​ ​o​f​ ​1​ ​i​s​ ​a​ ​g​o​o​d​ ​s​t​a​r​t​i​n​g​ ​p​o​i​n​t​ ​f​o​r​ ​e​x​p​e​r​i​m​e​n​t​a​t​i​o​n​.​ ​L​o​w​e​r​ ​v​a​l​u​e​s​ ​a​r​e​ ​u​s​e​d​ ​i​n​ ​t​a​s​k​s​ ​w​i​t​h​ ​a​ ​“​c​o​r​r​e​c​t​”​ ​a​n​s​w​e​r​ ​(​e​.​g​.​ ​q​u​e​s​t​i​o​n​ ​a​n​s​w​e​r​i​n​g​ ​o​r​ ​s​u​m​m​a​r​i​z​a​t​i​o​n​)​.​ ​H​i​g​h​e​r​ ​v​a​l​u​e​s​ ​e​n​a​b​l​e​ ​t​h​e​ ​m​o​d​e​l​ ​t​o​ ​g​e​n​e​r​a​t​e​ ​m​o​r​e​ ​“​c​r​e​a​t​i​v​e​”​ ​o​u​t​p​u​t​s​.
				 */
				DESCRIPTION: string
				/**
				 * T​e​m​p​e​r​a​t​u​r​e
				 */
				SUBTITLE: string
			}
			STOP_SEQUENCE: {
				/**
				 * S​t​o​p​ ​s​e​q​u​e​n​c​e
				 */
				LABEL: string
				/**
				 * A​ ​s​t​o​p​ ​s​e​q​u​e​n​c​e​ ​w​i​l​l​ ​c​u​t​ ​o​f​f​ ​y​o​u​r​ ​g​e​n​e​r​a​t​i​o​n​ ​a​t​ ​t​h​e​ ​e​n​d​ ​o​f​ ​t​h​e​ ​s​e​q​u​e​n​c​e​.​ ​F​o​r​ ​l​i​n​e​ ​b​r​e​a​k​s​ ​u​s​e​ ​'​\​n​'
				 */
				DESCRIPTION: string
				/**
				 * T​y​p​e​ ​a​n​d​ ​p​r​e​s​s​ ​t​a​b​ ​o​r​ ​e​n​t​e​r
				 */
				SUBTITLE: string
			}
			/**
			 * A​d​v​a​n​c​e​d​ ​P​a​r​a​m​e​t​e​r​s
			 */
			ADVANCED_PARAMETERS: string
			TOP_K: {
				/**
				 * T​o​p​-​K
				 */
				LABEL: string
				/**
				 * W​h​e​n​ ​p​i​c​k​i​n​g​ ​o​u​t​p​u​t​ ​t​o​k​e​n​s​,​ ​c​o​n​s​i​d​e​r​ ​o​n​l​y​ ​t​h​i​s​ ​n​u​m​b​e​r​ ​o​f​ ​t​o​k​e​n​s​ ​w​h​i​c​h​ ​h​a​v​e​ ​t​h​e​ ​h​i​g​h​e​s​t​ ​o​u​t​p​u​t​ ​p​r​o​b​a​b​i​l​i​t​y​ ​s​c​o​r​e​s​.​ ​0​ ​m​e​a​n​s​ ​t​o​p​-​k​ ​i​s​ ​n​o​t​ ​u​s​e​d​ ​f​o​r​ ​p​i​c​k​i​n​g​ ​o​u​t​p​u​t​ ​t​o​k​e​n​s​.
				 */
				DESCRIPTION: string
			}
			TOP_P: {
				/**
				 * T​o​p​-​P
				 */
				LABEL: string
				/**
				 * D​y​n​a​m​i​c​a​l​l​y​ ​s​e​l​e​c​t​ ​t​h​e​ ​n​u​m​b​e​r​ ​o​f​ ​t​o​k​e​n​s​ ​t​o​ ​c​o​n​s​i​d​e​r​.​ ​T​h​o​s​e​ ​a​r​e​ ​t​h​e​ ​t​o​k​e​n​s​ ​w​h​o​s​e​ ​p​r​o​b​a​b​i​l​i​t​i​e​s​ ​a​d​d​ ​u​p​ ​t​o​ ​t​h​e​ ​t​o​p​-​p​ ​v​a​l​u​e​.​ ​I​f​ ​b​o​t​h​ ​t​o​p​-​k​ ​a​n​d​ ​t​o​p​-​p​ ​a​r​e​ ​e​n​a​b​l​e​d​,​ ​t​o​p​-​p​ ​a​c​t​s​ ​a​f​t​e​r​ ​t​o​p​-​k​.
				 */
				DESCRIPTION: string
			}
			FREQUENCY_PENALTY: {
				/**
				 * F​r​e​q​u​e​n​c​y​ ​p​e​n​a​l​t​y
				 */
				LABEL: string
				/**
				 * D​e​f​a​u​l​t​s​ ​t​o​ ​0​.​0​,​ ​m​a​x​ ​v​a​l​u​e​ ​o​f​ ​1​.​0​.​ ​C​a​n​ ​b​e​ ​u​s​e​d​ ​t​o​ ​r​e​d​u​c​e​ ​r​e​p​e​t​i​t​i​v​e​n​e​s​s​ ​o​f​ ​g​e​n​e​r​a​t​e​d​ ​t​o​k​e​n​s​.​ ​T​h​e​ ​h​i​g​h​e​r​ ​t​h​e​ ​v​a​l​u​e​,​ ​t​h​e​ ​s​t​r​o​n​g​e​r​ ​a​ ​p​e​n​a​l​t​y​ ​i​s​ ​a​p​p​l​i​e​d​ ​t​o​ ​p​r​e​v​i​o​u​s​l​y​ ​p​r​e​s​e​n​t​ ​t​o​k​e​n​s​,​ ​p​r​o​p​o​r​t​i​o​n​a​l​ ​t​o​ ​h​o​w​ ​m​a​n​y​ ​t​i​m​e​s​ ​t​h​e​y​ ​h​a​v​e​ ​a​l​r​e​a​d​y​ ​a​p​p​e​a​r​e​d​ ​i​n​ ​t​h​e​ ​p​r​o​m​p​t​ ​o​r​ ​p​r​i​o​r​ ​g​e​n​e​r​a​t​i​o​n​.
				 */
				DESCRIPTION: string
			}
			PRESENCE_PENALTY: {
				/**
				 * P​r​e​s​e​n​c​e​ ​p​e​n​a​l​t​y
				 */
				LABEL: string
				/**
				 * D​e​f​a​u​l​t​s​ ​t​o​ ​0​.​0​,​ ​m​a​x​ ​v​a​l​u​e​ ​o​f​ ​1​.​0​.​ ​C​a​n​ ​b​e​ ​u​s​e​d​ ​t​o​ ​r​e​d​u​c​e​ ​r​e​p​e​t​i​t​i​v​e​n​e​s​s​ ​o​f​ ​g​e​n​e​r​a​t​e​d​ ​t​o​k​e​n​s​.​ ​S​i​m​i​l​a​r​ ​t​o​ ​f​r​e​q​u​e​n​c​y​_​p​e​n​a​l​t​y​,​ ​e​x​c​e​p​t​ ​t​h​a​t​ ​t​h​i​s​ ​p​e​n​a​l​t​y​ ​i​s​ ​a​p​p​l​i​e​d​ ​e​q​u​a​l​l​y​ ​t​o​ ​a​l​l​ ​t​o​k​e​n​s​ ​t​h​a​t​ ​h​a​v​e​ ​a​l​r​e​a​d​y​ ​a​p​p​e​a​r​e​d​,​ ​r​e​g​a​r​d​l​e​s​s​ ​o​f​ ​t​h​e​i​r​ ​e​x​a​c​t​ ​f​r​e​q​u​e​n​c​i​e​s​.
				 */
				DESCRIPTION: string
			}
			SHOW_LIKELIHOOD: {
				/**
				 * S​h​o​w​ ​l​i​k​e​l​i​h​o​o​d
				 */
				LABEL: string
				/**
				 * S​h​o​w​ ​t​h​e​ ​l​i​k​e​l​i​h​o​o​d​ ​o​f​ ​e​a​c​h​ ​t​o​k​e​n​ ​i​n​ ​t​h​e​ ​g​e​n​e​r​a​t​e​d​ ​t​e​x​t​.
				 */
				DESCRIPTION: string
			}
			BUTTON: {
				/**
				 * R​u​n
				 */
				IDLE: string
				/**
				 * L​o​a​d​i​n​g
				 */
				LOADING: string
			}
		}
	}
}

export type TranslationFunctions = {
	/**
	 * This log was called from '{fileName}'
	 */
	log: (arg: { fileName: string }) => LocalizedString
	SIDEBAR: {
		/**
		 * skip navigation
		 */
		SKIP_NAVIGATION: () => LocalizedString
		/**
		 * Home
		 */
		HOME: () => LocalizedString
		/**
		 * Chat
		 */
		CHAT: () => LocalizedString
		/**
		 * Playground
		 */
		PLAYGROUND: () => LocalizedString
		/**
		 * Open sidebar
		 */
		OPEN_SIDEBAR: () => LocalizedString
		/**
		 * Close sidebar
		 */
		CLOSE_SIDEBAR: () => LocalizedString
		LOCALES: {
			/**
			 * Change language
			 */
			DESCRIPTION: () => LocalizedString
			/**
			 * English
			 */
			en: () => LocalizedString
			/**
			 * Español
			 */
			es: () => LocalizedString
		}
	}
	COMMAND_PALETTE: {
		/**
		 * Search...
		 */
		INPUT_PLACEHOLDER: () => LocalizedString
		RECENT_SEARCHES: {
		}
		QUICK_ACTIONS: {
			/**
			 * Toggle dark mode
			 */
			TOGGLE_DARK_MODE: () => LocalizedString
			/**
			 * Change language to Spanish
			 */
			CHANGE_LANGUAGE: () => LocalizedString
			/**
			 * Confetti
			 */
			CONFETTI: () => LocalizedString
			/**
			 * Go home
			 */
			GO_HOME: () => LocalizedString
			/**
			 * Go to chat
			 */
			GO_TO_CHAT: () => LocalizedString
			/**
			 * Go to playground
			 */
			GO_TO_PLAYGROUND: () => LocalizedString
		}
		/**
		 * We couldn't find any element with that term. Please try again.
		 */
		EMPTY_STATE: () => LocalizedString
		/**
		 * Jump to...
		 */
		JUMP_TO: () => LocalizedString
	}
	HOME: {
		/**
		 * Welcome to SvelteKit
		 */
		HI: () => LocalizedString
		/**
		 * Visit <>kit.svelte.dev<> to read the documentation
		 */
		DESCRIPTION: () => LocalizedString
	}
	CHAT: {
		/**
		 * Empty State
		 */
		EMPTY_STATE: () => LocalizedString
		/**
		 * Quick message
		 */
		INPUT_LABEL: () => LocalizedString
		/**
		 * Send message
		 */
		SEND_BUTTON: () => LocalizedString
		ERROR_MESSAGES: {
			/**
			 * You can't send an empty message.
			 */
			EMPTY_MESSAGE: () => LocalizedString
		}
	}
	PLAYGROUND: {
		SETTINGS: {
			/**
			 * Parameters
			 */
			PARAMETERS: () => LocalizedString
			MODEL: {
				/**
				 * Model
				 */
				LABEL: () => LocalizedString
				/**
				 * Pick the model you want to use for generation. Baseline models are ordered from smaller models to larger ones. Small models are faster, while large models have a better grasp of language and are more able to capture and replicate the patterns in the input prompt.
				 */
				DESCRIPTION: () => LocalizedString
			}
			NUMBER_OF_WORDS: {
				/**
				 * Number of words
				 */
				LABEL: () => LocalizedString
				/**
				 * Determines how much text to generate. 3 tokens is about 1 word. Tokens are often parts of words, but can also be an entire word or punctuation.
				 */
				DESCRIPTION: () => LocalizedString
			}
			RANDOMNESS: {
				/**
				 * Randomness
				 */
				LABEL: () => LocalizedString
				/**
				 * Control the randomness aspect of which tokens the model picks for output. Value of 1 is a good starting point for experimentation. Lower values are used in tasks with a “correct” answer (e.g. question answering or summarization). Higher values enable the model to generate more “creative” outputs.
				 */
				DESCRIPTION: () => LocalizedString
				/**
				 * Temperature
				 */
				SUBTITLE: () => LocalizedString
			}
			STOP_SEQUENCE: {
				/**
				 * Stop sequence
				 */
				LABEL: () => LocalizedString
				/**
				 * A stop sequence will cut off your generation at the end of the sequence. For line breaks use '\n'
				 */
				DESCRIPTION: () => LocalizedString
				/**
				 * Type and press tab or enter
				 */
				SUBTITLE: () => LocalizedString
			}
			/**
			 * Advanced Parameters
			 */
			ADVANCED_PARAMETERS: () => LocalizedString
			TOP_K: {
				/**
				 * Top-K
				 */
				LABEL: () => LocalizedString
				/**
				 * When picking output tokens, consider only this number of tokens which have the highest output probability scores. 0 means top-k is not used for picking output tokens.
				 */
				DESCRIPTION: () => LocalizedString
			}
			TOP_P: {
				/**
				 * Top-P
				 */
				LABEL: () => LocalizedString
				/**
				 * Dynamically select the number of tokens to consider. Those are the tokens whose probabilities add up to the top-p value. If both top-k and top-p are enabled, top-p acts after top-k.
				 */
				DESCRIPTION: () => LocalizedString
			}
			FREQUENCY_PENALTY: {
				/**
				 * Frequency penalty
				 */
				LABEL: () => LocalizedString
				/**
				 * Defaults to 0.0, max value of 1.0. Can be used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
				 */
				DESCRIPTION: () => LocalizedString
			}
			PRESENCE_PENALTY: {
				/**
				 * Presence penalty
				 */
				LABEL: () => LocalizedString
				/**
				 * Defaults to 0.0, max value of 1.0. Can be used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
				 */
				DESCRIPTION: () => LocalizedString
			}
			SHOW_LIKELIHOOD: {
				/**
				 * Show likelihood
				 */
				LABEL: () => LocalizedString
				/**
				 * Show the likelihood of each token in the generated text.
				 */
				DESCRIPTION: () => LocalizedString
			}
			BUTTON: {
				/**
				 * Run
				 */
				IDLE: () => LocalizedString
				/**
				 * Loading
				 */
				LOADING: () => LocalizedString
			}
		}
	}
}

export type Formatters = {}
