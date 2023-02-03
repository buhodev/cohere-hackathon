<script>
	import InputSelect from '$lib/components/playground/InputSelect.svelte';
	import RangeSlider from '$lib/components/playground/RangeSlider.svelte';
	import InputText from '$lib/components/playground/InputText.svelte';
	import Button from '$lib/components/playground/Button.svelte';
	import InputHeading from './InputHeading.svelte';
	import InputCheckbox from './InputCheckbox.svelte';

	export let options = {
		number_of_words: {
			value: 300,
			min: 2,
			max: 2048,
			step: 2,
			label: 'Number of words',
			name: 'number-of-words'
		}
	};

	let open = false;
</script>

<form class="flex flex-col space-y-8 pb-4">
	<h2 class="-mb-4 block text-sm font-medium uppercase text-neutral-700 dark:text-neutral-200">
		Parameters
	</h2>

	<InputSelect label="Model" name="model" value={'command-xlarge-nightly'} />

	<RangeSlider
		value={300}
		min={2}
		max={2048}
		step={2}
		label="Number of words"
		name="number-of-words"
	/>

	<RangeSlider
		value={0.9}
		min={0}
		max={2}
		step={0.1}
		label="Randomness"
		subtitle="Temperature"
		name="randomness"
	/>

	<InputText
		label="Stop sequence"
		subtitle="Type and press tab or enter"
		name="stop-sequence"
		placeholder="--"
		value=""
	/>

	<details bind:open class="group">
		<summary
			class="flex cursor-pointer list-none items-center justify-between overflow-hidden rounded-md font-medium focus:outline-none focus-visible:ring"
		>
			<h3 class="block text-sm font-medium uppercase text-neutral-700 dark:text-neutral-200">
				Advanced Parameters
			</h3>
			<span class="transition group-open:rotate-180">
				<svg
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"><path d="M6 9l6 6 6-6" /></svg
				>
			</span>
		</summary>
		<div class="mt-4 flex flex-col space-y-6">
			<RangeSlider value={0} min={0} max={500} step={1} label="Top-K" name="top-k" />
			<RangeSlider value={0.75} min={0} max={1} step={0.01} label="Top-P" name="top-p" />
			<RangeSlider
				value={0}
				min={0}
				max={1}
				step={0.01}
				label="Frequency penalty"
				name="frequency-penalty"
			/>
			<RangeSlider
				value={0}
				min={0}
				max={1}
				step={0.01}
				label="Presence penalty"
				name="presence-penalty"
			/>

			<InputCheckbox label="Show likelihood" name="show-likelihood" checked={false} />
		</div>
	</details>

	<Button />
</form>
