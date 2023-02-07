import { page } from '$app/stores';
import { get } from 'svelte/store';
import { invalidateAll } from '$app/navigation';
import { locale, setLocale } from '$i18n/i18n-svelte';
import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { replaceLocaleInUrl } from '$lib/utils';

export const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
	if (!newLocale || get(locale) === newLocale) return;
	// load new dictionary from server
	await loadLocaleAsync(newLocale);
	// select locale
	setLocale(newLocale);
	// update `lang` attribute
	document.querySelector('html')?.setAttribute('lang', newLocale);
	if (updateHistoryState) {
		// update url to reflect locale changes
		history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(get(page).url, newLocale));
	}
	// run the `load` function again
	invalidateAll();
};
