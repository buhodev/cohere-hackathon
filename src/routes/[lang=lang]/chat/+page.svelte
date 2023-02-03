<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { beforeUpdate, afterUpdate, onMount } from 'svelte';
	import { getMessagePosition } from '$lib/utils';
	import Message from '$lib/components/Message.svelte';
	import PaperAirplaneIcon from '$lib/icons/24/solid/paper-airplane.svg?component';
	import LoadingMessage from '$lib/components/LoadingMessage.svelte';

	export let data: PageData;
	export let form: ActionData;
	let container: HTMLElement;
	let autoscroll: boolean;
	let loading = false;

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
</script>

<div class="flex h-full flex-col justify-between space-y-2">
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
				<div class="h-96 w-full rounded-md">Empty State</div>
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
		class="mx-auto w-full max-w-4xl px-6 sm:px-6 md:px-8"
	>
		<label for="message" class="sr-only">Quick message</label>
		<div class="relative flex w-full items-center">
			<input
				value={form?.message ?? ''}
				autocomplete="off"
				autofocus
				type="text"
				name="message"
				id="message"
				class="block w-full rounded-md border-gray-300 py-3 pr-12 shadow-sm focus:border-transparent focus-visible:border-transparent focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500/50 dark:border-neutral-700 dark:bg-neutral-800 sm:text-sm"
			/>
			<div class="absolute inset-y-0 right-0 flex py-2 pr-1.5">
				<button
					title="Send message"
					class="inline-flex items-center rounded text-neutral-400 hover:scale-105 hover:text-neutral-500 focus-visible:text-neutral-500 focus-visible:outline-none focus-visible:ring active:scale-95 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus-visible:text-neutral-400"
				>
					<span class="sr-only">Send message</span>
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
