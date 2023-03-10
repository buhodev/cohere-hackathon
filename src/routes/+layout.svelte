<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/components/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import SvelteTheme from '$lib/components/SvelteThemes/SvelteTheme.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import Bars3Icon from '$lib/icons/24/outline/bars-3.svg?component';
	import Confetti from '$lib/components/Confetti.svelte';
	import { showConfetti, sidebarDialog, commandPaletteDialog } from '$lib/stores';
	import { shortcut } from '$lib/actions';
	import { switchLocale, toggleTheme } from '$lib/utils';
	import { Toaster } from 'svelte-french-toast';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);
	console.info($LL.log({ fileName: '+layout.svelte' }));
</script>

<svelte:head>
	<title>{$page.data.title || 'Co:here Hackathon'}</title>
	<HeadHrefLangs />
</svelte:head>

<svelte:window
	use:shortcut={{ code: 'Escape', callback: commandPaletteDialog.close }}
	use:shortcut={{ control: true, code: 'KeyK', callback: commandPaletteDialog.open }}
	use:shortcut={{ control: true, code: 'Slash', callback: commandPaletteDialog.open }}
	use:shortcut={{
		control: true,
		code: 'KeyM',
		callback: toggleTheme
	}}
	use:shortcut={{
		control: true,
		code: 'KeyL',
		callback: () => {
			$page.params.lang == 'en' ? switchLocale('es') : switchLocale('en');
			commandPaletteDialog.close();
		}
	}}
	use:shortcut={{
		control: true,
		code: 'KeyP',
		callback: showConfetti.fire
	}}
/>

<Toaster />

<a
	href="{$page.url.pathname}/#content"
	class="absolute z-20 hidden translate-x-2 -translate-y-10 rounded-md py-1 px-2 hover:ring focus:translate-y-2 focus-visible:outline-none focus-visible:ring md:inline-block"
	>{$LL.SIDEBAR.SKIP_NAVIGATION()}</a
>

<Sidebar />

<!-- Content -->
<div id="content" class="flex h-full flex-1 flex-col md:pl-64">
	<div
		class="bg-neutral sticky top-0 z-10 bg-white pl-1 pt-1 dark:bg-neutral-900 sm:pl-3 sm:pt-3 md:hidden"
	>
		<button
			on:click={sidebarDialog.open}
			type="button"
			class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:ring hover:ring-inset focus-visible:outline-none focus-visible:ring focus-visible:ring-inset dark:hover:text-white dark:focus-visible:text-white"
		>
			<span class="sr-only">{$LL.SIDEBAR.OPEN_SIDEBAR()}</span>
			<Bars3Icon class="h-6 w-6" />
		</button>
	</div>
	<div class="relative z-0 flex flex-1 overflow-hidden">
		<main class="flex h-full flex-1 flex-col overflow-y-auto">
			<slot />
		</main>
	</div>
</div>

{#if $commandPaletteDialog.expanded}
	<CommandPalette />
{/if}

<Confetti />

<SvelteTheme attribute="data-theme" />
