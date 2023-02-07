<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import PlaygroundSettings from './PlaygroundSettings.svelte';
	import LL from '$i18n/i18n-svelte';
	import { enhance, type SubmitFunction } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	$: loading = false;

	const submit: SubmitFunction = ({ form, data: formData }) => {
		loading = true;

		return async ({ update }) => {
			await update();
			loading = false;
		};
	};
</script>

<form method="POST" use:enhance={submit} class="relative flex h-full">
	<div class="mx-auto flex w-full max-w-7xl flex-col space-y-6 px-4 pt-6 sm:px-6 lg:px-8">
		<div>
			<label
				for="input"
				class="block text-sm font-medium uppercase text-gray-700 dark:text-neutral-300"
			>
				{$LL.PLAYGROUND.INPUT.LABEL()}
			</label>
			<div class="mt-1">
				<textarea
					placeholder={$LL.PLAYGROUND.INPUT.PLACEHOLDER()}
					value={form?.input ?? ''}
					rows="10"
					name="input"
					id="input"
					class="block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-neutral-600 dark:bg-neutral-900 dark:placeholder:text-neutral-500 sm:text-sm"
				/>
			</div>
		</div>
		<div>
			<label
				for="output"
				class="block text-sm font-medium uppercase text-gray-700 dark:text-neutral-300"
			>
				{$LL.PLAYGROUND.OUTPUT.LABEL()}
			</label>
			<div class="mt-1">
				<textarea
					disabled
					placeholder={$LL.PLAYGROUND.OUTPUT.PLACEHOLDER()}
					value={form?.output ?? ''}
					rows="10"
					name="output"
					id="output"
					class="block w-full resize-none rounded-md border-gray-300 bg-neutral-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-neutral-600 dark:bg-neutral-800 dark:placeholder:text-neutral-500 sm:text-sm"
				/>
			</div>
		</div>
	</div>

	<aside
		class="relative hidden h-full w-72 flex-shrink-0 overflow-y-auto border-l border-gray-200 bg-white pt-6 dark:border-neutral-800 dark:bg-neutral-900 xl:flex xl:flex-col"
	>
		<div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-6">
			<PlaygroundSettings bind:loading />
		</div>
	</aside>
</form>
