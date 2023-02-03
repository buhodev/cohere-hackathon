<script lang="ts">
	import InputHeading from '$lib/components/playground/InputHeading.svelte';

	export let label: string;
	export let subtitle: string;
	export let name: string;
	export let value: string;
	export let placeholder: string;
</script>

<div>
	<InputHeading {label} {subtitle} {name} />
	<input
		type="text"
		bind:value
		{name}
		id={name}
		{placeholder}
		class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 sm:text-sm"
	/>
</div>
