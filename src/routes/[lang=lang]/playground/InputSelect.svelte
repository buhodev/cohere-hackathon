<script lang="ts">
	import InputHeading from './InputHeading.svelte';

	export let label: string;
	export let description: string;
	export let name: string;
	export let value: 'command-xlarge-nightly' | 'xlarge' | 'medium';
</script>

<div>
	<InputHeading {label} {description} {name} />
	<select
		{name}
		id={name}
		bind:value
		class="mt-1 block w-full rounded-md border-neutral-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 sm:text-sm"
	>
		<option>command-xlarge-nightly</option>
		<option>xlarge</option>
		<option>medium</option>
	</select>
</div>
