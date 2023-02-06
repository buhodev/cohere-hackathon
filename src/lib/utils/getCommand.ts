export function getCommand(
	message: string
):
	| 'undetermined'
	| 'none'
	| 'say'
	| 'generate'
	| 'complete'
	| 'summarize'
	| 'fix'
	| 'translate'
	| 'detect' {
	const command = message.trim();
	const sayCommand = /^(\/say)|^(\/di)/i;
	const generateCommand = /^(\/generate)|^(\/genera)/i;
	const completeCommand = /^(\/complete)|^(\/completa)/i;
	const summarizeCommand = /^(\/summarize)|^(\/resume)/i;
	const fixCommand = /^(\/fix)|^(\/corrige)/i;
	const translateCommand = /^(\/translate)|^(\/traduce)/i;
	const detectCommand = /^(\/detect)|^(\/detecta)/i;
	const undeterminedCommand = /^(\/\w+)/i;

	if (sayCommand.test(command)) return 'say';
	if (generateCommand.test(command)) return 'generate';
	if (completeCommand.test(command)) return 'complete';
	if (summarizeCommand.test(command)) return 'summarize';
	if (fixCommand.test(command)) return 'fix';
	if (translateCommand.test(command)) return 'translate';
	if (detectCommand.test(command)) return 'detect';
	if (undeterminedCommand.test(command)) return 'undetermined';
	return 'none';
}
