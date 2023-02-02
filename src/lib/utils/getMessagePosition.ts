import type { Message } from '$lib/types';

export function getMessagePosition(messages: Message[], index: number) {
	const isPreviousMessageCurrentUser = messages[index - 1]?.me;
	const isCurrentMessageCurrentUser = messages[index]?.me;
	const isNextMessageCurrentUser = messages[index + 1]?.me;
	const isFirstMessage = index == 0;
	const isLastMessage = index == messages.length - 1;

	function isTopMessage() {
		// prettier-ignore
		return (
			// the last message can't be the top message, even if there is only one message
			!isLastMessage &&
			// account for the case where the message is sent by the current user
			((isCurrentMessageCurrentUser && (!isPreviousMessageCurrentUser || isPreviousMessageCurrentUser === undefined) && isNextMessageCurrentUser) ||
			// account for the case where the message is not sent by the current user
			(!isCurrentMessageCurrentUser && (isPreviousMessageCurrentUser || isPreviousMessageCurrentUser === undefined) && isNextMessageCurrentUser === false))
		);
	}

	function isMiddleMessage() {
		// prettier-ignore
		return (
			// account for the case where the message is sent by the current user
			(isCurrentMessageCurrentUser && (isPreviousMessageCurrentUser || isPreviousMessageCurrentUser === undefined) && isNextMessageCurrentUser) ||
			// account for the case where the message is not sent by the current user
			(!isCurrentMessageCurrentUser && (!isPreviousMessageCurrentUser || isPreviousMessageCurrentUser === undefined) && isNextMessageCurrentUser === false)
		)
	}

	function isBottomMessage() {
		// prettier-ignore
		return (
			// the first message can't be the bottom message, even if there is only one message
			!isFirstMessage &&
			// account for the case where the message is sent by the current user
			((isCurrentMessageCurrentUser && isPreviousMessageCurrentUser && !isNextMessageCurrentUser) ||
			// account for the case where the message is not sent by the current user
			(!isCurrentMessageCurrentUser && (isPreviousMessageCurrentUser === false) && (isNextMessageCurrentUser || isNextMessageCurrentUser === undefined)))
		)
	}

	function isOrphanMessage() {
		// prettier-ignore
		return (
			// account for the case where the message is sent by the current user
			(isCurrentMessageCurrentUser && !isPreviousMessageCurrentUser && !isNextMessageCurrentUser) ||
			// account for the case where the message is not sent by the current user
			(!isCurrentMessageCurrentUser && isPreviousMessageCurrentUser && isNextMessageCurrentUser)
		)
	}

	if (isTopMessage()) return 'top';
	if (isMiddleMessage()) return 'middle';
	if (isBottomMessage()) return 'bottom';
	if (isOrphanMessage()) return undefined;
}
