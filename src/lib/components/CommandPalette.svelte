<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { Searcher } from 'fast-fuzzy';
	import { commandPaletteDialog, showConfetti } from '$lib/stores';
	import MagnifyingGlassIcon from '$lib/icons/20/solid/magnifying-glass.svg?component';
	import FolderIcon from '$lib/icons/24/outline/folder.svg?component';
	import { getOS } from '$lib/utils/getOS';

	const uid = (() => {
		let n = -1;
		return () => {
			n++;
			return n;
		};
	})();

	type SearchItems = {
		name: string;
		id: number;
		callback: () => unknown;
		shortcut: { default: string[]; macos: string[] } | {};
		closeCommandPalette: boolean;
		d: string;
	}[];

	const RecentSearches = writable([
		{
			name: 'Workflow Inc. / Website Redesign',
			id: uid(),
			callback: () => {},
			shortcut: {},
			closeCommandPalette: true,
			d: /* folder */ 'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
		}
	]);

	const QuickActions: SearchItems = [
		{
			name: 'Add new file',
			id: uid(),
			callback: () => {},
			shortcut: { default: ['Ctrl ', 'N'], macos: ['⌘', 'N'] },
			closeCommandPalette: false,
			d: /* document-plus */ 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
		},
		{
			name: 'Add new folder',
			id: uid(),
			callback: () => {},
			shortcut: { default: ['Ctrl ', 'F'], macos: ['⌘', 'F'] },
			closeCommandPalette: false,
			d: /* folder-plus */ 'M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
		},
		{
			name: 'Add hashtag',
			id: uid(),
			callback: () => {},
			shortcut: { default: ['Ctrl ', 'H'], macos: ['⌘', 'H'] },
			closeCommandPalette: false,
			d: /* hashtag */ 'M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
		},
		{
			name: 'Confetti',
			id: uid(),
			callback: showConfetti.fire,
			shortcut: { default: ['Ctrl ', 'P'], macos: ['⌘', 'P'] },
			closeCommandPalette: false,
			d: /* sparkles */ 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
		}
	];

	$: iddleItems = [
		{ title: 'Recent searches', showTitle: true, items: $RecentSearches },
		{ title: 'Quick actions', showTitle: false, items: QuickActions }
	];

	const searcher = new Searcher(QuickActions, { keySelector: (obj) => obj.name });

	let query = '';
	let input: HTMLElement;
	const OS = getOS();
	const shortcutType = OS == 'macos' || OS == 'ios' ? 'macos' : 'default';
	$: selectedIndex = -1;
	$: {
		selectedIndex = -1;
		query;
	}
	$: results = searcher.search(query);

	const handleKeydown = (e: KeyboardEvent) => {
		if (query.length > 0) {
			keyboardSelect(e, results);
		} else {
			keyboardSelect(e, iddleItems.map((item) => item.items).flat());
		}
	};

	const handleClick = async (callback: () => unknown, closeCommandPalette: boolean) => {
		callback();
		if (closeCommandPalette) commandPaletteDialog.close();
	};

	function keyboardSelect(e: KeyboardEvent, items: SearchItems) {
		let key = e.key;

		if (key == 'ArrowDown' || (key == 'Tab' && !e.shiftKey)) {
			if (selectedIndex + 1 < items.length) {
				selectedIndex++;
			}
			e.preventDefault();
		} else if (key == 'ArrowUp' || (key == 'Tab' && e.shiftKey)) {
			if (selectedIndex - 1 >= 0) {
				selectedIndex--;
			}
			e.preventDefault();
		} else if (key == 'Enter') {
			if (selectedIndex != -1 && items.length > 0) {
				if (items[selectedIndex].closeCommandPalette) commandPaletteDialog.close();
				items[selectedIndex].callback();
			}
			selectedIndex = -1;
			e.preventDefault();
		}
	}
</script>

{#if $commandPaletteDialog.expanded}
	<div class="relative z-10" role="dialog" aria-modal="true">
		<div
			in:fade={{ duration: 250, easing: cubicOut }}
			out:fade={{ duration: 150, easing: cubicIn }}
			on:mousedown={commandPaletteDialog.close}
			class="fixed inset-0 bg-neutral-500 bg-opacity-25"
		/>
		<div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
			<!-- Command Palette -->
			<div
				on:mousedown|preventDefault={() => input.focus()}
				in:scale={{ start: 0.95, duration: 250, easing: cubicOut, opacity: 0 }}
				out:scale={{ start: 0.95, duration: 150, easing: cubicIn, opacity: 0 }}
				use:commandPaletteDialog.modal
				class="mx-auto max-w-2xl transform divide-y divide-neutral-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all dark:divide-opacity-20 dark:bg-neutral-900 dark:bg-opacity-80"
			>
				<div class="relative">
					<MagnifyingGlassIcon
						class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-neutral-900 text-opacity-40 dark:text-neutral-500"
					/>
					<input
						bind:value={query}
						bind:this={input}
						on:keydown={handleKeydown}
						type="text"
						class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-neutral-900 placeholder-neutral-500 focus:ring-0 dark:text-white sm:text-sm"
						placeholder="Search..."
					/>
				</div>

				{#if !query}
					<!-- Default state, show/hide based on command palette state. -->
					<ul
						class="max-h-80 scroll-py-2 divide-y divide-neutral-500 divide-opacity-10 overflow-y-auto dark:divide-opacity-20"
					>
						{#each iddleItems as { title, showTitle, items }}
							<li class="p-2">
								<h2
									class={showTitle
										? 'mt-4 mb-2 px-3 text-xs font-semibold text-neutral-900 dark:text-neutral-200'
										: 'sr-only'}
								>
									{title}
								</h2>
								<ul class="text-sm text-neutral-700 dark:text-neutral-400">
									{#each items as { name, id, callback, closeCommandPalette, shortcut, d }}
										{@const active = selectedIndex == id}
										<li
											id={id.toString()}
											on:mousedown={() => handleClick(callback, closeCommandPalette)}
											on:mouseover={() => (selectedIndex = id)}
											on:focus={() => (selectedIndex = id)}
											on:mouseleave={() => (selectedIndex = -1)}
											on:focusout={() => (selectedIndex = -1)}
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
											{#if Object.keys(shortcut).length}
												<span
													class="ml-3 flex-none text-xs font-semibold text-neutral-500 dark:text-neutral-400"
												>
													{#each shortcut[shortcutType] as key}
														<kbd class="font-sans">{key}</kbd>
													{/each}
												</span>
											{:else}
												<span
													class:hidden={!active}
													class="ml-3 flex-none text-neutral-500 dark:text-neutral-400"
													>Jump to...</span
												>
											{/if}
										</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ul>
				{:else if results.length}
					<ul class="max-h-96 overflow-y-auto p-2 text-sm text-neutral-700 dark:text-neutral-400">
						{#each results as { name, d, callback, closeCommandPalette }, id}
							{@const active = selectedIndex == id}
							<li
								id={id.toString()}
								on:mousedown={() => handleClick(callback, closeCommandPalette)}
								on:mouseover={() => (selectedIndex = id)}
								on:focus={() => (selectedIndex = id)}
								on:mouseleave={() => (selectedIndex = -1)}
								on:focusout={() => (selectedIndex = -1)}
								class="group flex cursor-default select-none items-center rounded-md px-3 py-2
                                    {active
									? 'bg-neutral-900 bg-opacity-5 text-neutral-900 dark:bg-neutral-800 dark:text-white'
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
{/if}
