import { get } from 'svelte/store';
import themeStore, { setTheme } from '$lib/components/SvelteThemes/index';

export const toggleTheme = () => {
	if (get(themeStore).theme === 'light') {
		setTheme('dark');
	} else {
		setTheme('light');
	}
};
