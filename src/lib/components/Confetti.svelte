<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { showConfetti } from '$lib/stores';
</script>

{#if $showConfetti}
	<div class="pointer-events-none flex justify-center">
		<div use:confetti />
	</div>
{/if}
