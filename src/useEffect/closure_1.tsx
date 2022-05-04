import { useState } from "react";

// in this example, JavaScript closures is demonstrated.
export const App = (): JSX.Element => {
	// important: The count variable is different every time this component is rendered!
	const [count, setCount] = useState<number>(0);

	/*
	 * The log() function is created upon _every_ render. It captures the value of count
	 * each time. E.g., if the count is incremented to 2, and the log button is then
	 * pressed, the value count = 2 is captured and logged 3s later.
	 * However, if the following sequence is executed instead:
	 * 1. count is incremented to 2.
	 * 2. Log button is pressed.
	 * 3. count is _immediately_ incremented to 4.
	 * The log() function will _still_ only log 2. This is due to the fact that at the
	 * moment when log() is created, it captures count = 2, and that value remains the same
	 * throughout the function's execution.
	 */

	const log = (): void => {
		setTimeout(() => {
			console.log("Count: " + count);
		}, 3000);
	};

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={log}>Log</button>
		</>
	);
};
