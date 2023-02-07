<script lang="ts">
	import { writable } from 'svelte/store';
	import { scale } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { offset, flip, shift } from '@floating-ui/dom';
	import { createFloatingActions, arrow } from 'svelte-floating-ui';
	import InformationCircleIcon from '$lib/icons/24/outline/information-circle.svg?component';

	export let text: string = 'Info tooltip';
	const arrowRef = writable(null);
	const [floatingRef, floatingContent] = createFloatingActions({
		strategy: 'absolute',
		placement: 'top',
		middleware: [offset(8), flip(), shift({ padding: 16 }), arrow({ element: arrowRef })],
		onComputed({ placement, middlewareData }) {
			const { x, y } = middlewareData.arrow;
			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right'
			}[placement.split('-')[0]];

			console.log(placement);

			Object.assign($arrowRef.style, {
				left: x != null ? `${x - 4}px` : '',
				top: y != null ? `${y}px` : '',
				borderRightWidth: placement == 'top' ? '1px' : '',
				borderBottomWidth: placement == 'top' ? '1px' : '',
				borderLeftWidth: placement == 'bottom' ? '1px' : '',
				borderTopWidth: placement == 'bottom' ? '1px' : '',
				[staticSide]: '-4px'
			});
		}
	});

	let showTooltip: boolean = false;

	let openTooltip = () => (showTooltip = true);
	let closeTooltip = () => (showTooltip = false);
</script>

<button
	on:click|preventDefault={() => (showTooltip = !showTooltip)}
	on:mouseenter={openTooltip}
	on:mouseleave={closeTooltip}
	on:focusin={openTooltip}
	on:focusout={closeTooltip}
	use:floatingRef
	class="rounded-full focus:outline-none focus-visible:ring"
>
	<InformationCircleIcon class="h-3.5 w-3.5" />
</button>

{#if showTooltip}
	<div
		in:scale={{ start: 0.9, duration: 75, easing: cubicOut, opacity: 0 }}
		out:scale={{ start: 0.9, duration: 50, easing: cubicIn, opacity: 0 }}
		class="absolute z-20 w-60 rounded-md border border-neutral-300 bg-white bg-opacity-80 p-2 text-sm shadow-sm backdrop-blur backdrop-filter dark:border-neutral-700 dark:bg-neutral-800 dark:bg-opacity-80 dark:text-neutral-200"
		use:floatingContent
	>
		{text}
		<div
			class="absolute h-2 w-2 rotate-45 border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
			bind:this={$arrowRef}
		/>
	</div>
{/if}
