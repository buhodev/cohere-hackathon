<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { beforeUpdate, afterUpdate, onMount } from 'svelte';
	import { getMessagePosition } from '$lib/utils';
	import Message from '$lib/components/Message.svelte';
	import PaperAirplaneIcon from '$lib/icons/24/solid/paper-airplane.svg?component';
	import LoadingMessage from '$lib/components/LoadingMessage.svelte';
	import LL from '$i18n/i18n-svelte';

	export let data: PageData;
	export let form: ActionData;
	let container: HTMLElement;
	let autoscroll: boolean;
	let loading = false;
	let query = '';
	let clientWidth: number;
	let word = '';
	let input: HTMLInputElement;

	// const uid = (() => {
	// 	let n = -1;
	// 	return () => {
	// 		n++;
	// 		return n;
	// 	};
	// })();

	const suggestions = [
		{ description: $LL.CHAT.COMMANDS.SAY.description(), command: '/say' },
		{ description: $LL.CHAT.COMMANDS.GENERATE.description(), command: '/generate' },
		{ description: $LL.CHAT.COMMANDS.SUMMARIZE.description(), command: '/summarize' },
		{ description: $LL.CHAT.COMMANDS.FIX.description(), command: '/fix' },
		{ description: $LL.CHAT.COMMANDS.TRANSLATE.description(), command: '/translate' },
		{ description: $LL.CHAT.COMMANDS.COMPLETE.description(), command: '/complete' }
	];

	$: filteredSuggestions = [];

	$: isSuggestionsOpen = !!filteredSuggestions.length;
	$: prediction = word?.slice(query.length) ?? '';
	$: {
		if (query[0] === '/') {
			word = suggestions.filter((element) => element.command.toLowerCase().includes(query))[0]
				?.command;
			filteredSuggestions = suggestions.filter((suggestion) =>
				suggestion.command.toLowerCase().includes(query)
			);
		}
		if (query.length == 0) {
			filteredSuggestions = [];
			word = '';
		}
		// if (!word?.includes(query)) {
		// 	isSuggestionsOpen = false;
		// 	prediction = ''
		// }
	}

	beforeUpdate(() => {
		autoscroll =
			container && container.offsetHeight + container.scrollTop > container.scrollHeight - 2000;
	});

	afterUpdate(() => {
		if (autoscroll) container.scrollTo(0, container.scrollHeight);
	});

	onMount(() => container.scrollTo(0, container.scrollHeight));

	const submitMessage: SubmitFunction = ({ form, data: formData }) => {
		let text = formData.get('message')?.toString();

		let newMessage = {
			message: {
				body: text,
				sentAt: new Date()
			},
			me: true,
			id: crypto.randomUUID()
		};
		data.messages.push(newMessage);
		data = data;
		loading = true;
		form.reset();
		return async ({ update }) => {
			await update();
			loading = false;
		};
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (word && (e.code === 'ArrowRight' || e.code === 'Tab' || e.code === 'Space')) {
			e.preventDefault();
			input.value = word + ' ';
			prediction = '';
			filteredSuggestions = [];
		}
	};

	const handleClick = (command: string) => {
		input.value = command + ' ';
		prediction = '';
		filteredSuggestions = [];
		input.focus();
	};

	const handleMouseover = (command: string) => {
		prediction = command?.slice(query.length) ?? '';
		word = command;
	};
	const handleMouseout = () => {
		prediction = word?.slice(query.length) ?? '';
	};
</script>

<div class="flex h-full flex-col justify-between space-y-2 pt-6">
	<div
		bind:this={container}
		style="scrollbar-gutter: stable both-edges;"
		class="flex w-full overflow-auto"
	>
		<div class="mx-auto flex w-full max-w-4xl flex-col space-y-1 px-4 sm:px-6 md:px-8">
			{#each data.messages as { message, me, id }, index}
				<Message
					{message}
					{id}
					groupPosition={getMessagePosition(data.messages, index)}
					sentByCurrentUser={me}
				/>
			{:else}
				<div class="h-96 w-full rounded-md">{$LL.CHAT.EMPTY_STATE()}</div>
			{/each}
			{#if loading}
				<LoadingMessage />
			{/if}
		</div>
	</div>

	<form
		method="POST"
		action="?/sendMessage"
		use:enhance={submitMessage}
		class="mx-auto w-full max-w-4xl px-6 pb-6 sm:px-6 md:px-8"
	>
		<label for="message" class="sr-only">{$LL.CHAT.INPUT_LABEL()}</label>
		<div class="relative flex w-full items-center">
			<span
				class="absolute text-neutral-500 sm:text-sm"
				style="top: 13px; left: {clientWidth + 13}px">{prediction}</span
			>
			<div class="pointer-events-none absolute inline-block opacity-0 sm:text-sm" bind:clientWidth>
				{query}
			</div>
			{#if isSuggestionsOpen}
				<div
					class="absolute inset-x-0 bottom-16 rounded-lg border bg-white py-2 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 sm:bottom-14"
				>
					{#each filteredSuggestions as { description, command }}
						<div
							on:click={() => handleClick(command)}
							on:mouseover={() => handleMouseover(command)}
							on:mouseout={handleMouseout}
							class="flex justify-between py-1.5 px-4 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700"
						>
							<span class="inline-block">{description}</span>
							<span class="inline-block w-20 text-neutral-500">{command}</span>
						</div>
					{/each}
				</div>
			{/if}
			<input
				value={form?.message ?? ''}
				on:input={(e) => (query = e?.target?.value || '')}
				on:keydown={handleKeydown}
				bind:this={input}
				autocomplete="off"
				autofocus
				type="text"
				name="message"
				id="message"
				class="block w-full rounded-md border-gray-300 py-3 pr-12 shadow-md focus:border-transparent focus-visible:border-transparent focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500/50 dark:border-neutral-700 dark:bg-neutral-800 sm:text-sm"
			/>
			<div class="absolute inset-y-0 right-0 flex py-2 pr-1.5">
				<button
					title={$LL.CHAT.SEND_BUTTON()}
					class="inline-flex items-center rounded text-neutral-400 hover:scale-105 hover:text-neutral-500 focus-visible:text-neutral-500 focus-visible:outline-none focus-visible:ring active:scale-95 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus-visible:text-neutral-400"
				>
					<span class="sr-only">{$LL.CHAT.SEND_BUTTON()}</span>
					<PaperAirplaneIcon class="h-6 w-6" />
				</button>
			</div>
		</div>
	</form>
</div>

<style>
	:global([data-me='true'] + [data-me='false']) {
		margin-top: 1rem !important;
	}
	:global([data-me='false'] + [data-me='true']) {
		margin-top: 1rem !important;
	}
</style>
