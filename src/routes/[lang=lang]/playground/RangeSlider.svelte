<script lang="ts">
	import InputHeading from './InputHeading.svelte';

	export let label: string;
	export let description: string;
	export let subtitle: string | undefined = undefined;
	export let name: string;
	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;
</script>

<div>
	<InputHeading {name} {value} {label} {description} {subtitle} />
	<input type="range" bind:value id={name} {name} {min} {max} {step} />
</div>
