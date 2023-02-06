<script>
	import InputSelect from './InputSelect.svelte';
	import RangeSlider from './RangeSlider.svelte';
	import InputText from './InputText.svelte';
	import InputCheckbox from './InputCheckbox.svelte';
	import Button from './Button.svelte';
	import LL from '$i18n/i18n-svelte';

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

<div class="flex flex-col space-y-8 pb-4">
	<h2 class="-mb-4 block text-sm font-medium uppercase text-neutral-700 dark:text-neutral-200">
		{$LL.PLAYGROUND.SETTINGS.PARAMETERS()}
	</h2>

	<InputSelect
		label={$LL.PLAYGROUND.SETTINGS.MODEL.LABEL()}
		description={$LL.PLAYGROUND.SETTINGS.MODEL.DESCRIPTION()}
		name="model"
		value={'command-xlarge-nightly'}
	/>

	<RangeSlider
		value={300}
		min={2}
		max={2048}
		step={2}
		label={$LL.PLAYGROUND.SETTINGS.NUMBER_OF_WORDS.LABEL()}
		description={$LL.PLAYGROUND.SETTINGS.NUMBER_OF_WORDS.DESCRIPTION()}
		name="number-of-words"
	/>

	<RangeSlider
		value={0.9}
		min={0}
		max={2}
		step={0.1}
		label={$LL.PLAYGROUND.SETTINGS.RANDOMNESS.LABEL()}
		description={$LL.PLAYGROUND.SETTINGS.RANDOMNESS.DESCRIPTION()}
		subtitle={$LL.PLAYGROUND.SETTINGS.RANDOMNESS.SUBTITLE()}
		name="randomness"
	/>

	<InputText
		label={$LL.PLAYGROUND.SETTINGS.STOP_SEQUENCE.LABEL()}
		description={$LL.PLAYGROUND.SETTINGS.STOP_SEQUENCE.DESCRIPTION()}
		subtitle={$LL.PLAYGROUND.SETTINGS.STOP_SEQUENCE.SUBTITLE()}
		name="stop-sequence"
		placeholder="--"
		value=""
	/>

	<details bind:open class="group">
		<summary
			class="flex cursor-pointer list-none items-center justify-between overflow-hidden rounded-md font-medium focus:outline-none focus-visible:ring"
		>
			<h3 class="block text-sm font-medium uppercase text-neutral-700 dark:text-neutral-200">
				{$LL.PLAYGROUND.SETTINGS.ADVANCED_PARAMETERS()}
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
			<RangeSlider
				value={0}
				min={0}
				max={500}
				step={1}
				label={$LL.PLAYGROUND.SETTINGS.TOP_K.LABEL()}
				description={$LL.PLAYGROUND.SETTINGS.TOP_K.DESCRIPTION()}
				name="top-k"
			/>
			<RangeSlider
				value={0.75}
				min={0}
				max={1}
				step={0.01}
				label={$LL.PLAYGROUND.SETTINGS.TOP_P.LABEL()}
				description={$LL.PLAYGROUND.SETTINGS.TOP_P.DESCRIPTION()}
				name="top-p"
			/>
			<RangeSlider
				value={0}
				min={0}
				max={1}
				step={0.01}
				label={$LL.PLAYGROUND.SETTINGS.FREQUENCY_PENALTY.LABEL()}
				description={$LL.PLAYGROUND.SETTINGS.FREQUENCY_PENALTY.DESCRIPTION()}
				name="frequency-penalty"
			/>
			<RangeSlider
				value={0}
				min={0}
				max={1}
				step={0.01}
				label={$LL.PLAYGROUND.SETTINGS.PRESENCE_PENALTY.LABEL()}
				description={$LL.PLAYGROUND.SETTINGS.PRESENCE_PENALTY.DESCRIPTION()}
				name="presence-penalty"
			/>

			<InputCheckbox
				label={$LL.PLAYGROUND.SETTINGS.SHOW_LIKELIHOOD.LABEL()}
				description={$LL.PLAYGROUND.SETTINGS.SHOW_LIKELIHOOD.DESCRIPTION()}
				name="show-likelihood"
				checked={false}
			/>
		</div>
	</details>

	<Button />
</div>
