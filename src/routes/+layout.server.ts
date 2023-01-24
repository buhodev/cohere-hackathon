import type { LayoutServerData } from './$types';

export const load = (async ({ locals: { locale, LL } }) => {
	console.info(LL.log({ fileName: '+layout.server.ts' }));
	// pass locale information from "server-context" to "shared server + client context"
	return { locale };
}) satisfies LayoutServerData;
