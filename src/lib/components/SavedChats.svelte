<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import ChatBubbleLeftRightIcon from '$lib/icons/24/outline/chat-bubble-left-right.svg?component';
	import PlusIcon from '$lib/icons/24/outline/plus.svg?component';
	import PencilSquareIcon from '$lib/icons/24/outline/pencil-square.svg?component';
	import TrashIcon from '$lib/icons/24/outline/trash.svg?component';
	import CheckIcon from '$lib/icons/24/outline/check.svg?component';
	import XMarkIcon from '$lib/icons/24/outline/x-mark.svg?component';
	import { addChat, deleteChat, renameChat, savedChats } from '$lib/stores/history';

	export let sidebar: 'static' | 'mobile';

	let editingID: string = '';
	let editingName: string = '';

	const handleEdit = (id: string, name: string) => {
		editingID = id;
		editingName = name;
	};

	const handleDelete = (id: string) => {
		deleteChat(id);
	};

	const handleSave = (oldName: string) => {
		renameChat(editingID, oldName, editingName);
		editingID = '';
		editingName = '';
	};

	const handleCancel = () => {
		editingID = '';
		editingName = '';
	};
</script>

<button
	on:click={() =>
		addChat({ name: $LL.SIDEBAR.SAVED_CHATS.NEW_CHAT_NAME(), chat: [], id: crypto.randomUUID() })}
	class:text-sm={sidebar == 'static'}
	class:text-base={sidebar == 'mobile'}
	class="group mb-4 flex w-full items-center rounded-md border border-neutral-700 px-2 py-2 font-medium text-neutral-700 hover:scale-[1.01] hover:border-neutral-900 hover:bg-neutral-50 hover:text-neutral-900 focus-visible:bg-neutral-50 focus-visible:text-neutral-900 focus-visible:outline-none focus-visible:ring active:scale-100 dark:border-neutral-400 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-white dark:focus-visible:bg-neutral-900 dark:focus-visible:text-white"
>
	<PlusIcon
		class="h-6 w-6 flex-shrink-0 text-neutral-500 group-hover:text-neutral-600 group-focus-visible:text-neutral-600 dark:text-neutral-400 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300 {sidebar ==
		'static'
			? 'mr-3'
			: 'mr-4'}"
	/>
	{$LL.SIDEBAR.SAVED_CHATS.NEW_CHAT_BUTTON()}
</button>

{#each $savedChats as { name, id }}
	{@const active = name === 'Saved conversation saved overflow'}
	<div
		class="group relative flex items-center justify-between overflow-hidden rounded-xl px-2 py-1
            {active
			? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-white'
			: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 focus-visible:bg-neutral-50 focus-visible:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus-visible:bg-neutral-700 dark:focus-visible:text-white'}"
	>
		{#if editingID === id}
			<input
				type="text"
				autofocus
				class="mr-2 w-full rounded-md text-sm dark:bg-neutral-700"
				bind:value={editingName}
			/>
			<div class="flex items-center space-x-1">
				<button
					on:click={() => handleSave(name)}
					class="rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring"
				>
					<CheckIcon
						class="h-5 w-5 flex-shrink-0 {active
							? 'text-neutral-500 dark:text-neutral-300'
							: 'text-neutral-400 hover:text-neutral-700 focus-visible:text-neutral-700 dark:hover:text-neutral-200 dark:focus-visible:text-neutral-200'}"
					/>
				</button>
				<button
					on:click={handleCancel}
					class="rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring"
				>
					<XMarkIcon
						class="h-5 w-5 flex-shrink-0 {active
							? 'text-neutral-500 dark:text-neutral-300'
							: 'text-neutral-400 hover:text-red-500 focus-visible:text-red-500 dark:hover:text-red-600 dark:focus-visible:text-red-600'}"
					/>
				</button>
			</div>
		{:else}
			<a href="#" class="mr-2 flex flex-1 items-center rounded py-1 text-sm">
				<ChatBubbleLeftRightIcon
					class="h-6 w-6 flex-shrink-0
                                {active
						? 'text-neutral-500 dark:text-neutral-300'
						: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}
                                {sidebar == 'static' ? 'mr-3' : 'mr-4'}"
				/>
				{name}
			</a>
			<div class="flex items-center space-x-1">
				<button
					on:click={() => handleEdit(id, name)}
					class="rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring"
				>
					<PencilSquareIcon
						class="h-5 w-5 flex-shrink-0 {active
							? 'text-neutral-500 dark:text-neutral-300'
							: 'text-neutral-400 hover:text-neutral-700 focus-visible:text-neutral-700 dark:hover:text-neutral-200 dark:focus-visible:text-neutral-200'}"
					/>
				</button>
				<button
					on:click={() => handleDelete(id)}
					class="rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring"
				>
					<TrashIcon
						class="h-5 w-5 flex-shrink-0 {active
							? 'text-neutral-500 dark:text-neutral-300'
							: 'text-neutral-400 hover:text-red-500 focus-visible:text-red-500 dark:hover:text-red-600 dark:focus-visible:text-red-600'}"
					/>
				</button>
			</div>
		{/if}
	</div>
{:else}
	<div
		class="flex items-center justify-center text-center h-64 italic text-neutral-600 dark:text-neutral-300 text-sm"
	>
		{$LL.SIDEBAR.SAVED_CHATS.EMPTY_STATE()}
	</div>
{/each}
