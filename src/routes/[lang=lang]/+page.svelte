<script>
	import LL from '$i18n/i18n-svelte';
	import WrapTranslation from '$lib/components/WrapTranslation.svelte';

	console.info($LL.log({ fileName: '+page.svelte' }));
</script>

<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
	<h1 class="text-5xl font-extralight">{$LL.HOME.HI()}</h1>
	<p>
		<WrapTranslation message={$LL.HOME.DESCRIPTION()} let:infix>
			<a href="https://kit.svelte.dev">{infix}</a>
		</WrapTranslation>
	</p>
</div>
