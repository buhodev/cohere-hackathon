export function getCommand(
	message: string
): 'undetermined' | 'none' | 'generate' | 'summarize' | 'fix' | 'say' | 'translate' | 'complete' {
	const command = message.trim();
	const generateCommand = /^(\/generate)|^(\/generar)/i;
	const summarizeCommand = /^(\/summarize)|^(\/resume)/i;
	const fixCommand = /^(\/fix)|^(\/corrige)/i;
	const sayCommand = /^(\/say)|^(\/di)/i;
	const translateCommand = /^(\/translate)|^(\/traduce)/i;
	const completeCommand = /^(\/complete)|^(\/completa)/i;
	const undeterminedCommand = /^(\/\w+)/i;

	if (generateCommand.test(command)) return 'generate';
	if (summarizeCommand.test(command)) return 'summarize';
	if (fixCommand.test(command)) return 'fix';
	if (sayCommand.test(command)) return 'say';
	if (translateCommand.test(command)) return 'translate';
	if (completeCommand.test(command)) return 'complete';
	if (undeterminedCommand.test(command)) return 'undetermined';
	return 'none';
}
