<script lang="ts">
	export let min = 0;
	export let max = 100;
	export let label: string;
	export let name: string;
	export let value: number;
	export let step: number;
</script>

<label for={name}>{label}</label>
<input type="range" id={name} {name} {value} {min} {max} {step} />
