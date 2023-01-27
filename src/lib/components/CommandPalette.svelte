<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import MagnifyingGlassIcon from '$lib/icons/20/solid/magnifying-glass.svg?component';
	import FolderIcon from '$lib/icons/20/solid/folder.svg?component';

	const RecentSearches = [
		{
			name: 'Workflow Inc. / Website Redesign',
			d: /* folder */ 'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
		}
	];

	const QuickActions = [
		{
			name: 'Add new file',
			callback: () => {},
			shortcut: ['⌘', 'N'],
			d: /* document-plus */ 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
		},
		{
			name: 'Add new folder',
			callback: () => {},
			shortcut: ['⌘', 'F'],
			d: /* folder-plus */ 'M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
		},
		{
			name: 'Add hashtag',
			callback: () => {},
			shortcut: ['⌘', 'H'],
			d: /* hashtag */ 'M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
		},
		{
			name: 'Add label',
			callback: () => {},
			shortcut: ['⌘', 'P'],
			d: /* label */ 'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z M6 6h.008v.008H6V6z'
		}
	].map((action, index) => {
		return { ...action, id: index.toString() };
	});

	let value = '';
	$: results = QuickActions.filter((action) =>
		action.name.toLowerCase().includes(value.toLowerCase())
	);
</script>

<div class="relative z-10" role="dialog" aria-modal="true">
	<div
		in:fade={{ duration: 250, easing: cubicOut }}
		out:fade={{ duration: 200, easing: cubicIn }}
		class="fixed inset-0 bg-neutral-500 bg-opacity-25"
	/>
	<div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
		<!-- Command Palette -->
		<div
			in:scale={{ start: 0.95, duration: 250, easing: cubicOut, opacity: 0 }}
			out:scale={{ start: 0.95, duration: 200, easing: cubicIn, opacity: 0 }}
			class="mx-auto max-w-2xl transform divide-y divide-neutral-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all dark:divide-opacity-20 dark:bg-neutral-900 dark:bg-opacity-80"
		>
			<div class="relative">
				<MagnifyingGlassIcon
					class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-neutral-900 text-opacity-40 dark:text-neutral-500"
				/>
				<input
					bind:value
					type="text"
					class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-neutral-900 placeholder-neutral-500 focus:ring-0 dark:text-white sm:text-sm"
					placeholder="Search..."
				/>
			</div>

			{#if !value}
				<!-- Default state, show/hide based on command palette state. -->
				<ul
					class="max-h-80 scroll-py-2 divide-y divide-neutral-500 divide-opacity-10 overflow-y-auto dark:divide-opacity-20"
				>
					<li class="p-2">
						<h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-neutral-900 dark:text-neutral-200">
							Recent searches
						</h2>
						<ul class="text-sm text-neutral-700 dark:text-neutral-400">
							{#each RecentSearches as { name, d }}
								{@const active = false}
								<li
									class="group flex cursor-default select-none items-center rounded-md px-3 py-2 {active
										? 'bg-neutral-900 bg-opacity-5 text-neutral-900 dark:bg-neutral-800 dark:text-white'
										: ''}"
								>
									<svg
										class="h-6 w-6 flex-none text-neutral-900 {active
											? 'dark:text-white'
											: 'text-opacity-40 dark:text-neutral-500'}"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" {d} />
									</svg>
									<span class="ml-3 flex-auto truncate">{name}</span>
									<span
										class:hidden={!active}
										class="ml-3 flex-none text-neutral-500 dark:text-neutral-400">Jump to...</span
									>
								</li>
							{/each}
						</ul>
					</li>
					<li class="p-2">
						<h2 class="sr-only">Quick actions</h2>
						<ul class="text-sm text-neutral-700 dark:text-neutral-400">
							{#each QuickActions as { name, d, shortcut, id }}
								{@const active = false}
								<li
									{id}
									class="group flex cursor-default select-none items-center rounded-md px-3 py-2
                                    {active
										? 'bg-neutral-900 bg-opacity-5 text-neutral-900 dark:bg-neutral-800 dark:text-white'
										: ''}"
								>
									<svg
										class="h-6 w-6 flex-none text-neutral-900 {active
											? 'dark:text-white'
											: 'text-opacity-40 dark:text-neutral-500'}"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" {d} />
									</svg>
									<span class="ml-3 flex-auto truncate">{name}...</span>
									<span
										class="ml-3 flex-none text-xs font-semibold text-neutral-500 dark:text-neutral-400"
									>
										{#each shortcut as key}
											<kbd class="font-sans">{key}</kbd>
										{/each}
									</span>
								</li>
							{/each}
						</ul>
					</li>
				</ul>
			{:else if results.length}
				<ul class="max-h-96 overflow-y-auto p-2 text-sm text-neutral-700 dark:text-neutral-400">
					{#each results as { name, d }}
						{@const active = false}
						<li
							class="group flex cursor-default select-none items-center rounded-md px-3 py-2 {active
								? 'bg-neutral-900 bg-opacity-5 text-neutral-900'
								: ''}"
						>
							<svg
								class="h-6 w-6 flex-none text-neutral-900
                                    {active
									? 'dark:text-white'
									: 'text-opacity-40 dark:text-neutral-500'}"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" {d} />
							</svg>
							<span class="ml-3 flex-auto truncate">{name}</span>
							<span
								class:hidden={!active}
								class="ml-3 flex-none text-neutral-500 dark:text-neutral-400">Jump to...</span
							>
						</li>
					{/each}
				</ul>
			{:else}
				<!-- Empty state, show/hide based on command palette state. -->
				<div class="py-14 px-6 text-center sm:px-14">
					<FolderIcon
						class="mx-auto h-6 w-6 text-neutral-900 text-opacity-40 dark:text-neutral-500"
					/>
					<p class="mt-4 text-sm text-neutral-900 dark:text-neutral-200">
						We couldn't find any projects with that term. Please try again.
					</p>
				</div>
			{/if}

			{#if true}
				<!-- Footer -->
				<div
					class="flex flex-wrap items-center bg-slate-50 py-2.5 px-4 text-xs text-neutral-700 dark:bg-transparent dark:text-neutral-400"
				>
					Type <kbd
						class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-neutral-400 bg-white font-semibold text-neutral-900 dark:border-neutral-500/20 dark:bg-neutral-800 dark:text-neutral-200 sm:mx-2"
						>#</kbd
					> <span class="sm:hidden">for projects,</span><span class="hidden sm:inline"
						>to access projects,</span
					>
					<kbd
						class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-neutral-400 bg-white font-semibold text-neutral-900 dark:border-neutral-500/20 dark:bg-neutral-800 dark:text-neutral-200 sm:mx-2"
						>&gt;</kbd
					>
					for users, and
					<kbd
						class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-neutral-400 bg-white font-semibold text-neutral-900 dark:border-neutral-500/20 dark:bg-neutral-800 dark:text-neutral-200 sm:mx-2"
						>?</kbd
					> for help.
				</div>
			{/if}
		</div>
	</div>
</div>
