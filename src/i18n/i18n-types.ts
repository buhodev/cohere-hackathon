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
			/**
			 * M​o​d​e​l
			 */
			MODEL: string
			/**
			 * N​u​m​b​e​r​ ​o​f​ ​w​o​r​d​s
			 */
			NUMBER_OF_WORDS: string
			RANDOMNESS: {
				/**
				 * R​a​n​d​o​m​n​e​s​s
				 */
				LABEL: string
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
				 * T​y​p​e​ ​a​n​d​ ​p​r​e​s​s​ ​t​a​b​ ​o​r​ ​e​n​t​e​r
				 */
				SUBTITLE: string
			}
			/**
			 * A​d​v​a​n​c​e​d​ ​P​a​r​a​m​e​t​e​r​s
			 */
			ADVANCED_PARAMETERS: string
			/**
			 * T​o​p​-​K
			 */
			TOP_K: string
			/**
			 * T​o​p​-​P
			 */
			TOP_P: string
			/**
			 * F​r​e​q​u​e​n​c​y​ ​p​e​n​a​l​t​y
			 */
			FREQUENCY_PENALTY: string
			/**
			 * P​r​e​s​e​n​c​e​ ​p​e​n​a​l​t​y
			 */
			PRESENCE_PENALTY: string
			/**
			 * S​h​o​w​ ​l​i​k​e​l​i​h​o​o​d
			 */
			SHOW_LIKELIHOOD: string
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
			/**
			 * Model
			 */
			MODEL: () => LocalizedString
			/**
			 * Number of words
			 */
			NUMBER_OF_WORDS: () => LocalizedString
			RANDOMNESS: {
				/**
				 * Randomness
				 */
				LABEL: () => LocalizedString
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
				 * Type and press tab or enter
				 */
				SUBTITLE: () => LocalizedString
			}
			/**
			 * Advanced Parameters
			 */
			ADVANCED_PARAMETERS: () => LocalizedString
			/**
			 * Top-K
			 */
			TOP_K: () => LocalizedString
			/**
			 * Top-P
			 */
			TOP_P: () => LocalizedString
			/**
			 * Frequency penalty
			 */
			FREQUENCY_PENALTY: () => LocalizedString
			/**
			 * Presence penalty
			 */
			PRESENCE_PENALTY: () => LocalizedString
			/**
			 * Show likelihood
			 */
			SHOW_LIKELIHOOD: () => LocalizedString
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
