export type Message = {
	message: {
		body: string;
		sentAt: Date;
	};
	me: boolean;
	id: string;
};
