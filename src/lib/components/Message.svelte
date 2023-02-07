<script lang="ts">
	import { format } from 'date-fns';
	import Audio from './Audio.svelte';

	export let message: { body: string; sentAt: Date };
	export let sentByCurrentUser = false;
	export let groupPosition: 'top' | 'middle' | 'bottom' | undefined = undefined;
	export let id: string = '';

	let exactTime = format(message.sentAt, 'p');
</script>

<!-- prettier-ignore -->
<div
    tabindex="0"
    data-me={sentByCurrentUser}
    data-position={groupPosition}
    {id}
    class="
        group max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-prose w-fit min-w-min px-3 py-1 rounded-2xl antialiased select-text message relative
        data-[me=true]:bg-indigo-500 data-[me=true]:text-white data-[me=true]:ml-auto
        data-[me=false]:bg-gray-100 data-[me=false]:border data-[me=false]:mr-auto dark:data-[me=false]:bg-gray-800 dark:data-[me=false]:border-gray-700
        data-[me=true]:data-[position=top]:rounded-br
        data-[me=true]:data-[position=middle]:rounded-br data-[me=true]:data-[position=middle]:rounded-tr
        data-[me=true]:data-[position=bottom]:rounded-tr
        data-[me=false]:data-[position=top]:rounded-bl
        data-[me=false]:data-[position=middle]:rounded-bl data-[me=false]:data-[position=middle]:rounded-tl
        data-[me=false]:data-[position=bottom]:rounded-tl
        focus:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:z-10
        data-[me=true]:focus-visible:ring-indigo-300 dark:data-[me=true]:focus-visible:ring-white/70
    "
>
    <p>{message.body}</p>
    {#if !sentByCurrentUser}
        <Audio message={message.body} />
    {/if}
    <time
        datetime={message.sentAt.toISOString()}
        class="
        hidden mt-1 group-focus:block text-xs text-right first-letter:capitalize
        group-data-[me=true]:text-indigo-100
        group-data-[me=false]:text-slate-600 dark:group-data-[me=false]:text-slate-300
        "
    >
        {exactTime}
    </time>
</div>
