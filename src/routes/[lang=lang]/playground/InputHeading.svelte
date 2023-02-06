<script lang="ts">
	import InfoTooltip from './InfoTooltip.svelte';

	export let label: string;
	export let subtitle: string | undefined = undefined;
	export let name: string;
	export let value: number | undefined = undefined;
	export let description: string;
</script>

<div class="flex items-center justify-between">
	<div class="flex flex-col">
		<div class="relative flex items-start space-x-1">
			<label
				class="block text-xs font-medium uppercase text-neutral-700 dark:text-neutral-200"
				for={name}
			>
				{label}
			</label>
			<InfoTooltip text={description} />
		</div>
		{#if subtitle}
			<span class="text-xs capitalize text-neutral-600 dark:text-neutral-400">{subtitle}</span>
		{/if}
	</div>
	{#if value !== undefined}
		<span class="text-xs">{value}</span>
	{/if}
</div>
