<script>
	import LL, { locale } from '$i18n/i18n-svelte';
	import LightBulbIcon from '$lib/icons/24/outline/light-bulb.svg?component';
	import BoltIcon from '$lib/icons/24/outline/bolt.svg?component';
	import ExclamationTriangleIcon from '$lib/icons/24/outline/exclamation-triangle.svg?component';

	console.info($LL.log({ fileName: '+page.svelte' }));

	$: onboarding = [
		{
			name: $LL.HOME.EXAMPLES.TITLE(),
			id: 'examples',
			items: [
				{
					text: $LL.HOME.EXAMPLES.ITEMS[0](),
					href: '/chat/?example=%2Fsay%20My%20favorite%20programming%20language%20is%20CSS'
				},
				{
					text: $LL.HOME.EXAMPLES.ITEMS[1](),
					href: '/chat/?example=%2Ffix%20You%20is%20very%20intelligent'
				},
				{
					text: $LL.HOME.EXAMPLES.ITEMS[2](),
					href: '/chat/?example=%2Ftranslate%20Artificial%20intelligence%20will%20dominate%20the%20world'
				}
			]
		},
		{
			name: $LL.HOME.CAPABILITIES.TITLE(),
			id: 'capabilities',
			items: [
				{ text: $LL.HOME.CAPABILITIES.ITEMS[0](), href: undefined },
				{ text: $LL.HOME.CAPABILITIES.ITEMS[1](), href: undefined },
				{ text: $LL.HOME.CAPABILITIES.ITEMS[2](), href: undefined }
			]
		},
		{
			name: $LL.HOME.LIMITATIONS.TITLE(),
			id: 'limitations',
			hrefs: [],
			items: [
				{ text: $LL.HOME.LIMITATIONS.ITEMS[0](), href: undefined },
				{ text: $LL.HOME.LIMITATIONS.ITEMS[1](), href: undefined },
				{ text: $LL.HOME.LIMITATIONS.ITEMS[2](), href: undefined }
			]
		}
	];
</script>

<div class="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
	<h1 class="pt-12 text-center text-4xl font-light">{$LL.HOME.TITLE()}</h1>

	<div class="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
		{#each onboarding as { name, id, items }}
			<div class="flex flex-col items-center">
				{#if id === 'examples'}
					<LightBulbIcon class="h-7 w-7 text-neutral-600 dark:text-neutral-200" />
				{:else if id === 'capabilities'}
					<BoltIcon class="h-7 w-7 text-neutral-600 dark:text-neutral-200" />
				{:else if id === 'limitations'}
					<ExclamationTriangleIcon class="h-7 w-7 text-neutral-600 dark:text-neutral-200" />
				{/if}
				<span class="mt-2">
					{name}
				</span>
				<div class="mt-4 w-full space-y-4 text-sm">
					{#each items as { text, href }}
						{#if href}
							<a
								href={$locale + href}
								class="inline-block w-full break-words rounded-md border bg-neutral-100 px-2 py-1.5 hover:bg-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:px-4 sm:py-2.5"
							>
								{text} →
							</a>
						{:else}
							<div
								class="w-full break-words rounded-md border bg-neutral-100 px-2 py-1.5 dark:border-neutral-700 dark:bg-neutral-800 sm:px-4 sm:py-2.5"
							>
								{text}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-4 flex flex-col space-y-1 text-sm">
		<a class="font-medium text-indigo-500" href="{$locale}/chat">Go to chat →</a>
		<a class="font-medium text-indigo-500" href="{$locale}/playground">Go to playground →</a>
	</div>
</div>
