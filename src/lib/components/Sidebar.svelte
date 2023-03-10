<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import { locale } from '$i18n/i18n-svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicIn, cubicOut, cubicInOut } from 'svelte/easing';
	import XMarkIcon from '$lib/icons/24/outline/x-mark.svg?component';
	import HomeIcon from '$lib/icons/24/outline/home.svg?component';
	import BeakerIcon from '$lib/icons/24/outline/beaker.svg?component';
	import ChatBubbleBottomCenterTextIcon from '$lib/icons/24/outline/chat-bubble-bottom-center-text.svg?component';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
	import SavedChats from '$lib/components/SavedChats.svelte';
	import { sidebarDialog } from '$lib/stores';

	$: navigation = [
		{ name: $LL.SIDEBAR.HOME(), id: 'home', href: `/${$locale}` },
		{ name: $LL.SIDEBAR.CHAT(), id: 'chat', href: `/${$locale}/chat` },
		{ name: $LL.SIDEBAR.PLAYGROUND(), id: 'playground', href: `/${$locale}/playground` },
		{
			name: 'Github',
			id: 'github',
			href: `https://github.com/buhodev/cohere-hackathon`,
			external: true
		}
	];
</script>

{#if $sidebarDialog.expanded}
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
		<div
			in:fade={{ easing: cubicOut, duration: 250 }}
			out:fade={{ easing: cubicIn, duration: 200 }}
			on:mousedown={sidebarDialog.close}
			class="fixed inset-0 bg-neutral-600 bg-opacity-75"
		/>

		<div class="fixed inset-0 z-40 flex">
			<div
				in:fly={{ x: -325, duration: 250, easing: cubicOut, opacity: 0 }}
				out:fly={{ x: -325, duration: 200, easing: cubicIn, opacity: 0 }}
				use:sidebarDialog.modal
				class="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-neutral-800"
			>
				<div
					in:fade={{ duration: 250, easing: cubicInOut }}
					out:fade={{ duration: 150, easing: cubicInOut }}
					class="absolute top-0 right-0 -mr-12 pt-2"
				>
					<button
						on:click={sidebarDialog.close}
						type="button"
						class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">{$LL.SIDEBAR.CLOSE_SIDEBAR()}</span>
						<XMarkIcon class="h-6 w-6 text-white" />
					</button>
				</div>
				<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
					<!-- <div class="flex flex-shrink-0 items-center px-4">
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
						/>
					</div> -->
					<nav class="mt-5 space-y-1 px-2">
						<SavedChats sidebar="mobile" />
					</nav>
				</div>

				<div
					class="mt-auto flex flex-shrink-0 flex-col overflow-y-auto border-t border-neutral-200 bg-white pb-4 dark:border-neutral-700 dark:bg-neutral-800"
				>
					<nav class="mt-5 flex-1 space-y-1 px-2">
						{#each navigation as { name, id, href, external }}
							{@const active = $page.url.pathname == href}
							<a
								{href}
								target={external ? '_blank' : ''}
								on:click={sidebarDialog.close}
								class="group flex items-center rounded-xl px-2 py-2 text-base font-medium ring-offset-2 ring-offset-transparent focus-visible:outline-none focus-visible:ring
										{active
									? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-white'
									: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 focus-visible:bg-neutral-50 focus-visible:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus-visible:bg-neutral-700 dark:focus-visible:text-white'}"
							>
								{#if id == 'home'}
									<HomeIcon
										class="mr-4 h-6 w-6 flex-shrink-0 {active
											? 'text-neutral-500 dark:text-neutral-300'
											: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}"
									/>
								{:else if id == 'playground'}
									<BeakerIcon
										class="mr-4 h-6 w-6 flex-shrink-0 {active
											? 'text-neutral-500 dark:text-neutral-300'
											: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}"
									/>
								{:else if id == 'chat'}
									<ChatBubbleBottomCenterTextIcon
										class="mr-4 h-6 w-6 flex-shrink-0 {active
											? 'text-neutral-500 dark:text-neutral-300'
											: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}"
									/>
								{:else if id == 'github'}
									<svg
										class="mr-4 h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
										><path
											d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
										/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
									>
								{/if}
								{name}
							</a>
						{/each}
						<div class="flex items-center space-x-2 px-2">
							<LocaleSwitcher />
							<ThemeSwitcher />
						</div>
					</nav>
				</div>
			</div>

			<div class="w-14 flex-shrink-0">
				<!-- Force sidebar to shrink to fit close icon -->
			</div>
		</div>
	</div>
{/if}

<!-- Static sidebar for desktop -->
<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div
		class="flex min-h-0 flex-1 flex-col border-r border-neutral-200 bg-white dark:border-none dark:bg-neutral-800"
	>
		<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
			<!-- <div class="flex flex-shrink-0 items-center px-4">
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Your Company"
				/>
			</div> -->
			<nav class="mt-5 space-y-1 px-2">
				<SavedChats sidebar="static" />
			</nav>
		</div>
		<div
			class="mt-auto flex flex-shrink-0 flex-col overflow-y-auto border-t border-neutral-200 pb-4 dark:border-neutral-700 dark:bg-neutral-800"
		>
			<nav class="mt-5 flex-1 space-y-1 px-2">
				{#each navigation as { name, id, href, external }}
					{@const active = $page.url.pathname == href}
					<a
						{href}
						target={external ? '_blank' : ''}
						class="group flex items-center rounded-xl px-2 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring
							{active
							? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-white'
							: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 focus-visible:bg-neutral-50 focus-visible:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus-visible:bg-neutral-700 dark:focus-visible:text-white'}"
					>
						{#if id == 'home'}
							<HomeIcon
								class="mr-3 h-6 w-6 flex-shrink-0 {active
									? 'text-neutral-500 dark:text-neutral-300'
									: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}"
							/>
						{:else if id == 'playground'}
							<BeakerIcon
								class="mr-3 h-6 w-6 flex-shrink-0 {active
									? 'text-neutral-500 dark:text-neutral-300'
									: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}"
							/>
						{:else if id == 'chat'}
							<ChatBubbleBottomCenterTextIcon
								class="mr-3 h-6 w-6 flex-shrink-0 {active
									? 'text-neutral-500 dark:text-neutral-300'
									: 'text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300'}"
							/>
						{:else if id == 'github'}
							<svg
								class="mr-3 h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500 group-focus-visible:text-neutral-500 dark:group-hover:text-neutral-300 dark:group-focus-visible:text-neutral-300"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path
									d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
								/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
							>
						{/if}
						{name}
					</a>
				{/each}
				<div class="flex items-center space-x-2 px-2">
					<LocaleSwitcher />
					<ThemeSwitcher />
				</div>
			</nav>
		</div>
	</div>
</div>
