<script lang="ts">
	export let loading: boolean = false;
</script>

<button
	on:click
	disabled={loading}
	class="relative overflow-hidden rounded-lg bg-indigo-500 px-20 py-5 duration-75 will-change-transform hover:scale-[1.01] focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99] dark:focus-visible:ring-blue-500/50 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
>
	<span
		class="absolute z-10 grid place-items-center rounded-lg bg-indigo-500 text-white transition-colors dark:bg-indigo-600 {loading
			? 'inset-px dark:bg-indigo-600/95'
			: 'inset-0 hover:bg-indigo-600 dark:hover:bg-indigo-700'}"
	>
		<span class="inline-flex items-center gap-px">
			{#if loading}
				Running
				<span class="ml-1 inline-flex items-center gap-px">
					<span class="mx-px h-1.5 w-1.5 animate-blink rounded-full bg-indigo-300" />
					<span
						class="mx-px h-1.5 w-1.5 animate-blink rounded-full bg-indigo-300 animation-delay-200"
					/>
					<span
						class="mx-px h-1.5 w-1.5 animate-blink rounded-full bg-indigo-300 animation-delay-[400ms]"
					/>
				</span>
			{:else}
				Run
			{/if}
		</span>
	</span>
	{#if loading}
		<span
			aria-hidden
			class="absolute inset-0 z-0 hidden scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-indigo-700 before:via-indigo-400 before:to-indigo-200 dark:block dark:before:from-indigo-700 dark:before:via-indigo-400 dark:before:to-indigo-200"
		/>
	{/if}
</button>
