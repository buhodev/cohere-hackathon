<script lang="ts">
	import InputHeading from '$lib/components/playground/InputHeading.svelte';

	export let label: string;
	export let description: string;
	export let name: string;
	export let checked: boolean;
</script>

<div class="flex items-center">
	<input
		type="checkbox"
		bind:checked
		{name}
		id={name}
		class="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus-visible:ring-blue-500/50 dark:ring-offset-neutral-900 dark:checked:ring-offset-neutral-900 dark:focus-visible:ring-offset-neutral-900"
	/>
	<InputHeading {label} {description} {name} />
</div>
