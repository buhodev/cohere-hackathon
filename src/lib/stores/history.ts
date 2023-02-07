import type { Message } from '$lib/types';
import { persisted } from 'svelte-local-storage-store';
import { get } from 'svelte/store';
import toast from 'svelte-french-toast';
import LL from '$i18n/i18n-svelte';

type ChatEntry = {
	name: string;
	id: string;
	chat: Message[];
};

export const savedChats = persisted('saved_chats', [] as ChatEntry[]);

export const addChat = (chatEntry: ChatEntry) => {
	// if (chatEntry.chat === get(savedChats)[0]?.chat) {
	// 	toast.error(get(LL).TOASTS.CHAT_ALREADY_SAVED());
	// 	// avoid having duplicated keys on each block
	// 	return;
	// }
	savedChats.update((all) => [{ ...chatEntry }, ...all]);
	toast.success(get(LL).TOASTS.CHAT_CREATED(), { style: 'pointer-events: none' });
};

export const deleteChat = (id: ChatEntry['id']) => {
	savedChats.update((all) => all.filter((chatEntry) => chatEntry.id !== id));
	toast.success(get(LL).TOASTS.CHAT_DELETED(), { style: 'pointer-events: none' });
};

export const renameChat = (id: ChatEntry['id'], name: ChatEntry['name'], newName: string) => {
	if (name === newName) {
		toast.success(get(LL).TOASTS.CHAT_NOT_RENAMED(), { style: 'pointer-events: none' });
	} else {
		savedChats.update((all) => {
			all.map((chatEntry) => {
				if (chatEntry.id === id) chatEntry.name = newName;
			});
			return all;
		});
		toast.success(get(LL).TOASTS.CHAT_RENAMED(), { style: 'pointer-events: none' });
	}
};

export const clearAll = () => {
	savedChats.update(() => []);
};
