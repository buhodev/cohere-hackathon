import { createDialog } from 'svelte-headlessui';
import { writable } from 'svelte/store';
import { tick } from 'svelte';

export const sidebarDialog = createDialog({ label: 'Sidebar' });

export const commandPaletteDialog = createDialog({ label: 'Command Palette' });

const createConfetti = () => {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		fire: async () => {
			set(false);
			await tick();
			set(true);
		}
	};
};

export const showConfetti = createConfetti();
