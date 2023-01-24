<script>
	import LL from '$i18n/i18n-svelte';
	import WrapTranslation from '$lib/components/WrapTranslation.svelte';

	console.info($LL.log({ fileName: '+page.svelte' }));
</script>

<h1 class="text-5xl font-extralight">{$LL.HI()}</h1>
<p>
	<WrapTranslation message={$LL.DESCRIPTION()} let:infix>
		<a href="https://kit.svelte.dev">{infix}</a>
	</WrapTranslation>
</p>
